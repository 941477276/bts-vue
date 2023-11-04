<template>
<div
  ref="tableContainerRef"
  class="bs-table"
  :class="{
    'table-bordered': border,
    'table-borderless': borderless,
    'bs-table-sm': size == 'sm',
    'bs-table-has-fixed-header': hasFixedHeader,
    'bs-table-has-fixed-column': columnsInfo.hasFixedColumn,
    'bs-table-has-fixed-left-column': columnsInfo.hasFixedLeft,
    'bs-table-has-fixed-right-column': columnsInfo.hasFixedRight,
    'bs-table-ping-left': tableBodyScrollInfo.scrollLeft > 0,
    'bs-table-ping-right': tableBodyScrollInfo.showRightPing && !tableBodyScrollInfo.isInScrollEnd
  }">
  <div
    class="bs-table-wrapper"
    :style="{
      height: tableHeight,
      maxHeight: tableMaxHeight
    }">
    <BsTableFixedHeader
      v-if="hasFixedHeader"
      ref="tableFixedHeaderRef"
      :width="tableWidth"
      :columns="columnsInfo.columns"
      :colgroup="colgroup"
      :table-slots="$slots"
      :table-body-has-scroll="tableBodyScrollInfo.hasScroll"
      :table-body-scroll-width="tableBodyScrollInfo.scrollWidth"
      :selection-config="selectionConfig"
      :table-width="tableWidth || tableWrapWidth"
      :table-rows-count="flattenTableRows2.length"
      :checked-rows-count="checkedRowsCurrent.size"></BsTableFixedHeader>
    <div
      ref="tableBodyRef"
      class="bs-table-body"
      @scroll="handleTableBodyScroll">
      <table
        ref="tableRef"
        class="table"
        :class="{
          'table-sm': size == 'sm'
        }"
        :style="{
          width: tableWidth > 0 ? (tableWidth + 'px') : ''
        }">
        <colgroup v-if="colgroup.length > 0">
          <col
            v-for="(item, index) in colgroup"
            :key="index"
            :style="{
              width: item.width + 'px'
            }" />
        </colgroup>
        <BsTableHead
          v-if="!hasFixedHeader"
          :columns="columnsInfo.columns"
          :table-slots="$slots"
          :table-body-has-scroll="tableBodyScrollInfo.hasScroll"
          :table-body-scroll-width="tableBodyScrollInfo.scrollWidth"
          :selection-config="selectionConfig"
          :colgroup="colgroup"
          :table-width="tableWidth || tableWrapWidth"
          :table-rows-count="flattenTableRows2.length"
          :checked-rows-count="checkedRowsCurrent.size"></BsTableHead>
        <tbody class="bs-table-tbody">
          <template v-for="(row, rowIndex) in flattenTableRows2">
            <BsTableRow
              v-if="row.visible"
              :key="row.uid"
              :row-data="row.node"
              :row-index="rowIndex"
              :row-id="row.uid"
              :table-slots="$slots"
              :table-attrs="$attrs"
              :columns="columnsInfo.columns"
              :row-class-name="rowClassName"
              :children-key="childrenKey"
              :is-tree-data="isTreeData"
              :tree-level="row.nodeLevel"
              :tree-row-expand="row.treeDataRowExpand"
              :lazy="lazy"
              :is-leaf-key="isLeafKey"
              :selection-config="selectionConfig"
              :table-id="tableId"
              :checked-keys="checkedKeysRoot"
              :half-checked-keys="halfCheckedKeys"
              :table-hover="tableHover"
              :stripe="stripe"
              @expand-change="handleExpandChange">
            </BsTableRow>
          </template>
          <tr v-if="flattenTableRows2.length == 0" class="bs-table-empty-row">
            <td class="bs-table-cell" :colspan="colgroup.length">
              <slot name="empty">
                <div class="bs-table-empty-content">
                  <div class="bs-table-empty-icon-box">
                    <svg viewBox="0 0 1567 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M156.662278 699.758173h21.097186A10.444152 10.444152 0 0 1 187.994733 710.202325c0 5.765172-4.490985 10.444152-10.235269 10.444152H156.662278v21.097186A10.444152 10.444152 0 0 1 146.218126 751.978932a10.277045 10.277045 0 0 1-10.444152-10.235269V720.646477H114.676787A10.444152 10.444152 0 0 1 104.441518 710.202325c0-5.765172 4.490985-10.444152 10.235269-10.444152H135.773974v-21.097187A10.444152 10.444152 0 0 1 146.218126 668.425717c5.765172 0 10.444152 4.490985 10.444152 10.235269v21.097187z m1378.628042-83.553215v-21.097186A10.277045 10.277045 0 0 0 1524.846168 584.872503a10.444152 10.444152 0 0 0-10.444152 10.235269v21.097186h-21.097186a10.277045 10.277045 0 0 0-10.235269 10.444152c0 5.598065 4.595427 10.444152 10.235269 10.444152h21.097186v21.097187c0 5.744284 4.67898 10.235269 10.444152 10.235268a10.444152 10.444152 0 0 0 10.444152-10.235268V637.093262h21.097187c5.744284 0 10.235269-4.67898 10.235268-10.444152a10.444152 10.444152 0 0 0-10.235268-10.444152H1535.29032zM776.460024 960.861969H250.596979A20.80475 20.80475 0 0 1 229.77134 939.973665c0-11.530344 9.462402-20.888304 20.825639-20.888303h94.728457A83.010119 83.010119 0 0 1 334.212859 877.413196v-605.96969A83.49055 83.49055 0 0 1 417.849627 187.994733H480.430984V167.001988A83.49055 83.49055 0 0 1 564.067752 83.553215h501.152182A83.448773 83.448773 0 0 1 1148.856702 167.001988v605.969689c0 15.185797-4.052331 29.410732-11.133466 41.672166h115.554096c11.551232 0 20.909192 9.274407 20.909192 20.888304 0 11.530344-9.295295 20.888304-20.888304 20.888304H1002.638576v20.992745c0 15.185797-4.052331 29.410732-11.133466 41.672166h11.196131c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304h-109.893365c9.545955 16.000441 7.478013 36.972297-6.41271 50.863019a41.672166 41.672166 0 0 1-59.072122 0L776.460024 960.861969z m76.367638-41.776607h66.424806c22.977134 0 41.609501-18.59059 41.609501-41.881049V270.461756c0-22.559368-18.047494-40.690416-40.314426-40.690416H416.303892c-22.266932 0-40.314426 18.214601-40.314426 40.690416v606.742557c0 23.123352 18.799473 41.881049 41.588613 41.881049h317.084449l-10.736588-10.757477a41.693054 41.693054 0 0 1-10.861918-40.377091l-19.718558-19.739447A146.259902 146.259902 0 0 1 502.363703 627.693525a146.218126 146.218126 0 0 1 220.517822 190.981761l19.739447 19.739447a41.630389 41.630389 0 0 1 40.377091 10.841029L852.827662 919.085362zM1002.638576 814.643843h62.852906A41.797496 41.797496 0 0 0 1107.080095 772.867236V167.106429c0-23.14424-18.632367-41.776607-41.588613-41.776607H563.775316A41.797496 41.797496 0 0 0 522.207592 167.106429v20.888304h396.794216A83.448773 83.448773 0 0 1 1002.638576 271.443506V814.643843zM266.325872 46.998683h31.123572c8.773088 0 15.875111 6.955805 15.875111 15.666228 0 8.647758-7.102023 15.666228-15.875111 15.666228h-31.123572v31.123572c0 8.773088-6.955805 15.875111-15.666228 15.875111a15.770669 15.770669 0 0 1-15.666228-15.875111V78.331139H203.869844A15.728893 15.728893 0 0 1 187.994733 62.664911c0-8.647758 7.102023-15.666228 15.875111-15.666228h31.123572V15.875111c0-8.773088 6.955805-15.875111 15.666228-15.875111 8.647758 0 15.666228 7.102023 15.666228 15.875111v31.123572zM20.888304 939.973665c0-11.530344 9.462402-20.888304 20.825638-20.888303h125.455152c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304H41.713942A20.80475 20.80475 0 0 1 20.888304 939.973665z m658.733544-135.021995a104.441518 104.441518 0 1 0-147.722083-147.722083 104.441518 104.441518 0 0 0 147.722083 147.722083zM459.542681 313.324555a20.888304 20.888304 0 0 1 20.867415-20.888304H710.202325a20.888304 20.888304 0 1 1 0 41.776608H480.430984A20.825639 20.825639 0 0 1 459.542681 313.324555z m0 104.441518c0-11.530344 9.295295-20.888304 20.742085-20.888303h334.505295c11.44679 0 20.742086 9.274407 20.742086 20.888303 0 11.530344-9.295295 20.888304-20.742086 20.888304H480.284766A20.762974 20.762974 0 0 1 459.542681 417.766073z m0 104.441519c0-11.530344 9.316183-20.888304 20.846527-20.888304h146.301679c11.509455 0 20.846527 9.274407 20.846527 20.888304 0 11.530344-9.316183 20.888304-20.846527 20.888303h-146.301679A20.80475 20.80475 0 0 1 459.542681 522.207592zM62.664911 396.87777a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911zM1357.739739 271.547948a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911z" fill="currentColor"></path></svg>
                  </div>
                  <div class="bs-table-empty-text">{{ emptyText || '暂无数据' }}</div>
                </div>
              </slot>
            </td>
          </tr>
        </tbody>
        <!--表尾-->
        <BsTableFoot
          v-if="showTableFoot && !tableHeight && !tableMaxHeight"
          :columns="columnsInfo.columns"
          :table-slots="$slots"
          :table-body-has-scroll="tableBodyScrollInfo.hasScroll"
          :table-body-scroll-width="tableBodyScrollInfo.scrollWidth"
          :table-data="flattenTableRows2"
          :colgroup="colgroup"
          :table-width="tableWidth || tableWrapWidth"
          :footer-method="footerMethod"
          :footer-rows="footerRows"></BsTableFoot>
      </table>
    </div>
    <!--固定定位的表尾-->
    <BsTableFixedFooter
      v-if="showTableFoot && (tableHeight || tableMaxHeight)"
      ref="tableFixedFooterRef"
      :columns="columnsInfo.columns"
      :table-slots="$slots"
      :table-body-has-scroll="tableBodyScrollInfo.hasScroll"
      :table-body-scroll-width="tableBodyScrollInfo.scrollWidth"
      :table-data="flattenTableRows2"
      :colgroup="colgroup"
      :table-width="tableWidth || tableWrapWidth"
      :footer-method="footerMethod"
      :footer-rows="footerRows"></BsTableFixedFooter>
  </div>
