import { PropType, ExtractPropTypes, Ref, InjectionKey } from 'vue';
import { PlainObject } from '../types';

export const bsTreeCommonProps = {
  nodeKey: { // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    type: String,
    default: ''
  },
  showCheckbox: { // 节点是否可以多选
    type: Boolean,
    default: false
  },
  checkboxName: { // 复选框的name
    type: String,
    default: null
  },
  checkStrictly: { // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
    type: Boolean,
    default: false
  },
  checkOnClickNode: { // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点
    type: Boolean,
    default: false
  },
  showRadio: { // 节点是否可以单选
    type: Boolean,
    default: false
  },
  radioName: { // 单选框框的name
    type: String,
    default: '--'
  },
  renderAfterExpand: { // 是否在第一次展开某个树节点后才渲染其子节点
    type: Boolean,
    default: true
  },
  renderContent: { // 树节点的内容区的渲染函数
    type: Function,
    default: null
  },
  highlightCurrent: { // 是否高亮当前选中节点
    type: Boolean,
    default: false
  },
  defaultExpandAll: { // 默认是否展开所有节点
    type: Boolean,
    default: false
  },
  defaultExpandNodeLevelMax: { // 默认展开节点级别的最大值
    type: Number,
    default: 0
  },
  expandOnClickNode: { // 点击节点的时候展开或者收缩节点
    type: Boolean,
    default: true
  },
  expandedKeys: { // 展开的节点的 key 的数组
    type: Array,
    default () {
      return [];
    }
  },
  autoExpandParent: { // 展开子节点的时候是否自动展开父节点
    type: Boolean,
    default: true
  },
  checkedKeys: { // 选中的节点的key数组（受控）
    type: Array,
    default () {
      return [];
    }
  },
  filterNodeMethod: { // 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
    type: Function,
    default: null
  },
  accordion: { // 是否每次只展开一个同级树节点
    type: Boolean,
    default: false
  },
  lazy: { // 是否懒加载子节点，需与 loadDataFn 方法结合使用
    type: Boolean,
    default: false
  },
  loadDataFn: { // 异步加载节点数据函数
    type: Function,
    default: null
  },
  pageSize: { // 子节点分页显示数量，值为0表示不使用分页
    type: Number,
    default: 30
  },
  filterText: { // 节点过滤文本
    type: [String, Number],
    default: ''
  },
  filterMethod: { // 节点过滤函数
    type: Function,
    default: null
  },
  loadMoreChildButtonText: {
    type: String,
    default: '...显示更多'
  },
  loadAllChildButtonText: {
    type: String,
    default: '显示全部'
  }
};

// 树子节点配置
export interface BsTreeNodeProps {
  label?: string;
  children?: string;
  disabled?: string;
  isLeaf?: string;
};

export const bsTreeNodePropsDefault = {
  label: 'label',
  children: 'children',
  disabled: 'disabled',
  isLeaf: 'isLeaf'
};

export interface BsTreeNode extends Object {
  label: string|number;
  disabled?: boolean;
  isLeaf?: boolean;
  children?: BsTreeNode[];
}

export const bsTreeProps = {
  ...bsTreeCommonProps,
  treeData: { // 树数据
    type: Object as PropType<BsTreeNode>,
    default () {
      return {};
    }
  },
  props: { // 树节点配置
    type: Object as PropType<BsTreeNodeProps>,
    default () {
      return {
        ...bsTreeNodePropsDefault
      };
    }
  },
  emptyText: {
    type: String,
    default: '暂无数据'
  },
  loadingText: {
    type: String,
    default: '加载中...'
  },
  loading: {
    type: Boolean,
    default: false
  }
};

export type BsTreeProps = ExtractPropTypes<typeof bsTreeProps>;

// 节点信息
export interface BsNodeInfo {
  node: PlainObject;
  nodeLevelPath: string;
  isDisabled: boolean;
};

export type BsNodeData = PlainObject;

export type TreeContext = {
  ctx: any;
  flatTreeNodeInfoArr: Ref<BsNodeInfo[]>;
  halfCheckedKeys: Ref<(string|number)[]>;
  currentNode: any;
  onNodeExpand: (flag: boolean, nodeData: BsNodeData, nodeState: any) => void;
  addCheckedKey: (nodeKey: string|number, nodeData: BsNodeData, hasChildren: boolean) => void;
  onNodeDestroy: (nodeData: BsNodeData) => void;
  removeCheckedKey: (nodeKey: string|number, nodeData: BsNodeData, hasChildren: boolean) => void;
  onNodeClick: (nodeData: BsNodeData, nodeState: any) => void;
};

export const bsTreeContextKey: InjectionKey<TreeContext> = Symbol('bsRootTree');
