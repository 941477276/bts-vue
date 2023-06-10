import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType, BsSize } from '../types';

export interface CascaderOptionItem {
  id?: string;
  value?: string|number;
  label?: string|number;
  labelSlot?: string|number;
  disabled?: boolean;
  tagType?: string;
  children?: CascaderOptionItem[];
};

export interface CheckedOptions {
  [key: string]: CascaderOptionItem[]
};

export interface CascaderExpandedMenuItem {
  menuId: string;
  menuItemValue?: string|number;
  menuOptions: CascaderOptionItem[];
};

export interface CascaderFieldNames {
  label: string;
  value: string;
  children: string;
  disabled: string;
  leaf: string;
};

export type BsCascaderFieldNames = Partial<CascaderFieldNames>;

export const cascaderMenuProps = {
  expandTrigger: { // 次级菜单的展开方式，支持click、hover
    type: String,
    default: 'click'
  },
  expandIcon: { // 自定义次级菜单展开图标
    type: String,
    default: ''
  },
  checkStrictly: { // 是否严格的遵守父子节点不互相关联
    type: Boolean,
    default: false
  },
  emitPath: { // 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
    type: Boolean,
    default: true
  },
  lazy: { // 是否动态加载子节点，需与 lazyLoad 方法结合使用
    type: Boolean,
    default: false
  },
  lazyLoadFn: { // 懒加载动态数据的方法，仅在 lazy 为 true 时有效
    type: Function,
    default: null
  },
  multiple: { // 是否支持多选
    type: Boolean,
    default: false
  },
  checkboxName: { // 复选框的name属性
    type: String
  },
  radioName: { // 单选框的name属性
    type: String
  }
};

export const bsCascaderProps = {
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
    type: Array,
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
  /* multiple: { // 是否支持多选
    type: Boolean,
    default: false
  }, */
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
    default: '暂无数据'
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
  showAllLevels: { // 输入框中是否显示选中值的完整路径
    type: Boolean,
    default: true
  },
  displayRender: { // 选择后展示的渲染函数
    type: Function,
    default: null
  },
  suffixIcon: { // 后缀图标名称
    type: String,
    default: ''
  },
  setDropdownWidth: { // 是否设置下拉菜单的宽度为参照元素的宽度
    type: Boolean,
    default: false
  },
  setDropdownMinWidth: { // 是否设置下拉菜单的最小宽度为参照元素的宽度
    type: Boolean,
    default: false
  },
  dropdownClass: { // 下拉菜单名称
    type: [String, Object, Array],
    default: ''
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  },
  ...cascaderMenuProps,
  fieldNames: { // 自定义 options 中 label、 children、disabled 的字段名称
    type: Object as PropType<BsCascaderFieldNames>,
    default () {
      return {};
    }
  }
};

export type BsCascaderProps = ExtractPropTypes<typeof bsCascaderProps>;