</div>
</template>

<script lang="ts">
import {
  computed, defineComponent, nextTick, provide, reactive, ref, Ref, SetupContext, watch,
  ComponentPublicInstance, onBeforeUnmount, toRef, onUnmounted
} from 'vue';
import {
  bsTableProps, BsTableRowSpanCellInfo, bsTableCtxKey,
  BsTableRowData, BsTableSortDirection
} from './bs-table-types';
import BsTableFixedHeader from './wigets/BsTableFixedHeader.vue';
import BsTableHead from './wigets/BsTableHead.vue';
import BsTableFixedFooter from './wigets/BsTableFixedFooter.vue';
import BsTableFoot from './wigets/BsTableFoot.vue';
import BsTableRow from './wigets/BsTableRow.vue';
import { isFunction, NOOP } from '@vue/shared';
import { jsonSort, getPropValueByPath, isString } from '../../utils/bs-util';
import { sm3HashHex } from '../../utils/sm3Hmac';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';
import {
  treeDataToFlattarnArr2,
  findNodeByUid,
  clearCachedNodeInfo, findDescendantByBid
} from '../../utils/bs-tree-utils';
import { useTableInfo } from './useTableInfo';
import { useTableExpandRow } from './useTableExpandRow';
import { useBsTree } from '../../hooks/useBsTree';

