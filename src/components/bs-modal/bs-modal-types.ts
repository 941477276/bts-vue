import {
  PropType,
  ExtractPropTypes
} from 'vue';

export type ModalSize = 'xl' | 'lg' | 'sm';

export const bsModalProps = {
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
  transitionName: { // 过渡动画名称
    type: String,
    default: 'fade'
  },
  title: { // 标题
    type: [String, Function, Object],
    default: ''
  },
  width: { // 宽度
    type: String,
    default: ''
  },
  size: { // 弹窗大小
    type: String as PropType<ModalSize>,
    default: ''
  },
  centered: { // 是否居中显示
    type: Boolean,
    default: false
  },
  cancelText: { // 取消按钮文案
    type: String,
    default: '取消'
  },
  okText: { // 确定按钮文案
    type: String,
    default: '确定'
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
  fullscreen: { // 是否全屏
    type: Boolean,
    default: false
  },
  lockScroll: { // 是否锁定滚动条
    type: Boolean,
    default: true
  },
  draggable: { // 是否可以拖拽移动
    type: Boolean,
    default: false
  },
  boundary: { // 拖拽时是否不能超出边界
    type: Boolean,
    default: true
  },
  scrollable: { // 弹窗内容部分是否可滚动
    type: Boolean,
    default: false
  },
  showFooter: { // 是否显示底部
    type: Boolean,
    default: true
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
  confirmLoading: { // 是否禁用关闭，若值为true，则任何方式都关闭不了，此功能可用于正在提交数据的场景
    type: Boolean,
    default: false
  },
  onOk: { // 确认按钮点击事件
    type: Function,
    default: null
  }
};

export type BsModalProps = ExtractPropTypes<typeof bsModalProps>
