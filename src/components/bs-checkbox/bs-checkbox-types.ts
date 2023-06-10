import { ExtractPropTypes, InjectionKey } from 'vue';

export const bsCheckboxProps = {
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: undefined
  },
  value: {
    type: [String, Number, Boolean],
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  indeterminate: { // 是否为不确定状态
    type: Boolean,
    default: false
  },
  deliveContextToFormItem: { // 是否向form-item组件传递上下文信息
    type: Boolean,
    default: true
  },
  id: {
    type: String,
    validator (idVal: string) {
      if (/^\d/.test(idVal)) {
        console.warn('id不能以数字开头');
        return false;
      }
      return true;
    }
  },
  trueValue: { // 选中时的值
    type: [String, Number],
    default: undefined
  },
  falseValue: { // 没有选中时的值
    type: [String, Number],
    default: undefined
  },
  name: { // input原生的name属性
    type: String
  },
  label: { // checkbox的label
    type: String
  },
  ariaLabel: { // area-label属性值
    type: String
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  }
};

export type BsCheckboxProps = ExtractPropTypes<typeof bsCheckboxProps>;

export type CheckboxGroupContext = {
  props: any;
  changeVal: (val: string|number|boolean) => void;
};
export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> = Symbol('checkboxGroup');
