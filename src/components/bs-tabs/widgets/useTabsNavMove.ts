import {
  Ref,
  ref,
  reactive,
  watch,
  nextTick,
  onMounted,
  onUnmounted
} from 'vue';
import {
  eleIsInParentView
} from '../../../utils/bs-util';

/* let getPaneById = function (id: string, panes: any[]) {
  return panes.find((pane: {[key: string]: any}) => {
    return pane.id === id;
  });
}; */

// 获取元素距其指定父元素之间的距离
let getOffsetInfo = function (navItemEl: HTMLElement, navScrollerEl: HTMLElement) {
  let navItemOffsetLeft = navItemEl.offsetLeft;
  let navItemOffsetTop = navItemEl.offsetTop;
  return {
    navItemOffsetLeft,
    navItemOffsetTop,
    navItemOffsetRight: navItemOffsetLeft + navItemEl.offsetWidth,
    navItemOffsetBottom: navItemOffsetTop + navItemEl.offsetHeight,
    navScrollerWidth: navScrollerEl.offsetWidth,
    navScrollerHeight: navScrollerEl.offsetHeight
  };
};

// 移动标签导航高亮条
function moveInkBar (tabPositionIsHorizontal: boolean, inkBarSpaceBetween: number, inkBarEl: HTMLElement, activeTabEl: HTMLElement) {
  if (tabPositionIsHorizontal) {
    // inkBarEl.style.left = (activeTabEl.offsetLeft - inkBarSpaceBetween) + 'px';
    inkBarEl.style.transform = `translate(${(activeTabEl.offsetLeft - inkBarSpaceBetween) + 'px'}, 0)`;
    inkBarEl.style.width = activeTabEl.offsetWidth + (inkBarSpaceBetween * 2) + 'px';
    inkBarEl.style.top = '';
    inkBarEl.style.height = '';
  } else {
    // inkBarEl.style.top = (activeTabEl.offsetTop - inkBarSpaceBetween) + 'px';
    inkBarEl.style.transform = `translate(0, ${(activeTabEl.offsetTop - inkBarSpaceBetween) + 'px'})`;
    inkBarEl.style.height = activeTabEl.offsetHeight + (inkBarSpaceBetween * 2) + 'px';
    inkBarEl.style.left = '';
    inkBarEl.style.width = '';
  }
}

