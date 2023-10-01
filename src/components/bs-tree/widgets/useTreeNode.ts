import { computed, ref } from 'vue';
import { TreeContext } from '../bs-tree-types';

export function useTreeNode (props: any, treeCtx: TreeContext) {
  let loadingData = ref(false); // 是否正在加载数据
  let dataLoaded = ref(false); // 节点数据是否加载完毕

  // 判断当前节点是否为叶子节点
  let isLeaf = computed(function () {
    let nodeData = props.nodeData;
    let isLeafInData = nodeData[props.isLeafKey];
    if (typeof isLeafInData === 'boolean') {
      return isLeafInData;
    }
    if (props.lazy) {
      if (dataLoaded.value) { // 如果子节点数据已经加载并且没有子节点，那么当前节点就是叶子节点
        return (nodeData[props.childrenKey]?.length || 0) == 0;
      }
      return false;
    }
    return (nodeData[props.childrenKey]?.length || 0) == 0;
  });

  // 节点的值
  let nodeValue = computed(function () {
    return props.nodeData[props.nodeKey];
  });
  // 是否选中
  let isChecked = computed(function () {
    return props.checkedKeys.has(nodeValue.value);
  });
  // 判断当前节点是否被点击
  let isCurrent = computed(function () {
    let currentNode = treeCtx.currentNode.value;
    if (!currentNode) {
      return false;
    }
    return nodeValue.value === currentNode[props.nodeKey];
  });
  // 是否为半选中状态
  let isIndeterminate = computed(function () {
    return treeCtx.halfCheckedKeys.value.has(nodeValue.value);
  });
  // 是否禁用
  let isDisabled = computed(function () {
    return !!props.nodeData[props.disabledKey];
  });
  // 单选框是否只能选择叶子节点
  let isRadioDisabled = computed(function () {
    return props.checkStrictly && !isLeaf.value;
  });

  return {
    loadingData,
    dataLoaded,
    isLeaf,
    nodeValue,
    isChecked,
    isCurrent,
    isIndeterminate,
    isDisabled,
    isRadioDisabled
  };
};
