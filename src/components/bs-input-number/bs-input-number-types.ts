import { PropType, ExtractPropTypes } from 'vue';
import { BsSize } from '../types';

type InputNumberType = 'text' | 'number';
export const bsInputNumberProps = {
  modelValue: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<InputNumberType>,
    default: 'text'
  },
  readonly: {
    type: Boolean,
    default: false
  },
  deliveContextToFormItem: { // 是否向form-item组件传递上下文信息
    type: Boolean,
    default: true
  },
  inputmode: { // 输入框到inputmode属性
    type: String,
    default: null
  },
  size: { // 输入框大小
    type: String as PropType<BsSize>,
    default: ''
  },
  id: {
    type: String,
    default: '',
    validator (idVal: string) {
      if (typeof idVal !== 'string' || /^\d+/.test(idVal)) {
        console.warn('id必须为字符串类型，且不能以数字开头');
        return false;
      }
      return true;
    }
  },
  placeholder: {
    type: String,
    default: ''
  },
  prefix: { // 前缀文本
    type: String,
    default: ''
  },
  name: { // input原生的name属性
    type: String,
    default: ''
  },
  ariaLabel: { // area-label属性值
    type: String,
    default: ''
  },
  keyboard: { // 是否可以通过键盘改变值
    type: Boolean,
    default: true
  },
  max: { // 最大值
    type: Number,
    default: null
  },
  min: { // 最小值
    type: Number,
    default: null
  },
  step: { // 步长，每次改变的步数，可以为小数
    type: [Number, String],
    default: 1
  },
  formatter: { // 指定输入框展示值的格式
    type: Function as PropType<(value: number | string) => string>,
    default: null
  },
  parser: { // 指定从 formatter 里转换回数字的方式，和 formatter 配合使用
    type: Function as PropType<(str: string) => number>,
    default: null
  },
  precision: { // 数值精度
    type: Number,
    default: null
  },
  controlInner: { // 控制按钮是否在输入框内部
    type: Boolean,
    default: true
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  }
};

export type BsInputNumberProps = ExtractPropTypes<typeof bsInputNumberProps>;
