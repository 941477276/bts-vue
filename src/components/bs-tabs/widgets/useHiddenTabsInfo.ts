import {
  ref,
  watch,
  Ref,
  nextTick,
  onMounted,
  onUnmounted
} from 'vue';
import {
  offset,
  hasClass,
  getEleTranslateValue,
  getStyle
} from '../../../utils/bs-util';
import {
  HiddenTabInfo
} from '../bs-tabs-types';

function getHiddenTabs (navScrollerRef: Ref<HTMLElement|null>, tabsNavRef: Ref<HTMLElement|null>, tabPosition: string) {
  let result = {
    hiddenTabs: [] as Array<HiddenTabInfo>, // 所有隐藏的标签导航
    leftHiddenTabs: [] as Array<HiddenTabInfo>, // 左边隐藏的标签导航
    rightHiddenTabs: [] as Array<HiddenTabInfo>, // 右边隐藏的标签导航
    // topHiddenTabs: [] as Array<HiddenTabInfo>,
    // bottomHiddenTabs: [] as Array<HiddenTabInfo>,
    isOverflow: false // 标签列表是否有溢出
  };
  let navScrollerEl = navScrollerRef.value;
  let tabsNavEl = tabsNavRef.value;
  if (!navScrollerEl || !tabsNavEl) {
    return result;
  }
  let navScrollerOffset = offset(navScrollerEl);
  // let navScrollerOffsetLeft = 0;
  let convertHiddenTabs = (ele: HTMLElement) => {
    return {
      id: ele.getAttribute('data-tabs-nav-item-id') as string,
      disabled: hasClass(ele, 'is-disabled'),
      text: (ele.innerText || ele.textContent) as string
    };
  };
  if (tabPosition === 'top' || tabPosition === 'bottom') {
    let navScrollerWidth = navScrollerEl.offsetWidth;
    let tabsNavWidth = tabsNavEl.offsetWidth;
    result.isOverflow = tabsNavWidth > navScrollerWidth;
    // 只有在标签列表有溢出的时候才会有隐藏的标签页
    if (result.isOverflow) {
      // let offsetRight = navScrollerOffset.left + navScrollerWidth;
      let navScrollerOffsetRight = navScrollerWidth;
      let tabsNavTranslateValue = getEleTranslateValue(getStyle(tabsNavEl, 'transform')) as {x: number; y: number; z: number; rotate: number};
      let leftHiddenTabs: HTMLElement[] = [];
      let rightHiddenTabs: HTMLElement[] = [];
      // 右侧是否有完全隐藏的元素
      let hasRightFullHiddenEl = false;
      // 右侧完全隐藏元素的index
      let rightFullHiddenElIndex = -1;
      let elArr = ([]).slice.call(tabsNavEl.querySelectorAll('.bs-tabs-nav-item'));
      let hiddenTabs = elArr.filter(function (navItem: HTMLElement, index: number) {
        // 如果右侧有完全隐藏的元素，则该元素后面所有兄弟元素都是完全隐藏的，因此就没必要进行下面这些计算了（性能优化下）
        if (hasRightFullHiddenEl) {
          return true;
        }
        // let offset = util.offset(navItem);
        let elOffsetLeft = navItem.offsetLeft;
        // 标签导航的offsetLeft需要加上 .bs-tabs-nav 位移的距离
        elOffsetLeft = elOffsetLeft + tabsNavTranslateValue.x;
        let elOffsetRight = elOffsetLeft + navItem.offsetWidth;
        // 元素的左侧在视图中
        let offsetStartInView = elOffsetLeft >= 0 && elOffsetLeft < navScrollerOffsetRight;
        let offsetEndInView = elOffsetRight > 0 && elOffsetRight < navScrollerOffsetRight;
        let isFullHidden = !offsetStartInView && !offsetEndInView; // 是否完全隐藏
        if (isFullHidden) {
          if (elOffsetRight <= 0) {
            leftHiddenTabs.push(navItem);
          } else if (elOffsetLeft >= navScrollerOffsetRight) {
            hasRightFullHiddenEl = true;
            rightFullHiddenElIndex = index;
            rightHiddenTabs.push(navItem);
          }
        }

        return isFullHidden;
      });
      if (hasRightFullHiddenEl) {
        rightHiddenTabs.push(...elArr.slice(rightFullHiddenElIndex + 1));
      }
      result.hiddenTabs = hiddenTabs.map(convertHiddenTabs);
      result.leftHiddenTabs = leftHiddenTabs.map(convertHiddenTabs);
      result.rightHiddenTabs = rightHiddenTabs.map(convertHiddenTabs);
    }
  } else {
    result.isOverflow = tabsNavEl.offsetHeight > navScrollerEl.offsetHeight;
    if (result.isOverflow) {
      // let offsetBottom = navScrollerOffset.top + navScrollerEl.offsetHeight;
      let navScrollerOffsetBottom = navScrollerEl.offsetHeight;
      let tabsNavTranslateValue = getEleTranslateValue(getStyle(tabsNavEl, 'transform')) as {x: number; y: number; z: number; rotate: number};
      let topHiddenTabs: HTMLElement[] = [];
      let bottomHiddenTabs: HTMLElement[] = [];
      // 底部是否有完全隐藏的元素
      let hasBottomFullHiddenEl = false;
      // 底部完全隐藏元素的index
      let bottomFullHiddenElIndex = -1;
      let elArr = ([]).slice.call(tabsNavEl.querySelectorAll('.bs-tabs-nav-item'));
      let hiddenTabs = elArr.filter(function (navItem: HTMLElement, index: number) {
        // 如果底部有完全隐藏的元素，则该元素后面所有兄弟元素都是完全隐藏的，因此就没必要进行下面这些计算了（性能优化下）
        if (hasBottomFullHiddenEl) {
          return true;
        }
        // let offset = util.offset(navItem);
        let elOffsetTop = navItem.offsetTop;
        // 标签导航的offsetTop需要加上 .bs-tabs-nav 位移的距离
        elOffsetTop = elOffsetTop + tabsNavTranslateValue.y;
        let elOffsetBottom = elOffsetTop + navItem.offsetHeight;
        // 元素的顶部在视图中
        let offsetStartInView = elOffsetTop >= 0 && elOffsetTop < navScrollerOffsetBottom;
        let offsetEndInView = elOffsetBottom > 0 && elOffsetBottom < navScrollerOffsetBottom;
        let isFullHidden = !offsetStartInView && !offsetEndInView; // 是否完全隐藏

        if (isFullHidden) {
          if (elOffsetBottom <= 0) {
            topHiddenTabs.push(navItem);
          } else if (elOffsetTop >= navScrollerOffsetBottom) {
            hasBottomFullHiddenEl = true;
            bottomFullHiddenElIndex = index;
            bottomHiddenTabs.push(navItem);
          }
        }

        return isFullHidden;
      });
      if (hasBottomFullHiddenEl) {
        bottomHiddenTabs.push(...elArr.slice(bottomFullHiddenElIndex + 1));
      }
      result.hiddenTabs = hiddenTabs.map(convertHiddenTabs);
      result.leftHiddenTabs = topHiddenTabs.map(convertHiddenTabs);
      result.rightHiddenTabs = bottomHiddenTabs.map(convertHiddenTabs);
    }
  }

  return result;
};

