<template>
<div
  class="bs-switch"
  :class="[{
    'bs-switch-loading': loading,
    'bs-switch-open': isOpen,
    'bs-switch-disabled': disabled
  }, size ? `bs-switch-${size}` : '']">
  <input
    ref="switchInputRef"
    :name="null"
    :disabled="disabled || loading"
    type="checkbox"
    class="bs-switch-hidden-input" />
  <div
    class="bs-switch-inner"
    :class="{
      'has-inactive-color': inactiveColor
    }"
    :style="switchInnerStyle"
    @click="switchClick">
    <span class="bs-switch-text">
      {{ isOpen ? activeText : inactiveText }}
    </span>
    <div class="switch-circle">
      <div class="switch-loading" v-if="loading">
        <div class="spinner-border" :class="`text-${loadingColorType}`" role="status">
          <span class="sr-only">Switch Loading...</span>
        </div>
      </div>
    </div>
    <div v-if="disabled" class="switch-disabled-box"></div>
  </div>
</div>
</template>

<script lang="ts">
import {
  ref,
  PropType,
  defineComponent,
  computed,
  watch,
  nextTick,
  onUnmounted,
  inject
} from 'vue';
import {
  FormItemContext,
  formItemContextKey
} from '../bs-form/bs-form-types';
import { bsSwitchProps } from './bs-switch-types';

export default defineComponent({
  name: 'BsSwitch',
  props: bsSwitchProps,
  emit: ['update:modelValue', 'change', 'click'],
  setup (props: any, ctx: any) {
    let switchInputRef = ref<HTMLInputElement|null>(null);
    // 是否打开
    let isOpen = computed(function () {
      return props.modelValue === props.activeValue;
    });

    let stopWatch = watch(isOpen, function (isOpenVal) {
      nextTick(function () {
        (switchInputRef.value as HTMLInputElement).checked = isOpenVal;
      });
    }, { immediate: true });

    // 计算 .bs-switch-inner 的样式
    let switchInnerStyle = computed(function () {
      let opened = isOpen.value;
      let colorType = '';
      if (props.colorType && opened) {
        colorType = `background-color: var(--${props.colorType});border-color: var(--${props.colorType})`;
      }
      let activeColor = '';
      if (props.activeColor && opened) {
        activeColor = `background-color: ${props.activeColor};border-color: ${props.activeColor}`;
      }
      let inActiveColor = props.inactiveColor ? `--inactive-color: ${props.inactiveColor}` : '';
      let result = activeColor;
      if (!activeColor) {
        result = colorType;
      }
      if (result) {
        result += '; ' + inActiveColor;
      } else {
        result = inActiveColor;
      }
      return result;
    });

    let formItemContext = inject<FormItemContext|null>(formItemContextKey, null);

    // 开关点击事件
    let switchClick = function () {
      if (props.disabled || props.loading) {
        return;
      }
      let val = isOpen.value ? props.inactiveValue : props.activeValue;
      let beforeChange = props.beforeChange;
      let changeVal = function () {
        ctx.emit('update:modelValue', val);
        ctx.emit('change', val);
        // 调用<bs-form-item>组件，触发数据校验
        if (props.validateEvent && formItemContext) {
          formItemContext.validate('change');
        }
      };
      ctx.emit('click');
      if (typeof beforeChange === 'function') {
        let result = beforeChange(val, props.extraData);
        if (result === false) {
          return;
        }
        // 返回值为promise
        if (typeof result === 'object' && typeof result.then === 'function') {
          result.then(changeVal);
          return;
        }
        // 返回其他值也更新数据
        changeVal();
      }
      changeVal();
    };

    onUnmounted(function () {
      stopWatch();
    });

    return {
      switchInputRef,
      isOpen,
      switchInnerStyle,

      switchClick
    };
  }
});
</script>
