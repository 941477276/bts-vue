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
      :label-key="treeNodeProps.label"
      :disabled-key="treeNodeProps.disabled"
      :children-key="treeNodeProps.children"
      :is-leaf-key="treeNodeProps.isLeaf"
      :expanded-keys="expandedKeysRoot"
      :checked-keys="checkedKeysRoot"
      :radio-name="radioNameRoot"></BsTreeNode>
    <BsTreeNodeOperate
      v-if="pageSize > 0 && totalPage > 0"
      :node-level="1"
      :node-data="{
        rootTree: true,
        [treeNodeProps.children]: treeData
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
  onUnmounted,
  nextTick
} from 'vue';
import BsTreeNode from './widgets/BsTreeNode.vue';
import BsTreeNodeOperate from './widgets/BsTreeNodeOperate.vue';
import { bsTreeProps, BsNodeData, BsNodeInfo, bsTreeContextKey, TreeContext } from './bs-tree-types';
import {
  findParentsByNodeLevelPath2,
  treeDataToFlattarnArr2,
  clearCachedNodeInfo, findNodeByUid, findParentsByUid
} from '../../utils/bs-tree-utils';
import { useTreePagination } from './useTreePagination';
import { useTreeMethods } from './useTreeMethods';
import { useBsTree } from '../../hooks/useBsTree';
import { jsonSort } from '../../utils/bs-util';
import { sm3HashHex } from '../../utils/sm3Hmac';

