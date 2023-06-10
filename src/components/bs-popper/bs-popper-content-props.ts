import { PropType } from 'vue';
import { Placement } from '@popperjs/core';

// popper的定位策略
type PopperStrategy = 'absolute' | 'fixed';

export const bsPopperContentProps = {
  id: {
    type: String,
    default: ''
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  popperClass: { // popper的class
    type: [String, Array, Object],
    default: ''
  },
  zIndex: {
    type: Number,
    default: 0
  },
  visible: {
    type: Boolean,
    default: undefined
  },
  popperStyle: { // popper的样式
    type: [String, Array, Object],
    default: ''
  },
  offset: { // popper出现位置的偏移量
    type: Array,
    default () {
      return [0, 8];
    }
  },
  arrowOffset: { //
    type: Number,
    default: 5
  },
  strategy: { // popper定位策略，默认为absolute。如果触发popper的参考元素在fixed定位的元素中，则应该使用fixed
    type: String as PropType<PopperStrategy>,
    default: ''
  },
  gpuAcceleration: { // 是否使用 GPU 加速样式来定位 popper。如果开启了则会使用transform: translate来定位，否则使用top/left来定位
    type: Boolean,
    default: true
  },
  popperOptions: { // popperjs的参数，详见：https://popper.js.org/docs/v2/
    type: Object,
    default () {
      return {};
    }
  },
  title: {
    type: [String, Number, Boolean],
    default: ''
  },
  width: { // 最大宽度
    type: [String, Number],
    default: ''
  },
  showTitle: { // 是否显示标题
    type: Boolean,
    default: true
  }
};
