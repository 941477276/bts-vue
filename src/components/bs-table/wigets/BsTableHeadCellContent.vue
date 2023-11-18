<template>
  <div class="bs-table-head-cell-content">
    <div class="bs-table-head-cell-title">
      <BsTableCustomContent
        :row-index="rowIndex"
        :cell-index="cellIndex"
        :label="column.label"
        :table-slots="tableSlots"
        :is-head-cell="true"
        :column="column"
        :default-content="defaultSlot"
        :slot-name="slotName || column.headSlotName || 'head'">
        <!--<slot></slot>-->
      </BsTableCustomContent>
    </div>
    <!--排序触发器-->
    <div
      v-if="column.hasSorter"
      class="bs-table-column-sorters">
      <BsTooltip v-if="sortDirections.includes('ascend')" :disabled="!!column.showSorterTooltip" placement="top" transition-name="scale" :content="onSortedInfo.direction != 'ascend' ? '升序排序' : '取消排序'">
        <BsiCaretUpFill
          class="bs-table-column-sort-handler"
          :class="{
            'is-on-sort': onSortedInfo.direction == 'ascend'
          }"
          @click="setSort('ascend')"></BsiCaretUpFill>
      </BsTooltip>
      <BsTooltip v-if="sortDirections.includes('descend')" :disabled="!!column.showSorterTooltip" placement="bottom" transition-name="scale" :content="onSortedInfo.direction != 'descend' ? '降序排序' : '取消排序'">
        <BsiCaretDownFill
          class="bs-table-column-sort-handler"
          :class="{
            'is-on-sort': onSortedInfo.direction == 'descend'
          }"
          @click="setSort('descend')"></BsiCaretDownFill>
      </BsTooltip>
    </div>
    <!--筛选器-->
    <BsTableCustomContent
      v-if="!!column.filterSlotName"
      :row-index="rowIndex"
      :cell-index="cellIndex"
      :table-slots="tableSlots"
      :is-head-cell="true"
      :column="column"
      :slot-name="column.filterSlotName">
    </BsTableCustomContent>

    <div
      v-if="column.resizeable"
      class="bs-table-resize-handle"
      :class="{
          'bs-table-resize-handle-active': resizeBarActive
        }"
      @mousedown="handleResizeBarMousedown"></div>
  </div>
</template>

<script lang="ts">
import {
  ref, defineComponent, AppContext, onUpdated, onMounted, inject, SetupContext, computed, onBeforeUnmount
} from 'vue';
import { BsTableCustomContent } from './BsTableCustomContent';
import { bsTableCellProps } from './bs-table-cell-props';
import { useGlobalEvent } from '../../../hooks/useGlobalEvent';
import {
  BsColgroupItem,
  bsExpandColumnKey,
  bsSelectionColumnKey,
  bsTableCtxKey,
  BsTableSortDirection,
  bsTableSortDirections
} from '../bs-table-types';
import BsTooltip from '../../bs-tooltip/BsTooltip.vue';
import { BsiCaretDownFill } from 'vue3-bootstrap-icon/es/icons/BsiCaretDownFill';
import { BsiCaretUpFill } from 'vue3-bootstrap-icon/es/icons/BsiCaretUpFill';

