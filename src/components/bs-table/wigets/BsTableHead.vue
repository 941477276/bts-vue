<template>
  <thead class="bs-table-thead">
    <tr>
      <template v-for="(cell, index) in headThs">
        <BsTableCell
          v-if="cell.prop != selectionCellKey"
          tag="th"
          :ref="(com) => setRef(cell.prop, com)"
          :row-index="0"
          :table-slots="tableSlots"
          :column="cell"
          :cell-index="index"
          :key="cell.prop"
          :is-header-cell="true"
          :cell-attrs="cell.cellAttrs"
          :colgroup="colgroup"
          :table-width="tableWidth"
          :class="{
            'bs-table-cell-scrollbar-prev-neighbor': tableBodyHasScroll && (tableBodyScrollWidth > 0) && (index == headThs.length - 1),
            'bs-table-expand-cell-head': cell.prop == bsExpandColumnKey,
            'bs-table-column-has-sorter': cell.hasSorter
          }">
        </BsTableCell>

        <BsTableCell
          v-else
          tag="th"
          :ref="(com) => setRef(cell.prop, com)"
          :row-index="0"
          :table-slots="tableSlots"
          :column="cell"
          :cell-index="index"
          :key="cell.prop"
          :is-header-cell="true"
          :cell-attrs="cell.cellAttrs"
          :colgroup="colgroup"
          :table-width="tableWidth"
          class="bs-table-selection-cell-head">
          <template v-if="cell.prop == selectionCellKey && !!selectionConfig?.type">
            <BsCheckbox
              v-if="selectionConfig?.type == 'checkbox'"
              v-model="selectAllValue"
              :indeterminate="isIndeterminate"
              :delive-context-to-form-item="false"></BsCheckbox>
            <BsTableCustomContent
              v-if="!!tableSlots.selectionHeadExtra || !!selectionConfig?.columnTitle"
              :row-index="0"
              :cell-index="index"
              :table-slots="tableSlots"
              :is-head-cell="true"
              :label="selectionConfig?.columnTitle"
              :column="cell"
              slot-name="selectionHeadExtra">
            </BsTableCustomContent>
          </template>
        </BsTableCell>
      </template>

      <th
        v-if="tableBodyHasScroll && tableBodyScrollWidth > 0"
        class="bs-table-cell bs-table-cell-scrollbar"
        :class="{
          'bs-table-cell-fixed-right': hasFixedRightColumn
        }"
        :style="{
          width: (tableBodyHasScroll && tableBodyScrollWidth > 0) ? tableBodyScrollWidth + 'px' : '',
          position: hasFixedRightColumn ? 'sticky' : '',
          right: hasFixedRightColumn ? '0' : ''
        }"></th>
    </tr>
  </thead>
</template>

<script lang="ts">
import {
  defineComponent, PropType, computed, SetupContext, VNode, reactive,
  onMounted, onUpdated, inject
} from 'vue';
import { isFunction } from '@vue/shared';
import { isNumber, isObject } from '../../../utils/bs-util';
import {
  BsTableColumnInner,
  bsSelectionColumnKey,
  bsExpandColumnKey,
  BsTableContext,
  bsTableCtxKey
} from '../bs-table-types';
import BsTableCell from './BsTableCell.vue';
import BsCheckbox from '../../bs-checkbox/BsCheckbox.vue';
import { BsTableCustomContent } from './BsTableCustomContent';
import { bsTableHeadProps } from './bs-table-head-props';

export default defineComponent({
  name: 'BsTableHead',
  props: {
    ...bsTableHeadProps
  },
  components: {
    BsTableCell,
    BsCheckbox,
    BsTableCustomContent
  },
  setup (props: any, ctx: SetupContext) {
    let rootTableCtx = inject<BsTableContext>(bsTableCtxKey, {} as BsTableContext);

    let headThs = computed(function () {
      let ths: any[] = [];
      // let currentColumnIndex = -1;
      let skipEndColumnIndex = -1; // 待跳过的单元格结束索引
      ;(props.columns || []).forEach((column: BsTableColumnInner, index: number) => {
        let {
          colSpan,
          sorter,
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
        // 列是否需要排序
        let hasSorter = isFunction(sorter);
        ths.push({
          ...column,
          hasSorter,
          colSpan,
          cellAttrs
        });
      });
      return ths;
    });

    // 是否有右侧固定列
    let hasFixedRightColumn = computed(function () {
      let headThsRaw = headThs.value;
      return headThsRaw.some(function (column) {
        return column.fixedRightColumnCount && column.fixedRightColumnCount > 0;
      });
    });

    // 复选框是否为半选中状态
    let isIndeterminate = computed(function () {
      let { tableRowsCount, checkedRowsCount } = props;
      return tableRowsCount != 0 && checkedRowsCount != 0 && (tableRowsCount != checkedRowsCount);
    });

    let selectAllValue = computed({
      get () {
        return props.tableRowsCount != 0 && props.tableRowsCount == props.checkedRowsCount;
      },
      set (newVal) {
        console.log(111, newVal);
        if (newVal) {
          rootTableCtx.selectAll();
        } else {
          rootTableCtx.selectNone();
        }
      }
    });

    let cellComponentRefs = reactive<Record<string, any>>({});
    let setRef = function (key: string, com: any) {
      // console.log('setRef', key, com);
      cellComponentRefs[key] = com;
    };

    onMounted(function () {
      // console.log('head组件mounted');
      setTimeout(function () {
        if (hasFixedRightColumn.value) { // 主动调用列组件的计算列样式函数，以防止固定列定位不正确
          for (let key in cellComponentRefs) {
            let cellComponent = cellComponentRefs[key];
            cellComponent.calcColumnStyle();
          }
        }
      }, 60);
    });

    return {
      headThs,
      hasFixedRightColumn,
      selectAllValue,
      isIndeterminate,
      bsExpandColumnKey,
      selectionCellKey: bsSelectionColumnKey,
      setRef
    };
  }
});
</script>
