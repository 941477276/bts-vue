<template>
  <label
    class="form-check bs-checkbox"
    :class="{
      'is-disabled': isDisabled || isCountLimitDisable,
      'is-focus': isFocus,
      'is-checked': isChecked,
      'is-indeterminate': isIndeterminate
    }">
    <input
      v-if="trueValue || falseValue"
      ref="checkboxRef"
      class="form-check-input"
      :class="{
        'is-valid': validateStatus === 'success',
        'is-invalid': validateStatus === 'error'
      }"
      v-bind="nativeAttrs"
      type="checkbox"
      autocomplete="off"
      :name="name || null"
      :id="checkboxId"
      :true-value="trueValue"
      :false-value="falseValue"
      v-model="checkboxVal"
      :disabled="isDisabled || isCountLimitDisable"
      :indeterminate="indeterminate"
      :aria-label="ariaLabel || null"
      @focus="onFocus"
      @blur="onBlur"
      @change="on_change">
    <input
      v-else
      ref="checkboxRef"
      class="form-check-input"
      :class="{
        'is-valid': validateStatus === 'success',
        'is-invalid': validateStatus === 'error'
      }"
      v-bind="nativeAttrs"
      type="checkbox"
      autocomplete="off"
      v-model="checkboxVal"
      :name="name || null"
      :id="checkboxId"
      :value="value"
      :indeterminate="indeterminate"
      :disabled="isDisabled || isCountLimitDisable"
      :aria-label="ariaLabel || null"
      @focus="onFocus"
      @blur="onBlur"
      @change="on_change">
    <span class="form-check-input-inner"></span>
    <label
      v-if="$slots.default || label"
      class="form-check-label"
      :for="checkboxId">
      <slot>{{ label }}</slot>
    </label>
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  watch
} from 'vue';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { useCheckbox } from './useCheckbox';
import {
  isNoneValue
} from '../../utils/bs-util';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';
import { bsCheckboxProps } from './bs-checkbox-types';

// 统计复选框数量
let checkboxCount = 0;
export default defineComponent({
  name: 'BsCheckbox',
  props: bsCheckboxProps,
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  setup (props: any, ctx: any) {
    let checkboxRef = ref<HTMLInputElement|null>(null);
    // 计算单选框的ID
    let checkboxId = ref(props.id || `bs-checkbox_${++checkboxCount}`);
    let isFocus = ref(false);
    let isIndeterminate = ref(props.indeterminate); // 判断是否为不确定状态

    let { checkboxVal, isChecked, isDisabled, isCountLimitDisable } = useCheckbox(props, ctx, checkboxRef);
    let { validateStatus, setValidateStatus, getValidateStatus } = useSetValidateStatus();

    /* eslint-disable */
    let on_change = function (evt: Event) {
      ctx.emit('change', evt, checkboxVal.value);
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
      id: checkboxId.value,
      setValidateStatus
    });

    let watchIndeterminateTimer:number;
    let stopWatchIndeterminate = watch(() => props.indeterminate, function (indeterminate) {
      clearTimeout(watchIndeterminateTimer);
      // 这里加setTimeout的原因是：当 on_change 与 props.indeterminate 同时改变isIndeterminate时，on_change事件比这里的watch要慢，而isIndeterminate的值需要以props.indeterminate为主
      watchIndeterminateTimer = setTimeout(function () {
        isIndeterminate.value = indeterminate;
      }, 0);
    });

    onMounted(() => {
      // 设置默认选择项
      if (props.checked) {
        // 60秒后再设置默认选中向是因为有可能<bs-checkbox-group>组件的modelValue值为空字符串
        // 在<bs-checkbox-group>组件中，modelValue值若为字符串类型，会先转成数组，所以子组件在设置默认选中项时需延迟一点
        let timer = setTimeout(() => {
          clearTimeout(timer);
          let checkboxValue = checkboxVal.value;
          if (Array.isArray(checkboxValue) && !checkboxValue.includes(props.value)) {
            checkboxValue.push(props.value);
          } else {
            checkboxVal.value = isNoneValue(props.trueValue) ? true : props.trueValue;
          }
        }, 60);
      }
    });

    onUnmounted(function () {
      // 设置默认选择项
      if (props.checked) {
        let checkboxValue = checkboxVal.value;
        if (Array.isArray(checkboxValue)) {
          let index = checkboxValue.findIndex(item => item === props.value);
          if (index > -1) {
            checkboxValue.splice(index, 1);
          }
        } else {
          checkboxVal.value = false;
        }
      }
      stopWatchIndeterminate();
    });

    return {
      checkboxRef,
      checkboxId,
      isFocus,
      isChecked,
      isCountLimitDisable,
      isIndeterminate,
      isDisabled,

      checkboxVal,
      validateStatus,
      setValidateStatus,

      on_change,
      onBlur,
      onFocus
    };
  }
});
</script>
