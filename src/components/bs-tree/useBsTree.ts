import { computed, ref, Ref } from 'vue';
import {
  findChildrenWhichHasChildren2,
  findNodeInfoByValue2,
  findParentsByNodeValue2
} from './bs-tree-utils';
import { BsNodeData, BsNodeInfo } from './bs-tree-types';

export const defaultTreeNodeProps = {
  label: 'label',
  children: 'children',
  disabled: 'disabled',
  isLeaf: 'isLeaf'
};

export function useBsTree (props: any, flatTreeNodeInfoArr: Ref<BsNodeInfo[]>, treeId: string) {
  // 选中节点的key数组
  let checkedKeysRoot = ref<(string | number)[]>([]);
  // 半选中状态节点的key数组
  let halfCheckedKeys = ref<(string | number)[]>([]);
  // 树节点配置信息
  let treeNodeProps = computed(function () {
    let treeNodeProps = props.props || {};
    return {
      ...defaultTreeNodeProps,
      ...treeNodeProps
    };
  });
  let addCheckedKey = function (nodeKey: string | number, isDisabled: boolean) {
    if (isDisabled) {
      let nodeInfo = findNodeInfoByValue2(treeId, nodeKey, props.nodeKey, flatTreeNodeInfoArr.value);
      // 如果被禁用的节点没有子节点，则不添加进去
      if (nodeInfo.node && !nodeInfo.node[treeNodeProps.value.children]) {
        return false;
      }
    }
    if (!checkedKeysRoot.value.includes(nodeKey)) {
      checkedKeysRoot.value.push(nodeKey);
    }
    return true;
  };
  let removeCheckedKey = function (nodeKey: string | number, isDisabled: boolean) {
    if (isDisabled) {
      let nodeInfo = findNodeInfoByValue2(treeId, nodeKey, props.nodeKey, flatTreeNodeInfoArr.value);
      // 如果被禁用的节点没有子节点，则不移除
      if (nodeInfo.node && !nodeInfo.node[treeNodeProps.value.children]) {
        // 节点为禁用的且没有子节点
        return false;
      }
    }
    let index = checkedKeysRoot.value.findIndex(item => item === nodeKey);
    if (index > -1) {
      checkedKeysRoot.value.splice(index, 1);
    }
    return true;
  };
  let addHalfCheckedKey = function (nodeKey: string | number) {
    if (!halfCheckedKeys.value.includes(nodeKey)) {
      halfCheckedKeys.value.push(nodeKey);
    }
  };
  let removeHalfCheckedKey = function (nodeKey: string | number) {
    let index = halfCheckedKeys.value.findIndex(item => item === nodeKey);
    if (index > -1) {
      halfCheckedKeys.value.splice(index, 1);
    }
  };

  // 判断节点是否全部选中
  let nodesIsAllChecked = function (nodes: BsNodeData | BsNodeData[], callback?: (node: BsNodeData, nodeValue: any) => void) {
    let allChecked = true;
    let hasChecked = false;
    let hasHalfChecked = false;
    let nodeKey = props.nodeKey;
    let checkedKeys = checkedKeysRoot.value;
    let halfCheckedKeysVal = halfCheckedKeys.value;
    if (!Array.isArray(nodes)) {
      nodes = [nodes];
    }
    nodes.forEach((nodeItem: BsNodeData) => {
      let nodeValue = nodeItem[nodeKey];
      if (typeof callback === 'function') {
        callback(nodeItem, nodeValue);
      }
      let isChecked = checkedKeys.includes(nodeValue);
      if (halfCheckedKeysVal.includes(nodeValue)) {
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
    let nodeKey = props.nodeKey;
    let childrenKey = treeNodeProps.value.children;
    let parents = findParentsByNodeValue2(treeId, nodeValue, nodeKey, flatTreeNodeInfoArr.value);
    parents.forEach(function (parentNodeInfo) {
      let parentNodeValue = parentNodeInfo.node[nodeKey];
      let childrenCheckedInfo = nodesIsAllChecked(parentNodeInfo.node[childrenKey]);
      if (childrenCheckedInfo.allChecked) {
        return;
      }
      if (childrenCheckedInfo.hasChecked || childrenCheckedInfo.hasHalfChecked) {
        removeCheckedKey(parentNodeValue, parentNodeInfo.isDisabled);
        addHalfCheckedKey(parentNodeValue);
      } else {
        removeCheckedKey(parentNodeValue, parentNodeInfo.isDisabled);
        removeHalfCheckedKey(parentNodeValue);
      }
    });
  };

  // 添加父级节点的选中状态
  let addParentsChecked = function (nodeValue: string|number) {
    let nodeKey = props.nodeKey;
    let childrenKey = treeNodeProps.value.children;
    let parents = findParentsByNodeValue2(treeId, nodeValue, nodeKey, flatTreeNodeInfoArr.value);
    parents.forEach(function (parentNodeInfo) {
      let parentNodeValue = parentNodeInfo.node[nodeKey];
      let childrenCheckedInfo = nodesIsAllChecked(parentNodeInfo.node[childrenKey]);

      if (childrenCheckedInfo.allChecked) {
        addCheckedKey(parentNodeValue, parentNodeInfo.isDisabled);
        removeHalfCheckedKey(parentNodeValue);
      } else if (childrenCheckedInfo.hasHalfChecked || childrenCheckedInfo.hasChecked) {
        removeCheckedKey(parentNodeValue, parentNodeInfo.isDisabled);
        addHalfCheckedKey(parentNodeValue);
      } else {
        removeCheckedKey(parentNodeValue, parentNodeInfo.isDisabled);
        removeHalfCheckedKey(parentNodeValue);
      }
    });
  };

  // 移除子孙节点选中
  let removeChildrenChecked = function (nodeValue: string|number) {
    let nodeKey = props.nodeKey;
    let { children: childrenKey, disabled: disabledKey } = treeNodeProps.value;
    let nodeInfo = findNodeInfoByValue2(treeId, nodeValue, nodeKey, flatTreeNodeInfoArr.value);
    if (!nodeInfo.node) {
      return;
    }
    let children = nodeInfo.node[childrenKey];
    if (children && children.length > 0) {
      // 根据节点的值查找有children的子节点
      let hasChildrenChildNodes = findChildrenWhichHasChildren2(treeId, nodeValue, nodeKey, childrenKey, flatTreeNodeInfoArr.value);
      hasChildrenChildNodes.unshift(nodeInfo.node);
      // 将有子节点的节点反转过来后再进行处理，这样就达到了从下往上处理的效果
      hasChildrenChildNodes.reverse().forEach((nodeDataItem: BsNodeData) => {
        let children = nodeDataItem[childrenKey];
        let nodeDataItemValue = nodeDataItem[nodeKey];
        nodeDataItem[childrenKey].forEach((childNodeData: BsNodeData) => {
          removeCheckedKey(childNodeData[nodeKey], childNodeData[disabledKey]);
        });
        let childrenCheckedInfo = nodesIsAllChecked(children);
        if (childrenCheckedInfo.allChecked) {
          addCheckedKey(nodeDataItemValue, nodeDataItem[disabledKey]);
          removeHalfCheckedKey(nodeDataItemValue);
          return;
        }
        if (!childrenCheckedInfo.hasChecked && !childrenCheckedInfo.hasHalfChecked) {
          removeCheckedKey(nodeDataItemValue, nodeDataItem[disabledKey]);
          removeHalfCheckedKey(nodeDataItemValue);
        } else {
          removeCheckedKey(nodeDataItemValue, nodeDataItem[disabledKey]);
          addHalfCheckedKey(nodeDataItemValue);
        }
      });
    }
  };

  // 全选子孙节点
  let addChildrenChecked = function (nodeValue: string|number) {
    let nodeKey = props.nodeKey;
    let { children: childrenKey, disabled: disabledKey } = treeNodeProps.value;

    let nodeInfo = findNodeInfoByValue2(treeId, nodeValue, nodeKey, flatTreeNodeInfoArr.value);
    if (!nodeInfo.node) {
      return;
    }
    // 根据节点的值查找有children的子节点
    let hasChildrenChildNodes = findChildrenWhichHasChildren2(treeId, nodeValue, nodeKey, childrenKey, flatTreeNodeInfoArr.value);
    hasChildrenChildNodes.unshift(nodeInfo.node);
    // 将有子节点的节点反转过来后再进行处理，这样就达到了从下往上处理的效果
    hasChildrenChildNodes.reverse().forEach((nodeDataItem: BsNodeData) => {
      let children = nodeDataItem[childrenKey];
      let nodeDataItemValue = nodeDataItem[nodeKey];
      nodeDataItem[childrenKey].forEach((childNodeData: BsNodeData) => {
        addCheckedKey(childNodeData[nodeKey], childNodeData[disabledKey]);
      });
      let childrenCheckedInfo = nodesIsAllChecked(children);
      if (childrenCheckedInfo.allChecked) {
        addCheckedKey(nodeDataItemValue, nodeDataItem[disabledKey]);
        removeHalfCheckedKey(nodeDataItemValue);
        return;
      }
      if (childrenCheckedInfo.hasChecked || childrenCheckedInfo.hasHalfChecked) {
        removeCheckedKey(nodeDataItemValue, nodeDataItem[disabledKey]);
        addHalfCheckedKey(nodeDataItemValue);
      } else {
        removeCheckedKey(nodeDataItemValue, nodeDataItem[disabledKey]);
        removeHalfCheckedKey(nodeDataItemValue);
      }
    });
  };

  return {
    checkedKeysRoot,
    halfCheckedKeys,
    treeNodeProps,

    addCheckedKey,
    removeCheckedKey,
    addHalfCheckedKey,
    removeHalfCheckedKey,
    addParentsChecked,
    removeParentsChecked,
    addChildrenChecked,
    removeChildrenChecked,
    nodesIsAllChecked
  };
};