export function useHiddenTabsInfo (props: any, activeTabId: Ref<string>, navScrollerRef: Ref<HTMLElement|null>, tabsNavRef: Ref<HTMLElement|null>) {
  // 隐藏的tab项的数量
  let hiddenTabsCount = ref(0);
  // 标签列表是否溢出了
  let isOverflow = ref(false);
  let hiddenTabs = ref<HiddenTabInfo[]>([]);
  let leftHiddenTabs = ref<HiddenTabInfo[]>([]);
  let rightHiddenTabs = ref<HiddenTabInfo[]>([]);
  // let topHiddenTabs = ref<HiddenTabInfo[]>([]);
  // let bottomHiddenTabs = ref<HiddenTabInfo[]>([]);
  // let timer: number;
  let calcHiddenTabInfo = function (delay = true) {
    let timer: number;
    let doCalc = function () {
      clearTimeout(timer);
      let hiddenTabsInfo = getHiddenTabs(navScrollerRef, tabsNavRef, props.tabPosition);
      hiddenTabsCount.value = hiddenTabsInfo.hiddenTabs.length;
      isOverflow.value = hiddenTabsInfo.isOverflow;
      hiddenTabs.value = hiddenTabsInfo.hiddenTabs;
      leftHiddenTabs.value = hiddenTabsInfo.leftHiddenTabs;
      rightHiddenTabs.value = hiddenTabsInfo.rightHiddenTabs;
    };
    if (!delay) {
      doCalc();
      return;
    }
    // 之所以延迟310毫秒是为了更准确的计算。因为 .bs-tabs-nav 元素的 transition: transform 时间用了300毫秒
    timer = setTimeout(function () {
      clearTimeout(timer);
      doCalc();
    }, 310);
  };

  let stopWatch = watch([() => [...props.panes], activeTabId], function () {
    calcHiddenTabInfo();
  });
  onMounted(function () {
    calcHiddenTabInfo(false);
  });
  onUnmounted(function () {
    stopWatch();
  });

  return {
    hiddenTabsCount,
    isOverflow,
    hiddenTabs,
    leftHiddenTabs,
    rightHiddenTabs,
    calcHiddenTabInfo
  };
};
