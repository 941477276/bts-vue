import { ExtractPropTypes } from 'vue';

export const bsCheckboxGroupProps = {
  modelValue: {
    type: [Array, String],
    default: undefined
  },
  value: {
    type: Array,
    default: undefined
  },
  elTag: { // 标签名称
    type: String,
    default: 'div'
  },
  min: { // 可被勾选的 checkbox 的最小数量
    type: Number,
    default: undefined
  },
  max: { // 可被勾选的 checkbox 的最大数量
    type: Number,
    default: undefined
  },
  disabled: { // 是否禁用
    type: Boolean,
    default: false
  }
};

export type BsCheckboxGroupProps = ExtractPropTypes<typeof bsCheckboxGroupProps>;
