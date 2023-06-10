import {
  isString,
  isObject,
  isFunction
} from '@vue/shared';
import { createLoadingComponent, LoadingInstance } from './createLoadingComponent';
import { PlainObject } from '../types';
import {
  getStyle,
  scrollTop,
  scrollLeft
} from '../../utils/bs-util';
import { useLockScroll } from '../../hooks/useLockScroll';
import { bsLoadingProps, BsLoadingOptions } from './bs-loading-types';

let fullscreenLoading: any = null;
export function BsLoading (options: BsLoadingOptions = {} as BsLoadingOptions) {
  let { target, fullscreen, lock } = options;

  if (fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }

  let container: HTMLElement|null = null;
  let containerOriginStylePosition = ''; // 包裹loading父级元素的position值
  let unlockScroll: any;
  let newOptions: any = {
    onDestroy () {
      if (fullscreen) {
        fullscreenLoading = null;
      }
    },
    onHide () {
      if (container && !fullscreen) {
        container.style.position = containerOriginStylePosition;
      }
      if (isFunction(options.onHide)) {
        options.onHide();
      }
      if (isFunction(unlockScroll)) {
        unlockScroll();
        unlockScroll = null;
      }
    }
  };
  for (let attr in bsLoadingProps) {
    newOptions[attr] = (options as any)[attr];
  }
  if (fullscreen) {
    container = document.body;
  } else {
    if (isString(target)) {
      container = document.querySelector(target);
    } else if (target && isObject(target) && target.nodeType == 1) {
      container = target;
    }
  }
  if (!container) {
    console.warn('BsLoading, "options.target" is not a dom!');
    return;
  }
  let loadingIns = createLoadingComponent(newOptions);
  container.appendChild(loadingIns.vm.el as HTMLElement);

  let updateProps = function (newProps: any) {
    let visible = newProps.visible;
    if (!container) {
      return;
    }
    if ('lock' in newProps) {
      lock = newProps.lock;
    }
    if (typeof lock !== 'boolean' && fullscreen) {
      lock = true;
    }
    let props = {
      ...newProps
    };
    if (typeof visible == 'boolean') {
      let containerIsBody = container.nodeName == 'BODY';
      if (visible) {
        if (!fullscreen && !containerIsBody) { // 设置包裹loading的父级元素的定位
          let isStaticPosition = getStyle(container, 'position') == 'static';
          containerOriginStylePosition = container.style.position || '';
          if (isStaticPosition) {
            container.style.position = 'relative';
          }
        }
        if (lock) {
          // 锁定包裹loading父级元素的滚动条
          if (fullscreen || containerIsBody) {
            unlockScroll = useLockScroll();
          } else {
            let containerOriginStyleOverflow = container.style.overflow;
            let isLocked = getStyle(container, 'overflow') == 'hidden';
            if (!isLocked) {
              let elScrollTop = scrollTop(container);
              let elScrollLeft = scrollLeft(container);
              let style: PlainObject = {};
              container.style.overflow = 'hidden';
              if (elScrollTop > 0) {
                style.top = elScrollTop + 'px';
              }
              if (elScrollLeft > 0) {
                style.left = elScrollLeft + 'px';
              }
              props.style = style;
              unlockScroll = function () {
                if (!container) {
                  return;
                }
                container.style.overflow = containerOriginStyleOverflow;
              };
            }
          }
        }
      }
    };
    loadingIns.updateProps(props);
  };

  let returnResult = {
    updateProps,
    destroy () {
      loadingIns.destroy();
      container = null;
      if (fullscreen) {
        fullscreenLoading = null;
      }
    },
    show () {
      updateProps({
        visible: true
      });
    },
    hide () {
      updateProps({
        visible: false
      });
    }
  };

  if (fullscreen) {
    fullscreenLoading = returnResult;
  }

  return returnResult;
}