export default defineComponent({
  name: 'BsTableHeadCellContent',
  components: {
    BsTableCustomContent,
    BsTooltip,
    BsiCaretUpFill,
    BsiCaretDownFill
  },
  props: {
    ...bsTableCellProps,
    defaultSlot: {
      type: Function
    }
  },
  setup (props: any, ctx: SetupContext) {
    // 表格根节点上下文
    let tableRootCtx = inject(bsTableCtxKey)!;

    // 处理拖拽列宽
    let resizeBarActive = ref(false);
    let handleResizeBarMousedown = function (evt: MouseEvent) {
      evt.preventDefault();
      resizeBarActive.value = true;
      let target = evt.target as HTMLElement;
      let clientX = evt.clientX;
      // let column = props.column;

      let newWidth = 0;
      let minWidth = 20;
      let cellIndex = props.cellIndex;
      let oldColgroup = props.colgroup!.map((item: BsColgroupItem) => {
        return { ...item };
      });
      let oldWidth = oldColgroup[cellIndex].width;
      let lastMouseMoveClientX: number|null = null;
      let direction = ''; // 拖拽方向
      let colgroupOldWidths = oldColgroup.map((col: BsColgroupItem, index: number) => {
        return col.width;
      });
      let mouseMoveEvt = function (moveEvt: MouseEvent) {
        let newClientX = moveEvt.clientX;
        let distance = newClientX - clientX;

        if (lastMouseMoveClientX === null) {
          direction = newClientX < clientX ? 'left' : 'right';
        } else {
          if (newClientX < lastMouseMoveClientX) {
            direction = 'left';
          } else if (newClientX > lastMouseMoveClientX) {
            direction = 'right';
          }
        }
        lastMouseMoveClientX = newClientX;

        let width = oldWidth + distance;
        if (width < minWidth) {
          width = minWidth;
          distance += minWidth - width;
        }
        newWidth = width;
        tableRootCtx.setColWidth(cellIndex, newWidth);

        // console.log('direction:', direction, distance);
        let isLastCell = cellIndex == oldColgroup.length - 1;
        let newColgroup = props.colgroup!;
        let newColGroupWidth = newColgroup.reduce(function (result: number, item: BsColgroupItem) {
          result += item.width;
          return result;
        }, 0);
        // 当前列后面的列宽
        let rearColWidths = !isLastCell ? colgroupOldWidths.slice(cellIndex + 1) : [];
        // console.log('鼠标移动的距离：', cellIndex, distance, width, oldWidth, props.tableWidth, newColGroupWidth, direction);
        if (distance < 0) {
          if (!isLastCell) {
            let avgDistance = Number((Math.abs(distance) / rearColWidths.length).toFixed(2));
            // console.log('rearColWidths', rearColWidths, avgDistance);
            // 如果列宽改变后总列宽小于表格宽度，那么需要将distance平均分配给当前列后面的所有列的宽度
            if (newColGroupWidth < props.tableWidth) {
              // 当前列宽度减少，后面的列宽度就需要增加
              colgroupOldWidths.forEach((colWidth: number, index: number) => {
                if (index <= cellIndex) {
                  return;
                }
                tableRootCtx.setColWidth(index, colWidth + avgDistance);
              });
            } else {
              if (direction == 'right') {
                let avgDistance = distance / rearColWidths.length;
                // console.log('rearColWidths222', rearColWidths, avgDistance);

                // 如果列宽改变后总列宽大于表格宽度，并且当前列后面的列宽大于之前的宽度，那么当前列后面的所有列的宽度需要减去distance的平均值
                colgroupOldWidths.forEach((colWidth: number, index: number) => {
                  if (index <= cellIndex) {
                    return;
                  }
                  let newColWidth = colWidth - avgDistance;
                  let oldColWidth = colgroupOldWidths[index];
                  if (distance >= 0) { // 恢复原来的宽度
                    newColWidth = oldColWidth;
                  }
                  tableRootCtx.setColWidth(index, newColWidth);
                });
              }
            }
          } else {
            let rearColWidths2: number[] = [];
            let lastCellIndex = oldColgroup.length - 1;
            newColgroup.forEach(function (item: BsColgroupItem, index: number) {
              let { name, width } = item;
              // 把展开列、选择列排除掉
              if (name != bsExpandColumnKey && name != bsSelectionColumnKey && index != lastCellIndex) {
                rearColWidths2.push(width);
              }
            });
            let avgDistance2 = Number((Math.abs(distance) / rearColWidths2.length).toFixed(2));
            console.log('avgDistance2', avgDistance2, rearColWidths2.length);
            // 最后一列宽度增加，前面的列宽度就需要减少
            oldColgroup.forEach(function (item: BsColgroupItem, index: number) {
              let { name, width } = item;
              if (name != bsExpandColumnKey && name != bsSelectionColumnKey && index != lastCellIndex) {
                tableRootCtx.setColWidth(index, width + avgDistance2);
              }
            });
          }
        }
      };
      let removeMouseMoveEvtFn = function () {
        console.log('removeMouseMoveEvtFn执行了');
        resizeBarActive.value = false;
        useGlobalEvent.removeEvent('document', 'mousemove', mouseMoveEvt);
        useGlobalEvent.removeEvent('document', 'mouseup', removeMouseMoveEvtFn);
        target.removeEventListener('mouseup', removeMouseMoveEvtFn, false);
      };
      useGlobalEvent.addEvent('document', 'mousemove', mouseMoveEvt);
      useGlobalEvent.addEvent('document', 'mouseup', removeMouseMoveEvtFn);
      target.addEventListener('mouseup', removeMouseMoveEvtFn, false);
    };

    // 允许的排序方向
    let sortDirections = computed(function () {
      let sortDirectionsFromProp = props.column?.sortDirections;
      if (Array.isArray(props.column?.sortDirections)) {
        return sortDirectionsFromProp;
      }
      return [...bsTableSortDirections];
    });

    // 正在排序的信息
    let onSortedInfo = computed(function () {
      let sortInfoRoot = tableRootCtx.sortInfo;
      // console.log('sortInfoRoot', sortInfoRoot);
      let columnId = props.column.prop;
      let result = {
        hasOnSort: false,
        direction: '' as BsTableSortDirection
      };
      if (sortInfoRoot.columnId == columnId) {
        result.hasOnSort = true;
        result.direction = sortInfoRoot.direction;
      }
      return result;
    });

    // 设置排序
    let setSort = function (direction: BsTableSortDirection) {
      let onSortedInfoRaw = onSortedInfo.value;
      let columnId = props.column.prop;
      // let cellIndex = props.cellIndex;
      if (onSortedInfoRaw.direction == direction) {
        tableRootCtx.cancelSort(columnId, direction);
      } else {
        tableRootCtx.doSort(columnId, direction);
      }
    };

    onBeforeUnmount(function () {
      let {
        hasOnSort,
        direction
      } = onSortedInfo.value;
      if (hasOnSort) {
        tableRootCtx.cancelSort(props.column.prop, direction);
      }
    });

    return {
      resizeBarActive,
      sortDirections,
      onSortedInfo,
      handleResizeBarMousedown,
      setSort
    };
  }
});
</script>