let treeCount = 0;
const defaultTreeNodeProps = {
  label: 'label',
  children: 'children',
  disabled: 'disabled',
  isLeaf: 'isLeaf'
};
// 获取对象哈希值
const getObjectHash = function (rowData: Record<string, any>): string {
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
    let flattenTreeNodeInfos = ref<BsNodeInfo[]>([]);

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
      let flatTreeNodeInfos = flattenTreeNodeInfos.value;
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
        // let parents = findParentsByNodeValue2(treeId, checkedKey, nodeKey, flatTreeNodeInfos);
        let parents = findParentsByUid(treeId, nodeKey, flatTreeNodeInfos);
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

    // 树节点配置
    let treeNodeProps = computed(function () {
      let treeNodeProps = props.props || {};
      return {
        ...defaultTreeNodeProps,
        ...treeNodeProps
      };
    });

    let {
      checkedKeysRoot,
      halfCheckedKeys,
      checkedRows,
      checkedRowsCurrent,

      linkParentCheckbox,
      selectRow,
      unSelectRow,
      getSelectionInfo,
      selectAll,
      selectNone,
      addCheckedKey
    } = useBsTree(
      flattenTreeNodeInfos,
      treeId,
      {
        getChildrenKey () {
          return props.props?.children || defaultTreeNodeProps.children;
        },
        getDisabledKey () {
          return props.props?.disabled || defaultTreeNodeProps.disabled;
        },
        getSelectionConfig () {
          let {
            showCheckbox,
            showRadio,
            checkStrictly
          } = props;
          return {
            type: showCheckbox ? 'checkbox' : (!showCheckbox && showRadio ? 'radio' : ''),
            checkStrictly,
            onSelectChange () {} // 选中项发生变化事件
          };
        }
      }
    );

    let isInited = false;
    watch([() => props.treeData], function ([treeData]) {
      nextTick(function () {
        let nodeProps = treeNodeProps.value;
        let nodeKey = props.nodeKey;

        let newFlattenTree: BsNodeInfo[] = [];
        treeDataToFlattarnArr2(treeId, treeData, nodeProps.children, nodeProps.disabled, 1, '', newFlattenTree, function (treeNodeItem) {
          let uid = nodeKey ? treeNodeItem.node[nodeKey] : getObjectHash(treeNodeItem.node);
          treeNodeItem.uid = uid;
        });

        flattenTreeNodeInfos.value = newFlattenTree;
        // let children = findChildrenWhichHasChildren2(treeId, '001', 'value', 'children', flattenTreeNodeInfos.value);

        clearCachedNodeInfo(treeId);
        linkParentCheckbox();
        isInited = true;
      });
    }, {
      immediate: true,
      deep: true
    });

    let watchCheckedKeysTimer: number;
    watch(() => [...props.checkedKeys], function (checkedKeys) {
      clearTimeout(watchCheckedKeysTimer);
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
        if (!props.showCheckbox && props.showRadio) { // 单选
          checkedKeysRoot.value.clear();
          checkedRows.value.clear();
          halfCheckedKeys.value.clear();
          checkedRowsCurrent.value.clear();
          if (checkedKeys?.length >= 1) {
            addCheckedKey(checkedKeys[0]);
          }
          return;
        }

        checkedKeysRoot.value = new Set(checkedKeys);
        if (checkedKeys.length == 0) {
          halfCheckedKeys.value.clear();
          checkedRows.value.clear();
          checkedRowsCurrent.value.clear();
          return;
        }
        linkParentCheckbox();
      }, 0);
    }, { immediate: true });

    let watchExpandedKeysTimer: number;
    watch(() => [...props.expandedKeys], function (expandedKeys: (string | number)[]) {
      // let timer2 = new Date().getTime();
      clearTimeout(watchExpandedKeysTimer);
      watchExpandedKeysTimer = setTimeout(function () {
        clearTimeout(watchExpandedKeysTimer);
        if (expandedKeys?.length > 0 && expandedKeysRoot.value !== expandedKeys) {
          let parentKeys: (string | number)[] = [];
          if (props.autoExpandParent) { // 自动展开父节点
            let flatTreeMapData = flattenTreeNodeInfos.value;
            let nodeKey = props.nodeKey;

            expandedKeys.forEach((expandedKey: string | number) => {
              // let nodeInfo = findNodeInfoByValue2(treeId, expandedKey, nodeKey, flatTreeMapData);
              let nodeInfo = findNodeByUid(treeId, expandedKey, flatTreeMapData);
              // console.log('findNodeByUid', treeId, expandedKey, flatTreeMapData);
              if (!nodeInfo) {
                return;
              }
              let nodeParents = nodeInfo.nodeLevelPath ? findParentsByNodeLevelPath2(nodeInfo.nodeLevelPath, flatTreeMapData) : [];
              nodeParents.forEach((nodeItem: any) => {
                parentKeys.push(nodeItem.node[nodeKey]);
              });
            });
          }
          expandedKeysRoot.value = Array.from(new Set([...expandedKeys, ...parentKeys, ...expandedKeysRoot.value]));
        }
      }, 0);
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
    } = useTreePagination(props, treeId, flattenTreeNodeInfos, toRef(props, 'treeData'), treeNodeProps);

    // 对外提供的函数
    let {
      getParentNodeByNodeLevelPath,
      getParentNodeByNodeValue,
      getNodeByNodeValue,
      getNodeByNodeLevelPath,
      getCheckedNodes,
      getCheckedKeys,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      getCheckedNodesLabel
    } = useTreeMethods(props, treeId, flattenTreeNodeInfos, getSelectionInfo, treeNodeProps);

    // 向子孙组件提供根tree上下文
    provide<TreeContext>(bsTreeContextKey, {
      ctx,
      flattenTreeNodeInfos,
      halfCheckedKeys,
      currentNode,
      addCheckedKey (nodeValue: string|number, nodeData: BsNodeData, hasChildren: boolean) {
        selectRow(nodeValue as string, nodeData);
        ctx.emit('check-change', nodeData, true);
        ctx.emit('update:checkedKeys', [...checkedKeysRoot.value]);
      },
      removeCheckedKey (nodeValue: string | number, nodeData: BsNodeData, hasChildren: boolean) {
        if (props.showRadio && !props.showCheckbox) {
          // console.log('removeCheckedKey radio');
          return;
        }
        unSelectRow(nodeValue as string, nodeData);
        ctx.emit('check-change', nodeData, false);
        ctx.emit('update:checkedKeys', [...checkedKeysRoot.value]);
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
      treeNodeProps,

      showMoreChildNode,
      showAllChildNode,
      getParentNodeByNodeLevelPath,
      getParentNodeByNodeValue,
      getNodeByNodeValue,
      getNodeByNodeLevelPath,
      getCheckedNodes,
      getCheckedKeys,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      getCheckedNodesLabel,
      expandCheckedNodesParent,
      addCheckedItem: selectRow,
      removeCheckedItem: unSelectRow,
      selectAll,
      selectNone
    };
  }
});
</script>
