<template>
  <div class="bs-input-number"
    :class="[
      {
        'has-prepend': $slots.prepend,
        'has-append': $slots.append,
        'has-prefix': prefix,
        'is-disabled': disabled,
        'is-readonly': readonly,
        'out-of-range': max && ((modelValue || 0) > (max || 0)),
        'control-inner': controlInner,
        'control-out': !controlInner
      },
      size ? `bs-input-number-${size}` : ''
    ]">
    <div
      class="input-group"
      :class="[
        size ? `input-group-${size}` : ''
      ]">
      <div class="input-group-prepend" v-if="$slots.prepend">
        <div class="input-group-text">
          <slot name="prepend"></slot>
        </div>
      </div>
      <BsInputNumberOperateButton
        v-if="!controlInner"
        type="decrease"
        aria-label="Decrease Value"
        :disabled="disabled || readonly || !!(min && modelValue <= min)"
        @focus="focus"
        @click="onControlBtnClick(2)"></BsInputNumberOperateButton>

      <div class="bs-input-number-wrapper">
        <label
          v-if="prefix"
          :for="inputId"
          class="bs-input-number-prefix">
          <span>{{ prefix }}</span>
        </label>
        <input
          :type="inputType"
          class="form-control"
          autocomplete="off"
          ref="inputRef"
          v-bind="nativeAttrs"
          :class="[
            {
              'is-valid': validateStatus === 'success',
              'is-invalid': validateStatus === 'error'
            },
            size ? `form-control-${size}` : ''
          ]"
          :value="inputValue"
          :id="inputId"
          :inputmode="inputModeInner"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder || null"
          :aria-label="ariaLabel || placeholder || null"
          :name="name || null"
          @input="on_input"
          @focus="on_focus"
          @blur="on_blur"
          @keydown.stop="on_keydown">
        <div
          v-if="controlInner"
          v-show="!disabled && !readonly"
          class="bs-input-number-operations">
          <BsInputNumberOperateButton
            type="increase"
            aria-label="Increase Value"
            :disabled="disabled || readonly || !!(max && modelValue >= max)"
            @focus="focus"
            @click="onControlBtnClick(1)"></BsInputNumberOperateButton>
          <BsInputNumberOperateButton
            type="decrease"
            aria-label="Decrease Value"
            :disabled="disabled || readonly || !!(min && modelValue <= min)"
            @focus="focus"
            @click="onControlBtnClick(2)"></BsInputNumberOperateButton>
        </div>
      </div>
      <BsInputNumberOperateButton
        v-if="!controlInner"
        type="increase"
        aria-label="Increase Value"
        :disabled="disabled || readonly || !!(max && modelValue >= max)"
        @focus="focus"
        @click="onControlBtnClick(1)"></BsInputNumberOperateButton>
      <div class="input-group-append" v-if="$slots.append">
        <div class="input-group-text">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  inject,
  nextTick
} from 'vue';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { bsInputNumberProps } from './bs-input-number-types';
import { useInputNumberMethods } from './useMethods';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';
import BsInputNumberOperateButton from './widgets/BsInputNumberOperateButton.vue';

let bsInputNumberCount = 0;
export default defineComponent({
  name: 'BsInputNumber',
  components: {
    BsInputNumberOperateButton
  },
  props: bsInputNumberProps,
  emits: ['input', 'update:modelValue', 'change', 'blur', 'focus', 'clear'],
  setup (props: any, ctx: any) {
    let inputId = ref('');
    if (props.id) {
      inputId.value = props.id;
    } else {
      inputId.value = `bs_input_number-${++bsInputNumberCount}`;
    }
    let inputType = computed(function () {
      if (props.type !== 'number' && props.type !== 'text') {
        if (props.formatter && props.parser) {
          return 'text';
        }
        return 'number';
      }
      return props.type;
    });

    let inputModeInner = computed(function () {
      if (props.inputmode) {
        return props.inputmode;
      }
      let vw = window.innerWidth;
      if (vw <= 992) {
        return 'numeric';
      }
      return null;
    });

    let inputRef = ref<HTMLInputElement | null>(null);
    let { validateStatus, setValidateStatus, getValidateStatus } = useSetValidateStatus();

    let inputValue = computed(function () {
      let formatter = props.formatter;
      if (typeof formatter === 'function') {
        return formatter(props.modelValue);
      }
      return props.modelValue;
    });

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: inputId.value,
      setValidateStatus
    });

    // 事件处理
    /* eslint-disable */
    let { on_blur, on_focus, on_input, on_keydown, calculate } = useInputNumberMethods(props, ctx, callFormItem, inputRef);

    // 让元素获得焦点
    let focus = function () {
      (inputRef.value as HTMLInputElement).focus();
    };
    // 让元素失去焦点
    let blur = function () {
      (inputRef.value as HTMLInputElement).blur();
    };

    // 控制按钮点击事件
    let onControlBtnClick = function (type = 1) {
      if (props.disabled || props.readonly) {
        return;
      }
      // focus();
      calculate(type);
    }

    return {
      inputRef,
      inputId,
      validateStatus,
      inputValue,
      inputType,
      inputModeInner,

      onControlBtnClick,
      on_input,
      // on_change,
      on_blur,
      on_focus,
      on_keydown,
      calculate,
      focus,
      blur,
      setValidateStatus
    };
  }
});
</script>
