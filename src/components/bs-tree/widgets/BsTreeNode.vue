<template>
  <div
    class="bs-tree-node"
    :class="{
      'is-expanded': isExpand,
      'is-tree-branch': !isLeaf,
      'is-tree-leaf': isLeaf,
      'is-checked': isChecked,
      'is-current': isCurrent
    }"
    :data-node-level="nodeLevel">
    <div
      ref="bsTreeNodeContentRef"
      class="bs-tree-node-content"
      @click="onNodeClick">
      <span class="bs-tree-node-indent" aria-hidden="true">
        <template v-if="(nodeLevel - 1) > 0">
          <span
            class="bs-tree-node-indent-item"
            v-for="item in (nodeLevel - 1)"
            :key="`indent_item-${item}`"></span>
        </template>
      </span>
      <span
        role="button"
        class="bs-tree-node-switcher"
        :class="{
          'bs-tree-node-switcher-noop': isLeaf,
          'bs-tree-node-switcher-open': isExpand
        }"
        @click.stop="onSwitcherClick">
        <!--<slot name="switcher-icon" :data="nodeData" :node="{}">
          <i class="bs-tree-node-switcher-arrow" role="img">
            <svg class="switcher-arrow-svg" viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z"></path></svg>
          </i>
        </slot>-->
        <BsTreeNodeSwitcherIcon v-if="!loadingData" :node-data="nodeData" :node="{}"></BsTreeNodeSwitcherIcon>
        <span v-else class="bs-tree-node-spinner">
          <BsSpinner class="bs-tree-node-spinner2" color-type="primary"></BsSpinner>
        </span>
      </span>
      <BsCheckbox
        v-if="showCheckbox"
        v-model="inputModel"
        :value="nodeValue"
        :indeterminate="isIndeterminate"
        :delive-context-to-form-item="false"
        :name="checkboxName"
        :disabled="isDisabled"></BsCheckbox>
      <BsRadio
        v-if="!showCheckbox && showRadio"
        v-model="inputModel"
        :value="nodeValue"
        :name="radioName"
        :delive-context-to-form-item="false"
        :disabled="isDisabled || isRadioDisabled"></BsRadio>
      <!--<div class="bs-tree-node-label">node label</div>-->
      <BsTreeNodeLabel
        :label-key="labelKey"
        :node-data="nodeData"
        :render-content="renderContent"
        :node-state="nodeState"></BsTreeNodeLabel>
    </div>
    <BsCollapseTransition v-if="isChildrenRendered">
      <div
        v-show="isExpand"
        class="bs-tree-node-children">
        <template v-if="nodeChildren.length > 0">
          <BsTreeNode
            v-for="(childNode, index) in nodeChildren"
            v-bind="$props"
            v-show="typeof childNode._nodeShow == 'boolean' ? childNode._nodeShow : true"
            :key="childNode[nodeKey]"
            :tree-id="treeId"
            :node-level="nodeLevel + 1"
            :node-data="childNode"
            :node-level-path="`${nodeLevelPath}_${index + 1}`"
            :parent-node-level-path="nodeLevelPath"></BsTreeNode>
          <BsTreeNodeOperate
            v-if="pageSize > 0 && totalPage > 0"
            :disabled="pageCount >= totalPage"
            :node-data="nodeData"
            :node-level="nodeLevel"
            :load-more-child-button-text="loadMoreChildButtonText"
            :load-all-child-button-text="loadAllChildButtonText"
            @show-more="showMoreChildNode"
            @show-all="showAllChildNode"></BsTreeNodeOperate>
        </template>
      </div>
    </BsCollapseTransition>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  nextTick,
  defineComponent,
  inject,
  onUnmounted
} from 'vue';
import BsCheckbox from '../../../components/bs-checkbox/BsCheckbox.vue';
import BsRadio from '../../../components/bs-radio/BsRadio.vue';
import BsSpinner from '../../../components/bs-spinner/BsSpinner.vue';
import BsTreeNodeLabel from './BsTreeNodeLabel.vue';
import BsTreeNodeSwitcherIcon from './BsTreeNodeSwitcherIcon.vue';
import BsTreeNodeOperate from './BsTreeNodeOperate.vue';
import BsCollapseTransition from '../../bs-collapse-transition/BsCollapseTransition.vue';
import { useTreePagination } from '../useTreePagination';
import { bsTreeProps, bsTreeContextKey, TreeContext } from '../bs-tree-types';
import { bsTreeNodeProps } from './bs-tree-node-props';
import {
  isPromise,
  hasClass,
  parents
} from '../../../utils/bs-util';
import { useTreeNode } from './useTreeNode';

