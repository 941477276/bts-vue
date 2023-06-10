<template>
  <tr
    class="bs-table-row"
    :class="rowClasses">
    <template v-for="(column, columnIndex) in realColumns">
      <BsTableCell
        v-if="getCellShouldRender(columnIndex)"
        :row-data="rowData"
        :row-index="rowIndex"
        :table-slots="tableSlots"
        :column="column"
        :cell-index="columnIndex"
        :key="`${rowIndex}_${column.prop || columnIndex}`"
        :cell-attrs="column.cellAttrs"></BsTableCell>
    </template>
  </tr>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  SetupContext,
  watch,
  inject,
  toRef,
  onBeforeUnmount,
  ref,
  Ref,
  computed
} from 'vue';
import BsTableCell from './BsTableCell.vue';
import { BsTableColumn, bsTableCtxKey, BsTableContext, BsTableRowSpanCellInfo } from '../bs-table-types';
import { isFunction } from '@vue/shared';
import { isNumber, isObject } from '../../../utils/bs-util';

interface ColSpanCellInfo {
  colSpan: number; // 合并列数
  cellIndex: number; // 需要合并的列的索引
}

export default defineComponent({
  name: 'BsTableRow',
  components: {
    BsTableCell
  },
  props: {
    rowData: {
      type: Object,
      default() {
        return {};
      }
    },
    rowIndex: {
      type: Number
    },
    tableSlots: {
      type: Object
    },
    columns: { // 当前列配置
      type: Object as PropType<BsTableColumn[]>,
      default() {
        return {};
      }
    },
    rowClassName: { // 自定义数据行class
      type: [String, Array, Object, Function]
    }
  },
  setup (props: any, ctx: SetupContext) {
    let rootTableCtx = inject<BsTableContext>(bsTableCtxKey, {} as BsTableContext);

    // 有合并行的列
    // let rowSpanCells = toRef(rootTableCtx, 'rowSpanCells');

    let realColumns: Ref<(BsTableColumn & Record<string, any>)[]> = ref([]);
    // 需要合并的列的信息
    let colSpanCells: ColSpanCellInfo[] = [];
    watch([() => props.columns, rootTableCtx.rowSpanCells], function ([columns]) {
      // let skipEndColumnIndex = -1; // 待跳过的单元格结束索引
      let { rowData, rowIndex } = props;
      let realColumnsInner: (BsTableColumn & Record<string, any>)[] = [];
      let colSpanCellsInner: ColSpanCellInfo[] = [];
      columns.forEach((column: BsTableColumn, index: number) => {
        let {
          customCellAttrs
        } = column;
        // 跳过需要合并列的单元格
        /* if (skipEndColumnIndex > -1 && index < skipEndColumnIndex) {
          return;
        }
        skipEndColumnIndex = -1; */
        let colSpan = 0;
        let rowSpan = 0;
        // 单元格属性
        let cellAttrs: Record<string, any> = {};
        if (isFunction(customCellAttrs)) {
          cellAttrs = customCellAttrs(rowData, index, rowIndex, column);
          if (!isObject(cellAttrs)) {
            cellAttrs = {};
          }
        }
        // 计算需要合并的列
        if (cellAttrs.colSpan && isNumber(cellAttrs.colSpan)) {
          colSpan = Math.floor(cellAttrs.colSpan);
          /* if (colSpan > 0) {
            skipEndColumnIndex = index + colSpan;
          } */
        }

        let colSpanCellIndex = colSpanCells.findIndex((colSpanCellItem: ColSpanCellInfo) => colSpanCellItem.cellIndex === index);
        // console.log('colSpan', colSpan, rowIndex);
        if (colSpan! > 0) {
          cellAttrs.colSpan = colSpan;
          let colSpanCellInfo = {
            colSpan,
            cellIndex: index
          };
          if (colSpanCellIndex > -1) {
            colSpanCells[colSpanCellIndex] = colSpanCellInfo;
          } else {
            colSpanCells.push(colSpanCellInfo);
          }
        } else {
          delete cellAttrs.colSpan;
          if (colSpanCellIndex > -1) {
            colSpanCells.splice(colSpanCellIndex, 1);
          }
        }

        // 计算需要合并的行
        if (cellAttrs.rowSpan && isNumber(cellAttrs.rowSpan)) {
          rowSpan = Math.floor(cellAttrs.rowSpan);
        }
        if (rowSpan > 0) {
          cellAttrs.rowSpan = rowSpan;
          rootTableCtx.addRowSpanCell({
            rowIndex,
            cellIndex: index,
            rowSpan,
            colSpan
          });
        } else {
          rootTableCtx.removeRowSpanCell({
            rowIndex,
            cellIndex: index,
            rowSpan,
            colSpan
          });
          delete cellAttrs.rowSpan;
        }

        realColumnsInner.push({
          ...column,
          cellAttrs
        });
      });
      realColumns.value = realColumnsInner;
      // console.log('colSpanCells', colSpanCells);
    }, { immediate: true });

    // 行class
    let rowClasses = computed(function () {
      let rowClassName = props.rowClassName;
      if (isFunction(rowClassName)) {
        rowClassName = rowClassName(props.rowData, props.rowIndex);
      }
      return rowClassName || '';
    });
    onBeforeUnmount(function () {
      // console.log('props.rowIndex', props.rowIndex, {...props.rowData});
      rootTableCtx.removeRowSpanCell({
        rowIndex: props.rowIndex,
        rowSpan: 0,
        cellIndex: -1
      }, true);
    });

    return {
      realColumns,
      rowClasses,
      // rowSpanCells,
      getCellShouldRender (cellIndex: number) { // 判断列是否应该显示
        // 判断当前列是否在当前行的列合并范围内
        let inColSpan = colSpanCells.some(colSpanCell => {
          let {
            cellIndex: colSpanCellIndex,
            colSpan
          } = colSpanCell;
          return cellIndex > colSpanCellIndex && (cellIndex <= (colSpanCellIndex + colSpan - 1));
        });

        // 如果当前列是否在当前行的列合并范围内，则不显示
        if (inColSpan) {
          return false;
        }
        let rowIndex = props.rowIndex;
        let rowSpanCells = rootTableCtx.rowSpanCells;
        let inRowSpan = Object.values(rowSpanCells).some(rowSpanInfo => {
          let {
            cellIndex: rowSpanCellIndex,
            rowIndex: rowSpanIndex,
            rowSpan,
            colSpan
          } = rowSpanInfo;
          if (rowIndex <= rowSpanIndex) { // 合并行前面的行，直接跳过
            return false;
          }
          // 判断列是否在行合并的列中
          let inRowSpanInner = (rowIndex > rowSpanIndex) && (rowIndex <= (rowSpanIndex + rowSpan - 1));
          // console.log('inRowSpan inner', inRowSpanInner, colSpan);
          if (rowSpanCellIndex !== cellIndex) {
            if (colSpan > 0 && inRowSpanInner) { // 当前列与行合并的列不是相同的列，但在列合并范围内
              let inColSpan = cellIndex >= rowSpanCellIndex && (cellIndex <= (rowSpanCellIndex + colSpan - 1));
              // console.log('inColSpan', inColSpan, cellIndex, rowSpanCellIndex);
              if (inColSpan) {
                return true;
              }
            }
            // 不是相同的列，且不在列合并范围，直接跳过
            return false;
          }

          return inRowSpanInner;
        });
        // 列不在行合并的列中，则显示
        return !inRowSpan;
      }
    };
  }
});
</script>
