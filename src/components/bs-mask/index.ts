import {
  createVNode,
  render
} from 'vue';
import BsMask from './bs-mask.vue';
import {
  PlainObject
} from '../types';
import { useZIndex } from '../../hooks/useZIndex';

let maskCount = 0;
export function createMask (options: PlainObject = {}): { show: (zIndex?: number) => void; hide: (destroyed?: boolean) => void; } {
  let destroyOnHide = !!options.destroyOnHide;
  let optionZIndex = options.zIndex;
  let id = `bs_mask-${++maskCount}`;

  let container = document.createElement('div');
  container.className = 'bs-mask-wrapper';
  container.setAttribute('data-for-id', id);

  let optionsCopy = {
    ...options
  };
  delete optionsCopy.destroyOnHide;

  let status = 'ready'; // 存储状态
  let { nextZIndex } = useZIndex();
  let vm = createVNode(BsMask, {
    id,
    ...optionsCopy,
    onClick () {
      if (typeof options.onClick == 'function') {
        options.onClick();
      }
    },
    onShow () {
      status = 'shown';
      if (typeof options.onShow == 'function') {
        options.onShow();
      }
    },
    onHide () {
      console.log(1111);
      status = 'hidden';
      if (destroyOnHide) {
        render(null, container);
        console.log(2222);
        status = 'destroyed';
        setTimeout(() => {
          document.body.removeChild(container);
          // @ts-ignore
          vm = container = null;
        }, 0);
      }
      if (typeof options.onHide == 'function') {
        options.onHide();
      }
    }
  });

  document.body.appendChild(container);
  render(vm, container);

  return {
    show (zIndex = 0) {
      if (!vm) {
        return;
      }
      let component = vm.component as any;
      if (zIndex) {
        component.props.zIndex = zIndex;
      } else if (!optionZIndex) { // 如果未传递任何z-index，则使用全局zIndex
        component.props.zIndex = nextZIndex();
      }
      component.proxy.show();
    },
    hide (destroy?: boolean) {
      if (!vm) {
        return;
      }
      let component = vm.component as any;
      if (destroy) {
        destroyOnHide = !!destroy;
      }
      component.proxy.hide();

      /* if (destroy) {
        render(null, container);
        status = 'destroyed';
        setTimeout(() => {
          document.body.removeChild(container);
          // @ts-ignore
          vm = container = null;
        }, 0);
      } */
    }
  };
};
