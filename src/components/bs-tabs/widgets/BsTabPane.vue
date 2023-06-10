<template>
  <div
    v-if="!lazy || displayed || active"
    v-show="active"
    class="bs-tab-pane"
    :data-id="id">
    <slot v-if="contentDisplay"></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  h,
  ref,
  toRef,
  computed,
  watch,
  inject,
  onMounted
} from 'vue';
import {
  TabsContext,
  bsTabsContextKey,
  bsTabPaneProps
} from '../bs-tabs-types';
import { useDeliverContextToParent } from '../../../hooks/useDeliverContextToParent';

let bsTabsPaneCount = 0;
export default defineComponent({
  name: 'BsTabPane',
  props: bsTabPaneProps,
  setup (props: any, ctx: any) {
    let index = ++bsTabsPaneCount;
    let id = `bs_tabs_pane-${index}`;
    useDeliverContextToParent<TabsContext>(bsTabsContextKey, {
      id,
      index,
      label: toRef(props, 'label'),
      name: toRef(props, 'name'),
      disabled: toRef(props, 'disabled'),
      closeable: toRef(props, 'closeable'),
      labelSlot: ctx.slots
    });

    let displayed = ref(false);

    let tabsContext = inject<TabsContext>(bsTabsContextKey) as TabsContext;

    // 计算tab是否选中
    let active = computed(function () {
      let activeTabId = tabsContext.activeTabId.value;
      if (!activeTabId) {
        return false;
      }
      let activeTabIdIndex = Number(activeTabId.split('-')[1]);
      let flag = activeTabIdIndex === index;
      return flag;
    });

    let contentDisplay = computed(function () {
      if (!props.contentLazyRender) {
        return true;
      }
      return displayed.value;
    });

    let stopWatchActive = watch(active, function (newActive) {
      if (newActive) {
        displayed.value = true;
        stopWatchActive();
      }
    });

    return {
      displayed,
      id,
      active,
      contentDisplay
    };
  }
});
</script>
