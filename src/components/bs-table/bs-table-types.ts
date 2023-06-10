import { PropType, VNode, InjectionKey, Ref } from 'vue';

// 表格列属性
export interface BsTableColumn {
  label: string|number|((index: number, column: BsTableColumn) => string|number|VNode); // 列名
  prop: string; // 列数据字段名称
  headSlotName?: string; // 头部单元格插槽名称
  colSpan?: number|((index: number, column: BsTableColumn) => number); // 头部单元格合并数量
  width?: string|number;
  minWidth?: string|number;
  fixed?: boolean|'left'|'right'; // 列是否固定住
  customHeadCellAttrs?: (index: number, column: BsTableColumn) => Record<any, any>; // 自定义头部单元格属性
  customCell?: (data: Record<string, any>, cellIndex: number, rowIndex: number) => Record<any, any>; // 自定义数据单元格内容
  customCellAttrs?: (data: Record<string, any>, cellIndex: number, rowIndex: number, column: BsTableColumn) => Record<any, any>; // 自定义数据单元格属性
  cellClassName?: string|string[]|((data: Record<string, any>, cellIndex: number, rowIndex: number, column: BsTableColumn) => (string|string[])); // 自定义数据单元格class
};

// 单元格需要行合并的信息
export interface BsTableRowSpanCellInfo {
  cellIndex: number; // 单元格索引
  rowIndex: number; // 行索引
  rowSpan: number; // 合并行的数量
  colSpan?: number; // 合并列的数量
};

export type BsTableSize = 'sm' | '';

export const bsTableProps = {
  columns: { // 表格列
    type: Array as PropType<BsTableColumn[]>,
    default () {
      return [];
    }
  },
  data: { // 表格数据
    type: Array as PropType<Record<string, any>[]>,
    default () {
      return [];
    }
  },
  stripe: { // 是否为带斑马纹表格
    type: Boolean,
    default: false
  },
  border: { // 是否为带边框
    type: Boolean,
    default: false
  },
  borderless: { // 是否去掉边框
    type: Boolean,
    default: false
  },
  size: { // 表格大小
    type: String as PropType<BsTableSize>
  },
  rowKey: { // 行数据的 Key，用来优化 Table 的渲染，可以是字符串或一个函数
    type: [String, Function],
    required: true
  },
  rowClassName: { // 自定义数据行class
    type: [String, Array, Object, Function]
  }
};

export interface BsTableContext {
  dataChangeRandom: Ref<boolean>;
  rowSpanCells: Record<string, BsTableRowSpanCellInfo>;
  addRowSpanCell: (rowSpanCellInfo: BsTableRowSpanCellInfo) => void;
  removeRowSpanCell: (rowSpanCellInfo: BsTableRowSpanCellInfo, removeCurrentRowCells?: boolean) => void;
}
export const bsTableCtxKey: InjectionKey<BsTableContext> = Symbol('bsTableCtx');
