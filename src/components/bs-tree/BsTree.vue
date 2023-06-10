<template>
  <div
    class="bs-tree"
    :class="{
      'bs-tree-highlight-current': highlightCurrent
    }"
    role="tree">
    <BsTreeNode
      v-for="(nodeItem, index) in nodeChildren"
      v-bind="$props"
      v-show="typeof nodeItem._nodeShow == 'boolean' ? nodeItem._nodeShow : true"
      :node-data="nodeItem"
      :key="nodeItem[nodeKey]"
      :node-level="1"
      :tree-id="treeId"
      :node-level-path="`${index + 1}`"
      :label-key="props.label"
      :disabled-key="props.disabled"
      :children-key="props.children"
      :is-leaf-key="props.isLeaf"
      :expanded-keys="expandedKeysRoot"
      :checked-keys="checkedKeysRoot"
      :radio-name="radioNameRoot"></BsTreeNode>
    <BsTreeNodeOperate
      v-if="pageSize > 0 && totalPage > 0"
      :node-level="1"
      :node-data="{
        rootTree: true,
        [props.children]: treeData
      }"
      :disabled="pageCount >= totalPage"
      :load-more-child-button-text="loadMoreChildButtonText"
      :load-all-child-button-text="loadAllChildButtonText"
      :show-switcher="false"
      @show-more="showMoreChildNode"
      @show-all="showAllChildNode"></BsTreeNodeOperate>
    <div class="bs-tree-empty" v-if="nodeChildren.length == 0 && !loading">
      <slot name="empty">{{ emptyText }}</slot>
    </div>
    <div class="bs-tree-loading" v-if="loading">
      <slot name="loading">{{ loadingText }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  ref,
  watch,
  toRef,
  computed,
  onUnmounted
} from 'vue';
import BsTreeNode from './widgets/BsTreeNode.vue';
import BsTreeNodeOperate from './widgets/BsTreeNodeOperate.vue';
import { bsTreeProps, BsNodeData, BsNodeInfo, bsTreeContextKey, TreeContext } from './bs-tree-types';
import { PlainObject } from '../types';
import {
  findChildrenWhichHasChildren2,
  findNodeInfoByValue2,
  findParentsByNodeLevelPath2,
  findParentsByNodeValue2,
  findTopParentByNodeValue2,
  treeDataToFlattarnArr2,
  clearCachedNodeInfo
} from './bs-tree-utils';
import { useTreePagination } from './useTreePagination';
import { useTreeMethods } from './useTreeMethods';
import { useBsTree, defaultTreeNodeProps } from './useBsTree';

