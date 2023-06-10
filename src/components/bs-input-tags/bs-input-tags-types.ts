import { PropType, ExtractPropTypes } from 'vue';
import { BsSize, BsColorType } from '../types';

export type BsInputTagsValueItem = {
  label: string;
  value: string|number|boolean;
  tagType?: BsColorType;
  tagClass?: string;
  disabled?: boolean;
};

export const bsInputTagsProps = {
  modelValue: {
    type: Array,
    default () {
      return [];
    },
    validate (values: BsInputTagsValueItem[]) {
      let flag = !values.some((valueItem: any) => {
        // eslint-disable-next-line no-prototype-builtins
        return !valueItem.hasOwnProperty('label');
      });
      if (flag) {
        console.warn('value item need "label" property!');
      }
      return flag;
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  maxTagCount: { // 最多显示几个tag
    type: Number,
    default: 0
  },
  tagLimit: { // 最多允许添加的tag个数
    type: Number,
    default: 0
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
  minWidth: { // 输入框最小宽度
    type: Number,
    default: 100
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
  tagType: { // 标签组件的type
    type: String as PropType<BsColorType>,
    default: 'secondary'
  },
  tagCloseable: { // 标签是否可关闭
    type: Boolean,
    default: true
  },
  tagEffect: { // tag主题
    type: String,
    default: 'light'
  },
  placeholder: {
    type: String,
    default: '输入内容，按回车键确认'
  },
  name: { // 原生input的name属性
    type: String,
    default: null
  },
  inputType: { // 原生input的type属性
    type: String,
    default: 'text'
  },
  ariaLabel: { // area-label属性值
    type: String,
    default: ''
  },
  showAddButton: { // 是否显示添加按钮
    type: Boolean,
    default: true
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  }
};

export type BsInputTagsProps = ExtractPropTypes<typeof bsInputTagsProps>;
