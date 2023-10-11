<template>
  <thead class="bs-table-head">
    <tr>
      <th
        class="bs-table-cell"
        v-for="(cell, index) in headThs"
        v-bind="cell.cellAttrs"
        :key="cell.prop">
        <BsTableCellContent
          :cell-index="index"
          :label="cell.label"
          :column="cell"
          :is-head-cell="true"
          :table-slots="tableSlots"
          :slot-name="cell.headSlotName"></BsTableCellContent>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, SetupContext, VNode } from 'vue';
import { isFunction } from '@vue/shared';
import { isNumber, isObject } from '../../../utils/bs-util';
import { BsTableColumn } from '../bs-table-types';
import BsTableCellContent from './BsTableCellContent.tsx';

export default defineComponent({
  name: 'BsTableHeader',
  props: {
    columns: { // 表格列
      type: Array as PropType<BsTableColumn[]>,
      default () {
        return [];
      }
    },
    tableSlots: {
      type: Object
    }
  },
  components: {
    BsTableCellContent
  },
  setup (props: any, ctx: SetupContext) {
    let headThs = computed(function () {
      let ths: any[] = [];
      let currentColumnIndex = -1;
      let skipEndColumnIndex = -1; // 待跳过的单元格结束索引
      ;(props.columns || []).forEach((column: BsTableColumn, index: number) => {
        let {
          label,
          prop,
          colSpan,
          width,
          minWidth,
          fixed,
          headSlotName,
          customHeadCellAttrs
        } = column;
        // 跳过需要合并的单元格
        if (skipEndColumnIndex > -1 && index < skipEndColumnIndex) {
          return;
        }
        skipEndColumnIndex = -1;
        if (isFunction(colSpan)) {
          colSpan = colSpan(index, column);
        }
        // 计算需要合并的单元
        if (colSpan && isNumber(colSpan)) {
          colSpan = Math.floor(colSpan);
          if (colSpan > 0) {
            skipEndColumnIndex = index + colSpan;
          }
        }
        let cellAttrs: Record<string, any> = {};
        // 获取单元格属性
        if (isFunction(customHeadCellAttrs)) {
          cellAttrs = customHeadCellAttrs(index, column);
          if (!isObject(cellAttrs)) {
            cellAttrs = {};
          }
        }
        if (colSpan! > 0) {
          cellAttrs.colSpan = colSpan;
        }
        ths.push({
          label,
          prop,
          colSpan,
          width,
          minWidth,
          fixed,
          cellAttrs,
          headSlotName
        });
      });
      return ths;
    });
    return {
      headThs
    };
  }
});
</script>
