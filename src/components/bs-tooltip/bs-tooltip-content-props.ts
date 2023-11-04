import {
  TooltipTheme
} from '../bs-popper/bs-popper-types';
import { PropType } from 'vue';

export const bsTooltipContentProps = {
  id: {
    type: String,
    default: ''
  },
  teleported: { // 是否使用 teleport。设置成 true则会被追加到 append-to 的位置
    type: Boolean,
    default: true
  },
  appendTo: { // 指示 Tooltip 的内容将附加在哪一个网页元素上
    type: [String, Object],
    default: '#bs-tooltip-container'
  },
  content: { // tooltip内容
    type: [String, Number],
    default: ''
  },
  isRawContent: { // content 中的内容是否作为 HTML 字符串处理
    type: Boolean,
    default: false
  },
  transitionName: { // 过渡动画的名称
    type: String,
    default: 'fade'
  },
  destroyOnHide: { // 隐藏后是否销毁内容
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  enterable: {
    type: Boolean,
    default: true
  },
  theme: { // 主题
    type: String as PropType<TooltipTheme>,
    default: 'dark'
  }
};
