import {
  Ref,
  VNode,
  reactive,
  toRefs,
  createVNode,
  render
} from 'vue';
import {
  isFunction
} from '@vue/shared';
import BsLoading from './BsLoading.vue';
import { useGetContentInfo } from '../../hooks/useGetContentInfo';
import { CreateLoadingOptions } from './bs-loading-types';

let loadingCount = 0;
export function createLoadingComponent (options: CreateLoadingOptions = {} as (CreateLoadingOptions)) {
  let optionsCopy = {
    ...options
  };
  // let target = options.target;
  delete optionsCopy.spinnerRender;
  delete optionsCopy.textRender;
  delete optionsCopy.onHide;
  // delete optionsCopy.target;
  let configs = {
    ...optionsCopy,
    visible: false,
    onDestroy () {
      (vm as any) = null;
      if (isFunction(options.onDestroy)) {
        options.onDestroy();
      }

      let timer = setTimeout(function () {
        clearTimeout(timer);
        container?.parentElement?.removeChild(container);
        (container as any) = null;
      }, 0);
    },
    onAfterLeave () {
      if (isFunction(options.onHide)) {
        options.onHide();
      }
    }
  };
  let contentSlot = useGetContentInfo(options.textRender);
  let spinnerSlot = useGetContentInfo(options.spinnerRender);
  let slotContent: any = {};
  if (contentSlot.text) {
    slotContent.default = function () {
      return contentSlot.text;
    };
  } else if (contentSlot.slotContent) {
    slotContent.default = contentSlot.slotContent;
  }

  if (spinnerSlot.text) {
    slotContent.spinner = function () {
      return spinnerSlot.text;
    };
  } else if (spinnerSlot.slotContent) {
    slotContent.spinner = spinnerSlot.slotContent;
  }
  let container = document.createElement('div');
  /* if (isString(target)) {
    container = document.querySelector(target);
  } else if (target && isObject(target) && target.nodeType == 1) {
    container = target as HTMLElement;
  } */

  let loadingId = `bs-loading_${++loadingCount}`;
  let vm = createVNode(BsLoading, configs, slotContent);
  render(vm, container);

  return {
    id: loadingId,
    updateProps (newProps: any) {
      let component = vm?.component as any;
      if (!component) {
        return;
      }
      let comProps = component.props;
      for (let attr in newProps) {
        if (attr in comProps) {
          comProps[attr] = newProps[attr];
        }
      }
    },
    destroy () {
      if (vm) {
        render(null, container);
      }
    },
    vm
  };
};

export type LoadingInstance = ReturnType<typeof createLoadingComponent>;