export function useTabsNavMove (props: any, navScrollerRef: Ref<HTMLElement|null>, tabsNavRef: Ref<HTMLElement|null>, inkBarRef: Ref<HTMLElement|null>, activeTabId: Ref<string>, calcHiddenTabInfo: () => void) {
  let tabsNavTranslate = reactive({
    x: 0,
    y: 0
  });

  // 移动标签导航列表容器至指定标签导航
  let scrollNavListToTab = function (tabIdOrEl: string|HTMLElement, needCalcHiddenTabs = false) {
    let tabsNavEl = tabsNavRef.value as HTMLElement;
    // 目标标签导航元素
    let tabEl;
    if (typeof tabIdOrEl == 'string') {
      tabEl = tabsNavEl?.querySelector(`[data-tabs-nav-item-id=${tabIdOrEl}]`) as HTMLElement;
    } else {
      tabEl = tabIdOrEl as HTMLElement;
    }

    // let inkBarEl = inkBarRef.value as HTMLElement;
    if (!tabEl) {
      return;
    }
    // 判断元素在父容器中是否完全可见
    let elIsFullView = eleIsInParentView(tabEl, navScrollerRef.value as HTMLElement, -tabsNavTranslate.x, -tabsNavTranslate.y);
    let tabPositionIsHorizontal = props.tabPosition === 'top' || props.tabPosition === 'bottom';

    if (tabPositionIsHorizontal) {
      // 元素在水平方向完全可见，则不做任何操作
      if (!elIsFullView.horizontal) {
        let offsetInfo = getOffsetInfo(tabEl, navScrollerRef.value as HTMLElement);
        let translateX = 0;
        if (offsetInfo.navItemOffsetLeft > 0) {
          translateX = offsetInfo.navItemOffsetRight - offsetInfo.navScrollerWidth;
          // 如果translateX大于0，并且小于标签导航列表可视区域宽度，则说明当前标签页在最开始的位置
          if (-translateX > 0 && -translateX < offsetInfo.navScrollerWidth) {
            translateX = 0;
          }
        } else {
          translateX = 0;
        }
        tabsNavTranslate.x = translateX;
        tabsNavTranslate.y = 0;
        // tabsNavEl.style.transform = `translate(${-translateX}px, 0)`;
      }
    } else {
      if (!elIsFullView.vertical) {
        let offsetInfo = getOffsetInfo(tabEl, navScrollerRef.value as HTMLElement);
        let translateY = 0;
        if (offsetInfo.navItemOffsetTop > 0) {
          translateY = offsetInfo.navItemOffsetBottom - offsetInfo.navScrollerHeight;
          // 如果translateX大于0，并且小于标签导航列表可视区域高度，则说明当前标签页在最开始的位置
          if (-translateY > 0 && -translateY < offsetInfo.navScrollerHeight) {
            translateY = 0;
          }
        } else {
          translateY = 0;
        }
        tabsNavTranslate.x = 0;
        tabsNavTranslate.y = translateY;
        // tabsNavEl.style.transform = `translate(${-translateY}px, 0)`;
      }
    }

    if (needCalcHiddenTabs) {
      calcHiddenTabInfo();
    }
  };

  let stopWatchActiveTabId = watch([activeTabId, () => props.tabPosition], function () {
    nextTick(function () {
      let activeTabIdVal = activeTabId.value;
      if (!activeTabIdVal) {
        return;
      }
      let tabsNavEl = tabsNavRef.value as HTMLElement;
      // 当前激活的标签导航元素
      let activeTabEl = tabsNavEl?.querySelector(`[data-tabs-nav-item-id=${activeTabIdVal}]`) as HTMLElement;
      let inkBarEl = inkBarRef.value as HTMLElement;
      let tabPositionIsHorizontal = props.tabPosition === 'top' || props.tabPosition === 'bottom';
      if (!activeTabEl) {
        return;
      }
      // 移动标签导航列表容器至指定标签导航
      scrollNavListToTab(activeTabEl);
      // 移动标签导航高亮条
      moveInkBar(tabPositionIsHorizontal, props.inkBarSpaceBetween, inkBarEl, activeTabEl);
    });
  }, { immediate: true });

  // 标签导航列表移动至上一页
  let scrollPrev = function () {
    let isHorizontal = props.tabPosition === 'top' || props.tabPosition === 'bottom';
    let navScrollerEl = navScrollerRef.value as HTMLElement;
    let navScrollerWidthOrHeight = isHorizontal ? navScrollerEl.offsetWidth : navScrollerEl.offsetHeight;
    let currentOffset = isHorizontal ? tabsNavTranslate.x : tabsNavTranslate.y;

    if (!currentOffset) return;

    let newOffset = currentOffset > navScrollerWidthOrHeight ? currentOffset - navScrollerWidthOrHeight : 0;

    if (isHorizontal) {
      tabsNavTranslate.x = newOffset;
      tabsNavTranslate.y = 0;
    } else {
      tabsNavTranslate.x = 0;
      tabsNavTranslate.y = newOffset;
    }

    // 计算隐藏的标签导航
    calcHiddenTabInfo();
  };

  // 标签导航列表移动至下一页
  let scrollNext = function () {
    let isHorizontal = props.tabPosition === 'top' || props.tabPosition === 'bottom';
    let navScrollerEl = navScrollerRef.value as HTMLElement;
    let tabsNavEl = tabsNavRef.value as HTMLElement;
    let navScrollerWidthOrHeight = isHorizontal ? navScrollerEl.offsetWidth : navScrollerEl.offsetHeight;
    let tabsNavWidthOrHeight = isHorizontal ? tabsNavEl.offsetWidth : tabsNavEl.offsetHeight;
    let currentOffset = isHorizontal ? tabsNavTranslate.x : tabsNavTranslate.y;

    if (tabsNavWidthOrHeight - currentOffset <= navScrollerWidthOrHeight) return;

    let newOffset = tabsNavWidthOrHeight - currentOffset > navScrollerWidthOrHeight * 2
      ? currentOffset + navScrollerWidthOrHeight
      : (tabsNavWidthOrHeight - navScrollerWidthOrHeight);

    if (isHorizontal) {
      tabsNavTranslate.x = newOffset;
      tabsNavTranslate.y = 0;
    } else {
      tabsNavTranslate.x = 0;
      tabsNavTranslate.y = newOffset;
    }

    // 计算隐藏的标签导航
    calcHiddenTabInfo();
  };

  onUnmounted(function () {
    stopWatchActiveTabId();
  });

  return {
    scrollNext,
    scrollPrev,
    scrollNavListToTab,
    tabsNavTranslate
  };
};
