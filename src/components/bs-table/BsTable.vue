<template>
<div
  class="bs-table"
  :class="{
    'bs-table-striped': stripe,
    'bs-table-bordered': border,
    'bs-table-borderless': borderless,
    'bs-table-sm': size == 'sm'
  }">
  <div class="bs-table-wrapper">
    <table
      class="table table-hover"
      :class="{
        'table-striped': stripe,
        'table-bordered': border,
        'table-borderless': borderless,
        'table-sm': size == 'sm'
      }">
      <BsTableHeader
        :columns="columns"
        :table-slots="$slots"></BsTableHeader>
      <tbody class="bs-table-body">
        <BsTableRow
          v-for="(row, rowIndex) in realTableData"
          :key="getRowKey(row, rowIndex)"
          :row-data="row.data"
          :row-index="rowIndex"
          :table-slots="$slots"
          :columns="columns"
          :row-class-name="rowClassName">
          <!--<BsTableCell
            v-for="(column, columnIndex) in columns"
            :row-data="row"
            :row-index="rowIndex"
            :table-slots="$slots"
            :column="column"
            :cell-index="columnIndex"></BsTableCell>-->
        </BsTableRow>
      </tbody>
    </table>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, nextTick, provide, reactive, ref, Ref, SetupContext, watch } from 'vue';
import { bsTableProps, BsTableRowSpanCellInfo, BsTableContext, bsTableCtxKey, BsTableColumn } from './bs-table-types';
import BsTableHeader from './wigets/BsTableHeader.vue';
import BsTableRow from './wigets/BsTableRow.vue';
import { isFunction } from '@vue/shared';
import { isNumber, isObject } from '@/utils/bs-util';

interface ColSpanCellInfo {
  colSpan: number; // 合并列数
  cellIndex: number; // 需要合并的列的索引
}

export default defineComponent({
  name: 'BsTable',
  props: bsTableProps,
  components: {
    BsTableHeader,
    BsTableRow
  },
  setup (props: any, ctx: SetupContext) {
    // 需要合并行的单元格信息
    let rowSpanCells: Record<string, BsTableRowSpanCellInfo> = reactive({});
    let addRowSpanCell = function (rowSpanCellInfo: BsTableRowSpanCellInfo) {
      let key = rowSpanCellInfo.rowIndex + '_' + rowSpanCellInfo.cellIndex;
      console.log('增加了：', key);
      // 防止重复添加
      if ((key in rowSpanCells) && rowSpanCells[key].rowSpan === rowSpanCellInfo.rowSpan) {
        return;
      }
      rowSpanCells[key] = rowSpanCellInfo;
    };
    let removeRowSpanCell = function (rowSpanCellInfo: BsTableRowSpanCellInfo, removeCurrentRowCells?: boolean) {
      let rowIndex = rowSpanCellInfo.rowIndex;
      let key = rowIndex + '_' + rowSpanCellInfo.cellIndex;
      if (key in rowSpanCells) {
        delete rowSpanCells[key];
        return;
      }
      if (!removeCurrentRowCells) {
        return;
      }
      let rowIndexStr = rowIndex + '';
      for (let attr in rowSpanCells) {
        let [rowSpanIndex] = attr.split('_');
        console.log('移除了：', attr, rowSpanIndex, rowIndexStr);
        if (rowSpanIndex == rowIndexStr) {
          delete rowSpanCells[attr];
        }
      }
    };

    let dataChangeRandom = ref();
    let realTableData = ref<any[]>([]);
    // TODO 列合并、行合并功能是否应该提取到当前组件计算
    watch(() => [...props.data], function (data) {
      nextTick(function () {
        let now = new Date().getTime();
        realTableData.value = data?.map((dataItem: Record<string, any>, index: number) => {
          return {
            uid: `${index}_${now}`,
            data: dataItem
          };
        });
        // 数据变动后需要让子孙组件知道
        dataChangeRandom.value = new Date().getTime();
      });
    }, { immediate: true });

    provide(bsTableCtxKey, {
      dataChangeRandom,
      rowSpanCells,
      addRowSpanCell,
      removeRowSpanCell
    });
    return {
      realTableData,
      getRowKey (row: Record<string, any>, rowIndex: number) {
        let rowKey = props.rowKey;
        if (!rowKey) {
          return row.uid;
        }
        if (isFunction(rowKey)) {
          return rowKey(row.data, rowIndex) || row.uid;
        }
        return row.data[rowKey] || row.uid;
      }
    };
  }
});
</script>
