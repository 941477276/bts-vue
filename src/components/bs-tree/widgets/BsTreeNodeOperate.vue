<template>
  <div
    class="bs-tree-node-children-operate"
    :class="{
      'is-disabled': disabled
    }">
    <span class="bs-tree-node-indent" aria-hidden="true">
      <template v-if="(nodeLevel) > 0">
        <span
          class="bs-tree-node-indent-item"
          v-for="item in (nodeLevel)"
          :key="`indent_item2-${item}`"></span>
      </template>
    </span>
    <span
      v-if="showSwitcher"
      role="button"
      class="bs-tree-node-switcher bs-tree-node-switcher-noop">
      <BsTreeNodeSwitcherIcon :node-data="nodeData" :node="{}"></BsTreeNodeSwitcherIcon>
    </span>
    <span
      class="bs-tree-node-loadmore"
      @click="showMoreChildNode">{{ loadMoreChildButtonText }}</span>
    <i class="tree-node-split-line">/</i>
    <span
      class="bs-tree-node-loadmore"
      @click="showAllChildNode">{{ loadAllChildButtonText }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BsTreeNodeSwitcherIcon from './BsTreeNodeSwitcherIcon.vue';

export default defineComponent({
  name: 'BsTreeNodeOperate',
  components: {
    BsTreeNodeSwitcherIcon
  },
  props: {
    nodeLevel: {
      type: Number,
      default: 0
    },
    nodeData: {
      type: Object,
      default () {
        return {};
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showSwitcher: {
      type: Boolean,
      default: true
    },
    loadMoreChildButtonText: {
      type: String,
      default: '...显示更多'
    },
    loadAllChildButtonText: {
      type: String,
      default: '显示全部'
    }
  },
  emits: ['show-more', 'show-all'],
  setup (props: any, ctx: any) {
    let showMoreChildNode = function () {
      if (props.disabled) {
        return;
      }
      ctx.emit('show-more');
    };
    let showAllChildNode = function () {
      if (props.disabled) {
        return;
      }
      ctx.emit('show-all');
    };

    return {
      showMoreChildNode,
      showAllChildNode
    };
  }
});
</script>
