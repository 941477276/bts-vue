<template>
<div
  class="bs-tabs"
  :class="[
    `bs-tabs-${tabPosition || 'top'}`
  ]">
  <div class="bs-tabs-header">
    <BsTabsNav
      v-if="panes.length > 0"
      :active-tab-name="modelValue"
      :tab-position="tabPosition || 'top'"
      :panes="panes"
      :trigger-type-on-overflow="triggerTypeOnOverflow"
      :hidden-tabs-greater-than="hiddenTabsGreaterThan"
      :tab-bar-max-height="tabBarMaxHeight"
      :ink-bar-space-between="inkBarSpaceBetween"
      :closeable="closeable"
      @change-active-tab="onActiveTabChange"
      @close="onClose"></BsTabsNav>
  </div>
  <div class="bs-tabs-body">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  reactive,
  onMounted,
  h,
  provide, computed
} from 'vue';
import BsTabsNav from './widgets/BsTabsNav.vue';
import {
  TabNavItem,
  TabsPaneContext,
  TabsContext,
  bsTabsContextKey,
  bsTabsProps
} from './bs-tabs-types';

export default defineComponent({
  name: 'BsTabs',
  components: {
    BsTabsNav
  },
  props: bsTabsProps,
  emit: ['close', 'click'],
  setup (props: any, ctx: any) {
    let activeTabId = ref('');
    // <bs-tabs-pane> 子组件上下文
    let tabsPanArr = ref<TabsPaneContext[]>([]);
    let panes = computed<TabNavItem[]>(function () {
      return tabsPanArr.value.map(tabsPaneCtx => {
        return {
          name: tabsPaneCtx.name,
          label: tabsPaneCtx.label,
          disabled: tabsPaneCtx.disabled,
          closeable: tabsPaneCtx.closeable,
          id: `tab_item-${tabsPaneCtx.index}`,
          itemSlot: tabsPaneCtx.labelSlot.label
        };
      });
    });
    let onActiveTabChange = function (activeTab: TabNavItem) {
      if (activeTab.id === activeTabId.value) {
        return;
      }
      activeTabId.value = activeTab.id;
      ctx.emit('update:modelValue', activeTab.name);
    };

    let changeActiveTab = function (activeTabName: string) {
      let pane = panes.value.find(item => item.name === activeTabName);
      if (!pane || pane.id == activeTabId.value) {
        return;
      }
      activeTabId.value = pane.id;
      ctx.emit('update:modelValue', pane.name);
    };

    // 存储子组件上下文
    let addChildComponentContext = function (childContext: TabsPaneContext) {
      let index = tabsPanArr.value.findIndex(item => item.id === childContext.id);
      if (index == -1) {
        tabsPanArr.value.push(childContext);
      }
    };
    // 移除子组件上下文
    let removeChildComponentContext = function (childContext: TabsPaneContext) {
      let index = tabsPanArr.value.findIndex(item => item.id === childContext.id);
      if (index != -1) {
        tabsPanArr.value.splice(index, 1);
      }
    };

    let onClose = function (tabInfo: {id: string; name: string;}) {
      ctx.emit('close', tabInfo.name);
    };

    // 向子孙组件提供上下文数据
    provide<TabsContext>(bsTabsContextKey, {
      activeTabId,
      addChildComponentContext,
      removeChildComponentContext
    });

    return {
      activeTabId,
      panes,
      tabsPanArr,

      changeActiveTab,
      onActiveTabChange,
      onClose
    };
  }
});
</script>
