<template>
  <label
    class="form-check bs-radio"
    :class="{
      'is-disabled': isDisabled,
      'is-focus': isFocus,
      'is-checked': isChecked
    }">
    <input
      ref="radioInputRef"
      class="form-check-input"
      v-bind="nativeAttrs"
      type="radio"
      autocomplete="off"
      :class="{
        'is-valid': validateStatus === 'success',
        'is-invalid': validateStatus === 'error'
      }"
      :name="name || null"
      :id="radioId"
      :value="value"
      :disabled="isDisabled"
      :data-checked="isChecked"
      :aria-label="ariaLabel || label || null"
      @focus="onFocus"
      @blur="onBlur"
      @change="on_change">
    <span class="form-check-input-inner"></span>
    <label
      v-if="$slots.default || label"
      class="form-check-label"
      :for="radioId">
      <slot>{{ label }}</slot>
    </label>
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  nextTick,
  inject,
  watch,
  onUpdated
} from 'vue';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';
import {
  bsRadioProps,
  radioGroupContextKey,
  RadioGroupContext
} from './bs-radio-types';
// 统计单选框数量
let radioCount = 0;
export default defineComponent({
  name: 'BsRadio',
  props: bsRadioProps,
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup (props: any, ctx: any) {
    // 计算单选框的ID
    let radioId = ref(props.id || `bs-radio_${++radioCount}`);
    let isFocus = ref(false);
    let radioInputRef = ref<HTMLInputElement|null>(null);
    let radioGroupCtx = inject<RadioGroupContext|null>(radioGroupContextKey, null);

    let valueIsEqual = computed(() => {
      let flag = false;
      if (radioGroupCtx) {
        flag = (props.value === radioGroupCtx.props.modelValue) || (props.value === radioGroupCtx.props.value);
      } else {
        let { modelValue, value } = props;
        flag = (modelValue !== '' && value !== '') && modelValue === value;
      }
      return flag;
    });

    watch([valueIsEqual], function ([valueIsEqual]) {
      let radioEl = radioInputRef.value;
      if (!radioEl) {
        return;
      }
      radioEl.checked = valueIsEqual;
    }, { immediate: true });

    let isChecked = computed(() => {
      return valueIsEqual.value;
    });
    let isDisabled = computed(function () {
      if (radioGroupCtx && radioGroupCtx.props.disabled) {
        return true;
      }
      return props.disabled;
    });

    let { validateStatus, setValidateStatus, getValidateStatus } = useSetValidateStatus();

    /* eslint-disable */
    let on_change = function (evt: Event) {
      let target = evt.target as HTMLInputElement;
      let resultValue = props.value === '' ? target.checked : props.value;
      if (radioGroupCtx) {
        // 调用<bs-radio-group>组件的changeVal方法将值传递出去，父组件setup中暴露出去的函数及属性都可以在父组件都ctx中获取的到
        radioGroupCtx.changeVal(resultValue);
      } else {
        ctx.emit('update:modelValue', resultValue);
      }
      ctx.emit('change', evt, resultValue);
      callFormItem('validate', 'change');
    };

    let onBlur = function (evt: MouseEvent) {
      isFocus.value = false;
      ctx.emit('blur', evt);
    };

    let onFocus = function (evt: MouseEvent) {
      isFocus.value = true;
      ctx.emit('focus', evt);
    };

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: radioId.value,
      setValidateStatus
    });

    let focus = function () {
      radioInputRef.value?.focus();
    }
    let blur = function () {
      radioInputRef.value?.blur();
    }

    return {
      radioId,
      isFocus,
      isChecked,
      validateStatus,
      radioInputRef,
      isDisabled,

      setValidateStatus,
      focus,
      blur,
      on_change,
      onBlur,
      onFocus
    };
  }
});
</script>
