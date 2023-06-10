import {
  ref,
  createVNode,
  render,
  isVNode,
  VNode,
  AppContext,
  isRef,
  nextTick
} from 'vue';
import BsMessageBox from './BsMessageBox.vue';
import {
  PlainObject
} from '../types';
import {
  MessageBox,
  MessageBoxFn,
  supportMessageBoxTypes
} from '../bs-message/bs-message-types';
import {
  offset,
  isFunction
} from '../../utils/bs-util';
import { useZIndex } from '../../hooks/useZIndex';
import { useGetContentInfo } from '../../hooks/useGetContentInfo';
import { useLockScroll } from '../../hooks/useLockScroll';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';
import { createMask } from '../../components/bs-mask';

type MessageQueueItem = {
  id?: string;
  vm: VNode;
}

// message-box计数
let messageBoxCount = 0;
let messageBoxInstanceQueue: MessageQueueItem[] = [];

const messageBox:MessageBoxFn & Partial<MessageBox> = function (options = {} as any): string {
  let type = 'info';
  let id: string;
  let icon = '';
  let title = '';
  let inputBefore:any = null;
  let inputAfter:any = null;
  let context = null;
  // 重新组装组件的props
  let messageBoxProps: PlainObject = {};
  let { text, slotContent } = useGetContentInfo(options);
  // text, slotContent这2个都没有，则说明传递的options为一个普通的对象
  if (!text && !slotContent) {
    let contentInfo = useGetContentInfo(options.message);
    let { text: inputeBeforeText, slotContent: inputBeforeSlot } = useGetContentInfo(options.inputBefore);
    let { text: inputeAfterText, slotContent: inputAfterSlot } = useGetContentInfo(options.inputAfter);
    text = contentInfo.text;
    slotContent = contentInfo.slotContent;
    id = options.id || `bs-message-box_${++messageBoxCount}`;
    title = options.title;
    messageBoxProps = {
      ...options
    };
    icon = options.icon;
    context = options.appContext || null;
    if (options.type) {
      type = options.type;
    }
    if (inputeBeforeText) {
      inputBefore = () => inputeBeforeText;
    } else if (inputBeforeSlot) {
      inputBefore = inputBeforeSlot.default;
    }
    if (inputeAfterText) {
      inputAfter = () => inputeAfterText;
    } else if (inputAfterSlot) {
      inputAfter = inputAfterSlot.default;
    }
  } else {
    id = `bs-message-box_${++messageBoxCount}`;
    messageBoxProps = {};
  }
  if (!slotContent) {
    slotContent = {};
  }
  let { nextZIndex } = useZIndex();

  // 触发显示message box元素都位置
  let { x: mouseX, y: mouseY } = useGetMousePosition();

  /* if (isVNode(options) || typeof options !== 'object' || options === null) {
    messageBoxProps = {};
  } else {
    messageBoxProps = {
      ...options
    };
    icon = options.icon;
    context = options.appContext || null;
  } */
  if (isVNode(icon)) {
    slotContent.icon = () => icon;
  } else if (isFunction(icon)) {
    slotContent.icon = icon;
  }
  if (isVNode(title)) {
    slotContent.title = () => title;
  } else if (isFunction(title)) {
    slotContent.title = title;
  }
  if (inputBefore) {
    slotContent.inputBefore = inputBefore;
  }
  if (inputAfter) {
    slotContent.inputAfter = inputAfter;
  }

  delete messageBoxProps.id;
  delete messageBoxProps.message;
  delete messageBoxProps.icon;
  delete messageBoxProps.type;
  delete messageBoxProps.inputBefre;
  delete messageBoxProps.inputAfter;

  // 遮罩
  let mask = createMask({
    destroyOnHide: true
  });

  // 创建包裹容器，因为render函数在渲染至同一dom节点时只能渲染一个vnode，渲染多个的话后面的会将前面的覆盖
  let container = document.createElement('div');
  container.className = 'bs-message-box-wrapper';
  container.setAttribute('data-container-for', id);

  let unLockScroll: () => void;
  let vm = createVNode(BsMessageBox, {
    ...messageBoxProps,
    type,
    id,
    message: text,
    icon: typeof icon !== 'object' ? icon : '',
    title: !isVNode(title) ? title : '',
    onBeforeEnter () {
      // 显示遮罩
      mask.show();
      // 如果未传递z-index，则使用全局的z-index
      if (!messageBoxProps.zIndex) {
        (vm.component?.props as any).zIndex = nextZIndex();
      }
      nextTick(function () {
        let messageBoxRef = (vm.component?.proxy as any).messageBoxRef;
        // let messageBoxRect = messageBoxRef.getBoundingClientRect();
        let elOffset = offset(messageBoxRef);
        let x = mouseX - elOffset.left;
        let y = mouseY - elOffset.top;
        (vm.component?.proxy as any).setTransformOrigin(x, y);
      });
    },
    onHide () {
      mask.hide(true);
      render(null, container);
      setTimeout(function () {
        // j解除锁定滚动条
        unLockScroll();
        // 移除container
        document.body.removeChild(container);
        (container as any) = (vm as any) = null;
        // 移除缓存
        let index = messageBoxInstanceQueue.findIndex(item => {
          return item.id === id;
        });
        if (index > -1) {
          messageBoxInstanceQueue.splice(index, 1);
        }
      }, 0);
    }
  }, slotContent);
  vm.appContext = context;

  // 锁定浏览器滚动条
  unLockScroll = useLockScroll();
  document.body.appendChild(container);
  render(vm, container);

  messageBoxInstanceQueue.push({
    id,
    vm
  });

  return id;
};

// 生成快速创建message-box的方法
supportMessageBoxTypes.forEach(typeName => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  messageBox[typeName] = function (titleOrOptions, message, context) {
    let options: any = {
      type: typeName
    };
    if (typeof titleOrOptions !== 'object' || isVNode(titleOrOptions) || isRef(titleOrOptions) || isFunction(titleOrOptions)) {
      options.title = titleOrOptions;
      options.message = message;
    } else {
      options = {
        ...titleOrOptions,
        type: typeName
      };
    }

    options.appContext = context;
    /* if (message && (isVNode(message) || isRef(message) || typeof message !== 'object')) {
      options.title = message;
      options.appContext = context;
    } else {
      options = {
        ...message,
        type: typeName
      };
    } */
    return messageBox(options);
  };
});

/**
 * 关闭所有消息
 */
export function closeAllMessageBox (): void {
  for (let i = messageBoxInstanceQueue.length - 1; i >= 0; i--) {
    (messageBoxInstanceQueue[i].vm.component?.proxy as any).hide();
  }
};

/**
 * 消息关闭后的处理
 * @param id 消息id
 * @param userOnClose 使用者传递的onClose函数
 */
export function closeMessageBox (id: string): void {
  let index = messageBoxInstanceQueue.findIndex(item => item.id === id);
  if (index == -1) {
    return;
  }
  let deletedItem: MessageQueueItem = messageBoxInstanceQueue[index];

  try {
    (deletedItem.vm.component?.proxy as any).hide();
  } catch (e) {
    console.error(e);
  }
};

export {
  messageBox as BsMessageBox
};
