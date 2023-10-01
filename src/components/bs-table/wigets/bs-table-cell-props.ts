import { PropType } from 'vue';
import { BsColgroupItem, BsTableColumnInner, BsTableSelectionType } from '../bs-table-types';
import { bsTableCellCommonProps } from './bs-table-cell-common-props';
export const bsTableCellProps = {
  ...bsTableCellCommonProps,
  tag: {
    type: String,
    default: 'td'
  },
  cellIndex: {
    type: Number
  },
  isHeaderCell: {
    type: Boolean
  },
  column: { // 当前列配置
    type: Object as PropType<BsTableColumnInner>,
    default () {
      return {};
    }
  },
  cellAttrs: {
    type: Object,
    default () {
      return {};
    }
  },
  slotName: { // 自定义内容插槽名称
    type: String
  },
  colgroup: { // 自定义内容插槽名称
    type: Array as PropType<BsColgroupItem[]>,
    default () {
      return [];
    }
  }
};
