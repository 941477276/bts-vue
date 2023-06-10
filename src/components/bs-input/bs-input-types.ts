import { PropType, ExtractPropTypes } from 'vue';
import { BsInputType, BsSize } from '../types';

export const bsInputProps = {
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: { // 输入框类型
    type: String as PropType<BsInputType>,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  showPassword: { // 是否显示切换密码图标
    type: Boolean,
    default: false
  },
  clearable: { // 是否可以清空内容
    type: Boolean,
    default: false
  },
  deliveContextToFormItem: { // 是否向form-item组件传递上下文信息
    type: Boolean,
    default: true
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
  inputmode: { // 输入框到inputmode属性
    type: String,
    default: null
  },
  inputStyle: { // input输入框的样式
    type: Object,
    default () {
      return {};
    }
  },
  placeholder: {
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
  compositionDisable: { // 是否不对input当composition事件进行拦截，当值为true时在输入中文、日文等其他非英文时modelValue的值将会在input事件中实时更新
    type: Boolean,
    default: false
  },
  autoHeight: { // 是否自动计算高度，仅当type=textarea时有效
    type: Boolean,
    default: false
  },
  minHeight: { // textarea的最小高度，仅当type=textarea时有效，当值为0时minHeight无效
    type: Number,
    default: 0
  },
  textareaEmptyHeightIsMinHeight: { // textarea值为空时的高度是否为minHeight
    type: Boolean,
    default: true
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  },
  minlength: { // 最少字数
    type: Number,
    default: 0
  },
  maxlength: { // 最多字数
    type: Number,
    default: 0
  },
  showCount: { // 是否显示字数
    type: Boolean,
    default: false
  }
};

export type BsInputProps = ExtractPropTypes<typeof bsInputProps>;
