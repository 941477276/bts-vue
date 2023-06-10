import {
  AppContext,
  createVNode,
  render
} from 'vue';
import {
  isObject,
  isString,
  isFunction
} from '@vue/shared';
import BsToastComponent from './BsToast.vue';
import {
  isBoolean
} from '../../utils/bs-util';
import { useGetContentInfo } from '../../hooks/useGetContentInfo';
import {
  ToastCtx,
  getToastCtx,
  getAllToastCtx
} from './bs-toast-ctxs';
import {
  supportedBsColorTypes
} from '../types';

let toastCount = 0;
function BsToast (options = {} as any, context?: AppContext | null) {
  if (!options || !isObject(options)) {
    return null;
  }
  let { text: header, slotContent: headerSlot } = useGetContentInfo(options.header);
  let { text: title, slotContent: titleSlot } = useGetContentInfo(options.title);
  let { text: secondaryTitle, slotContent: secondaryTitleSlot } = useGetContentInfo(options.secondaryTitle);
  let { text: message, slotContent: messageSlot } = useGetContentInfo(options.message);
  let {
    fixed,
    placement,
    type,
    id,
    style,
    teleported,
    offsetTop,
    offsetLeft,
    appendTo,
    duration,
    onHide,
    onShow,
    onClick,
    zIndex,
    dangerouslyUseHTMLString,
    transitionName,
    showClose
  } = options;
  fixed = isBoolean(options.fixed) ? options.fixed : true;
  if (fixed) {
    if (!placement) {
      placement = 'top-right';
    }
  }

  if (!id || !isString(id)) {
    id = `bs-toast-api_${++toastCount}`;
  }
  // 创建vnode挂载的容器
  let container = document.createElement('div');
  container.className = 'bs-toast-container';
  container.setAttribute('data-for-id', id);

  appendTo = (appendTo && isString(appendTo)) ? document.querySelector(appendTo) : appendTo;
  if (!appendTo) {
    appendTo = document.body;
  }

  let slots: {[key:string]: any} = {};
  if (headerSlot) {
    slots.header = headerSlot;
  }
  if (titleSlot) {
    slots.title = titleSlot.default;
  }
  if (secondaryTitleSlot) {
    slots.secondaryTitle = secondaryTitleSlot.default;
  }
  if (messageSlot) {
    slots.default = messageSlot.default;
  }
  let vm = createVNode(BsToastComponent, {
    title,
    secondaryTitle,
    message,
    fixed,
    placement,
    type,
    id,
    style,
    teleported: false,
    offsetTop,
    offsetLeft,
    appendTo: 'body',
    duration,
    zIndex,
    dangerouslyUseHTMLString,
    transitionName,
    showClose,
    onShow,
    onHide () {
      // 销毁实例
      render(null, container);
      // 移除container
      let timer = setTimeout(function () {
        clearTimeout(timer);
        let containerParent = container.parentElement;
        containerParent?.removeChild(container);
        appendTo = null;
        (vm as any) = null;
      }, 0);
      if (isFunction(onHide)) {
        onHide();
      }
    },
    onClick
  }, slots);
  appendTo.appendChild(container);

  render(vm, container);
  show(id);
  return {
    id,
    show () {
      show(id);
    },
    hide () {
      hide(id);
    }
  };
};

// 根据ID显示toast
function show (toastId: string) {
  if (!toastId) {
    return;
  }
  let toastCtx: ToastCtx = getToastCtx(toastId);
  if (toastCtx) {
    toastCtx.show();
  }
};
// 根据ID隐藏toast
function hide (toastId: string) {
  if (!toastId) {
    return;
  }
  let toastCtx: ToastCtx = getToastCtx(toastId);
  if (toastCtx) {
    toastCtx.hide();
  }
};
// 快捷创建各种类型的toast
supportedBsColorTypes.forEach((type: string) => {
  (BsToast as any)[type] = function (options: any, context?: AppContext | null) {
    return BsToast({
      ...options,
      type
    }, context);
  };
});
BsToast.show = show;
BsToast.hide = hide;
// 隐藏所有toast
BsToast.hideAll = function () {
  let allToastCtxs = getAllToastCtx();
  for (let toastId in allToastCtxs) {
    allToastCtxs[toastId].hide();
  }
};

export {
  BsToast
};
export default BsToast;
