import {
  createVNode,
  render,
  VNode,
  AppContext,
  isVNode
} from 'vue';
import BsMessageController from './BsMessage.vue';
import {
  useZIndex
} from '../../hooks/useZIndex';
import {
  supportMessageTypes,
  MessageFn,
  Message
} from './bs-message-types';
import { useGetContentInfo } from '../../hooks/useGetContentInfo';

type MessageQueueItem = {
  id?: string;
  vm: VNode;
}

// 存储message实例
let bsMessageInstanceQueue: MessageQueueItem[] = [];
let messageCount = 0;
let offsetTopBase = 20;

const message:MessageFn & Partial<Message> & {_context: AppContext|null} = function (options = {} as any, context?: AppContext | null) {
  let type = 'info';
  let id = '';
  let { text, slotContent } = useGetContentInfo(options);
  // 如果text, slotContent这2个都没有，则说明传递的options为一个普通的对象
  if (!text && !slotContent) {
    let messageContentInfo = useGetContentInfo(options.message);
    text = messageContentInfo.text;
    slotContent = messageContentInfo.slotContent;
    id = options.id;
    if (!id) {
      id = `bs-message_${++messageCount}`;
    }

    if (options.type) {
      type = options.type;
    }
  }
  if (isVNode(options) || typeof options !== 'object' || options === null) {
    options = {};
    id = `bs-message_${++messageCount}`;
  }
  let iconSlot = isVNode(options.icon) ? options.icon : null;
  let slots = {
    default: slotContent?.default,
    icon: iconSlot
  };

  // 根据text判断内容是否与之前其中的某个message组件的message值一致，如果一致则不创建新的
  if (options.grouping && (text == 0 || text)) {
    let tempQueue: MessageQueueItem | undefined = bsMessageInstanceQueue.find(queueItem => {
      return queueItem.vm.component?.props.message == text;
    });
    if (tempQueue) {
      (tempQueue.vm.component?.props as any).repeatNum++;
      return tempQueue.id;
    }
  }

  // 计算组件的根元素
  let appendTo: HTMLElement | null = document?.body;
  let optionsAppendTo = options.appendTo;
  if (typeof optionsAppendTo === 'string') {
    appendTo = document.querySelector(optionsAppendTo);
  } else if (typeof optionsAppendTo === 'object' && optionsAppendTo.nodeType == 1) {
    appendTo = optionsAppendTo;
  }
  if (!appendTo) {
    console.warn('appendTo属性不是一个dom对象或css选择器，appendTo将回退到document.body！');
    appendTo = document?.body;
  }

  let container = document.createElement('div');
  container.className = 'bs-message-container';
  container.setAttribute('data-container-for-id', id as string);

  // 计算元素的style.top值
  let offsetTop = options.offsetTop;
  if (!offsetTop && bsMessageInstanceQueue.length > 0) {
    let lastMessageVM = bsMessageInstanceQueue[bsMessageInstanceQueue.length - 1].vm;
    offsetTop = (lastMessageVM.component?.props as any).offsetTop || 0;
    offsetTop += lastMessageVM.el?.offsetHeight || 0;
    offsetTop += offsetTopBase;
  }
  delete options.icon;

  let { nextZIndex } = useZIndex();
  let optionOnClose = options.onClose;
  // 创建message实例
  let vm = createVNode(BsMessageController, {
    zIndex: nextZIndex(),
    ...options,
    offsetTop,
    id,
    type,
    message: text,
    onClose: () => {
      closeMessage(id as string, optionOnClose);
    }
  }, slots);

  // 设置context
  vm.appContext = context || message._context;

  // 绑定 destroy 事件
  vm.props!.onDestroy = function () {
    // 销毁dom元素
    render(null, container);
    let timer = setTimeout(function () {
      clearTimeout(timer);
      // eslint-disable-next-line no-unused-expressions
      appendTo?.removeChild(container);
      appendTo = (vm as any) = (container as any) = null;
    }, 0);
  };

  appendTo?.appendChild(container);
  /* 直接render到appendTo中，会导致同时渲染多个message时后面的message覆盖前面的message的情况
    // render(vm, appendTo);
   */
  render(vm, container);

  // 将message实例添加进message实例列表中
  bsMessageInstanceQueue.push({
    id,
    vm
  });

  return id;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
message._context = null;
message.closeAllMessage = closeAllMessage;
// 快捷创建message消息的方法
supportMessageTypes.forEach(typeName => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  message[typeName] = function (optionsOrMessage, context) {
    let options: any = {
      type: typeName
    };
    if (optionsOrMessage && (isVNode(optionsOrMessage) || typeof optionsOrMessage !== 'object')) {
      options.message = optionsOrMessage;
    } else {
      options = {
        ...optionsOrMessage,
        type: typeName
      };
    }
    return message(options, context);
  };
});

/**
 * 关闭所有消息
 */
export function closeAllMessage (): void {
  for (let i = bsMessageInstanceQueue.length - 1; i >= 0; i--) {
    (bsMessageInstanceQueue[i].vm.component?.proxy as any).close();
  }
};

/**
 * 消息关闭后的处理
 * @param id 消息id
 * @param userOnClose 使用者传递的onClose函数
 */
export function closeMessage (id: string, userOnClose?: (vm: VNode) => void): void {
  let index = bsMessageInstanceQueue.findIndex(item => item.id === id);
  if (index == -1) {
    return;
  }
  if (typeof userOnClose === 'function') {
    userOnClose(bsMessageInstanceQueue[index].vm);
  }
  let deletedItem: MessageQueueItem = bsMessageInstanceQueue.splice(index, 1)[0];

  try {
    (deletedItem.vm.component?.proxy as any).close();
  } catch (e) {
    console.error(e);
  } finally {
    let deletedItemHeight = deletedItem.vm.el?.offsetHeight + offsetTopBase;
    // 设置被移除的message后面的message的位置
    for (let i = index, len = bsMessageInstanceQueue.length; i < len; i++) {
      let item: MessageQueueItem = bsMessageInstanceQueue[i];
      // 后面的message位置改变后重启启动定时器，否则会出现后面的message位置还未改变完就消失的问题
      (deletedItem.vm.component?.proxy as any).startTimer();
      (item.vm.component?.props as any).offsetTop = (item.vm.component?.props as any).offsetTop - deletedItemHeight;
    }
  }
};

export default message;
export { message as BsMessage };