export default defineComponent({
  name: 'BsTreeNode',
  components: {
    BsCheckbox,
    BsRadio,
    BsSpinner,
    BsTreeNodeLabel,
    BsTreeNodeSwitcherIcon,
    BsTreeNodeOperate,
    BsCollapseTransition
  },
  props: {
    ...bsTreeProps,
    ...bsTreeNodeProps,
    treeId: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  emit: ['node-expand'],
  setup (props: any, ctx:any) {
    const treeCtx = inject<TreeContext>(bsTreeContextKey)!;
    let {
      loadingData,
      dataLoaded,
      isLeaf,
      nodeValue,
      isChecked,
      isCurrent,
      isIndeterminate,
      isDisabled,
      isRadioDisabled
    } = useTreeNode(props, treeCtx);

    // 节点是否展开
    let isExpand = ref(false);
    let isManualExpanded = ref(false); // 是否为手动展开的
    let isChildrenRendered = ref(!props.renderAfterExpand || props.defaultExpandAll); // 子节点是否已经渲染
    /**
     * 展开或收起节点
     * @param expanded 是否展开
     * @param isManual 是否为用户手动展开
     */
    let toggleExpand = function (expanded?: boolean|undefined, isManual = true) {
      if (isLeaf.value) {
        return;
      }
      isManualExpanded.value = !!isManual;
      expanded = typeof expanded == 'boolean' ? expanded : !isExpand.value;
      if (!expanded) {
        isExpand.value = false;
        treeCtx.onNodeExpand(false, props.nodeData, { ...nodeState.value });
      } else {
        if (!isChildrenRendered.value) {
          isChildrenRendered.value = true;
          nextTick(function () {
            isExpand.value = true;
            treeCtx.onNodeExpand(true, props.nodeData, { ...nodeState.value });
          });
        } else {
          isExpand.value = true;
          treeCtx.onNodeExpand(true, props.nodeData, { ...nodeState.value });
        }
      }
    };

    // 分页相关数据
    let { pageCount, nodeChildren, totalPage, showMoreChildNode, showAllChildNode } = useTreePagination(props, props.treeId, treeCtx.flatTreeNodeInfoArr);

    // 复选框的值
    let inputModel = computed({
      get () {
        // 判断复选框是否选中
        if (props.showCheckbox) {
          return isChecked.value;
        }
        return isChecked.value ? nodeValue.value : '';
      },
      set (newVal) {
        if (newVal) {
          /* if (props.showCheckbox) {
            treeCtx.addCheckedKey(nodeValue.value, props.nodeData, nodeChildren.value.length > 0);
            return;
          } */
          treeCtx.addCheckedKey(nodeValue.value, props.nodeData, nodeChildren.value.length > 0);
        } else {
          // radio组件的值改变时不会进入这里，因此不用担心
          treeCtx.removeCheckedKey(nodeValue.value, props.nodeData, nodeChildren.value.length > 0);
        }
      }
    });

    // 节点状态
    let nodeState = computed(function () {
      return {
        // id: number
        // text: string,
        nodeKey: props.nodeKey,
        checked: isChecked.value,
        indeterminate: isIndeterminate.value,
        data: props.nodeData,
        expanded: isExpand.value,
        // parent: Node,
        // visible: boolean,
        isCurrent: isCurrent.value,
        pageCount: pageCount.value,
        totalPage: totalPage.value,
        // store: TreeStore,
        isLeafByUser: false,
        isLeaf: false,
        // canFocus: boolean,
        level: props.nodeLevel,
        levelPath: props.nodeLevelPath
        // loaded: false,
        // childNodes: Node[],
        // loading: loadingData.value
      };
    });

    // 动态加载子节点
    let lazyLoadChildren = function () {
      return new Promise(function (resolve) {
        let loadDataFn = props.loadDataFn;
        let children = (props.nodeData[props.childrenKey] || []);
        if (!props.lazy || loadingData.value || dataLoaded.value || isLeaf.value || children.length > 0) {
          resolve(true);
          return;
        }
        if (typeof loadDataFn !== 'function') {
          resolve(true);
          return;
        }
        loadingData.value = true;
        let result = props.loadDataFn(props.nodeData, nodeState.value);
        if (isPromise(result)) {
          result.then(function (isLoaded: boolean) {
            loadingData.value = false;
            dataLoaded.value = !!isLoaded;
            resolve(isLoaded);
          }).catch(function () {
            loadingData.value = false;
          });
        } else {
          loadingData.value = false;
          resolve(true);
        }
      });
    };

    // 处理展开/收起按钮点击事件
    let onSwitcherClick = function () {
      if (props.lazy) {
        lazyLoadChildren()
          .then(function () {
            toggleExpand();
          });
      } else {
        toggleExpand();
      }
    };

    let bsTreeNodeContentRef = ref<HTMLElement|null>(null);
    // 节点点击事件
    let onNodeClick = function (evt: MouseEvent) {
      let target = evt.target as HTMLElement;
      let nodeData = props.nodeData;

      treeCtx.currentNode.value = nodeData;
      treeCtx.onNodeClick(nodeData, { ...nodeState.value });
      if (target?.nodeName === 'INPUT') {
        return;
      }
      if (hasClass(target, 'bs-checkbox') || parents(target, 'bs-checkbox') || hasClass(target, 'bs-radio') || parents(target, 'bs-radio')) {
        return;
      }
      // 点击节点可以选中
      if (props.checkOnClickNode && !isDisabled.value) {
        if (!props.showRadio || !isRadioDisabled.value) {
          if (props.showRadio) {
            inputModel.value = nodeValue.value;
          } else {
            inputModel.value = isChecked.value ? '' : nodeValue.value;
          }
        }
      }
      if (!props.expandOnClickNode) {
        return;
      }
      if (props.lazy) {
        lazyLoadChildren()
          .then(function () {
            toggleExpand();
          });
      } else {
        toggleExpand();
      }
    };

    let doExpand = function (expandedKeys: string[]) {
      let nodeKey = nodeValue.value;

      if (!isManualExpanded.value) { // 在没有手动操作过的情况下才可以展开/收起
        let defaultExpandAll = props.defaultExpandAll;
        if (expandedKeys?.includes(nodeKey) || defaultExpandAll) {
          if (defaultExpandAll) {
            let defaultExpandNodeLevelMax = props.defaultExpandNodeLevelMax;
            defaultExpandNodeLevelMax = defaultExpandNodeLevelMax <= 0 ? 0 : defaultExpandNodeLevelMax;
            let nodeLevel = props.nodeLevel;
            // 如果设置了默认展开节点级别的最大值并且当前组件的级别比最大值大，则不展开
            if (defaultExpandNodeLevelMax != 0 && (nodeLevel > defaultExpandNodeLevelMax)) {
              return;
            }
          }
          if (props.lazy) {
            lazyLoadChildren()
              .then(function () {
                toggleExpand(true, false);
              });
          } else {
            // 加setTimeout是为了解决默认展开时丢失了展开效果问题
            let timer = setTimeout(function () {
              clearTimeout(timer);
              toggleExpand(true, false);
            }, 0);
          }
        } else {
          if (isExpand.value) {
            // isExpand.value = false;
            // 加setTimeout是为了解决默认展开时丢失了展开效果问题
            let timer = setTimeout(function () {
              clearTimeout(timer);
              toggleExpand(false, false);
            }, 0);
          }
        }
      }
    };
    watch(() => props.expandedKeys, doExpand, { immediate: true, deep: true });
    watch(isLeaf, function (isLeaf) {
      if (!isLeaf) {
        doExpand(props.expandedKeys);
      }
    });

    onUnmounted(function () {
      treeCtx.onNodeDestroy(props.nodeData);
    });

    return {
      isLeaf,
      isExpand,
      isChildrenRendered,
      isChecked,
      isCurrent,
      isIndeterminate,
      isDisabled,
      isRadioDisabled,
      dataLoaded,
      nodeChildren,
      nodeValue,
      pageCount,
      totalPage,
      inputModel,
      loadingData,
      nodeState,
      bsTreeNodeContentRef,

      onNodeClick,
      onSwitcherClick,

      toggleExpand,
      showMoreChildNode,
      showAllChildNode
    };
  }
});
</script>
