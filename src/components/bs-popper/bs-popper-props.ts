import {
  PropType
} from 'vue';
import {
  Placement
} from '@popperjs/core';

export const bsPopperProps = {
  virtualTriggering: { // 是否由虚拟元素触发
    type: Boolean,
    default: false
  },
  virtualRef: { // 触发元素的ref
    type: [String, Function, Object],
    default: null
  },
  popperClass: { // popper的class
    type: String,
    default: ''
  },
  popperStyle: { // popper的style
    type: [String, Array, Object],
    default: ''
  },
  arrowClass: { // 三角箭头的class
    type: String,
    default: ''
  },
  zIndex: {
    type: Number,
    default: 0
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  }
};
