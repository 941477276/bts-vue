import {
  hasClass,
  hasScroll,
  scrollWidth,
  addClass,
  removeClass
} from '../utils/bs-util';

/**
 * 锁定浏览器滚动条
 */
export function useLockScroll () {
  let body = document.body;
  // 锁定滚动条之前body的overflow属性
  let originBodyOverflow = body.style.overflow;
  let originBodyPaddingRight = body.style.paddingRight;
  let originBodyPaddingBottom = body.style.paddingBottom;
  let originBodyHasLockClass = hasClass(body, 'bs-lock-scroll');
  let documentHasScroll = hasScroll();
  // @ts-ignore
  let documentScrollWidth = scrollWidth();
  // 标记本次是否锁定了页面
  let locked = false;

  if (!originBodyHasLockClass) {
    addClass(body, 'bs-lock-scroll');
  }
  if (originBodyOverflow != 'hidden') {
    body.style.overflow = 'hidden';
    locked = true;
    if (documentHasScroll.vertical) {
      body.style.paddingRight = documentScrollWidth.vertical + 'px';
    }
    if (documentHasScroll.horizontal) {
      body.style.paddingBottom = documentScrollWidth.horizontal + 'px';
    }
  }

  // 返回一个解除锁定滚动条的函数
  return function () {
    let body = document.body;
    if (!originBodyHasLockClass) {
      removeClass(body, 'bs-lock-scroll');
    }
    if (!locked) {
      return;
    }
    if (originBodyOverflow) {
      body.style.overflow = originBodyOverflow;
    } else {
      body.style.overflow = ''; // 移除body上的overflow属性
    }

    if (originBodyPaddingRight && parseFloat(originBodyPaddingRight) !== documentScrollWidth.vertical) {
      body.style.paddingRight = originBodyPaddingRight;
    } else {
      body.style.paddingRight = ''; // 移除body上的paddingRight属性
    }

    if (originBodyPaddingBottom && parseFloat(originBodyPaddingBottom) !== documentScrollWidth.horizontal) {
      body.style.paddingBottom = originBodyPaddingBottom;
    } else {
      body.style.paddingBottom = ''; // 移除body上的paddingBottom属性
    }
  };
};
