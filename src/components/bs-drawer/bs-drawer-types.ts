import { PropType, ExtractPropTypes } from 'vue';
import {
  BsPlacementFour
} from '../types';

export const bsDrawerProps = {
  visible: { // 用于控制弹窗显隐
    type: Boolean,
    default: false
  },
  teleported: { // 是否使用 teleport。设置成 true则会被追加到 append-to 的位置
    type: Boolean,
    default: true
  },
  appendTo: { // 指示 Tooltip 的内容将附加在哪一个网页元素上
    type: [String, Object],
    default: 'body'
  },
  placement: { // 抽屉显示的方向
    type: String as PropType<BsPlacementFour>,
    default: 'right'
  },
  transitionName: { // 过渡动画名称
    type: String,
    default: 'slide'
  },
  title: { // 标题
    type: [String, Function, Object],
    default: ''
  },
  width: { // 宽度
    type: String,
    default: ''
  },
  mask: { // 是否显示遮罩
    type: Boolean,
    default: true
  },
  keyboard: { // 是否支持键盘 esc 关闭
    type: Boolean,
    default: true
  },
  maskClosable: { // 点击遮罩是否关闭
    type: Boolean,
    default: true
  },
  lockScroll: { // 是否锁定滚动条
    type: Boolean,
    default: true
  },
  showHeader: { // 是否显示头部
    type: Boolean,
    default: true
  },
  showFooter: { // 是否显示底部
    type: Boolean,
    default: false
  },
  showClose: { // 是否显示关闭按钮
    type: Boolean,
    default: true
  },
  destroyOnClose: { // 关闭弹窗时是否销毁弹窗的元素
    type: Boolean,
    default: false
  },
  lazy: { // 首次渲染是否延迟
    type: Boolean,
    default: true
  },
  closeDisabled: { // 是否禁用关闭，若值为true，则任何方式都关闭不了，此功能可用于正在提交数据的场景
    type: Boolean,
    default: false
  },
  drawerClass: { // 额外的classname
    type: [String, Array, Object],
    default: ''
  }
};

export type BsDrawerProps = ExtractPropTypes<typeof bsDrawerProps>;
