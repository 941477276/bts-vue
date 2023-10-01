import { PropType } from 'vue';
import {
  BsColgroupItem,
  BsTableColumn,
  BsTableFootRow,
  BsTableRowData,
  BsTableSize
} from '../bs-table-types';

export const bsTableFootProps = {
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
  tableWidth: { // 表格宽度
    type: Number,
    default: 0
  },
  tableData: { // 表格数据
    type: Array as PropType<BsTableRowData[]>,
    default () {
      return [];
    }
  },
  footerRows: { // 表格尾部行
    type: Array as PropType<BsTableFootRow[]>
  },
  footerMethod: { // 高度自定义表格尾部列函数
    type: Function as PropType<(tableData: Record<string, any>[], columns: BsTableColumn[]) => BsTableFootRow[]>
  }
};
