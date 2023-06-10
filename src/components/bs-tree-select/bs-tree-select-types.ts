import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType, BsSize } from '../types';
import { BsTreeProps, BsTreeNode } from '../bs-tree/bs-tree-types';
// import { bsTreeProps } from '../bs-tree/bs-tree-props';

export const bsTreeSelectProps = {
  // ...bsTreeProps,
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
  checkboxVisible: { // 是否显示复选框
    type: Boolean,
    default: false
  },
  radioVisible: { // 是否显示单选框
    type: Boolean,
    default: false
  },
  treeData: { // 树数据
    type: Object as PropType<BsTreeNode>,
    default () {
      return {};
    }
  },
  treeProps: { // tree组件的属性
    type: Object as PropType<BsTreeProps>,
    default () {
      return {};
    }
  },
  defaultExpandCheckedNodesParent: { // 默认是否展开选中节点的父级
    type: Boolean,
    default: true
  },
  nodeKey: { // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    type: String,
    default: ''
  },
  checkStrictly: { // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
    type: Boolean,
    default: false
  },
  checkOnClickNode: { // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点
    type: Boolean,
    default: true
  },
  lazy: { // 是否懒加载子节点，需与 loadDataFn 方法结合使用
    type: Boolean,
    default: false
  },
  labels: { // 输入框中选中项的显示名称，当lazy=true时必填
    type: Array,
    default () {
      return [];
    },
    validate (labels: any[]) {
      if (!labels || labels.length == 0) {
        return true;
      }
      let flag = labels.some((labelItem: any) => {
        // eslint-disable-next-line no-prototype-builtins
        return !labelItem.hasOwnProperty('label') || !labelItem.hasOwnProperty('value');
      });
      if (!flag) {
        console.warn('label item must contains "label" and "value" property!');
      }
      return flag;
    }
  },
  emptyText: {
    type: String,
    default: '暂无数据'
  },
  loadingColorType: { // 加载图标的颜色的类型
    type: String as PropType<BsColorType>,
    default: ''
  },
  tagType: { // 标签组件的type
    type: String as PropType<BsColorType>,
    default: 'secondary'
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
  tagEffect: { // tag主题
    type: String,
    default: 'light'
  },
  tagCloseable: { // tag是否可关闭
    type: Boolean,
    default: true
  },
  showRadio: { // 节点是否可以单选
    type: Boolean,
    default: false
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

export type BsTreeSelectProps = ExtractPropTypes<typeof bsTreeSelectProps>;
