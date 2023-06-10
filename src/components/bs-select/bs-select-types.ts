import { PropType, ExtractPropTypes, InjectionKey } from 'vue';
import { BsColorType, BsSize } from '../types';
import { BsTagEffect } from '../bs-tag/bs-tag-types';

export interface BsSelectOption {
  label: string|number;
  value: string|number|boolean;
  disabled?: boolean;
  tagType?: BsColorType;
  tagClass?: string|string[]|Record<string, any>;
  tagEffect?: BsTagEffect;
  options?: BsSelectOption[]
}

export const bsSelectProps = {
  modelValue: {
    type: [String, Number, Array],
    default: ''
  },
  teleported: { // 是否使用 teleport。设置成 true则会被追加到 append-to 的位置
    type: Boolean,
    default: false
  },
  appendTo: { // 下拉菜单即将插入到的父级元素
    type: String,
    default: 'body'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: { // 下拉选项
    type: Array as PropType<BsSelectOption[]>,
    default: null,
    validate (options: any[]) {
      if (!options) {
        return true;
      }
      let flag = options.some(item => {
        // eslint-disable-next-line no-prototype-builtins
        return !item.hasOwnProperty('value') || !item.hasOwnProperty('label');
      });
      return !flag;
    }
  },
  loading: { // 是否正在加载数据
    type: Boolean,
    default: false
  },
  loadingText: { // 正在加载数据时的提示文字
    type: String,
    default: '加载中...'
  },
  multiple: { // 是否支持多选
    type: Boolean,
    default: false
  },
  multipleLimit: { // 可被选择的最大数量
    type: Number,
    default: undefined
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
  placeholder: {
    type: String,
    default: '请选择'
  },
  name: { // input原生的name属性
    type: String,
    default: null
  },
  ariaLabel: { // area-label属性值
    type: String,
    default: ''
  },
  emptyText: { // 下拉列表为空时显示的文字，也可以使用slot="empty"设置
    type: String,
    default: '无数据'
  },
  filterable: { // 是否可以搜索
    type: Boolean,
    default: false
  },
  filterMethod: { // 自定义搜索函数
    type: Function,
    default: null
  },
  maxTagCount: { // 最多显示几个tag
    type: Number,
    default: 0
  },
  loadingColorType: { // 加载图标的颜色的类型
    type: String as PropType<BsColorType>,
    default: ''
  },
  tagType: { // 标签组件的type
    type: String as PropType<BsColorType>,
    default: 'secondary'
  },
  tagEffect: { // tag主题
    type: String,
    default: 'light'
  },
  tagCloseable: { // tag是否可关闭
    type: Boolean,
    default: true
  },
  dropdownClass: { // .dropdown-menu的额外class
    type: [String, Object, Array],
    default: ''
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  }
};

export const bsSelectOptionProps = {
  value: {
    type: [String, Number, Boolean],
    default: null
  },
  label: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  tagType: { // 标签组件的type
    type: String as PropType<BsColorType>,
    default: 'secondary'
  },
  tagClass: {
    type: [String, Array, Object],
    default: ''
  }
};

export const bsSelectOptionGroupProps = {
  label: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
};

export type BsSelectProps = ExtractPropTypes<typeof bsSelectProps>;
export type BsSelectOptionProps = ExtractPropTypes<typeof bsSelectOptionProps>;
export type BsSelectOptionGroupProps = ExtractPropTypes<typeof bsSelectOptionGroupProps>;

export type SelectOptionContextItem = {
  id?: string;
  value: any;
  label: string|number;
  labelSlot?: string|number;
  disabled?: boolean;
};

export type SelectContext = {
  ctx?: any;
  props: any;
  filterText?: string;
  filterMethod: (option: SelectOptionContextItem) => boolean;
  changeVal: (val: any, isDelete?: boolean) => void;
  addOption: (option: SelectOptionContextItem) => void;
  removeOption: (optionId: string, value: any) => void;
};

export type SelectOptionGroupContext = {
  props: any
};

export const selectContextKey: InjectionKey<SelectContext> = Symbol('select');
export const selectOptionGroupContextKey: InjectionKey<SelectContext> = Symbol('selectOptionGroup');
