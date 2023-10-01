import { PropType } from 'vue';
import {
  BsColgroupItem,
  BsTableColumn,
  BsTableSelectionConfig,
  BsTableSize
} from '../bs-table-types';

export const bsTableHeadProps = {
  width: [String, Number],
  colgroup: {
    type: Array as PropType<BsColgroupItem[]>,
    default () {
      return [];
    }
  },
  size: {
    type: String as PropType<BsTableSize>
  },
  columns: { // 表格列
    type: Array as PropType<BsTableColumn[]>,
    default () {
      return [];
    }
  },
  tableSlots: {
    type: Object
  },
  tableBodyHasScroll: {
    type: Boolean,
    default: false
  },
  tableBodyScrollWidth: {
    type: Number,
    default: 0
  },
  selectionConfig: { // 选择框的类型
    type: Object as PropType<BsTableSelectionConfig>,
    default () {
      return {};
    }
  },
  tableWidth: { // 表格宽度
    type: Number,
    default: 0
  },
  tableRowsCount: { // 表格行总数量
    type: Number,
    default: 0
  },
  checkedRowsCount: { // 已选择的行总数量
    type: Number,
    default: 0
  }
};
