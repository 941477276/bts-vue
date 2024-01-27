import {
  offset,
  eleIsInFixedParents,
  getStyle,
  scrollTop,
  scrollLeft,
  getScrollParent,
  getEleTranslateValue,
  hasScroll,
  eleIsInScrollParentView,
  getDocumentWidthHeight,
  scrollWidth,
  kebabCase2CamelCase,
  checkTerminal
} from '../../utils/bs-util';

import {
  DropdownOffset,
  DropdownDirection,
  endReg,
  centerReg,
  documentNodeNames,
  eleIsInView
} from './dropdownDirectionHookCommon';

/* export interface DropdownOffset {
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
}; */

/**
 * 计算绝对定位元素能完全出现在视口的展示方位
 * @param referenceEl 参照元素
 * @param targetEl 目标元素
 * @param direction 默认方向，支持top、bottom、left、right
 * @param tryAllDirection 当切换到direction对应的反方向目标元素也不能完全出现在视口时是否尝试切换其他方向
 * @param tryEndDirection 是否尝试切换当前方向的尾部方向
 * @param dropdownOffset 下拉菜单距参照元素的偏移量
 */
/* const endReg = /(\w+)End$/;
const centerReg = /(\w+)Center$/;
const documentNodeNames = ['HTML', 'BODY']; */
export function getDropdownDirection (referenceEl: HTMLElement, targetEl: HTMLElement, direction: string, tryAllDirection = false, tryEndDirection = true, dropdownOffset?: DropdownOffset): DropdownDirection {
  if (!referenceEl || !targetEl || !direction) {
    throw new Error('One of the parameters of referenceEl, targetEl, direction is missing!');
  }
  direction = kebabCase2CamelCase(direction);
  let defaultDirection = direction;
  let defaultDirectionIsEnd = false;
  let defaultDirectionIsCenter = false;
  if (endReg.test(direction)) {
    direction = RegExp.$1;
    defaultDirectionIsEnd = true;
  }
  if (centerReg.test(direction)) {
    direction = RegExp.$1;
    defaultDirectionIsCenter = true;
  }
  let scrollInfo = {
    top: scrollTop(),
    left: scrollLeft()
  };
  var referenceOffset = offset(referenceEl);
  // 判断参照元素是否在position: fixed的元素中
  var referenceIsInFixedPosition = eleIsInFixedParents(referenceEl);
  // 目标元素是否在在position: fixed的元素中
  var targetIsInFixedPosition = eleIsInFixedParents(targetEl);
  var referenceRect = referenceEl.getBoundingClientRect();
  var styleDisplay = targetEl.style.display;
  var styleOpacity = targetEl.style.opacity;
  var targetElDisplay = getStyle(targetEl, 'display');
  var targetElIsFixed = getStyle(targetEl, 'position') === 'fixed';
  if (targetElDisplay === 'none') {
    targetEl.style.opacity = '0';
    targetEl.style.display = 'block';
  }
  var needSubtractScrollOffset = true; // 判断元素是否处于滚动容器视口时是否需要减去浏览器滚动条滚动的距离
  let targetElOffsetParent = (targetEl.offsetParent || document.body) as HTMLElement;

  // 判断目标元素的position不为static的父级元素是否为body
  let targetElOffsetParentIsDocument = !targetElOffsetParent || (documentNodeNames.includes(targetElOffsetParent.nodeName));
  let targetElOffsetParentOffset = { top: 0, left: 0 };
  if (!targetElOffsetParentIsDocument) {
    targetElOffsetParentOffset = offset(targetElOffsetParent);
  }
  // var targetElOpacity = tool.getStyle(targetEl, 'opacity');
  if (referenceIsInFixedPosition) {
    var bodyOverflow = getStyle(document.body, 'overflow');
    if (!targetElIsFixed && targetElOffsetParentIsDocument && bodyOverflow !== 'hidden') {
      // 如果reference元素处于fixed定位的父级容器，并且目标元素处于body元素下且不是fixed定位，则需要加上浏览器滚动条滚动的距离
      referenceOffset.top = referenceOffset.top + scrollTop();
      referenceOffset.left = referenceOffset.left + scrollLeft();
    }
    if (!targetElIsFixed && !targetElOffsetParentIsDocument) {
      needSubtractScrollOffset = true;
    }
  }

  let referenceScrollParent = getScrollParent(referenceEl);
  let referenceElWrapperScrollTop = 0;
  let referenceElWrapperScrollLeft = 0;
  // 如果参照元素有滚动条的父级元素并且不是body，则获取参照元素有滚动条的父级元素的滚动条位置
  if (referenceScrollParent && !documentNodeNames.includes(referenceScrollParent.nodeName)) {
    referenceElWrapperScrollTop = scrollTop(referenceScrollParent);
    referenceElWrapperScrollLeft = scrollLeft(referenceScrollParent);
  }
  // let targetScrollParent = getScrollParent(targetEl);
  // 判断下拉内容是否插入在body中
  // let targetIsInBody = targetScrollParent && documentNodeNames.includes(targetScrollParent.nodeName);
  // let targetIsInBody = documentNodeNames.includes(targetEl.parentElement!.nodeName);
  // 目标元素的position不为static的父级元素如果是body，则下拉内容是插入到body中（因为下拉元素是相对于position不为static的父级元素进行定位的）
  let targetIsInBody = documentNodeNames.includes(targetElOffsetParent.nodeName);
  /* let bodyHasScroll = {
    vertical: false,
    horizontal: false
  }; */
  let bodyHasScroll = hasScroll();
  let bodyScrollVisible = {
    vertical: false,
    horizontal: false
  };
  if (targetIsInBody) {
    bodyScrollVisible = {
      vertical: getStyle(document.body, 'overflow-y') != 'hidden',
      horizontal: getStyle(document.body, 'overflow-x') != 'hidden'
    };
  }
  let bodyScrollWidth = scrollWidth();
  let terminal = checkTerminal();
  // 解决手机端浏览器地址栏隐藏后bottom值计算不准确问题
  let windowWH = {
    width: !terminal.pc ? Math.min(document.documentElement.clientWidth, window.innerWidth) : window.innerWidth,
    height: !terminal.pc ? Math.min(document.documentElement.clientHeight, window.innerHeight) : window.innerHeight
  };

  var targetElRect = targetEl.getBoundingClientRect();
  var targetElTransform = getEleTranslateValue(getStyle(targetEl, 'transform'));
  // 如果dom元素设置了scale的话需要根据当前的宽高计算出元素真正的宽高，否则计算位置会不准确
  targetElRect.width = Math.round(targetElRect.width / Math.abs(targetElTransform.scaleX));
  targetElRect.height = Math.round(targetElRect.height / Math.abs(targetElTransform.scaleY));

  var dropdownOffsetTop = dropdownOffset?.top || 0;
  var dropdownOffsetLeft = dropdownOffset?.left || 0;

  var calcedDirection = null;
  var directionCalcFlow = []; // 存储按流程计算方向的函数，当下拉菜单在某个方向上不能完全展示时会自动切换一个方向
  var handleBottom = function (isBottomRight: boolean, isCenter?: boolean) {
    // 当参照物在有滚动条的容器中且目标元素插入在body时需减去容器滚动条滚动的距离
    // var top = referenceOffset.top + referenceRect.height - (targetElOffsetParentIsDocument ? referenceElWrapperScrollTop : 0);
    // var left = isBottomRight ? Math.floor(referenceOffset.left - (targetElOffsetParentIsDocument ? referenceElWrapperScrollLeft : 0) - (targetElRect.width - referenceRect.width)) : (referenceOffset.left - (targetElOffsetParentIsDocument ? referenceElWrapperScrollLeft : 0));
    var top = referenceOffset.top + referenceRect.height;
    var left = isBottomRight ? Math.floor(referenceOffset.left - (targetElRect.width - referenceRect.width)) : (referenceOffset.left);
    if (!isBottomRight && isCenter) {
      left -= (targetElRect.width - referenceRect.width) / 2;
    }
    var bottom: number|null = null;
    var right: number|null = null;
    // var isInView = eleIsInView(targetEl, top, left, needSubtractScrollOffset);
    top += dropdownOffsetTop;
    left += dropdownOffsetLeft;
    if (targetIsInBody) {
      if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        top += scrollInfo.top;
      }

      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        left += scrollInfo.left;
      }
    }
    var isInView = eleIsInView({
      ele: targetEl,
      top,
      left,
      needSubtractScrollOffset,
      bodyScrollVisible,
      targetIsInBody,
      referenceIsInFixedPosition,
      documentHasScroll: bodyHasScroll,
      documentScrollInfo: scrollInfo,
      scrollParent: referenceScrollParent, // 获取目标元素所处有滚动条的父级容器
      windowWH: { ...windowWH },
      targetIsInFixedPosition
    });
    // 如果目标元素插入到了body中，则需减去参照元素有滚动条父级容器滚动条滚动到距离（调用eleIsInView函数前不需要减去，因为eleIsInView函数内部计算时会减去）
    top -= targetIsInBody ? referenceElWrapperScrollTop : 0;
    left -= targetIsInBody ? referenceElWrapperScrollLeft : 0;

    if (targetIsInBody) {
      // 如果目标元素插入在body中，则bottom的值为浏览器可见高度减去参照元素至浏览器最顶端的距离，再加上参照元素滚动容器滚动滚动的距离即可
      // 实际为：浏览器可见高度-参照元素在可见高度内的位置-浏览器滚动条滚动的距离+参照元素滚动容器滚动滚动的距离
      // bottom = window.innerHeight - referenceOffset.top + referenceElWrapperScrollTop;
      right = windowWH.width - referenceOffset.left + referenceElWrapperScrollLeft - referenceRect.width;
      // 如果浏览器有垂直滚动条，则需减去垂直滚动条的宽度，因为前面计算right值的时候使用的是window.innerWidth，window.innerWidth包含了滚动条
      if (bodyHasScroll.vertical && bodyScrollVisible.vertical) {
        right -= bodyScrollWidth.vertical;
      }
      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        right -= scrollInfo.left;
      }
    } else {
      // bottom = targetElOffsetParent.offsetHeight - (referenceOffset.top - targetElOffsetParentOffset.top);// + referenceElWrapperScrollTop;
      right = targetElOffsetParent.clientWidth - (referenceOffset.left - targetElOffsetParentOffset.left) - referenceRect.width; // + referenceElWrapperScrollLeft;
    }
    /* if (targetIsInBody) {
      /!* if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        bottom -= scrollInfo.top;
      } *!/
      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        right -= scrollInfo.left;
      }
    } */

    // 计算top值时需减去目标元素position不为static的父级元素的top值
    let newTop = top - targetElOffsetParentOffset.top;
    let newLeft = left - targetElOffsetParentOffset.left;
    newTop -= dropdownOffsetTop;
    newLeft -= dropdownOffsetLeft;
    return {
      ...isInView,
      direction: (!isBottomRight && isCenter) ? 'bottomCenter' : (isBottomRight ? 'bottomEnd' : 'bottom'),
      top: newTop,
      left: newLeft,
      bottom,
      right: isBottomRight ? right : null
    };
  };
  let handleTop = function (isTopRight: boolean, isCenter?: boolean) {
    // var top = referenceOffset.top - targetElRect.height - (targetElOffsetParentIsDocument ? referenceElWrapperScrollTop : 0);
    // var left = isTopRight ? Math.floor(referenceOffset.left - (targetElOffsetParentIsDocument ? referenceElWrapperScrollLeft : 0) - (targetElRect.width - referenceRect.width - (targetElOffsetParentIsDocument ? referenceElWrapperScrollLeft : 0))) : referenceOffset.left;
    var top = referenceOffset.top - targetElRect.height;
    var left = isTopRight ? Math.floor(referenceOffset.left - (targetElRect.width - referenceRect.width)) : referenceOffset.left;
    if (!isTopRight && isCenter) {
      left -= (targetElRect.width - referenceRect.width) / 2;
    }
    // var isInView = eleIsInView(targetEl, top, left, needSubtractScrollOffset);
    top += dropdownOffsetTop;
    left += dropdownOffsetLeft;
    if (targetIsInBody) {
      if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        top += scrollInfo.top;
      }

      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        left += scrollInfo.left;
      }
    }
    var isInView = eleIsInView({
      ele: targetEl,
      top,
      left,
      needSubtractScrollOffset,
      bodyScrollVisible,
      targetIsInBody,
      referenceIsInFixedPosition,
      documentHasScroll: bodyHasScroll,
      documentScrollInfo: scrollInfo,
      scrollParent: referenceScrollParent, // 获取目标元素所处有滚动条的父级容器
      windowWH: { ...windowWH },
      targetIsInFixedPosition
    });
    // 如果目标元素插入到了body中，则需减去参照元素有滚动条父级容器滚动条滚动到距离（调用eleIsInView函数前不需要减去，因为eleIsInView函数内部计算时会减去）
    top -= targetIsInBody ? referenceElWrapperScrollTop : 0;
    left -= targetIsInBody ? referenceElWrapperScrollLeft : 0;
    // var bottom = referenceOffset.top - targetElOffsetParentOffset.top - (targetElOffsetParentIsDocument ? referenceElWrapperScrollTop : 0) + referenceRect.height;
    var bottom: number|null = null;
    var right: number|null = null;
    if (targetIsInBody) {
      // 如果目标元素插入在body中，则bottom的值为浏览器可见高度减去参照元素至浏览器最顶端的距离，再加上参照元素滚动容器滚动滚动的距离即可
      // 实际为：浏览器可见高度-参照元素在可见高度内的位置-浏览器滚动条滚动的距离+参照元素滚动容器滚动滚动的距离
      bottom = windowWH.height - referenceOffset.top + referenceElWrapperScrollTop;
      right = windowWH.width - referenceOffset.left + referenceElWrapperScrollLeft - referenceRect.width;
      // 如果浏览器有垂直滚动条，则需减去垂直滚动条的宽度，因为前面计算right值的时候使用的是window.innerWidth，window.innerWidth包含了滚动条
      if (bodyHasScroll.vertical && bodyScrollVisible.vertical) {
        right -= bodyScrollWidth.vertical;
      }
      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        right -= scrollInfo.left;
      }
      if (bodyHasScroll.horizontal && bodyScrollVisible.horizontal) {
        bottom -= bodyScrollWidth.horizontal;
      }
      if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        bottom -= scrollInfo.top;
      }
    } else {
      // 这里应该取 targetElOffsetParent.clientWidth，因为targetElOffsetParent可能会有垂直滚动条，offsetWidth会将垂直滚动条的宽度算进去
      bottom = targetElOffsetParent.clientHeight - (referenceOffset.top - targetElOffsetParentOffset.top);// + referenceElWrapperScrollTop;
      right = targetElOffsetParent.clientWidth - (referenceOffset.left - targetElOffsetParentOffset.left) - referenceRect.width; // + referenceElWrapperScrollLeft;
    }
    /* if (targetIsInBody) {
      if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        bottom -= scrollInfo.top;
      }
      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        right -= scrollInfo.left;
      }
    } */
    // 计算top值时需减去目标元素position不为static的父级元素的top值
    let newTop = top - targetElOffsetParentOffset.top;
    let newLeft = left - targetElOffsetParentOffset.left;
    newTop -= dropdownOffsetTop;
    newLeft -= dropdownOffsetLeft;
    return {
      ...isInView,
      direction: (!isTopRight && isCenter) ? 'topCenter' : (isTopRight ? 'topEnd' : 'top'),
      bottom,
      right: isTopRight ? right : null,
      // 计算top值时需减去目标元素position不为static的父级元素的top值
      top: newTop,
      left: newLeft
    };
  };
  let handleLeft = function (isLeftBottom: boolean, isCenter?: boolean) {
    // var top = isLeftBottom ? Math.floor(referenceOffset.top - (targetElOffsetParentIsDocument ? referenceElWrapperScrollTop : 0) - (targetElRect.height - referenceRect.height)) : (referenceOffset.top - (targetElOffsetParentIsDocument ? referenceElWrapperScrollTop : 0));
    // var left = referenceOffset.left - targetElRect.width - (targetElOffsetParentIsDocument ? referenceElWrapperScrollLeft : 0);
    var top = isLeftBottom ? Math.floor(referenceOffset.top - (targetElRect.height - referenceRect.height)) : (referenceOffset.top);
    var left = referenceOffset.left - targetElRect.width;
    if (!isLeftBottom && isCenter) {
      top -= (targetElRect.height - referenceRect.height) / 2;
    }
    var bottom: number|null = null;
    var right: number|null = null;

    top += dropdownOffsetTop;
    left += dropdownOffsetLeft;

    if (targetIsInBody) {
      if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        top += scrollInfo.top;
      }

      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        left += scrollInfo.left;
      }
      if (isLeftBottom) {
        // 如果目标元素插入在body中，则bottom的值为浏览器可见高度减去参照元素至浏览器最顶端的距离，再加上参照元素滚动容器滚动滚动的距离即可
        // 实际为：浏览器可见高度-参照元素在可见高度内的位置-浏览器滚动条滚动的距离+参照元素滚动容器滚动滚动的距离
        bottom = windowWH.height - (referenceOffset.top + referenceRect.height) + referenceElWrapperScrollTop;
        // right = window.innerWidth - referenceOffset.left + referenceElWrapperScrollLeft;
      }
    } else {
      if (isLeftBottom) {
        bottom = targetElOffsetParent.clientHeight - (referenceOffset.top + referenceRect.height - targetElOffsetParentOffset.top);// + referenceElWrapperScrollTop;
      }
    }

    /* if (isLeftBottom) {
      if (targetIsInBody) {
        // 如果目标元素插入在body中，则bottom的值为浏览器可见高度减去参照元素至浏览器最顶端的距离，再加上参照元素滚动容器滚动滚动的距离即可
        // 实际为：浏览器可见高度-参照元素在可见高度内的位置-浏览器滚动条滚动的距离+参照元素滚动容器滚动滚动的距离
        bottom = window.innerHeight - (referenceOffset.top + referenceRect.height) + referenceElWrapperScrollTop;
        // right = window.innerWidth - referenceOffset.left + referenceElWrapperScrollLeft;
      } else {
        bottom = targetElOffsetParent.offsetHeight - (referenceOffset.top + referenceRect.height - targetElOffsetParentOffset.top);// + referenceElWrapperScrollTop;
        // right = targetElOffsetParent.offsetWidth - (referenceOffset.left - targetElOffsetParentOffset.left) + referenceRect.width - targetElRect.width;
      }
    } */

    // var isInView = eleIsInView(targetEl, top, left, needSubtractScrollOffset);
    var isInView = eleIsInView({
      ele: targetEl,
      top,
      left,
      needSubtractScrollOffset,
      bodyScrollVisible,
      targetIsInBody,
      referenceIsInFixedPosition,
      documentHasScroll: bodyHasScroll,
      documentScrollInfo: scrollInfo,
      scrollParent: referenceScrollParent, // 获取目标元素所处有滚动条的父级容器
      windowWH: { ...windowWH },
      targetIsInFixedPosition
    });
    // 如果目标元素插入到了body中，则需减去参照元素有滚动条父级容器滚动条滚动到距离（调用eleIsInView函数前不需要减去，因为eleIsInView函数内部计算时会减去）
    top -= targetIsInBody ? referenceElWrapperScrollTop : 0;
    left -= targetIsInBody ? referenceElWrapperScrollLeft : 0;
    if (targetIsInBody) {
      right = windowWH.width - referenceOffset.left + referenceElWrapperScrollLeft;
      // 如果浏览器有垂直滚动条，则需减去垂直滚动条的宽度，因为前面计算right值的时候使用的是window.innerWidth，window.innerWidth包含了滚动条
      if (bodyHasScroll.vertical && bodyScrollVisible.vertical) {
        right -= bodyScrollWidth.vertical;
      }
      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        right -= scrollInfo.left;
      }
      if (isLeftBottom) {
        if (bodyHasScroll.horizontal && bodyScrollVisible.horizontal) {
          // @ts-ignore
          bottom -= bodyScrollWidth.horizontal;
        }
        if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
          // @ts-ignore
          bottom -= scrollInfo.top;
        }
      }
    } else {
      // let referenceIsTargetElOffsetParent = referenceEl === targetElOffsetParent;
      // right = targetElOffsetParent.offsetWidth - (referenceOffset.left - targetElOffsetParentOffset.left) + referenceElWrapperScrollLeft;
      // right = targetElOffsetParent.offsetWidth - (referenceOffset.left - targetElOffsetParentOffset.left); // + referenceElWrapperScrollLeft;
      // 这里应该取 targetElOffsetParent.clientWidth，因为targetElOffsetParent可能会有垂直滚动条，offsetWidth会将垂直滚动条的宽度算进去
      right = targetElOffsetParent.clientWidth - (referenceOffset.left - targetElOffsetParentOffset.left); // + referenceElWrapperScrollLeft;
    }
    let newTop = top - targetElOffsetParentOffset.top;
    let newLeft = left - targetElOffsetParentOffset.left;
    /* if (targetIsInBody) {
      if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        if (isLeftBottom) {
          // @ts-ignore
          bottom -= scrollInfo.top;
        }
      }
      if (right !== null) {
        if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
          right -= scrollInfo.left;
        }
      }
    } */
    newTop -= dropdownOffsetTop;
    newLeft -= dropdownOffsetLeft;
    return {
      ...isInView,
      right,
      bottom,
      direction: (!isLeftBottom && isCenter) ? 'leftCenter' : (isLeftBottom ? 'leftEnd' : 'left'),
      // 计算top值时需减去目标元素position不为static的父级元素的top值
      top: newTop,
      left: newLeft
    };
  };
  let handleRight = function (isRightBottom: boolean, isCenter?: boolean) {
    // var top = isRightBottom ? Math.floor(referenceOffset.top - (targetElOffsetParentIsDocument ? referenceElWrapperScrollTop : 0) - (targetElRect.height - referenceRect.height)) : (referenceOffset.top - (targetElOffsetParentIsDocument ? referenceElWrapperScrollTop : 0));
    // var left = referenceOffset.left + referenceRect.width - (targetElOffsetParentIsDocument ? referenceElWrapperScrollLeft : 0);
    var top = isRightBottom ? Math.floor(referenceOffset.top - (targetElRect.height - referenceRect.height)) : (referenceOffset.top);
    var left = referenceOffset.left + referenceRect.width;
    if (!isRightBottom && isCenter) {
      top -= (targetElRect.height - referenceRect.height) / 2;
    }
    top += dropdownOffsetTop;
    left += dropdownOffsetLeft;

    if (targetIsInBody) {
      if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        top += scrollInfo.top;
      }

      if (bodyHasScroll.horizontal && !bodyScrollVisible.horizontal) {
        // 如果下拉内容是插入在body中，且body的滚动条未显示出来则需要减去浏览器滚动条滚动的距离
        left += scrollInfo.left;
      }
    }

    var bottom: number|null = null;
    var right: number|null = null;
    if (isRightBottom) {
      if (targetIsInBody) {
        // 如果目标元素插入在body中，则bottom的值为浏览器可见高度减去参照元素至浏览器最顶端的距离，再加上参照元素滚动容器滚动滚动的距离即可
        // 实际为：浏览器可见高度-参照元素在可见高度内的位置-浏览器滚动条滚动的距离+参照元素滚动容器滚动滚动的距离
        bottom = windowWH.height - (referenceOffset.top + referenceRect.height) + referenceElWrapperScrollTop;
      } else {
        bottom = targetElOffsetParent.clientHeight - (referenceOffset.top + referenceRect.height - targetElOffsetParentOffset.top);// + referenceElWrapperScrollTop;
      }
    }

    // var isInView = eleIsInView(targetEl, top, left, needSubtractScrollOffset);
    var isInView = eleIsInView({
      ele: targetEl,
      top,
      left,
      bodyScrollVisible,
      needSubtractScrollOffset,
      targetIsInBody,
      referenceIsInFixedPosition,
      documentHasScroll: bodyHasScroll,
      documentScrollInfo: scrollInfo,
      scrollParent: referenceScrollParent, // 获取目标元素所处有滚动条的父级容器
      windowWH: { ...windowWH },
      targetIsInFixedPosition
    });
    // 如果目标元素插入到了body中，则需减去参照元素有滚动条父级容器滚动条滚动到距离（调用eleIsInView函数前不需要减去，因为eleIsInView函数内部计算时会减去）
    top -= targetIsInBody ? referenceElWrapperScrollTop : 0;
    left -= targetIsInBody ? referenceElWrapperScrollLeft : 0;
    let newTop = top - targetElOffsetParentOffset.top;
    let newLeft = left - targetElOffsetParentOffset.left;

    if (targetIsInBody) {
      if (isRightBottom) {
        if (bodyHasScroll.vertical && !bodyScrollVisible.vertical) {
          // @ts-ignore
          bottom -= scrollInfo.top;
        }
        if (bodyHasScroll.horizontal && bodyScrollVisible.horizontal) {
          // @ts-ignore
          bottom -= bodyScrollWidth.horizontal;
        }
      }
    }
    newTop -= dropdownOffsetTop;
    newLeft -= dropdownOffsetLeft;
    return {
      ...isInView,
      right,
      bottom,
      direction: (!isRightBottom && isCenter) ? 'rightCenter' : (isRightBottom ? 'rightEnd' : 'right'),
      // 计算top值时需减去目标元素position不为static的父级元素的top值
      top: newTop,
      left: newLeft
    };
  };

  switch (direction) {
    case 'bottom':
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleBottom
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleBottom
      });
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleTop
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleTop
      });

      if (tryAllDirection) {
        directionCalcFlow.push({
          isTail: false,
          handler: handleLeft
        });
        directionCalcFlow.push({
          isTail: false,
          handler: handleRight
        });
      }
      break;
    case 'top':
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleTop
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleTop
      });
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleBottom
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleBottom
      });
      if (tryAllDirection) {
        directionCalcFlow.push({
          isTail: false,
          handler: handleLeft
        });
        directionCalcFlow.push({
          isTail: false,
          handler: handleRight
        });
      }
      break;
    case 'left':
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleLeft
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleLeft
      });
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleRight
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleRight
      });
      if (tryAllDirection) {
        directionCalcFlow.push({
          isTail: false,
          handler: handleBottom
        });
        directionCalcFlow.push({
          isTail: false,
          handler: handleTop
        });
      }
      break;
    case 'right':
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleRight
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleRight
      });
      if (defaultDirectionIsCenter) {
        directionCalcFlow.push({
          isTail: false,
          isCenter: true,
          handler: handleLeft
        });
      }
      directionCalcFlow.push({
        isTail: defaultDirectionIsEnd,
        handler: handleLeft
      });
      if (tryAllDirection) {
        directionCalcFlow.push({
          isTail: false,
          handler: handleBottom
        });
        directionCalcFlow.push({
          isTail: false,
          handler: handleTop
        });
      }
      break;
  }

  let allDirectionResult: DropdownDirection[] = [];
  let defaultDirectionResult = {} as DropdownDirection;
  // 尝试一遍当前方向的尾方向
  let tryReverse = function (allInView = false, flow: any) {
    let result = flow.handler(tryEndDirection ? !flow.isTail : flow.isTail, flow.isCenter);
    let inView = result.vertical && result.horizontal;
    let inScrollParentView = result.scrollParentVertical && result.scrollParentHorizontal;
    let flag = allInView ? (inView && inScrollParentView) : (inView || inScrollParentView);
    console.log('result2', result);

    if (result.direction === defaultDirection) {
      defaultDirectionResult = result;
    }
    allDirectionResult.push(result);
    if (flag) {
      calcedDirection = result;
      return true;
    }
    return false;
  };
  // 寻找元素在水平、垂直方向都完全出现在视口中的方向
  directionCalcFlow.some(function (flow) {
    let result = flow.handler(flow.isTail, flow.isCenter) as DropdownDirection;
    // 判断在屏幕视口中是否完可视
    let inView = result.vertical && result.horizontal;
    // 判断在有滚动条的父级容器中是否完可视
    let inScrollParentView = result.scrollParentVertical && result.scrollParentHorizontal;

    console.log('result1', result);
    if (result.direction === defaultDirection) {
      defaultDirectionResult = result;
    }
    allDirectionResult.push(result);
    if (inView) {
      if (!inScrollParentView) {
        if (!flow.isCenter) { // 非中间方向则尝试反方向
          let flag = tryReverse(true, flow);
          if (flag) {
            return true;
          }
          return false;
        } else { // 中间方向则直接return掉（不return掉会导致下拉在滚动容器中不能完全展示时也使用中间方向）
          return;
        }
      }
      calcedDirection = result;
      return true;
    } else {
      if (!flow.isCenter) { // 非中间方向则尝试反方向
        return tryReverse(true, flow);
      }
    }
  });
  console.log('calcedDirection', calcedDirection);
  // 如果尝试了所有方位后都无法显示，则显示默认方位
  if (!calcedDirection) {
    let inViewDirection: DropdownDirection|null = null;
    let inScrollParentViewDirection: DropdownDirection|null = null;
    allDirectionResult.forEach(direction => {
      if (!inViewDirection && (direction.horizontal && direction.vertical)) {
        inViewDirection = direction;
      }
      if (!inScrollParentViewDirection && (direction.scrollParentHorizontal && direction.scrollParentVertical)) {
        inScrollParentViewDirection = direction;
      }
    });
    // 优先使用在滚动容器内完全可见的
    if (inScrollParentViewDirection) {
      calcedDirection = inScrollParentViewDirection;
    } else if (inViewDirection) { // 其次使用在浏览器可视区域内可见的
      calcedDirection = inViewDirection;
    } else { // 最后使用默认的方位
      calcedDirection = defaultDirectionResult as any;
      calcedDirection.isRollback = true;
    }
    console.log('回滚后的calcedDirection', calcedDirection);
  }

  // 恢复目标元素的display、opacity属性
  targetEl.style.opacity = styleOpacity || '';
  targetEl.style.display = styleDisplay || '';
  return calcedDirection;
}

/* /!**
 * 判断元素是否完全出现在视口中，优化性能，减少计算scrollParent、documentHasScroll、documentScrollInfo
 * @param {object} options
 * @returns {{horizontal: boolean, vertical: boolean}}
 *!/
function eleIsInView (options: any) {
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
} */
