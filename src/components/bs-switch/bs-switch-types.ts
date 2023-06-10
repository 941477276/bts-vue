import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType, BsSize } from '../types';

export const bsSwitchProps = {
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  colorType: { // 背景色
    type: String as PropType<BsColorType>,
    default: ''
  },
  loadingColorType: { // 加载中旋转图标的颜色
    type: String as PropType<BsColorType>,
    default: 'primary'
  },
  activeValue: { // switch 打开时的值
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: { // switch  关闭时的值
    type: [Boolean, String, Number],
    default: false
  },
  activeText: { // switch 打开时的文字描述
    type: String,
    default: ''
  },
  inactiveText: { // switch  关闭时的文字描述
    type: String,
    default: ''
  },
  activeColor: { // switch 打开时的背景色
    type: String,
    default: ''
  },
  inactiveColor: { // switch 关闭时的背景色
    type: String,
    default: ''
  },
  size: { // 大小
    type: String as PropType<BsSize>,
    default: ''
  },
  name: { // switch 对应的 name 属性
    type: String,
    default: null
  },
  extraData: { // 额外数据，调用beforeChange时会传递进去
    default: null
  },
  beforeChange: { // switch状态改变前的回调函数，如果返回false或promise.reject则不会改变
    type: Function,
    default: null
  },
  validateEvent: { // 改变 switch 状态时是否触发表单的校验
    type: Boolean,
    default: true
  }
};

export type BsSwitchProps = ExtractPropTypes<typeof bsSwitchProps>;
