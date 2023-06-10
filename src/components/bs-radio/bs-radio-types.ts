import { ExtractPropTypes, InjectionKey } from 'vue';

export const bsRadioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    default: '',
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  deliveContextToFormItem: { // 是否向form-item组件传递上下文信息
    type: Boolean,
    default: true
  },
  id: {
    type: String,
    default: '',
    validator (idVal: string) {
      if (/^\d/.test(idVal)) {
        console.warn('id不能以数字开头');
        return false;
      }
      return true;
    }
  },
  name: { // input原生的name属性
    type: String,
    default: ''
  },
  label: { // radio显示名称
    type: String,
    default: ''
  },
  ariaLabel: { // area-label属性值
    type: String,
    default: ''
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  }
};

export type BsRadioProps = ExtractPropTypes<typeof bsRadioProps>;

export type RadioGroupContext = {
  props: any;
  changeVal: (val: string|number|boolean) => void;
};
export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroup');
