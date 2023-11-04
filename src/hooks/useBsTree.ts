import { computed, ref, Ref, watch, WatchStopHandle } from 'vue';
import {
  findNodeByUid,
  findParentsByUid,
  findChildrenWhichHasChildrenByUid,
  findChildrenNodesByUid
} from '../utils/bs-tree-utils';
import { BsNodeData, BsNodeInfo } from '../components/bs-tree/bs-tree-types';
import { isFunction, isString } from '../utils/bs-util';

interface UseBsTreeOptions {
  getChildrenKey: () => string; // 获取子节点key的函数
  getDisabledKey: () => string; // 获取禁用key的函数
  getSelectionConfig: () => { // 获取选择框配置
    type: 'checkbox'|'radio'|''; // 选择框类型
    checkStrictly: boolean;
    onSelectChange: (selectionData: any) => any; // 选中项发生变化事件
  }
}

export function useBsTree (flattenTreeDatas: Ref<BsNodeInfo[]>, treeId: string, options: UseBsTreeOptions) {
  let {
    getChildrenKey,
    getDisabledKey,
    getSelectionConfig
  } = options;
  // 选中行的key
  let checkedKeysRoot: Ref<Set<string>> = ref(new Set<string>());
  // 当前数据中选中的行
  let checkedRowsCurrent: Ref<Map<string, any>> = ref(new Map());
  // 所有选中的行
  let checkedRows: Ref<Map<string, any>> = ref(new Map());
  // 半选中行的key
  let halfCheckedKeys: Ref<Set<string>> = ref(new Set<string>());

  let addCheckedKey = function (uid: string, isDisabled?: boolean) {
    let nodeInfo = findNodeByUid(treeId, uid, flattenTreeDatas.value);
    let disabledKey = getDisabledKey();
    if (isDisabled || !nodeInfo || nodeInfo.node[disabledKey] || nodeInfo.isDisabled) {
      // 如果被禁用的节点没有子节点，则不添加进去
      if (!nodeInfo || !nodeInfo.node[getChildrenKey()]) {
        return false;
      }
    }
    // console.log('添加进选中项：', uid, nodeInfo.node);
    checkedRowsCurrent.value.set(uid, nodeInfo.node);
    checkedRows.value.set(uid, nodeInfo.node);
    checkedKeysRoot.value.add(uid);
    /* if (!checkedKeysRoot.value.has(uid)) {
      checkedKeysRoot.value.add(uid);
    } */
    return true;
  };
  let removeCheckedKey = function (uid: string, isDisabled?: boolean) {
    let nodeInfo = findNodeByUid(treeId, uid, flattenTreeDatas.value);
    // console.log('移除选中项：', uid, nodeInfo.node);
    let disabledKey = getDisabledKey();
    if (isDisabled || !nodeInfo || nodeInfo.node[disabledKey] || nodeInfo.isDisabled) {
      // 如果被禁用的节点没有子节点，则不移除
      if (!nodeInfo || !nodeInfo.node[getChildrenKey()]) {
        // 节点为禁用的且没有子节点
        return false;
      }
    }
    /* let index = checkedKeysRoot.value.findIndex(item => item === nodeKey);
    if (index > -1) {
      checkedKeysRoot.value.splice(index, 1);
    } */
    checkedRowsCurrent.value.delete(uid);
    checkedRows.value.delete(uid);
    checkedKeysRoot.value.delete(uid);
    return true;
  };
  let addHalfCheckedKey = function (uid: string) {
    if (!halfCheckedKeys.value.has(uid)) {
      halfCheckedKeys.value.add(uid);
    }
  };
  let removeHalfCheckedKey = function (uid: string) {
    /* let index = halfCheckedKeys.value.findIndex(item => item === nodeKey);
    if (index > -1) {
      halfCheckedKeys.value.splice(index, 1);
    } */
    halfCheckedKeys.value.delete(uid);
  };

  // 判断节点是否全部选中
  let nodesIsAllChecked = function (nodes: BsNodeData | BsNodeData[], callback?: (node: BsNodeData, uid: any) => void) {
    let allChecked = true;
    let hasChecked = false;
    let hasHalfChecked = false;
    // let nodeKey = props.nodeKey;
    let checkedKeys = checkedKeysRoot.value;
    let halfCheckedKeysVal = halfCheckedKeys.value;
    if (!Array.isArray(nodes)) {
      nodes = [nodes];
    }
    nodes.forEach((nodeItem: BsNodeData) => {
      let nodeValue = nodeItem.uid;
      if (typeof callback === 'function') {
        callback(nodeItem, nodeValue);
      }
      let isChecked = checkedKeys.has(nodeValue);
      if (halfCheckedKeysVal.has(nodeValue)) {
        hasHalfChecked = true;
      }
      if (!isChecked || hasHalfChecked) {
        allChecked = false;
      }
      if (isChecked) {
        hasChecked = true;
      }
    });
    return {
      allChecked,
      hasChecked,
      hasHalfChecked
    };
  };

  // 移除父级节点的选中状态
  let removeParentsChecked = function (nodeValue: string|number) {
    let flattenTreeDatasRaw = flattenTreeDatas.value;
    let parents: BsNodeInfo[] = findParentsByUid<BsNodeInfo>(treeId, nodeValue, flattenTreeDatasRaw);
    let disabledKey = getDisabledKey();
    parents.forEach(function (parentNodeInfo) {
      let parentNodeValue = parentNodeInfo.uid;
      let childrenCheckedInfo = nodesIsAllChecked(findChildrenNodesByUid(treeId, parentNodeValue, flattenTreeDatasRaw));
      if (childrenCheckedInfo.allChecked) {
        return;
      }
      if (childrenCheckedInfo.hasChecked || childrenCheckedInfo.hasHalfChecked) {
        removeCheckedKey(parentNodeValue, parentNodeInfo.node[disabledKey] || parentNodeInfo.isDisabled);
        addHalfCheckedKey(parentNodeValue);
      } else {
        removeCheckedKey(parentNodeValue, parentNodeInfo.node[disabledKey] || parentNodeInfo.isDisabled);
        removeHalfCheckedKey(parentNodeValue);
      }
    });
  };

  // 添加父级节点的选中状态
  let addParentsChecked = function (nodeValue: string|number) {
    let flattenTreeDatasRaw = flattenTreeDatas.value;
    let parents: BsNodeInfo[] = findParentsByUid<BsNodeInfo>(treeId, nodeValue, flattenTreeDatasRaw);
    let disabledKey = getDisabledKey();
    parents.forEach(function (parentNodeInfo) {
      let parentNodeValue = parentNodeInfo.uid;
      let childrenCheckedInfo = nodesIsAllChecked(findChildrenNodesByUid(treeId, parentNodeValue, flattenTreeDatasRaw));

      if (childrenCheckedInfo.allChecked) {
        addCheckedKey(parentNodeValue, parentNodeInfo.node[disabledKey] || parentNodeInfo.isDisabled);
        removeHalfCheckedKey(parentNodeValue);
      } else if (childrenCheckedInfo.hasHalfChecked || childrenCheckedInfo.hasChecked) {
        removeCheckedKey(parentNodeValue, parentNodeInfo.node[disabledKey] || parentNodeInfo.isDisabled);
        addHalfCheckedKey(parentNodeValue);
      } else {
        removeCheckedKey(parentNodeValue, parentNodeInfo.node[disabledKey] || parentNodeInfo.isDisabled);
        removeHalfCheckedKey(parentNodeValue);
      }
    });
  };

  // 移除自己及子孙节点选中状态
  let removeSelfAndChildrenChecked = function (nodeValue: string|number) {
    let childrenKeyRaw = getChildrenKey();
    let flattenTreeDatasRaw = flattenTreeDatas.value;
    let nodeInfo = findNodeByUid(treeId, nodeValue, flattenTreeDatasRaw);
    if (!nodeInfo) {
      return;
    }
    // 根据节点的值查找有children的子节点
    let hasChildrenChildNodes: BsNodeInfo[] = findChildrenWhichHasChildrenByUid<BsNodeInfo>(treeId, nodeValue, childrenKeyRaw, flattenTreeDatasRaw);
    hasChildrenChildNodes.unshift(nodeInfo);
    let disabledKey = getDisabledKey();
    // 将有子节点的节点反转过来后再进行处理，这样就达到了从下往上处理的效果
    hasChildrenChildNodes.reverse().forEach((nodeDataItem) => {
      let nodeChildren: BsNodeInfo[]= findChildrenNodesByUid(treeId, nodeDataItem.uid, flattenTreeDatasRaw);
      let nodeDataItemValue = nodeDataItem.uid;
      if (nodeChildren.length == 0) {
        removeCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        return;
      }
      nodeChildren.forEach((childNode) => {
        removeCheckedKey(childNode.uid, childNode.node[disabledKey] || childNode.isDisabled);
      });
      let childrenCheckedInfo = nodesIsAllChecked(nodeChildren);
      if (childrenCheckedInfo.allChecked) {
        addCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        removeHalfCheckedKey(nodeDataItemValue);
        return;
      }
      if (!childrenCheckedInfo.hasChecked && !childrenCheckedInfo.hasHalfChecked) {
        removeCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        removeHalfCheckedKey(nodeDataItemValue);
      } else {
        removeCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        addHalfCheckedKey(nodeDataItemValue);
      }
    });
  };

  // 添加自己及子孙节点选中状态
  let addSelfAndChildrenChecked = function (nodeValue: string|number) {
    let childrenKeyRaw = getChildrenKey();

    let flattenTreeDatasRaw = flattenTreeDatas.value;
    let nodeInfo = findNodeByUid<BsNodeInfo>(treeId, nodeValue, flattenTreeDatasRaw);
    if (!nodeInfo) {
      return;
    }
    // 根据节点的值查找有children的子节点
    let hasChildrenChildNodes: BsNodeInfo[] = findChildrenWhichHasChildrenByUid<BsNodeInfo>(treeId, nodeValue, childrenKeyRaw, flattenTreeDatasRaw);
    hasChildrenChildNodes.unshift(nodeInfo);
    let disabledKey = getDisabledKey();
    // 将有子节点的节点反转过来后再进行处理，这样就达到了从下往上处理的效果
    hasChildrenChildNodes.reverse().forEach((nodeDataItem) => {
      // let children = nodeDataItem[childrenKeyRaw];
      let nodeChildren: BsNodeInfo[] = findChildrenNodesByUid(treeId, nodeDataItem.uid, flattenTreeDatasRaw);
      let nodeDataItemValue = nodeDataItem.uid;
      if (nodeChildren.length == 0) {
        addCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        return;
      }
      nodeChildren.forEach((childNodeData) => {
        addCheckedKey(childNodeData.uid, childNodeData.node[disabledKey] || childNodeData.isDisabled);
      });
      let childrenCheckedInfo = nodesIsAllChecked(nodeChildren);
      if (childrenCheckedInfo.allChecked) {
        addCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        removeHalfCheckedKey(nodeDataItemValue);
        return;
      }
      if (childrenCheckedInfo.hasChecked || childrenCheckedInfo.hasHalfChecked) {
        removeCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        addHalfCheckedKey(nodeDataItemValue);
      } else {
        removeCheckedKey(nodeDataItemValue, nodeDataItem.node[disabledKey] || nodeDataItem.isDisabled);
        removeHalfCheckedKey(nodeDataItemValue);
      }
    });
  };

  // 获取选中行的信息
  let getSelectionInfo = function () {
    let flattenTableRowsRaw = flattenTreeDatas.value;

    let selectedRowKeys = Array.from(checkedKeysRoot.value);
    let selectedRows = [...checkedRows.value.values()];

    let halfSelectedRowKeys = Array.from(halfCheckedKeys.value);
    let halfSelectedRows = halfSelectedRowKeys.map(rowKey => {
      return findNodeByUid(treeId, rowKey, flattenTableRowsRaw)?.node;
    }).filter(row => !!row);

    return {
      selectedRowKeys,
      selectedRows,
      halfSelectedRowKeys,
      halfSelectedRows
    };
  };

  // 选择所有行
  let selectAll = function () {
    let { type, checkStrictly, onSelectChange } = getSelectionConfig();
    if (type != 'checkbox') {
      return;
    }
    flattenTreeDatas.value.forEach(rowInfo => {
      let { uid, isDisabled, nodeLevel } = rowInfo;
      if (checkStrictly) {
        addCheckedKey(uid);
      } else {
        if (nodeLevel == 1) { // 从最顶层开始选择
          addSelfAndChildrenChecked(uid);
        }
      }
    });
    let selectionInfo = getSelectionInfo();
    if (isFunction(onSelectChange)) {
      onSelectChange({
        row: null,
        isSelected: true,
        operateType: 'selectAll',
        isHalfSelected: false,
        ...selectionInfo
      });
    }
  };

  // 取消选择所有行
  let selectNone = function (force?: boolean) {
    let { type, checkStrictly, onSelectChange } = getSelectionConfig();
    if (type != 'checkbox' && force !== true) {
      return;
    }
    flattenTreeDatas.value.forEach(rowInfo => {
      let { uid, isDisabled, nodeLevel } = rowInfo;
      if (checkStrictly) {
        removeCheckedKey(uid);
      } else {
        if (nodeLevel == 1) { // 从最顶层开始选择
          removeSelfAndChildrenChecked(uid);
        }
      }
    });
    let selectionInfo = getSelectionInfo();
    if (isFunction(onSelectChange)) {
      onSelectChange({
        row: null,
        isSelected: false,
        operateType: 'selectNone',
        isHalfSelected: false,
        ...selectionInfo
      });
    }
  };

  /**
   * 添加选中行
   * @param rowKey 行的key
   * @param rowData 行数据，可选
   * @param forceSelect 是否强制选中
   */
  let selectRow = function (rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) {
    if (!checkedKeysRoot.value.has(rowKey) || !!forceSelect) {
      let { type, checkStrictly, onSelectChange } = getSelectionConfig();
      if (!rowData) {
        rowData = findNodeByUid(treeId, rowKey, flattenTreeDatas.value)?.node;
      }
      if (type == 'checkbox') {
        if (!checkStrictly) {
          // 添加自己及子孙节点的选中状态
          addSelfAndChildrenChecked(rowKey);
          // 添加父级节点的选中状态
          addParentsChecked(rowKey);
        } else {
          addCheckedKey(rowKey);
        }
      } else {
        let treeNode = findNodeByUid(treeId, rowKey, flattenTreeDatas.value);
        if (!rowData?.[getDisabledKey()] && !treeNode?.isDisabled) { // 非禁用状态才允许清空
          checkedRows.value.clear();
          checkedRowsCurrent.value.clear();
          checkedKeysRoot.value.clear();
          // checkedKeysRoot.value = new Set([rowKey]);
        }
        addCheckedKey(rowKey);
      }
      if (isFunction(onSelectChange)) {
        let selectionInfo = getSelectionInfo();
        onSelectChange({
          row: rowData,
          isSelected: true,
          operateType: 'selectSingle',
          isHalfSelected: halfCheckedKeys.value.has(rowKey),
          ...selectionInfo
        });
      }
    }
  };

  // 移除选中项
  let unSelectRow = function (rowKey: string, rowData?: Record<string, any>) {
    let { type, checkStrictly, onSelectChange } = getSelectionConfig();
    if (type == 'checkbox') {
      if (!checkStrictly) {
        // 移除自己及子孙节点的选中状态
        removeSelfAndChildrenChecked(rowKey);
        // 移除父级节点的选中状态
        removeParentsChecked(rowKey);
      } else {
        removeCheckedKey(rowKey);
      }
    } else {
      removeCheckedKey(rowKey);
    }
    if (isFunction(onSelectChange)) {
      let selectionInfo = getSelectionInfo();
      if (!rowData) {
        rowData = findNodeByUid(treeId, rowKey, flattenTreeDatas.value)?.node;
      }
      onSelectChange({
        row: rowData,
        isSelected: false,
        operateType: 'selectSingle',
        isHalfSelected: halfCheckedKeys.value.has(rowKey),
        ...selectionInfo
      });
    }
  };

  // 关联父级选择框
  let linkParentCheckbox = function () {
    // console.log('linkParentCheckbox 111');
    let checkedKeys = checkedKeysRoot.value;
    if (getSelectionConfig().checkStrictly) {
      checkedKeys.forEach((checkedKey: string) => {
        addCheckedKey(checkedKey);
      });
      return;
    }
    // console.log('linkParentCheckbox 222', checkedKeys);
    // 已经处理过的节点的key
    let processedKes: Record<string, any> = {};
    checkedKeys.forEach((checkedKey: string) => {
      if (checkedKey in processedKes) {
        return;
      }
      // console.log('linkParentCheckbox 333');
      processedKes[checkedKey] = 1;
      addSelfAndChildrenChecked(checkedKey);
      addParentsChecked(checkedKey);
    });
  };

  return {
    checkedKeysRoot,
    halfCheckedKeys,
    checkedRowsCurrent,
    checkedRows,

    addCheckedKey,
    removeCheckedKey,
    addHalfCheckedKey,
    removeHalfCheckedKey,
    addParentsChecked,
    removeParentsChecked,
    addSelfAndChildrenChecked,
    removeSelfAndChildrenChecked,
    nodesIsAllChecked,
    linkParentCheckbox,

    selectAll,
    selectNone,
    selectRow,
    unSelectRow,
    getSelectionInfo
  };
};
