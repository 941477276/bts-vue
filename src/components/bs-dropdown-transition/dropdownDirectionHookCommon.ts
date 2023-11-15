import {
  offset,
  scrollTop,
  scrollLeft,
  eleIsInScrollParentView,
  scrollWidth
} from '../../utils/bs-util';
export interface DropdownOffset {
  top?: number;
  left?: number;
  // bottom?: number;
  // right?: number;
}

export interface DropdownDirection {
  bottom: null|number;
  direction: string;
  horizontal: boolean;
  horizontalVisibleWidth: number;
  left: number;
  right: number|number;
  scrollParentHorizontal: boolean;
  scrollParentVertical: boolean;
  top: number;
  vertical: boolean;
  verticalVisibleHeight: number;
  isRollback?: boolean; // 是否为回滚到了默认方向
};

export interface VirtualMouseEvent {
  clientX: number;
  clientY: number;
  target?: EventTarget|null;
  contextElement?: HTMLElement|null; // 上下文元素
}

export const endReg = /(\w+)End$/;
export const centerReg = /(\w+)Center$/;
export const documentNodeNames = ['HTML', 'BODY'];

/**
 * 判断元素是否完全出现在视口中，优化性能，减少计算scrollParent、documentHasScroll、documentScrollInfo
 * @param {object} options
 * @returns {{horizontal: boolean, vertical: boolean}}
 */
export function eleIsInView (options: any) {
  let {
    ele,
    top,
    left,
    needSubtractScrollOffset,
    documentHasScroll,
    documentScrollInfo,
    bodyScrollVisible,
    referenceIsInFixedPosition,
    scrollParent, // 获取目标元素有滚动条的父级容器
    windowWH,
    targetIsInFixedPosition,
    targetIsInBody
    // verticalRight, // 垂直方向展示且右对齐时的right值
    // horizontalBottom // 水平方向展示且底部对齐时的bottom值
  } = options;
  // var documentHasScroll = hasScroll();
  // 元素有滚动条的父级元素的滚动条高度
  let eleWrapperScrollTop = 0;
  let eleWrapperScrollLeft = 0;

  // 获取目标元素所处有滚动条的父级容器
  // let scrollParent = getScrollParent(ele);
  let scrollParentVertical = true;
  let scrollParentHorizontal = true;
  // 如果当前元素有滚动条的父级元素并且不是body，则判断元素在有滚动条的父级元素中是否可见
  if (scrollParent && !documentNodeNames.includes(scrollParent.nodeName)) {
    eleWrapperScrollTop = scrollTop(scrollParent);
    eleWrapperScrollLeft = scrollLeft(scrollParent);
    let newTop = top;
    let newLeft = left;
    // 只有参照元素是在固定定位的容器中并且目标元素插入在body时top、left才需要减去浏览器滚动条滚动的距离
    if (referenceIsInFixedPosition && targetIsInBody) {
      if (documentHasScroll.vertical && !bodyScrollVisible.vertical) {
        newTop -= documentScrollInfo.top;
      }
      if (documentHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        newLeft -= documentScrollInfo.left;
      }
    }
    let scroll = eleIsInScrollParentView(ele, scrollParent, newTop, newLeft, needSubtractScrollOffset);
    scrollParentHorizontal = scroll.horizontal;
    scrollParentVertical = scroll.vertical;
  }
  if (!top || !left) {
    var offsetValue = offset(ele);
    if (!top) {
      top = offsetValue.top;
    }
    if (!left) {
      left = offsetValue.left;
    }
  }

  // 目标元素不在固定定位的元素中时需减去浏览器滚动条滚动的距离
  if (!targetIsInFixedPosition) {
    if (documentHasScroll.vertical) {
      top -= documentScrollInfo.top;
    }
    if (documentHasScroll.horizontal) {
      left -= documentScrollInfo.left;
    }
  }
  top = top - eleWrapperScrollTop;
  left = left - eleWrapperScrollLeft;

  let bottom = ele.offsetHeight + top;
  let right = ele.offsetWidth + left;
  // let windowWH = getDocumentWidthHeight();

  // 如果有浏览器有滚动条，则需减去滚动条的宽度
  if (documentHasScroll.vertical) {
    windowWH.width = windowWH.width - scrollWidth().vertical;
  }
  if (documentHasScroll.horizontal) {
    windowWH.height = windowWH.height - scrollWidth().horizontal;
  }
  let verticalFullVisible = top > 0 && top < windowWH.height && bottom > 0 && bottom <= windowWH.height;
  let horizontalFullVisible = left > 0 && left < windowWH.width && right > 0 && right <= windowWH.width;
  // 目标元素垂直方向可见高度
  let verticalVisibleHeight = -1;
  let horizontalVisibleWidth = -1;
  if (!verticalFullVisible) {
    if (top < 0) {
      verticalVisibleHeight = ele.offsetHeight + top;
    } else if (bottom > windowWH.height) {
      verticalVisibleHeight = bottom - windowWH.height;
    }
  }

  if (!horizontalFullVisible) {
    if (left < 0) {
      horizontalVisibleWidth = ele.offsetWidth + left;
    } else if (right > windowWH.width) {
      horizontalVisibleWidth = right - windowWH.width;
    }
  }

  return {
    scrollParentHorizontal,
    scrollParentVertical,
    horizontalVisibleWidth,
    verticalVisibleHeight,
    vertical: verticalFullVisible,
    horizontal: horizontalFullVisible
  };
}