let bsTableCount = 0;

// 获取行数据哈希值
const getRowDataHash = function (rowData: Record<string, any>): string {
  let newRowData = { ...rowData };
  for (let attr in newRowData) {
    let valType = typeof newRowData[attr];
    // 只保留基本数据类型
    if ((valType != 'string' && valType != 'number')) {
      delete newRowData[attr];
    }
  }
  let sortedJson = jsonSort(newRowData);
  return sm3HashHex(JSON.stringify(sortedJson));
};

export default defineComponent({
  name: 'BsTable',
  props: bsTableProps,
  components: {
    BsTableHead,
    BsTableRow,
    BsTableFixedHeader,
    BsTableFoot,
    BsTableFixedFooter
  },
  setup (props: any, ctx: SetupContext) {
    let tableId = `bs_table-${++bsTableCount}`;
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

    // 表格自身相关信息
    let {
      columnsInfo,
      tableBodyRef,
      tableRef,
      colgroup,
      tableWidth,
      tableWrapWidth,
      tableHeight,
      tableMaxHeight,
      hasFixedHeader,
      tableBodyScrollInfo,
      tableContainerRef,
      hasSelectionColumn,
      hasExpandColumn,
      showTableFoot,

      handleColumnsChange
    } = useTableInfo(props);

    // 获取行的uid
    let getRowUid = function (rowData: Record<string, any>) {
      let uid = '';
      let rowKey = props.rowKey;
      if (isFunction(rowKey)) {
        uid = rowKey(rowData);
      } else {
        uid = getPropValueByPath(rowData, rowKey).value || getRowDataHash(rowData);
      }
      return uid;
    };

    // 扁平的表格数据
    let flattenTableRows = ref<BsTableRowData[]>([]);
    // 真正用于展示的表格数据（防止数据更新后表格出现抖动问题）
    let flattenTableRows2 = ref<BsTableRowData[]>([]);

    // 树形结构及选择功能相关信息
    let {
      checkedKeysRoot, // 选中行的key
      checkedRowsCurrent, // 当前数据中选中的行
      halfCheckedKeys, // 半选中行的key
      checkedRows, // 所有选中的行
      // treeNodeProps,

      addCheckedKey,
      linkParentCheckbox,

      selectAll,
      selectNone,
      selectRow,
      unSelectRow,
      getSelectionInfo
    } = useBsTree(flattenTableRows2, tableId, {
      getChildrenKey () {
        return props.childrenKey;
      },
      getDisabledKey () {
        return '_bs_table_row_disabled';
      },
      getSelectionConfig () {
        return props.selectionConfig || {};
      }
    });

    // 树展开/收起功能
    let {
      expandedTreeRowIds,

      expandDefaultExpandedRows,
      expandTreeRow,
      expandAll,
      expandNone
    } = useTableExpandRow(props, flattenTableRows2, tableId);

    // 列排序信息
    let sortInfo = reactive({
      columnId: '',
      columnIndex: -1,
      direction: '' as BsTableSortDirection
    });
    /**
     * 排序函数
     * @param columnId 列id
     * @param sortDirection 排序方向
     */
    let doSort = function (columnId: string, sortDirection: BsTableSortDirection) {
      // console.log('doSort:', columnId, sortDirection);
      let columnIndex = columnsInfo.value.columns.findIndex(columnItem => columnItem.prop == columnId);
      if (columnIndex == -1) {
        console.warn(`column [${columnId}] is not found!`);
        return;
      }
      if (columnId == sortInfo.columnId) { // 如果该列之前已经排过序了，那么只需要将数组反过来即可
        flattenTableRows2.value.reverse();
      } else {
        let column = columnsInfo.value.columns[columnIndex];
        let {
          sorter,
          sortOrder
        } = column;
        flattenTableRows2.value.sort(function (row1, row2) {
          return sorter!(row1.node, row2.node);
        });
        // 默认认为sorter执行完成后为升序，当 sortOrder 为降序的时候，必须将数组反转过来
        if (sortOrder == 'ascend' && sortDirection == 'descend') {
          flattenTableRows2.value.reverse();
        }
      }
      sortInfo.columnId = columnId;
      sortInfo.columnIndex = columnIndex;
      sortInfo.direction = sortDirection;
    };
    /**
     * 取消排序
     * @param columnId 列id
     * @param sortDirection 排序方向
     */
    let cancelSort = function (columnId: string, sortDirection?: BsTableSortDirection) {
      if (columnId != sortInfo.columnId) {
        return;
      }
      let columnIndex = columnsInfo.value.columns.findIndex(columnItem => columnItem.prop == columnId);
      if (columnIndex == -1) {
        console.warn(`column [${columnId}] is not found!`);
        return;
      }
      initFlattenData(props.data);
      sortInfo.columnId = '';
      sortInfo.columnIndex = -1;
      sortInfo.direction = '';
    };
    let clearSort = function () {
      initFlattenData(props.data);
      sortInfo.columnId = '';
      sortInfo.columnIndex = -1;
      sortInfo.direction = '';
    };
    /**
     * 表格过滤
     * @param filterFn 过滤回调函数
     */
    let filter = function (filterFn: (rowData: Record<string, any>, index: number) => boolean) {
      let isTreeDataRaw = isTreeData.value;
      let childrenKey = props.childrenKey;
      let filteredData = flattenTableRows.value.filter(function (row, index) {
        let rowData = row.node;
        let flag = filterFn(rowData, index);
        let hasChildren = isTreeDataRaw && Array.isArray(rowData[childrenKey]) && rowData[childrenKey].length > 0;
        // 如果节点有子节点，那么该节点必须显示出来
        if (hasChildren) {
          return true;
        }
        return !!flag;
      }).map(function (row) {
        return {
          ...row
        };
      });

      if (isTreeDataRaw) {
        let newFilteredData = filteredData.filter(function (row, index) {
          let rowData = row.node;
          let hasChildren = isTreeDataRaw && Array.isArray(rowData[childrenKey]) && rowData[childrenKey].length > 0;
          if (!hasChildren) {
            return true;
          }
          // 判断过滤后的有子孙节点的节点的子孙是否有显示出来的
          let hasFilteredChildren = findDescendantByBid(tableId, row.uid, filteredData).length > 0;
          return hasFilteredChildren;
        });
        filteredData = newFilteredData;
      }
      flattenTableRows2.value = filteredData;
    };
    let clearFilter = function () {
      flattenTableRows2.value = flattenTableRows.value;
    };

    // 数据是否为树状
    let isTreeData = ref(false);

    // TODO 列合并、行合并功能是否应该提取到当前组件计算
    let isInited = false;
    let initFlattenData = function (data: Record<string, any>[]) {
      // console.log('table数据发生变化：', data);
      nextTick(function () {
        let childrenKey = props.childrenKey;
        let isTreeDataFlag = false;

        let newFlattenTableRowData: BsTableRowData[] = [];
        let defaultExpandAllRows = !!props.defaultExpandAllRows;

        // 默认需要展开的行
        let needExpandRows: BsTableRowData[] = [];
        // 扁平化树数据
        treeDataToFlattarnArr2(tableId, data, props.childrenKey, '', 1, '', newFlattenTableRowData, function (treeNodeInfo: any) {
          treeNodeInfo.treeDataRowExpand = false; // 树状数据时，当前行是否展开了
          let nodeData = treeNodeInfo.node;
          if (!isTreeDataFlag) {
            let children = nodeData[childrenKey];
            isTreeDataFlag = Array.isArray(children) && children.length > 0;
          }
          let uid = getRowUid(nodeData);
          treeNodeInfo.uid = uid;
          let visible = false;

          if (treeNodeInfo.nodeLevel == 1) { // 第一级的节点默认显示出来
            visible = true;
          }
          treeNodeInfo.visible = visible;

          // 展开之前已经展开过的行，或者默认全部展开
          if (expandedTreeRowIds.has(uid) || (defaultExpandAllRows && treeNodeInfo.nodeLevel == 1)) {
            needExpandRows.push(treeNodeInfo);
          }
        });
        // console.log('isTreeDataFlag', isTreeDataFlag, defaultExpandAllRows, newFlattenTableRowData);
        isTreeData.value = isTreeDataFlag;
        flattenTableRows.value = newFlattenTableRowData;

        let { reserveSelectedRowKeys, type } = props.selectionConfig || {};
        let selectedRowKeys = props.selectedRowKeys;
        // 判断当数据被删除时是否仍然保留选项的key
        if (!reserveSelectedRowKeys) {
          if (type == 'checkbox') {
            // 如果在 selectionConfig.onSelectChange 事件中同步了 props.selectedRowKeys ，那么它和selectionConfig.reserveSelectedRowKeys=true的效果一样
            checkedKeysRoot.value = new Set(selectedRowKeys || []);
          } else {
            checkedKeysRoot.value = new Set((selectedRowKeys || []).slice(0, 1));
          }
          halfCheckedKeys.value = new Set();
          checkedRows.value = new Map();
        } else {
          let checkedKeysRootRaw = checkedKeysRoot.value;
          // checkedKeysRootOld = checkedKeysRootRaw;

          let arr = [...(selectedRowKeys || []), ...Array.from(checkedKeysRootRaw)];
          if (type == 'checkbox') {
            checkedKeysRoot.value = new Set(arr);
          } else {
            checkedKeysRoot.value = new Set(arr.slice(0, 1));
          }
        }
        // 清空上一份数据中已选择的行
        checkedRowsCurrent.value = new Map();

        clearCachedNodeInfo(tableId);

        // 执行完展开行、选中行后再渲染，防止数据更新后（如新增行、删除行）表格出现宽高抖动问题
        flattenTableRows2.value = newFlattenTableRowData;

        // 展开需要展开的行
        if (needExpandRows.length > 0) {
          console.log('展开需要展开的行：', needExpandRows);
          needExpandRows.forEach(rowItem => {
            expandTreeRow(rowItem.node, rowItem.uid, defaultExpandAllRows, true);
          });
        }

        // 展开默认需要展开的行
        expandDefaultExpandedRows();
        linkParentCheckbox();
        isInited = true;
      });
    };
    watch(() => [...props.data], function (data) {
      initFlattenData(data);
      nextTick(function () {
        // 清除排序信息
        sortInfo.columnId = '';
        sortInfo.columnIndex = -1;
        sortInfo.direction = '';

        let {
          defaultSortOrder,
          defaultSortOrderIndex
        } = columnsInfo.value;
        // 执行默认排序
        if (defaultSortOrderIndex > -1) {
          let columnId = columnsInfo.value.columns[defaultSortOrderIndex].prop;
          doSort(columnId, defaultSortOrder);
        }
      });
    }, { immediate: true });

    let watchCheckedKeysTimer: number;
    watch(() => [...(props.selectedRowKeys || [])], function (checkedKeys) {
      clearTimeout(watchCheckedKeysTimer);
      console.log('watch checkedKeys 111');
      watchCheckedKeysTimer = setTimeout(function () {
        clearTimeout(watchCheckedKeysTimer);
        let checkedKeysRootArr = Array.from(checkedKeysRoot.value);
        let checkedKeysSorted = checkedKeys.slice(0).sort();
        let checkedKeysRootSorted = checkedKeysRootArr.sort();
        console.log('watch checkedKeys 222');
        // 当用户手动改变了复选框的值，那么 checkedKeys 会等于 checkedKeysRoot.value
        if (checkedKeysSorted.join(',') === checkedKeysRootSorted.join(',')) {
          return;
        }
        console.log('watch checkedKeys 333');
        if (props.selectionConfig?.type == 'radio') {
          // checkedKeysRoot.value = new Set([checkedKeys[0]]);
          checkedKeysRoot.value.clear();
          checkedRows.value.clear();
          halfCheckedKeys.value.clear();
          checkedRowsCurrent.value.clear();
          if (checkedKeys?.length >= 1) {
            addCheckedKey(checkedKeys[0]);
          }
        } else {
          let reserveSelectedRowKeys = props.selectionConfig.reserveSelectedRowKeys
          checkedKeysRoot.value = new Set([...checkedKeys, ...(reserveSelectedRowKeys ? props.Array.from(checkedKeysRoot.value) : [])]);
        }

        if (checkedKeys.length == 0) {
          halfCheckedKeys.value = new Set();
          checkedRows.value.clear();
          halfCheckedKeys.value.clear();
          checkedRowsCurrent.value.clear();
          return;
        }
        linkParentCheckbox();
      }, 0);
    }, { immediate: false });

    let tableFixedHeaderRef = ref<ComponentPublicInstance>();
    let tableFixedFooterRef = ref<ComponentPublicInstance>();
    // table 滚动事件
    let handleTableBodyScroll = function (evt: MouseEvent) {
      let target = evt.target as HTMLElement;
      let scrollLeft = target.scrollLeft;
      tableBodyScrollInfo.scrollLeft = scrollLeft;
      tableBodyScrollInfo.isInScrollEnd = (target.offsetWidth + scrollLeft) == target.scrollWidth;
      // console.log('(target.offsetWidth + scrollLeft) == target.scrollWidth', tableBodyScrollInfo.isInScrollEnd, target.offsetWidth, scrollLeft, target.scrollWidth)
      if (hasFixedHeader.value) {
        let tableFixedHeaderEl = tableFixedHeaderRef.value?.$el;
        if (tableFixedHeaderEl) {
          tableFixedHeaderEl.scrollLeft = scrollLeft;
        }
      }
      if (tableFixedFooterRef.value) {
        tableFixedFooterRef.value!.$el.scrollLeft = scrollLeft;
      }
    };

    // window resize事件
    let lastResizeTime = 0;
    let childrenResizeEvts: (() => void) [] = [];
    let onResize = function () {
      let now = new Date().getTime();
      if (lastResizeTime != 0 && now - lastResizeTime < 100) {
        return;
      }
      lastResizeTime = now;
      console.log('resize 事件执行了');
      handleColumnsChange(columnsInfo.value);
      [...childrenResizeEvts].forEach(evtFn => {
        try {
          evtFn();
        } catch (e) {
          console.error(e);
        }
      });
    };
    useGlobalEvent.addEvent('window', 'resize', onResize);
    onBeforeUnmount(function () {
      useGlobalEvent.removeEvent('window', 'resize', onResize);
    });

    let setColWidthTimer: number;
    provide(bsTableCtxKey, {
      tableWidth,
      rowSpanCells,
      addRowSpanCell,
      removeRowSpanCell,
      checkedKeysRoot,
      halfCheckedKeys,
      sortInfo,
      hasSelectionColumn,
      hasExpandColumn,
      doSort,
      cancelSort,
      // 展开树状结构行
      expandTreeRow (rowData: any, rowId: string, expandChildRow = true, callback?: (flag?: boolean) => void) {
        let childrenKey = props.childrenKey;
        let children = rowData[childrenKey] || [];
        if (props.lazy && children.length == 0) {
          let lazyLoadFn = isFunction(props.load) ? props.load : function () { callback!(true); };
          // 调懒加载数据函数加载数据
          lazyLoadFn(rowData, function (isFailed?: boolean) {
            nextTick(function () {
              callback!(isFailed);
              if (!isFailed) {
                let flattenTableRowsRaw = flattenTableRows2.value;
                let rowIndex = flattenTableRowsRaw.findIndex(rowItem => rowItem.uid == rowId);
                if (rowIndex < 0) {
                  return;
                }
                let row = flattenTableRowsRaw[rowIndex];

                let newChildren = rowData[childrenKey];
                let childrenRowData: BsTableRowData[] = [];
                // 扁平化树数据
                treeDataToFlattarnArr2(tableId, newChildren, props.childrenKey, '', row.nodeLevel + 1, row.nodeLevelPath, childrenRowData, function (treeNodeInfo: any) {
                  treeNodeInfo.treeDataRowExpand = false; // 树状数据时，当前行是否展开了
                  let nodeData = treeNodeInfo.node;
                  let uid = getRowUid(nodeData);
                  treeNodeInfo.uid = uid;
                  treeNodeInfo.visible = false;
                });
                childrenRowData.unshift(row);
                flattenTableRowsRaw.splice(rowIndex, 1, ...childrenRowData);

                nextTick(function () {
                  expandTreeRow(rowData, rowId, false);
                });
              }
            });
          });
        } else {
          expandTreeRow(rowData, rowId, false);
        }
      },
      addResizeEvent (callback: () => void) {
        if (!childrenResizeEvts.includes(callback)) {
          childrenResizeEvts.push(callback);
        }
      },
      removeResizeEvent (callback: () => void) {
        let index = childrenResizeEvts.findIndex(item => item === callback);
        if (index > -1) {
          childrenResizeEvts.splice(index, 1);
        }
      },
      // 设置列宽
      setColWidth (colIndex: number, width: number) {
        let colgroupRaw = colgroup.value;
        let col = colgroupRaw[colIndex];
        if (!col) {
          return;
        }
        col.width = Number(width.toFixed(2));
        clearTimeout(setColWidthTimer);
        setColWidthTimer = setTimeout(function () {
          clearTimeout(setColWidthTimer);
          handleColumnsChange(columnsInfo.value, false);
          // 设置完列宽后也需要执行resize事件
          [...childrenResizeEvts].forEach(evtFn => {
            try {
              evtFn();
            } catch (e) {
              console.error(e);
            }
          });
        }, 20);
      },
      // 设置行选择禁用
      setRowSelectionDisabled (rowId: string, disabled: boolean) {
        let row = findNodeByUid(tableId, rowId, flattenTableRows2.value);
        if (!row) {
          return;
        }
        row.isDisabled = disabled;
      },
      // 获取选中项信息
      getSelectionInfo,
      // 添加选中项
      addCheckedKey (nodeValue: string, nodeData: Record<string, any>, hasChildren: boolean) {
        /* if (props.selectionConfig?.type == 'radio') {
          checkedRows.value.clear();
          checkedRowsCurrent.value.clear();
          checkedKeysRoot.value.clear();
          addCheckedKey(nodeValue);

          let onSelectChange = props.selectionConfig?.onSelectChange;
          if (isFunction(onSelectChange)) {
            let selectionInfo = getSelectionInfo();
            onSelectChange({
              row: nodeData,
              isSelected: true,
              operateType: 'selectSingle',
              isHalfSelected: false,
              ...selectionInfo
            });
          }
          return;
        } */
        selectRow(nodeValue, nodeData);
      },
      // 移除选中项
      removeCheckedKey (nodeValue: string, nodeData: Record<string, any>, hasChildren: boolean) {
        if (props.selectionConfig?.type == 'radio') {
          // console.log('removeCheckedKey radio');
          return;
        }
        unSelectRow(nodeValue, nodeData);
      },
      selectAll,
      selectNone
    });

    onUnmounted(function () {
      clearCachedNodeInfo(tableId);
    });

    return {
      tableId,
      flattenTableRows2,
      tableContainerRef,
      tableFixedHeaderRef,
      tableFixedFooterRef,
      tableBodyRef,
      tableRef,
      colgroup,
      tableWidth,
      tableWrapWidth,
      tableHeight,
      tableMaxHeight,
      hasFixedHeader,
      columnsInfo,
      tableBodyScrollInfo,
      isTreeData,
      checkedKeysRoot,
      halfCheckedKeys,
      checkedRowsCurrent,
      showTableFoot,
      handleTableBodyScroll,
      handleExpandChange () { // 行展开事件
        handleColumnsChange(columnsInfo.value);
      },

      // 对外暴露的函数
      getSelectionInfo,
      selectAll,
      selectNone,
      selectRow,
      unSelectRow,
      expandAll,
      expandNone,
      doSort,
      cancelSort,
      clearSort,
      filter,
      clearFilter,
      // 更新节点（给外部使用的）
      updateRow (rowDataOrKey: Record<string, any>|string) {
        nextTick(function () {
          let uid = '';
          if (isString(rowDataOrKey)) {
            uid = rowDataOrKey as string;
          } else {
            let rowKey = props.rowKey;
            let rowData = rowDataOrKey as Record<string, any>;
            if (isFunction(rowKey)) {
              uid = rowKey(rowData);
            } else {
              uid = getPropValueByPath(rowData, rowKey).value || getRowDataHash(rowData);
            }
          }

          let flattenTableRowsRaw = flattenTableRows2.value;
          let rowIndex = flattenTableRowsRaw.findIndex(rowItem => rowItem.uid == uid);

          if (rowIndex < 0) {
            return;
          }
          let row = flattenTableRowsRaw[rowIndex];
          let childrenKey = props.childrenKey;
          let rowDataChildren = row.node[childrenKey];
          let checkedKeysRootRaw = checkedKeysRoot.value;
          let rowDataHasChildren = rowDataChildren && rowDataChildren.length > 0;
          let hasSelectionColumnRaw = hasSelectionColumn.value;

          let oldCheckedRows: BsTableRowData[] = [];

          let rowChildren = findDescendantByBid(tableId, uid, flattenTableRowsRaw);
          if (hasSelectionColumnRaw) {
            // 存储旧的已选中子孙节点的key
            rowChildren.forEach(rowItem => {
              let uid = rowItem.uid;
              if (checkedKeysRootRaw.has(uid)) {
                oldCheckedRows.push(rowItem);
              }
            });
            // 移除旧子孙节点的选中状态
            oldCheckedRows.forEach(function (rowItem) {
              unSelectRow(rowItem.uid, rowItem);
            });
          }

          // 移除旧的子孙节点
          rowChildren.forEach(rowItem => {
            let uid = rowItem.uid;
            let index = flattenTableRowsRaw.findIndex(flattenRowItem => flattenRowItem.uid === uid);
            if (index > -1) {
              flattenTableRowsRaw.splice(index, 1);
            }
          });

          // 再重新初始化行的所有子孙节点
          if (!rowDataHasChildren) {
            return;
          }
          let childrenTableRows: BsTableRowData[] = [];
          let isDefaultExpandAll = props.defaultExpandAllRows;

          treeDataToFlattarnArr2(tableId, rowDataChildren, childrenKey, '', row.nodeLevel + 1, row.nodeLevelPath, childrenTableRows, function (treeNodeInfo: BsTableRowData) {
            let nodeData = treeNodeInfo.node;
            let uid = getRowUid(nodeData);
            treeNodeInfo.uid = uid;
          });

          console.log('childrenTableRows', childrenTableRows);
          console.log('isDefaultExpandAll', isDefaultExpandAll);
          childrenTableRows.unshift(row);
          flattenTableRowsRaw.splice(rowIndex, 1, ...childrenTableRows);

          // 再次展开行
          nextTick(function () {
            if (hasSelectionColumnRaw) {
              childrenTableRows.forEach(function (rowItem) {
                let rowItemUid = rowItem.uid;
                if (rowItemUid == uid) { // 把自己排除掉
                  return;
                }
                // 再次将行选中
                if (oldCheckedRows.some(checkedRow => checkedRow.uid === rowItemUid) || checkedKeysRootRaw.has(rowItemUid)) {
                  selectRow(rowItemUid, rowItem.node, true);
                }
              });
            }
            if (isDefaultExpandAll) { // 全部展开
              expandTreeRow(row, uid, true, true);
            } else {
              childrenTableRows.forEach(function (rowItem) {
                let uid = rowItem.uid;
                if (expandedTreeRowIds.has(uid)) { // 展开之前展开过的
                  expandTreeRow(rowItem.node, uid, false, true);
                }
              });
            }
          });
        });
      }
    };
  }
});
</script>
