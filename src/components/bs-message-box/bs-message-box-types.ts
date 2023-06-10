import {
  PropType,
  VNode,
  Ref,
  ExtractPropTypes
} from 'vue';
import {
  supportMessageBoxTypes
} from '../bs-message/bs-message-types';
import {
  BsColorType,
  BsInputType,
  BsSize
} from '../types';

export type BsMessageBoxType = 'success' | 'danger' | 'warning' | 'info' | 'prompt';

export const bsMessageBoxProps = {
  appContext: { // 上下文，一般用于获取全局注册组件、vuex 等内容
    default: null
  },
  type: { // 类型
    type: String as PropType<BsMessageBoxType>,
    default: 'info',
    validator (typeVal: BsMessageBoxType) {
      return supportMessageBoxTypes.includes(typeVal);
    }
  },
  id: {
    type: String,
    default: null
  },
  title: { // 标题
    type: [String, Function, Object],
    default: ''
  },
  message: { // 消息文字，可以为一个字符串、vnode、返回vnode的函数
    type: [String, Object, Function, Object] as PropType<string|VNode|(() => VNode)>,
    default: ''
  },
  dialogTheme: { // 是否显示为弹窗样式
    type: Boolean,
    default: false
  },
  width: { // 宽度
    type: String,
    default: ''
  },
  maxWidth: { // 最大宽度
    type: String,
    default: ''
  },
  centered: { // 是否居中显示
    type: Boolean,
    default: false
  },
  icon: { // 图标，可以为一个字符串、vnode、返回vnode的函数
    type: [String, Object, Function] as PropType<string|VNode|(() => VNode)>,
    default: ''
  },
  dangerouslyUseHTMLString: { // 是否将 message 属性作为 HTML 片段处理
    type: Boolean,
    default: false
  },
  customClass: { // 自定义类名
    type: String,
    default: ''
  },
  showClose: { // 是否显示关闭按钮
    type: Boolean,
    default: true
  },
  showOkButton: { // 是否显示确定按钮
    type: Boolean,
    default: true
  },
  showCancelButton: { // 是否显示取消按钮
    type: Boolean,
    default: true
  },
  showIcon: { // 是否显示图标
    type: Boolean,
    default: true
  },
  onClose: { // 关闭时的回调函数, 参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false则不会关闭
    type: Function,
    default: null
  },
  zIndex: {
    type: [Number, String],
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
  closeOnClickModal: { // 点击遮罩是否关闭
    type: Boolean,
    default: true
  },
  onOkAutoClose: { // 点击确定按钮后是否字段关闭
    type: Boolean,
    default: true
  },
  okLoading: { // 确定按钮的loading属性
    type: [Boolean, Object],
    default: false
  },
  cannotCloseOnOkLoading: { // 当确定按钮为loading状态时不允许关闭
    type: Boolean,
    default: true
  },
  okDisabled: { // 确定按钮的disabled属性
    type: [Boolean, Object],
    default: false
  },
  okType: {
    type: String as PropType<BsColorType>,
    default: 'primary'
  },
  okText: { // 确定按钮的文本
    type: String,
    default: '确定'
  },
  okLoadingText: { // 确定按钮loading状态下显示的文本
    type: String,
    default: ''
  },
  okSize: { // 确定按钮的大小
    type: String as PropType<BsSize>,
    default: ''
  },
  onOk: { // 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭
    type: Function,
    default: null
  },
  onCancel: { // 点击取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false不会关闭
    type: Function,
    default: null
  },
  cancelText: { // 取消按钮的文本
    type: String,
    default: '取消'
  },
  cancelSize: { // 取消按钮的大小
    type: String as PropType<BsSize>,
    default: ''
  },
  inputLabel: { // 输入框的描述文本
    type: String,
    default: ''
  },
  inputType: { // 输入框的类型
    type: String as PropType<BsInputType>,
    default: 'text'
  },
  inputPlaceholder: { // 输入框的占位符
    type: String,
    default: ''
  },
  inputValue: { // 输入框的初始值
    type: [String, Number],
    default: ''
  },
  inputRules: { // 输入框的校验规则，与<bs-form-item>的校验规则一致
    type: Array,
    default () {
      return [];
    }
  },
  inputProps: { // 输入框的其他属性
    type: Object,
    default () {
      return {};
    }
  },
  transformOrigin: { // message box的transform-origin值
    type: String,
    default: ''
  }
};

export type BsMessageBoxProps = ExtractPropTypes<typeof bsMessageBoxProps>;
