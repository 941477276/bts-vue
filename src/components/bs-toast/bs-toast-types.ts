import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType } from '../types';

export type BsToastPlacement = 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';

export const bsToastProps = {
  title: { // 标题
    type: [String, Number, Object],
    default: ''
  },
  secondaryTitle: { // 辅助标题
    type: [String, Number, Object],
    default: ''
  },
  message: { // 内容
    type: [String, Number, Object],
    default: ''
  },
  placement: { // 显示方位
    type: String as PropType<BsToastPlacement>
  },
  type: { // 类型
    type: String as PropType<BsColorType>
  },
  id: {
    type: String
  },
  customClass: {
    type: [String, Array]
  },
  style: { // 自定义内联样式
    type: [String, Object]
  },
  fixed: {
    type: Boolean,
    default: false
  },
  teleported: { // 是否使用 teleport。设置成 true则会被追加到 append-to 的位置
    type: Boolean,
    default: null
  },
  offsetTop: { // toast 距离窗口顶部的偏移量
    type: Number,
    default: 20
  },
  offsetLeft: { // toast 距离窗口右侧的偏移量，如果为0则不设置
    type: Number,
    default: 0
  },
  appendTo: { // 下拉菜单即将插入到的父级元素
    type: [String, Object],
    default: 'body'
  },
  duration: { // 显示时间，单位为毫秒。 设为 0 则不会自动关闭
    type: Number,
    default: 3000
  },
  zIndex: {
    type: [Number, String],
    default: ''
  },
  dangerouslyUseHTMLString: { // 是否将 message 属性作为 HTML 片段处理
    type: Boolean,
    default: false
  },
  transitionName: {
    type: String,
    default: 'bs-toast-fade'
  },
  showClose: { // 是否显示"关闭"按钮
    type: Boolean,
    default: true
  }
};

export type BsToastProps = ExtractPropTypes<typeof bsToastProps>;
