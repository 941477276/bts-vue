<template>
  <div
    class="bs-tabs-nav-wrapper"
    :class="[
      `tab-position-${tabPosition}`,
      `trigger-type-${triggerType}`,
      {
        'has-scroll': hiddenTabsCount > 0
      }
    ]"
    @keydown.prevent="onKeyDown">
    <button
      v-if="triggerType === 'button'"
      class="bs-tabs-nav-prev"
      aria-label="tabs nav prev"
      @click="scrollPrev">
      <BsiChevronLeft></BsiChevronLeft>
    </button>
    <slot name="left-extra"></slot>
    <div
      class="bs-tabs-nav-scroller"
      ref="navScrollerRef"
      :style="navScrollerStyle"
      @wheel.stop.prevent="onScroll">
      <ul
        class="bs-tabs-nav"
        ref="tabsNavRef"
        :style="`transform: translate(${-tabsNavTranslate.x}px, ${-tabsNavTranslate.y}px);`">
        <BsTabsNavItem
          v-for="item in panes"
          :name="item.name"
          :label="item.label"
          :id="item.id"
          :active-tab-id="activeTabId"
          :disabled="item.disabled"
          :item-slot="item.itemSlot"
          :key="item.name || item.id"
          :closeable="closeable || item.closeable"
          @click="onNavItemClick"
          @close="handleClose"></BsTabsNavItem>
        <li class="bs-tabs-ink-bar" ref="inkBarRef"></li>
      </ul>
    </div>
    <slot name="right-extra"></slot>
    <button
      v-if="triggerType === 'button'"
      class="bs-tabs-nav-next"
      aria-label="tabs nav next"
      @click="scrollNext">
      <BsiChevronRight></BsiChevronRight>
    </button>
    <div
      v-if="triggerType === 'more'"
      class="bs-tabs-nav-operation">
      <BsDropdown trigger="hover">
        <span class="more-btn">
          <BsiThreeDots></BsiThreeDots>
        </span>
        <template #content>
          <bs-dropdown-item
            v-for="hiddenTab in hiddenTabsOptions"
            :key="hiddenTab.id"
            :disabled="hiddenTab.disabled"
            @click="changeTab(hiddenTab.id)">
            {{ hiddenTab.text }}
          </bs-dropdown-item>
        </template>
      </BsDropdown>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  computed,
  onMounted,
  onUnmounted
} from 'vue';
import { BsiChevronLeft } from 'vue3-bootstrap-icon/es/icons/BsiChevronLeft';
import { BsiChevronRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronRight';
import { BsiThreeDots } from 'vue3-bootstrap-icon/es/icons/BsiThreeDots';
import BsDropdown from '../../../components/bs-dropdown/BsDropdown.vue';
import BsDropdownItem from '../../../components/bs-dropdown/widgets/BsDropdownItem.vue';
import BsTabsNavItem from './BsTabsNavItem.vue';
import {
  HiddenTabInfo,
  TabNavItem,
  TabPosition,
  TriggerTypeOnOverflow
} from '../bs-tabs-types';
import { useHiddenTabsInfo } from './useHiddenTabsInfo';
import { useActiveTab } from './useActiveTab';
import { useTabsNavMove } from './useTabsNavMove';
import {
  useGlobalEvent
} from '../../../hooks/useGlobalEvent';

export default defineComponent({
  name: 'BsTabsNav',
  components: {
    BsiChevronLeft,
    BsiChevronRight,
    BsiThreeDots,
    BsDropdown,
    BsDropdownItem,
    BsTabsNavItem
  },
  props: {
    panes: { // 面板列表
      type: Array as PropType<TabNavItem[]>,
      required: true,
      default () {
        return [];
      }
    },
    activeTabName: { // 当前激活的标签导航名称
      type: String,
      default: ''
    },
    triggerTypeOnOverflow: { // 当标签导航列表宽度超出父容器时选择超出部分标签导航的方式
      type: String as PropType<TriggerTypeOnOverflow>,
      default: 'auto'
    },
    hiddenTabsGreaterThan: { // 当triggerTypeOnOverflow为auto时，隐藏掉的标签导航个数达到该阈值时才会使用'more'
      type: Number,
      default: 5
    },
    tabPosition: { // 标签的位置
      type: String as PropType<TabPosition>,
      default: 'top'
    },
    tabBarMaxHeight: { // 标签导航最大高度
      type: [String, Number],
      default: 0
    },
    inkBarSpaceBetween: { // 标签导航高亮条向两端延伸的长度
      type: Number,
      default: 0
    },
    closeable: { // 是否可关闭
      type: Boolean,
      default: false
    }
  },
  emit: ['close', 'click', 'changeActiveTab'],
  setup (props: any, ctx: any) {
    let navScrollerRef = ref<HTMLElement|null>(null);
    let tabsNavRef = ref<HTMLElement|null>(null);
    let inkBarRef = ref<HTMLElement|null>(null);

    // 滚动容器的样式
    let navScrollerStyle = computed(function () {
      let tabBarMaxHeight = props.tabBarMaxHeight;
      if (props.tabPosition === 'top' || props.tabPosition === 'bottom') {
        return '';
      }
      if (!tabBarMaxHeight) {
        return '';
      }
      if (typeof tabBarMaxHeight === 'number') {
        return `max-height: ${tabBarMaxHeight}px;`;
      }
      return `max-height: ${tabBarMaxHeight}`;
    });

    // 计算当前激活的标签导航信息
    let { activeTabId, onNavItemClick } = useActiveTab(props, ctx, tabsNavRef, inkBarRef);
    // 计算隐藏的标签页信息
    let { hiddenTabsCount, isOverflow, hiddenTabs, calcHiddenTabInfo } = useHiddenTabsInfo(props, activeTabId, navScrollerRef, tabsNavRef);
    // 计算切换隐藏的标签页方式
    let triggerType = computed(function () {
      let propsTriggerType = props.triggerTypeOnOverflow;
      if (propsTriggerType !== 'auto') {
        return propsTriggerType;
      }
      return hiddenTabsCount.value >= props.hiddenTabsGreaterThan ? 'more' : 'button';
    });
    // 标签导航移动
    let { tabsNavTranslate, scrollPrev, scrollNext } = useTabsNavMove(props, navScrollerRef, tabsNavRef, inkBarRef, activeTabId, calcHiddenTabInfo);

    // 下拉框展示的隐藏的标签导航
    let hiddenTabsOptions = computed(function () {
      if (triggerType.value !== 'more') {
        return [];
      }
      let hiddenTabsArr = hiddenTabs.value;
      let panesArr = props.panes;
      return hiddenTabsArr.map(function (hiddenTabInfo: HiddenTabInfo) {
        let newHiddenTab = {
          ...hiddenTabInfo
        };
        if (!newHiddenTab.text) {
          let tabInfo = panesArr.find((item: TabNavItem) => item.id == newHiddenTab.id);
          if (tabInfo) {
            newHiddenTab.text = tabInfo.label || '未命名标签';
          }
        }
        return newHiddenTab;
      });
    });

    // 标签导航滚动事件
    // let timer:number;
    let lastScrollTime = 0;
    let onScroll = function (evt: WheelEvent) {
      evt = evt || window.event;
      let isDown = (evt as any).wheelDelta ? (evt as any).wheelDelta < 0 : evt.detail > 0;
      let now = new Date().getTime();
      if (lastScrollTime == 0 || now - lastScrollTime > 300) {
        lastScrollTime = now;
        if (isDown) {
          scrollNext();
        } else {
          scrollPrev();
        }
      }
    };
    // 上下左右健切换标签
    let onKeyDown = function (evt: KeyboardEvent) {
      evt = evt || window.event;
      let keyCode = evt.keyCode;
      // 上下左右健进行切换
      if ([37, 38, 39, 40].indexOf(keyCode) == -1) {
        return;
      }
      let tabNavItems = tabsNavRef.value?.querySelectorAll('.bs-tabs-nav-item') || [];
      if (tabNavItems.length == 0) {
        return;
      }
      let activeIdVal = activeTabId.value;
      let panesArr = props.panes;
      let activeTabIndex = panesArr.findIndex((item: TabNavItem) => item.id === activeIdVal);

      /* for (let i = 0, len = tabNavItems.length; i < len; i++) {
        if (tabNavItems[i].getAttribute('data-tabs-nav-item-id') === activeIdVal) {
          activeTabIndex = i;
          break;
        }
      } */

      if (keyCode === 37 || keyCode === 38) { // 上下
        let prevTabIndex = activeTabIndex;
        let prevTab = null;
        if (activeTabIndex == 0) {
          return;
        }
        while (prevTabIndex >= 0) {
          prevTabIndex--;
          if (!panesArr[prevTabIndex].disabled) {
            prevTab = panesArr[prevTabIndex];
          }
          if (prevTab) {
            break;
          }
        };
        if (prevTab) {
          activeTabId.value = prevTab.id;
        }
      } else { // 上下
        let nextTabIndex = activeTabIndex;
        let nextTab = null;
        let panesLen = panesArr.length;
        if (activeTabIndex == panesArr.length - 1) {
          return;
        }
        while (nextTabIndex < panesLen) {
          nextTabIndex++;
          if (!panesArr[nextTabIndex].disabled) {
            nextTab = panesArr[nextTabIndex];
          }
          if (nextTab) {
            break;
          }
        };
        if (nextTab) {
          activeTabId.value = nextTab.id;
        }
      }
    };

    let changeTab = function (tabId: string) {
      let tabItem = props.panes.find((item: TabNavItem) => item.id === tabId);
      if (tabItem.disabled) {
        return;
      }
      activeTabId.value = tabId;
    };

    // 标签关闭事件
    let handleClose = function (tabInfo: {id: string; name: string;}) {
      ctx.emit('close', tabInfo);
    };

    let resizeEventName = 'orientationchange' in window ? 'orientationchange' : 'resize';
    let resizeTime: number;
    let resizeEvent = function () {
      clearTimeout(resizeTime);
      resizeTime = setTimeout(function () {
        clearTimeout(resizeTime);
        calcHiddenTabInfo();
      }, 300);
    };

    onMounted(function () {
      // window.addEventListener(resizeEventName, resizeEvent, false);
      useGlobalEvent.addEvent('window', resizeEventName, resizeEvent);
    });
    onUnmounted(function () {
      // window.removeEventListener(resizeEventName, resizeEvent, false);
      useGlobalEvent.removeEvent('window', resizeEventName, resizeEvent);
    });

    return {
      navScrollerRef,
      tabsNavRef,
      inkBarRef,

      activeTabId,
      triggerType,
      hiddenTabsCount,
      navScrollerStyle,
      tabsNavTranslate,
      hiddenTabsOptions,

      onKeyDown,
      onNavItemClick,
      onScroll,
      scrollPrev,
      scrollNext,
      changeTab,
      handleClose
    };
  }
});
</script>
