import { PropType, ExtractPropTypes } from 'vue';
import { BsSize } from '../types';

export const bsCommonPickerTypes = {
  showFooter: { // 是否显示底部
    type: Boolean,
    default: false
  },
  disabled: { // 是否禁用
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
  name: { // input输入框的name属性
    type: String,
    default: null
  },
  inputModelValue: { // 输入框的值
    type: [String, Number],
    default: ''
  },
  suffixIcon: { // 后缀图标
    type: String,
    default: ''
  },
  clearable: { // 输入框是否可清空
    type: Boolean,
    default: false
  },
  setMinWidth: {
    type: Boolean,
    default: false
  },
  placeholder: { // 输入框提示文字
    type: String,
    default: ''
  },
  placement: { // 下拉弹窗显示位置
    type: String,
    default: 'bottom'
  },
  inputReadonly: { // 设置输入框为只读（避免在移动设备上打开虚拟键盘）
    type: Boolean,
    default: false
  },
  dropdownClass: { // 下拉弹窗的额外classname
    type: [String, Object, Array],
    default: ''
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  },
  teleported: { // // 是否使用 teleport。设置成true则下拉内容会被追加到 append-to 的位置
    type: Boolean,
    default: true
  },
  appendTo: { // 指示下拉内容将附加在哪一个网页元素上
    type: [String, Object],
    default: 'body'
  },
  inputValueDisabled: { // 输入框的值是否被禁用或在禁用范围内
    type: Boolean,
    default: false
  }
};

export type BsCommonPickerProps = ExtractPropTypes<typeof bsCommonPickerTypes>;
