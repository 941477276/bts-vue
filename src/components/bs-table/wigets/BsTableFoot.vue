<template>
  <tfoot class="bs-table-foot">
    <tr
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      class="bs-table-foot-row"
      v-bind="row.attrs">
      <td
        class="bs-table-cell bs-table-foot-cell"
        v-for="(cell, index) in row.columns"
        v-bind="cell.attrs"
        :key="index"
        :class="{
          'bs-table-cell-fixed-left-last': cell.isFixedLeft && (index + 1) === cell.fixedLeftCount,
          'bs-table-cell-fixed-left': cell.isFixedLeft,
          'bs-table-cell-fixed-right-first': cell.isFixedRight && (index - cell.fixedRightCount) === 0,
          'bs-table-cell-fixed-right': cell.isFixedRight,
          'bs-table-cell-last': row.columns.length - 1 == index
        }"
        :style="{
          position: (cell.isFixedLeft || cell.isFixedRight) ? 'sticky' : ''
        }">
        <BsTableCellContent
          :row-index="rowIndex"
          :cell-index="index as number"
          :label="cell.label"
          :row-data="row.tableDataRaw"
          :table-slots="tableSlots"
          :default-content="$slots.default"
          :slot-name="cell.slotName">
        </BsTableCellContent>
      </td>
      <!--<BsTableCell
        v-for="(cell, index) in row"
        :row-index="rowIndex"
        :row-id="rowIndex"
        :table-slots="tableSlots"
        :cell-index="index"
        :column="cell.column"
        :row-data="cell.data"
        :key="`cell_${rowIndex}_${index}`"
        :cell-attrs="cell.attrs"
        :slot-name="cell.slotName"></BsTableCell>-->
    </tr>
  </tfoot>
</template>

<script lang="ts">
import {
  computed, defineComponent, PropType, SetupContext
} from 'vue';
import {
  BsColgroupItem,
  BsTableColumn,
  BsTableFootColumn, BsTableFootRow, BsTableRowData,
  BsTableSize
} from '../bs-table-types';
import { isFunction } from '@vue/shared';
import { bsTableFootProps } from './bs-table-foot-props';
import BsTableCellContent from './BsTableCellContent';
// import BsTableCell from './BsTableCell.vue';

export default defineComponent({
  name: 'BsTableFoot',
  components: {
    BsTableCellContent
    // BsTableCell
  },
  props: {
    ...bsTableFootProps
  },
  setup (props: any, ctx: SetupContext) {
    let rows = computed(function () {
      let { footerRows, footerMethod, columns, tableData } = props;
      let tableDataRaw = tableData!.map((row: BsTableRowData) => row.node);
      if (isFunction(footerMethod)) {
        let footerRow1 = footerMethod(tableDataRaw, columns);
        if (Array.isArray(footerRow1) && footerRow1.length > 0) {
          footerRows = footerRow1;
        }
      }
      if (!Array.isArray(footerRows)) {
        return [];
      }
      let rows = footerRows.map((row, index) => {
        let newRow: { attrs?: Record<string, any>; columns: Record<string, any>[]; tableDataRaw: Record<string, any>[] } = {
          columns: [],
          tableDataRaw
        };
        let attrs = row.rowAttrs;
        if (isFunction(attrs)) {
          attrs = attrs(tableDataRaw, index);
        }
        newRow.attrs = attrs;

        let fixedLeftCount = 0;
        let fixedRightCount = 0;
        newRow.columns = row.columns.map((column: BsTableFootColumn, columnIndex: number) => {
          let { label, cellAttrs, slotName, fixed } = column;
          let newLabel = label;
          if (isFunction(label)) {
            // @ts-ignore
            newLabel = () => label(tableDataRaw, index, columns);
          }
          let attrs = cellAttrs;
          if (isFunction(cellAttrs)) {
            attrs = cellAttrs(tableDataRaw, index, columns);
          }
          /* let columnItem = {
            ...columns[columnIndex],
            prop: 'label'
          }; */
          if (fixed === true) {
            fixed = 'left';
          }
          let isFixedLeft = fixed == 'left';
          let isFixedRight = fixed == 'right';
          fixedLeftCount += isFixedLeft ? 1 : 0;
          fixedRightCount += isFixedRight ? 1 : 0;
          return {
            // column: columnItem,
            label: newLabel,
            /* data: {
              label: newLabel
            }, */
            isFixedLeft,
            isFixedRight,
            attrs,
            fixedLeftCount: 0,
            fixedRightCount: 0,
            slotName
          };
        });
        newRow.columns.forEach(columnItem => {
          columnItem.fixedLeftCount = fixedLeftCount;
          columnItem.fixedRightCount = fixedRightCount;
        });
        return newRow;
      });
      return rows;
    });

    return {
      rows
    };
  }
});
</script>