let treeCount = 0;
export default defineComponent({
  name: 'BsTree',
  components: {
    BsTreeNode,
    BsTreeNodeOperate
  },
  props: bsTreeProps,
  emits: ['node-expand', 'check-change', 'node-click', 'update:checkedKeys', 'node-destroy'],
  setup (props: any, ctx: any) {
    console.time('Tree组件Script执行耗时：');
    let treeId = `bs_tree-${++treeCount}`;
    // 扁平的树对象
    // let flatTreeMap = ref<BsNodeInfo[]>([]);
    // 扁平化的树信息
    let flatTreeNodeInfoArr = ref<BsNodeInfo[]>([]);

    // 展开的节点的key数组
    let expandedKeysRoot = ref(props.expandedKeys);
    let addExpandKey = function (expandKey: string|number) {
      if (expandedKeysRoot.value.includes(expandKey)) {
        return;
      }
      expandedKeysRoot.value.push(expandKey);
    };
    // 展开选中节点的父级节点
    let expandCheckedNodesParent = function () {
      let expandKeys = expandedKeysRoot.value;
      let flatTreeNodeInfos = flatTreeNodeInfoArr.value;
      let nodeKey = props.nodeKey;
      let processedKeys = {}; // 存储已经处理过的节点
      // 展开选中节点的父级节点
      checkedKeysRoot.value.forEach(checkedKey => {
        if (checkedKey in processedKeys) {
          return;
        }
        // 节点已经展开，无需再次展开！
        if (expandKeys?.includes(checkedKey)) {
          return;
        }
        let parents = findParentsByNodeValue2(treeId, checkedKey, nodeKey, flatTreeNodeInfos);
        parents.forEach(parentNodeInfo => {
          let node = parentNodeInfo.node;
          let parentNodeValue = node[nodeKey];
          if (parentNodeValue in processedKeys) {
            return;
          }
          addExpandKey(parentNodeValue);
        });
      });
    };

    let {
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
    } = useBsTree(props, flatTreeNodeInfoArr, treeId);

    // 设置最顶层的父级节点半选中状态
    let setTopParentsIndeterminate = function (topParent: BsNodeData, flag = false) {
      if (!topParent) {
        return;
      }
      if (!flag) {
        removeHalfCheckedKey(topParent[props.nodeKey]);
      } else {
        addHalfCheckedKey(topParent[props.nodeKey]);
      }
    };

    // 关联父级选择框
    let linkParentCheckbox = function () {
      if (props.checkStrictly) {
        return;
      }
      // 已经处理过的节点的key
      let processedKes: PlainObject = {};
      let nodeKey = props.nodeKey;
      let { children: childKey, disabled: disabledKey } = treeNodeProps.value;
      let checkedKeys = checkedKeysRoot.value;
      let flatTree = flatTreeNodeInfoArr.value;

      checkedKeys.forEach((checkedKey: string | number) => {
        if (checkedKey in processedKes) {
          return;
        }

        let topParent = findTopParentByNodeValue2(treeId, checkedKey, nodeKey, flatTree);
        let topParentValue = topParent ? topParent[nodeKey] : '';
        if (topParentValue && (topParentValue in processedKes)) {
          return;
        }
        if (topParent) {
          processedKes[topParentValue] = 1;
        }
        // 根据节点的值（如果有顶层父节点则从顶层父节点开始）查找有children的子节点
        let hasChildrenChildNodes = findChildrenWhichHasChildren2(treeId, topParentValue ? topParentValue : checkedKey, nodeKey, childKey, flatTree);

        if (hasChildrenChildNodes.length === 0) {
          let currentNodeInfo = findNodeInfoByValue2(treeId, checkedKey, nodeKey, flatTree);
          if (!currentNodeInfo.node) {
            return;
          }
          // 如果节点没有有children的子节点，那么hasChildrenChildNodes就是它自己，此时节点可能为最后一层，或倒数第二层
          hasChildrenChildNodes = [currentNodeInfo.node];
        } else if (!topParent && hasChildrenChildNodes.length > 0) { // 如果节点已经没有了父级节点，并且还有子节点，那么它自己就是顶级节点
          topParent = findNodeInfoByValue2(treeId, checkedKey, nodeKey, flatTree).node;
          topParentValue = topParent ? topParent[nodeKey] : '';
        }

        let isChildrenAllChecked = true; // 子孙节点是否有全部选中
        let hasCheckedChild = false; // 子孙节点是否有选中
        // 将hasChildrenChildNodes反转过来后判断节点的子节点是否全部选中
        [...hasChildrenChildNodes].reverse().forEach((nodeItem: BsNodeData) => {
          let nodeValue = nodeItem[nodeKey];
          if (nodeValue in processedKes) {
            return;
          }
          let disabled = nodeItem[disabledKey];
          processedKes[nodeValue] = 1;
          let nodeChildren = nodeItem[childKey];
          if (nodeChildren && nodeChildren.length > 0) {
            // 如果节点有子节点，且节点被选中了，则全选它的子孙节点
            if (checkedKeys.includes(nodeValue)) {
              // 全选子孙节点
              addChildrenChecked(nodeValue);
              let childCheckedInfo = nodesIsAllChecked(nodeChildren, function (node, nodeValue) {
                processedKes[nodeValue] = 1;
              });
              hasCheckedChild = childCheckedInfo.hasChecked;
              isChildrenAllChecked = childCheckedInfo.allChecked;
            } else {
              let childrenIsAllChecked = nodesIsAllChecked(nodeChildren, function (node, nodeValue) {
                processedKes[nodeValue] = 1;
              });

              // 如果子孙节点全部选中，则该节点为选中状态
              if (childrenIsAllChecked.allChecked && !childrenIsAllChecked.hasHalfChecked) {
                removeHalfCheckedKey(nodeValue);
                addCheckedKey(nodeValue, disabled);
                hasCheckedChild = true;
              } else {
                // 子节点必须有一个选中的或者有半选中状态的才能设置父节点的半选中状态
                if (childrenIsAllChecked.hasChecked || childrenIsAllChecked.hasHalfChecked) {
                  addHalfCheckedKey(nodeValue);
                  removeCheckedKey(nodeValue, disabled);

                  hasCheckedChild = true;
                } else if (!childrenIsAllChecked.hasChecked && !childrenIsAllChecked.hasHalfChecked) {
                  removeCheckedKey(nodeValue, disabled);
                  removeHalfCheckedKey(nodeValue);
                } else {
                  removeCheckedKey(nodeValue, disabled);
                }
                isChildrenAllChecked = false;
              }
            }
          }
        });
        // 顶层父级节点的直接子节点选中信息
        let topParentChildCheckedInfo = {
          allChecked: false,
          hasChecked: false,
          hasHalfChecked: false
        };
        if (topParent) {
          let topParentChildren = topParent[childKey];
          if (topParentChildren && topParentChildren.length > 0) {
            topParentChildCheckedInfo = nodesIsAllChecked(topParentChildren);
          }
        }
        // 子孙节点必须有一个选中的，那么顶层父级节点才能设置为半选中状态
        setTopParentsIndeterminate(topParent, (!isChildrenAllChecked && hasCheckedChild) || !topParentChildCheckedInfo.allChecked);
        // 如果所有子孙节点都选中了，则将顶层父节点也设置为选中状态
        if (isChildrenAllChecked && topParentChildCheckedInfo.allChecked) {
          addCheckedKey(topParentValue, topParent[disabledKey]);
        } else if (!isChildrenAllChecked && !hasCheckedChild && !topParentChildCheckedInfo.hasChecked) { // 如果所有子孙节点都未选中，则需将顶层父节点取消选中
          removeCheckedKey(topParentValue, topParent[disabledKey]);
        }
      });
    };

    let isInited = false;
    watch([() => props.treeData], function ([treeData]) {
      let nodeProps = treeNodeProps.value;
      // flatTreeNodeInfoArr.value = flatTreeDataToObject(treeData, nodeProps.children, 1, '', {});
      flatTreeNodeInfoArr.value = treeDataToFlattarnArr2(treeId, treeData, nodeProps.children, nodeProps.disabled, 1, '', []);

      let children = findChildrenWhichHasChildren2(treeId, '001', 'value', 'children', flatTreeNodeInfoArr.value);

      clearCachedNodeInfo(treeId);
      if (isInited) { // 还未进行初始化的时候不执行linkParentCheckbox函数，因为下面的watch props.checkedKeys会执行
        linkParentCheckbox();
      }
      isInited = true;
    }, {
      immediate: true,
      deep: true
    });

    watch(() => [...props.checkedKeys], function (checkedKeys) {
      if (checkedKeysRoot.value !== checkedKeys) {
        if (!props.showCheckbox && props.showRadio) { // 单选
          if (checkedKeys?.length >= 1) {
            checkedKeysRoot.value = checkedKeys.slice(0, 1);
          }
          return;
        }
        let checkedKeysSorted = checkedKeys.slice(0).sort();
        let checkedKeysRootSorted = checkedKeysRoot.value.slice(0).sort();
        // 当用户手动改变了复选框的值，那么 checkedKeys 会等于 checkedKeysRoot.value
        if (checkedKeysSorted.join(',') === checkedKeysRootSorted.join(',')) {
          return;
        }
        checkedKeysRoot.value = checkedKeys;
        if (checkedKeys.length == 0) {
          halfCheckedKeys.value = [];
          return;
        }
        linkParentCheckbox();
      }
    }, { immediate: true });

    watch(() => props.expandedKeys, function (expandedKeys: (string | number)[]) {
      let timer2 = new Date().getTime();
      if (expandedKeys?.length > 0 && expandedKeysRoot.value !== expandedKeys) {
        let parentKeys: (string | number)[] = [];
        if (props.autoExpandParent) { // 自动展开父节点
          let flatTreeMapData = flatTreeNodeInfoArr.value;
          let nodeKey = props.nodeKey;

          expandedKeys.forEach((expandedKey: string | number) => {
            let nodeInfo = findNodeInfoByValue2(treeId, expandedKey, nodeKey, flatTreeMapData);
            let nodeParents = nodeInfo.nodeLevelPath ? findParentsByNodeLevelPath2(nodeInfo.nodeLevelPath, flatTreeMapData) : [];
            nodeParents.forEach((nodeItem: any) => {
              parentKeys.push(nodeItem.node[nodeKey]);
            });
          });
        }
        expandedKeysRoot.value = Array.from(new Set([...expandedKeys, ...parentKeys, ...expandedKeysRoot.value]));
      }
    }, { immediate: true });

    // 当前选中的节点
    let currentNode = ref<unknown | null>(null);

    // 分页相关数据
    let {
      pageCount,
      nodeChildren,
      totalPage,
      showMoreChildNode,
      showAllChildNode
    } = useTreePagination(props, treeId, flatTreeNodeInfoArr, toRef(props, 'treeData'));

    // 对外提供的函数
    let {
      getParentNodeByNodeLevelPath,
      getParentNodeByNodeValue,
      getNodeByNodeValue,
      getNodeByNodeLevelPath,
      getCheckedNodes,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      getCheckedNodesLabel
    } = useTreeMethods(props, flatTreeNodeInfoArr, checkedKeysRoot, halfCheckedKeys, treeId);

    // 向子孙组件提供根tree上下文
    provide<TreeContext>(bsTreeContextKey, {
      ctx,
      // flatTreeMap,
      flatTreeNodeInfoArr,
      halfCheckedKeys,
      currentNode,
      addCheckedKey (nodeValue: string | number, nodeData: BsNodeData, hasChildren: boolean) {
        if (!checkedKeysRoot.value.includes(nodeValue)) {
          if (props.showCheckbox) {
            let disabledKey = treeNodeProps.value.disabled;
            // let nodeKey = props.nodeKey;
            // let childrenKey = props.props.children;
            // 如果节点有子孙节点，则全选它的子孙节点
            if (!props.checkStrictly) {
              if (hasChildren) {
                addChildrenChecked(nodeValue);
              } else {
                addCheckedKey(nodeValue, nodeData[disabledKey]);
              }
              // 添加父级节点的选中状态
              addParentsChecked(nodeValue);
            } else {
              addCheckedKey(nodeValue, nodeData[disabledKey]);
            }
            // linkParentCheckbox(true);
          } else if (props.showRadio) {
            checkedKeysRoot.value = [nodeValue];
          }
          ctx.emit('check-change', nodeData, true);
          ctx.emit('update:checkedKeys', [...checkedKeysRoot.value]);
        }
      },
      removeCheckedKey (nodeValue: string | number, nodeData: BsNodeData, hasChildren: boolean) {
        // let index = checkedKeysRoot.value.findIndex((item) => item === nodeValue);
        // if (index > -1) {
        // let nodeKey = props.nodeKey;
        let { children: childrenKey, disabled: disabledKey } = treeNodeProps.value;
        // removeCheckedKey(nodeValue, nodeData[disabledKey]);
        if (props.showCheckbox) {
          // 如果节点有子孙节点，则取消全选它的子孙节点
          if (!props.checkStrictly) {
            if (hasChildren && nodeData[childrenKey].length > 0) {
              // 移除子孙节点的选中状态
              removeChildrenChecked(nodeValue);
              // 移除父级节点的选中状态
              removeParentsChecked(nodeValue);
            } else {
              removeCheckedKey(nodeValue, nodeData[disabledKey]);
              // 移除父级节点的选中状态
              removeParentsChecked(nodeValue);
            }
          } else {
            removeCheckedKey(nodeValue, nodeData[disabledKey]);
          }
        } else {
          removeCheckedKey(nodeValue, nodeData[disabledKey]);
        }
        ctx.emit('check-change', nodeData, false);
        ctx.emit('update:checkedKeys', [...checkedKeysRoot.value]);
        // }
      },
      // 节点展开/收起事件
      onNodeExpand (flag: boolean, nodeData: BsNodeData, nodeState: any) {
        ctx.emit('node-expand', nodeData, flag, nodeState);
      },
      // 节点点击事件
      onNodeClick (nodeData: BsNodeData, nodeState: any) {
        ctx.emit('node-click', nodeData, nodeState);
      },
      // 节点销毁事件
      onNodeDestroy (nodeData: BsNodeData) {
        ctx.emit('node-destroy', nodeData);
      }
    });
    // 计算radio的name属性名称
    let radioNameRoot = computed(function () {
      let radioName = props.radioName;
      if (radioName && radioName != '--') {
        return radioName;
      }
      return treeId + '_radio';
    });

    console.timeEnd('Tree组件Script执行耗时：');

    onUnmounted(function () {
      clearCachedNodeInfo(treeId);
    });

    return {
      expandedKeysRoot,
      checkedKeysRoot,
      halfCheckedKeys,
      pageCount,
      nodeChildren,
      totalPage,
      treeId,
      radioNameRoot,

      showMoreChildNode,
      showAllChildNode,
      getParentNodeByNodeLevelPath,
      getParentNodeByNodeValue,
      getNodeByNodeValue,
      getNodeByNodeLevelPath,
      getCheckedNodes,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      getCheckedNodesLabel,
      expandCheckedNodesParent
    };
  }
});
</script>
