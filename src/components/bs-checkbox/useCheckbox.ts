import {
  Ref,
  onUpdated,
  computed,
  ref,
  inject
} from 'vue';
import {
  isNoneValue
} from '../../utils/bs-util';
import {
  checkboxGroupContextKey,
  CheckboxGroupContext
} from './bs-checkbox-types';

export function useCheckbox (props: any, ctx: any, checkboxRef: Ref<HTMLInputElement|null>) {
  let selfModelVal = ref('');
  // 当前组件所在的父级<bs-checkbox-group>组件的上下文
  let checkboxGroupCtx = inject<CheckboxGroupContext|null>(checkboxGroupContextKey, null);
  let checkboxVal = computed({
    get () {
      if (checkboxGroupCtx) {
        return isNoneValue(checkboxGroupCtx.props.modelValue) ? checkboxGroupCtx.props.value : checkboxGroupCtx.props.modelValue;
      } else {
        // return isNoneValue(props.modelValue) ? (props.value || selfModelVal.value) : props.modelValue;
        return isNoneValue(props.modelValue) ? selfModelVal.value : props.modelValue;
      }
    },
    set (newVal: any) {
      if (checkboxGroupCtx) {
        let maxLimit = checkboxGroupCtx.props.max;
        if (typeof maxLimit !== 'number' || maxLimit <= 0) {
          checkboxGroupCtx.changeVal(newVal);
          return;
        }
        if (newVal.length <= Math.floor(maxLimit)) {
          checkboxGroupCtx.changeVal(newVal);
        }
      } else {
        ctx.emit('update:modelValue', newVal);
        selfModelVal.value = newVal;
      }
    }
  });

  // 是否选中了
  let isChecked = computed(() => {
    let flag = false;
    let value = checkboxVal.value;
    let trueValue = props.trueValue;
    if (checkboxGroupCtx) {
      flag = (Array.isArray(value) ? value : []).includes(props.value);
    } else {
      if (isNoneValue(props.modelValue)) {
        // flag = value === props.trueValue || value === props.falseValue;
        // 如果没有传递model值，但设置了trueValue则将当前值和trueValue进行比较
        if (!isNoneValue(trueValue)) {
          flag = value === trueValue;
        } else {
          return value === 0 || !!value;
        }
      } else {
        if (typeof value === 'boolean') {
          return value;
        }
        if (!isNoneValue(trueValue)) {
          return value === trueValue;
        }
        flag = Array.isArray(value) ? value.includes(props.value) : value === props.modelValue;
      }
    }
    return flag;
  });
  // 复选框组中允许选择的最大个数是否超出了
  let isCountLimitDisable = computed(() => {
    if (checkboxGroupCtx) {
      let max: number = checkboxGroupCtx.props.max;
      if (typeof max === 'number' && max > 0 && !isChecked.value) {
        let value = checkboxVal.value;
        return (value || []).length >= max;
      }
      return false;
    }
    return false;
  });

  let isDisabled = computed(function () {
    if (checkboxGroupCtx && checkboxGroupCtx.props.disabled) {
      return true;
    }
    return props.disabled;
  });

  return {
    checkboxVal,
    isChecked,
    selfModelVal,
    isCountLimitDisable,
    isDisabled
  };
}
