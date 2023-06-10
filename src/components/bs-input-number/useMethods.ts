import {
  Ref
} from 'vue';
import {
  isFunction
} from '../../utils/bs-util';
import { BigNumber } from 'bignumber.js';
// 转换数据
let processValue = function (value: string|number, actionType: number, step: number, min: number, max: number, precision: number) {
  let preciseVal = new BigNumber(value || 0);

  if (actionType == 1) { // 加
    preciseVal = preciseVal.plus(step || 1);
  } else if (actionType == 2) { // 减
    preciseVal = preciseVal.minus(step || 1);
  }

  let resultVal: string|number;
  if (typeof max === 'number' && preciseVal.comparedTo(max) == 1) {
    // val = max;
    preciseVal = new BigNumber(max);
  } else if (typeof min === 'number' && preciseVal.comparedTo(min) == -1) {
    // val = min;
    preciseVal = new BigNumber(min);
  }

  // 处理精度问题
  if (precision && precision > 0) {
    resultVal = preciseVal.toFixed(precision);
  } else {
    resultVal = preciseVal.toString();
  }
  return resultVal;
};

export function useInputNumberMethods (props: any, ctx: any, callFormItem: any, inputRef: Ref<HTMLInputElement|null>) {
  // 执行计算
  let calculate = function (type = 1) {
    let modelVal = props.modelValue;
    let max = props.max;
    let min = props.min;
    if (type == 1 && typeof max === 'number' && modelVal >= max) {
      return;
    }
    if (type == 2 && typeof min === 'number' && modelVal <= min) {
      return;
    }
    let val = processValue(modelVal, type, props.step, min, max, props.precision);
    ctx.emit('update:modelValue', val);
    // setValue(val);
    ctx.emit('change', val);
    callFormItem('validate', 'change');
    // 防止因执行计算后由于小数点精度问题，modelValue的值实际没变化，而输入框的值被手动更改了，而导致输入框显示的值与modelValue不一致问题
    let timer = setTimeout(function () {
      clearTimeout(timer);
      let inputEl = inputRef.value as HTMLInputElement;
      let targetVal = inputEl.value + '';
      let inputViewVal = val;
      if (typeof props.formatter === 'function') {
        inputViewVal = props.formatter(val);
      }
      if (targetVal !== (inputViewVal + '')) {
        inputEl.value = (inputViewVal + '');
      }
    }, 0);
  };

  // input事件
  let isInvalidValue = false;
  /* eslint-disable */
  let on_input = function (evt: InputEvent) {
    // ctx.emit('update:modelValue', val);
    let targetVal = (evt.target as HTMLInputElement).value + '';
    let val: number | string;
    let parser = props.parser;
    let min = props.min;
    isInvalidValue = false;
    // 防止不能输入.和-
    if (targetVal.endsWith('.') || targetVal == '-') {
      ctx.emit('update:modelValue', targetVal);
      ctx.emit('input', evt, targetVal);
      ctx.emit('change', targetVal);
      callFormItem('validate', 'input');
      return;
    }
    if (targetVal.length == 0 && typeof min !== 'number') {
      ctx.emit('update:modelValue', '');
      ctx.emit('input', evt, '');
      ctx.emit('change', '');
      callFormItem('validate', 'input');
      return;
    }
    if (isFunction(props.formatter) && !isFunction(parser)) {
      console.warn('formatter应与parser配合使用！');
    }
    if (isFunction(parser)) {
      targetVal = parser(targetVal);
    }
    if (targetVal == props.modelValue) {
      return;
    }

    val = processValue(targetVal, 3, props.step, min, props.max, props.precision);
    if (isNaN(Number(val))) {
      isInvalidValue = true;
      return;
    }
    ctx.emit('update:modelValue', val);
    ctx.emit('input', evt, val);
    ctx.emit('change', val);
    callFormItem('validate', 'change');

    // 防止因执行计算后由于小数点精度问题，modelValue的值实际没变化，而输入框的值被手动更改了，而导致输入框显示的值与modelValue不一致问题
    let timer = setTimeout(function () {
      clearTimeout(timer);
      let targetVal = (evt.target as HTMLInputElement).value + '';
      let inputViewVal = val;
      if (isFunction(props.formatter)) {
        inputViewVal = props.formatter(val);
      }
      if (targetVal !== (val + '')) {
        (evt.target as HTMLInputElement).value = (inputViewVal + '');
      }
    }, 0);

    // ctx.emit('input', evt);
    // callFormItem('validate', 'input');
  };
  let on_focus = function (evt: Event) {
    ctx.emit('focus', evt);
    callFormItem('validate', 'focus');
  };
  let on_blur = function (evt: Event) {
    if (isInvalidValue) { // 失去焦点后若之前输入的是不合法的数字，则在这里回滚原来合法的数字
      let inputViewVal = props.modelValue;
      if (isFunction(props.formatter)) {
        inputViewVal = props.formatter(inputViewVal);
      }
      (evt.target as HTMLInputElement).value = inputViewVal;
      isInvalidValue = false;
    }
    ctx.emit('blur', evt);
    callFormItem('validate', 'blur');
  };

  let on_keydown = function (evt: KeyboardEvent) {
    let keyCode = evt.keyCode;
    if (!props.keyboard || props.disabled) {
      return;
    }
    if (keyCode == 38) { // 上
      evt.preventDefault();
      calculate(1);
    } else if (keyCode == 40) { // 下
      evt.preventDefault();
      calculate(2);
    }
  };

  return {
    on_input,
    on_focus,
    on_blur,
    on_keydown,
    calculate
  };
};
