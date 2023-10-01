import { PropType } from 'vue';
import { BsTableSelectionConfig } from '../bs-table-types';
export const bsTableCellCommonProps = {
  rowData: {
    type: Object,
    default () {
      return {};
    }
  },
  rowIndex: {
    type: Number
  },
  tableSlots: {
    type: Object
  },
  rowId: { // 行id
    type: [String, Number]
  },
  isTreeData: { // 是否为树状数据
    type: Boolean
  },
  hasChildren: { // 是否有子节点
    type: Boolean
  },
  treeLevel: { // 树状结构数据的层级
    type: Number
  },
  treeRowExpand: { //  树状数据时，行是否展开了
    type: Boolean
  },
  lazy: { // 是否懒加载树状数据
    type: Boolean
  },
  isLeafKey: { // 懒加载模式下，树形数据结构中没有子下级节点的key，当值为true表示该行没有下级节点了
    type: String,
    default: 'isLeaf'
  },
  childrenKey: { // 树形数据结构中下级节点在数据中的 key
    type: String,
    default: 'children'
  },
  selectionConfig: { // 选择项配置
    type: Object as PropType<BsTableSelectionConfig>,
    default () {
      return {};
    }
  },
  tableWidth: { // 表格宽度
    type: Number,
    default: 0
  }
};
