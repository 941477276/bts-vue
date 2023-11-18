<template>
  <tr
    class="bs-table-row"
    :class="[
      rowClasses,
      {
        'bs-table-row-expanded': rowIsExpanded,
        'bs-table-row-selected': isChecked,
        'bs-table-row-hover': tableHover,
        'bs-table-row-striped': stripe
      },
      treeLevel > 1 ? `bs-table-row-level-${treeLevel}` : ''
    ]">
    <!--展开行操作列-->
    <BsTableCell
      v-if="!!expandColumn"
      :row-data="rowData"
      :row-index="rowIndex"
      :table-slots="tableSlots"
      :column="expandColumn"
      :cell-index="!!selectionColumn ? -2 : -1"
      :key="`cell_${rowIndex}_${expandColumn.prop}`">
      <button
        class="bs-table-row-expand-icon"
        :class="{
          'bs-table-row-expand-icon-expanded': rowIsExpanded
        }"
        tabindex="-1"
        @click="toggleRowExpand">
        <template v-if="!rowExpandLoading">
          <BsiChevronRight v-if="!(tableSlots.expandCellIcon || tableSlots['expand-cell-icon'])"></BsiChevronRight>
          <BsTableCustomContent
            v-else
            :row-index="rowIndex"
            :cell-index="0"
            :row-data="rowData"
            label=""
            :table-slots="tableSlots"
            :parent-slots="$slots"
            slot-name="expandCellIcon">
          </BsTableCustomContent>
        </template>
        <bs-spinner v-else color-type="primary"></bs-spinner>
      </button>
    </BsTableCell>

    <!--选择列-->
    <BsTableCell
      v-if="!!selectionColumn"
      :row-data="rowData"
      :row-index="rowIndex"
      :table-slots="tableSlots"
      :column="selectionColumn"
      :cell-index="-1"
      :key="`cell_${rowIndex}_${selectionColumn.prop}`">
      <BsCheckbox
        v-if="selectionConfig?.type == 'checkbox'"
        v-model="inputModel"
        :delive-context-to-form-item="false"
        :indeterminate="isIndeterminate"
        :name="selectionConfig?.checkboxName"
        :disabled="getRowDisabled()"
        :value="rowId"></BsCheckbox>
      <BsRadio
        v-if="selectionConfig?.type == 'radio'"
        v-model="inputModel"
        :delive-context-to-form-item="false"
        :name="selectionConfig?.radioName"
        :disabled="getRowDisabled()"
        :value="rowId"></BsRadio>
    </BsTableCell>

    <!--普通列-->
    <template v-for="(column, columnIndex) in realColumns">
      <BsTableCell
        v-if="getCellShouldRender(columnIndex)"
        :row-data="rowData"
        :row-index="rowIndex"
        :row-id="rowId"
        :table-slots="tableSlots"
        :column="column"
        :cell-index="columnIndex"
        :key="`cell_${rowIndex}_${column.prop || columnIndex}`"
        :cell-attrs="column.cellAttrs"
        :is-tree-data="isTreeData"
        :has-children="hasChildren"
        :tree-row-expand="treeRowExpand"
        :tree-level="treeLevel"
        :lazy="lazy"
        :is-leaf-key="isLeafKey"
        :children-key="childrenKey"
        :selection-config="selectionConfig"></BsTableCell>
    </template>
  </tr>
  <!--展开行-->
  <tr class="bs-table-expand-row" v-if="rowIsExpanded">
    <td
      :colspan="columns.length"
      :style="hasFixedLeftColumn ? 'position: sticky;left: 0;overflow: hidden' : ''">
      <BsTableCustomContent
        :row-index="rowIndex"
        :cell-index="0"
        :row-data="rowData"
        label=""
        :table-slots="tableSlots"
        slot-name="expandRow">
      </BsTableCustomContent>
    </td>
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
import { BsTableCustomContent } from './BsTableCustomContent';
import BsSpinner from '../../bs-spinner/BsSpinner.vue';
import {
  BsTableColumn,
  bsTableCtxKey,
  bsSelectionColumnKey,
  BsTableContext,
  BsTableRowSpanCellInfo,
  BsTableColumnInner,
  bsExpandColumnKey
} from '../bs-table-types';
import { bsTableCellCommonProps } from './bs-table-cell-common-props';
import { isFunction, isPromise } from '@vue/shared';
import { isNumber, isObject } from '../../../utils/bs-util';
import { BsiChevronRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronRight';
import BsCheckbox from '../../bs-checkbox/BsCheckbox.vue';
import BsRadio from '../../bs-radio/BsRadio.vue';

interface ColSpanCellInfo {
  colSpan: number; // 合并列数
  cellIndex: number; // 需要合并的列的索引
}

export default defineComponent({
  name: 'BsTableRow',
  components: {
    BsTableCell,
    BsiChevronRight,
    BsTableCustomContent,
    BsSpinner,
    BsCheckbox,
    BsRadio
  },
  props: {
    ...bsTableCellCommonProps,
    rowClassName: { // 自定义数据行class
      type: [String, Array, Object, Function]
    },
    tableAttrs: { // table的属性及事件
      type: Object,
      default () {
        return {};
      }
    },
    columns: { // 当前列配置
      type: Object as PropType<BsTableColumn[]>,
      default () {
        return {};
      }
    },
    tableId: { // 表格ID
      type: String
    },
    checkedKeys: { // 选中行的key
      type: Set,
      default () {
        return new Set();
      }
    },
    halfCheckedKeys: { // 半选中行的key
      type: Set,
      default () {
        return new Set();
      }
    },
    tableHover: { // 鼠标移动到行上时是否改变行的背景色
      type: Boolean
    },
    stripe: { // 是否为带斑马纹表格
      type: Boolean
    }
  },
  emits: ['expand-change'],
  setup (props: any, ctx: SetupContext) {
    let rootTableCtx = inject<BsTableContext>(bsTableCtxKey, {} as BsTableContext);

    // 有合并行的列
    // let rowSpanCells = toRef(rootTableCtx, 'rowSpanCells');

    // 展开列
    let expandColumn = ref<BsTableColumnInner|undefined>();
    // 选择列
    let selectionColumn = ref<BsTableColumnInner|undefined>();
    // 是否有左侧固定列
    let hasFixedLeftColumn = ref(false);
    // 真实的列信息
    let realColumns: Ref<(BsTableColumnInner & Record<string, any>)[]> = ref([]);
    // 需要合并的列的信息
    let colSpanCells: ColSpanCellInfo[] = [];
    watch([() => props.columns, rootTableCtx.rowSpanCells], function ([columns]) {
      // let skipEndColumnIndex = -1; // 待跳过的单元格结束索引
      let { rowData, rowIndex } = props;
      let realColumnsInner: (BsTableColumnInner & Record<string, any>)[] = [];
      // let colSpanCellsInner: ColSpanCellInfo[] = [];
      let hasExpandRow = false;
      let hasSelectionRow = false;
      let hasLeftFixed = false;
      columns.forEach((column: BsTableColumnInner, index: number) => {
        let {
          customCellAttrs,
          prop
        } = column;
        if (prop === bsExpandColumnKey) { // 展开列不进行合并
          expandColumn.value = column;
          hasExpandRow = true;
          return;
        }
        if (prop === bsSelectionColumnKey) { // 选择列不进行合并
          selectionColumn.value = column;
          hasSelectionRow = true;
          return;
        }
        if ((column.fixedLeftColumnCount || 0) > 0) {
          hasLeftFixed = true;
        }
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
        cellAttrs = { ...cellAttrs };
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
      if (!hasExpandRow) {
        expandColumn.value = undefined;
      }
      if (!hasSelectionRow) {
        selectionColumn.value = undefined;
      }
      hasFixedLeftColumn.value = hasLeftFixed;
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

    // 是否有子节点
    let hasChildren = computed(function () {
      let childrenKey = props.childrenKey;
      let rowData = props.rowData;
      return Array.isArray(rowData[childrenKey]) && rowData[childrenKey].length > 0;
    });
    // 是否选中
    let isChecked = computed(function () {
      return props.checkedKeys.has(props.rowId);
    });
    // 是否为半选中状态
    let isIndeterminate = computed(function () {
      return props.halfCheckedKeys.has(props.rowId);
    });
    // 是否禁用
    // let isDisabled = ref(false);
    // 是否为叶子节点
    let isLeaf = computed(function () {
      return !!props.rowData[props.isLeafKey];
    });
    // 单选框是否只能选择叶子节点
    let isRadioDisabled = computed(function () {
      return props.selectionConfig.checkStrictly && !isLeaf.value;
    });

    // 复选框的值
    let inputModel = computed({
      get () {
        // 判断复选框是否选中
        if (props.selectionConfig?.type == 'checkbox') {
          return isChecked.value;
        }
        return isChecked.value ? props.rowId : '';
      },
      set (newVal) {
        let { rowData, childrenKey } = props;
        let children = rowData[childrenKey] || [];
        if (props.selectionConfig?.type == 'radio') {
          rootTableCtx.addCheckedKey(props.rowId, rowData, children.length > 0);
          return;
        }
        if (newVal) {
          /* if (props.showCheckbox) {
            treeCtx.addCheckedKey(nodeValue.value, props.nodeData, nodeChildren.value.length > 0);
            return;
          } */
          rootTableCtx.addCheckedKey(props.rowId, rowData, children.length > 0);
        } else {
          // radio组件的值改变时不会进入这里，因此不用担心
          rootTableCtx.removeCheckedKey(props.rowId, rowData, children.length > 0);
        }
      }
    });

    // 行是否展开列
    let rowIsExpanded = ref(false);
    // 行是否正在展开中
    let rowExpandLoading = ref(false);
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
      expandColumn,
      rowExpandLoading,
      rowIsExpanded,
      hasFixedLeftColumn,
      hasChildren,
      selectionColumn,
      isIndeterminate,
      inputModel,
      isChecked,
      toggleRowExpand () {
        let onExpandChangeEventFunc = props.tableAttrs.onExpandChange;
        let data = {
          rowIndex: props.rowIndex,
          row: props.rowData,
          isExpand: false
        };
        let rowIsExpandedRaw = rowIsExpanded.value;
        // 异步展开
        if (isFunction(onExpandChangeEventFunc) && !rowIsExpandedRaw) {
          // let isExpand = !rowIsExpanded.value;
          rowExpandLoading.value = true;
          let doExpand = function (isLoadFailed?: boolean) {
            if (isLoadFailed !== true) {
              data.isExpand = true;
              rowIsExpanded.value = true;
            }
            rowExpandLoading.value = false;
          };
          let result = onExpandChangeEventFunc(data, doExpand);
          if (isPromise(result)) {
            result.then(doExpand).finally(function () {
              rowExpandLoading.value = false;
            });
          }
          return;
        }
        rowIsExpanded.value = !rowIsExpandedRaw;
        data.isExpand = rowIsExpanded.value;
        ctx.emit('expand-change', data);
      },
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
            if (colSpan! > 0 && inRowSpanInner) { // 当前列与行合并的列不是相同的列，但在列合并范围内
              let inColSpan = cellIndex >= rowSpanCellIndex && (cellIndex <= (rowSpanCellIndex + colSpan! - 1));
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
      },
      // 判断行是否允许选择
      getRowDisabled () {
        let rowDisabled = props.selectionConfig?.rowDisabled;
        let disabled = false;
        if (props.selectionConfig?.type == 'radio') {
          disabled = isRadioDisabled.value;
          rootTableCtx.setRowSelectionDisabled(props.rowId, disabled);
          return disabled;
        }
        if (isFunction(rowDisabled)) {
          disabled = !!rowDisabled(props.rowData, props.rowIndex);
        }
        // isDisabled.value = disabled;
        rootTableCtx.setRowSelectionDisabled(props.rowId, disabled);
        return disabled;
      }
    };
  }
});
</script>
