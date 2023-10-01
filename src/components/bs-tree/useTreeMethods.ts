import {
  ComputedRef,
  Ref
} from 'vue';
import { BsNodeInfo } from './bs-tree-types';
import { findNodeByUid } from '../../components/bs-tree/bs-tree-utils';

export function useTreeMethods (props: any, treeId: string, flatTreeNodeInfoArr: Ref<BsNodeInfo[]>, getSelectionInfo: () => any, treeNodeProps: ComputedRef<Record<string, any>>) {
// 根据节点值查找节点
  let getNodeByNodeValue = function (nodeValue: string|number) {
    let flatTreeInfo = flatTreeNodeInfoArr.value;
    let nodeInfo = findNodeByUid(treeId, nodeValue, flatTreeInfo);
    if (!nodeInfo.node) {
      return null;
    }
    return nodeInfo.node;
  };

  // 根据节点值查找父级节点
  let getNodeByNodeLevelPath = function (nodeLevelPath: string) {
    let nodeInfo = flatTreeNodeInfoArr.value.find(nodeInfoItem => nodeInfoItem.nodeLevelPath === nodeLevelPath);
    if (nodeInfo) {
      return nodeInfo.node;
    }
    return null;
  };

  // 根据节点值查找父级节点
  let getParentNodeByNodeValue = function (nodeValue: string|number) {
    let flatTreeInfo = flatTreeNodeInfoArr.value;
    let nodeInfo = findNodeByUid(treeId, nodeValue, flatTreeInfo);
    if (!nodeInfo.node) {
      return null;
    }
    let nodeLevelPath = nodeInfo.nodeLevelPath;
    return getParentNodeByNodeLevelPath(nodeLevelPath);
  };

  // 根据节点值查找父级节点
  let getParentNodeByNodeLevelPath = function (nodeLevelPath: string) {
    // 获取最后一个"_"下划线的位置
    let lastUnderlineIndex = nodeLevelPath.lastIndexOf('_');
    if (lastUnderlineIndex == -1) {
      return null;
    }
    nodeLevelPath = nodeLevelPath.substring(0, lastUnderlineIndex);
    let parentNodeInfo = flatTreeNodeInfoArr.value.find(nodeInfoItem => nodeInfoItem.nodeLevelPath === nodeLevelPath);
    if (parentNodeInfo) {
      return parentNodeInfo.node;
    }
    return null;
  };

  // 获取选中的节点
  let getCheckedNodes = function (): Record<string, any>[] {
    /* let flatTreeInfo = flatTreeNodeInfoArr.value;
    let nodeKey = props.nodeKey;

    let nodes = checkedKeysRoot.value.map(checkedKey => {
      let nodeInfo = flatTreeInfo.find(nodeInfoItem => nodeInfoItem.node[nodeKey] === checkedKey);
      return nodeInfo?.node;
    });
    nodes = nodes.filter(key => typeof key !== 'undefined');

    return nodes; */
    let selectionInfo = getSelectionInfo();
    return selectionInfo.selectedRows || [];
  };

  // 获取选中的节点的值
  let getCheckedKeys = function (): Record<string, any>[] {
    /* let flatTreeInfo = flatTreeNodeInfoArr.value;
    let nodeKey = props.nodeKey;

    let nodes = checkedKeysRoot.value.map(checkedKey => {
      let nodeInfo = flatTreeInfo.find(nodeInfoItem => nodeInfoItem.node[nodeKey] === checkedKey);
      return nodeInfo?.node;
    });
    nodes = nodes.filter(key => typeof key !== 'undefined');

    return nodes; */
    let selectionInfo = getSelectionInfo();
    return selectionInfo.selectedRowKeys || [];
  };

  // 获取选中节点的label
  let getCheckedNodesLabel = function () {
    let checkedNodes = getCheckedNodes();
    // let labelKey = props.props.label;
    // let disabledKey = props.props.disabled;
    let {
      label: labelKey,
      disabled: disabledKey
    } = treeNodeProps.value;
    let nodeKey = props.nodeKey;
    return checkedNodes.map((checkedNode) => {
      return {
        label: checkedNode[labelKey],
        value: checkedNode[nodeKey],
        disabled: checkedNode[disabledKey]
      };
    });
  };

  // 获取半选中的节点
  let getHalfCheckedNodes = function () {
    /* let flatTreeInfo = flatTreeNodeInfoArr.value;
    let nodeKey = props.nodeKey;

    let nodes = halfCheckedKeys.value.map(checkedKey => {
      let nodeInfo = flatTreeInfo.find(nodeInfoItem => nodeInfoItem.node[nodeKey] === checkedKey);
      return nodeInfo?.node;
    });
    nodes = nodes.filter(key => typeof key !== 'undefined');

    return nodes; */
    let selectionInfo = getSelectionInfo();
    return selectionInfo.halfSelectedRows || [];
  };

  // 获取半选中的节点
  let getHalfCheckedKeys = function () {
    /* let halfCheckedNodes = getHalfCheckedNodes();
    let nodeKey = props.nodeKey;
    let keys = halfCheckedNodes.map((nodeData: any) => {
      return nodeData[nodeKey];
    });
    keys = keys.filter(key => typeof key !== 'undefined');
    return keys; */
    let selectionInfo = getSelectionInfo();
    return selectionInfo.halfSelectedRowKeys || [];
  };

  return {
    getParentNodeByNodeLevelPath,
    getParentNodeByNodeValue,
    getNodeByNodeValue,
    getNodeByNodeLevelPath,
    getCheckedNodes,
    getCheckedKeys,
    getHalfCheckedNodes,
    getHalfCheckedKeys,
    getCheckedNodesLabel
  };
};
