import { Ref, watch, WatchStopHandle } from 'vue';
import {
  findNodeByUid,
  findChildrenNodesByUid,
  findParentsByNodeLevelPath2
} from '../../utils/bs-tree-utils';
import { BsTableRowData } from './bs-table-types';

export function useTableExpandRow (props: any, flattenTreeDatas: Ref<BsTableRowData[]>, treeId: string) {
  // 展开行的id
  let expandedTreeRowIds: Set<string> = new Set();
  /**
   * 展开树状行
   * @param rowData 行数据
   * @param rowId 行id
   * @param expandChildRow 是否展开子节点
   * @param forceExpand 是否强制展开行
   * @param callback 回调函数
   */
  let expandTreeRow = function (rowData: any, rowId: string, expandChildRow = true, forceExpand = false, callback?: (flag: boolean) => void) {
    let flattenTableRowsRaw = flattenTreeDatas.value;
    let row = findNodeByUid(treeId, rowId, flattenTableRowsRaw);
    if (!row) {
      return;
    }

    let childrenKey = props.childrenKey;
    let children = row.node[childrenKey] || [];
    // console.log('childrenKey', rowId, row);
    if (children.length == 0) {
      return;
    }
    let childrenRows = findChildrenNodesByUid<BsTableRowData>(treeId, rowId, flattenTableRowsRaw);
    // console.log('childrenRows', childrenRows);
    if (!row.treeDataRowExpand || forceExpand) { // 展开
      // console.log('展开行：', rowId, rowData, childrenRows);
      row.treeDataRowExpand = true;
      row.visible = true;
      expandedTreeRowIds.add(row.uid);
      // console.log('显示子节点：', row, childrenRows);
      // 显示子节点
      childrenRows.forEach((childRow) => {
        childRow.visible = true;
      });
      // console.log('expandChildRow', expandChildRow);
      childrenRows.forEach(childRowItem => {
        let childRowId = childRowItem.uid;
        if (expandedTreeRowIds.has(childRowId)) { // 如果子节点之前是展开状态，那么此时应该再次展开它
          childRowItem.treeDataRowExpand = false;
          expandTreeRow(childRowItem.node, childRowId, expandChildRow, forceExpand, callback);
        } else if (expandChildRow) {
          expandTreeRow(childRowItem.node, childRowId, expandChildRow, forceExpand, callback);
        }
      });
    } else { // 收起
      row.treeDataRowExpand = false;
      expandedTreeRowIds.delete(row.uid);
      // console.log('收起行：', rowId, rowData);
      // 折叠子节点
      let foldChildren = function (rows: BsTableRowData[]) {
        rows.forEach(childRowItem => {
          childRowItem.visible = false;
          let children = findChildrenNodesByUid<BsTableRowData>(treeId, childRowItem.uid, flattenTableRowsRaw);
          if (children.length > 0) {
            foldChildren(children);
          }
        });
      };
      foldChildren(childrenRows);
    }
  };

  // 展开全部
  let expandAll = function () {
    flattenTreeDatas.value.forEach(rowItem => {
      rowItem.visible = true;
      rowItem.treeDataRowExpand = true;
      expandedTreeRowIds.add(rowItem.uid);
    });
  };

  // 收起全部
  let expandNone = function () {
    flattenTreeDatas.value.forEach(rowItem => {
      rowItem.treeDataRowExpand = false;
      if (rowItem.nodeLevel != 1) {
        rowItem.visible = false;
        expandedTreeRowIds.delete(rowItem.uid);
      }
    });
  };

  // 展开默认需要展开的行
  let expandDefaultExpandedRows = function () {
    let defaultExpandedRowKeys: string[] = props.defaultExpandedRowKeys || [];
    if (defaultExpandedRowKeys.length > 0 && !props.lazy && !props.defaultExpandAllRows && stopWatchDefaultExpandedRows) {
      let timer2 = setTimeout(function () {
        clearTimeout(timer2);
        stopWatchDefaultExpandedRows?.(); // defaultExpandedRowKeys只执行一次
        stopWatchDefaultExpandedRows = null;
        let flattenTableRowsRaw = flattenTreeDatas.value;
        defaultExpandedRowKeys.forEach(rowKey => {
          let row = findNodeByUid(treeId, rowKey, flattenTableRowsRaw);
          if (!row) {
            return;
          }
          let rowParents = findParentsByNodeLevelPath2<BsTableRowData>(row.nodeLevelPath, flattenTableRowsRaw);
          // 先展开所有父级
          rowParents.forEach(parentItem => {
            if (parentItem.treeDataRowExpand) {
              return;
            }
            expandTreeRow(parentItem.node, parentItem.uid, false, true);
          });
          // 再展开自己
          if (!row.treeDataRowExpand) {
            expandTreeRow(row.node, rowKey, false, true);
          }
        });
      }, 0);
    }
  };
  let stopWatchDefaultExpandedRows: WatchStopHandle|null = watch(() => [...props.defaultExpandedRowKeys], function () {
    expandDefaultExpandedRows();
  });

  return {
    expandedTreeRowIds,

    expandDefaultExpandedRows,
    expandTreeRow,
    expandAll,
    expandNone
  };
};
