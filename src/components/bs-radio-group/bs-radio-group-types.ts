import { ExtractPropTypes } from 'vue';

export const bsRadioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  elTag: { // 标签名称
    type: String,
    default: 'div'
  },
  disabled: {
    type: Boolean,
    default: false
  }
};

export type BsRadioGroupProps = ExtractPropTypes<typeof bsRadioGroupProps>;
