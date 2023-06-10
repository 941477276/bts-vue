import { PropType } from 'vue';
import { BsSize, BsColorType } from '../types';

export type ValueItem = {
  label: string;
  value: string|number|boolean;
  tagType?: BsColorType;
  tagClass?: string;
  disabled?: boolean;
};

export const bsSelectInputProps = {
  values: {
    type: Array,
    default () {
      return [];
    },
    validate (values: ValueItem[]) {
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
  multiple: { // 是否允许多选
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  /* isFocus: { // 是否处于聚焦状态
    type: Boolean,
    default: false
  }, */
  filterable: { // 是否可搜索
    type: Boolean,
    default: false
  },
  maxTagCount: { // 最多显示几个tag
    type: Number,
    default: 0
  },
  loading: { // 是否正在加载数据
    type: Boolean,
    default: false
  },
  loadingColorType: { // 加载图标的颜色的类型
    type: String as PropType<BsColorType>,
    default: ''
  },
  loadingText: { // 正在加载数据时的提示文字
    type: String,
    default: '加载中...'
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
  suffixIcon: { // 后缀图标名称
    type: String,
    default: 'chevron-down'
  }
};
