import {
  isObject
} from '@vue/shared';
import { BsLoading } from './loading';
import { BsLoadingOptions } from './bs-loading-types';

function resolveOptions (binding: any) {
  let text = '';
  let isLoading = false;
  // let fullscreen = false;
  let lock = true;
  let { fullscreen } = binding.modifiers || {};

  let bindingValue = binding.value;
  let options: BsLoadingOptions = {};
  if (isObject(bindingValue)) {
    text = bindingValue.text;
    isLoading = bindingValue.loading;
    lock = bindingValue.lock;
    if (typeof lock === 'undefined') {
      lock = true;
    }
    options = {
      ...bindingValue
    };
  } else {
    isLoading = !!bindingValue;
  }
  options.text = text;
  options.fullscreen = fullscreen;
  options.lock = lock;
  return {
    options,
    isLoading
  };
}

export const bsLoadingDirective = {
  mounted (el: HTMLElement, binding: any) {
    let { options, isLoading } = resolveOptions(binding);

    if (!options.fullscreen && !options.target) {
      options.target = el;
    }
    let loadingIns = BsLoading(options);
    // 如果不是插入到全局，则将loading实例挂到dom元素中
    if (!options.fullscreen) {
      if ((el as any).loadingIns) {
        (el as any).loadingIns.destroy();
      }
      (el as any).loadingIns = loadingIns;
    }
    if (isLoading) {
      let timer = setTimeout(function () {
        clearTimeout(timer);
        loadingIns.show();
      }, 0);
    }
  },
  // 及他自己的所有子节点都更新后调用
  updated (el: HTMLElement, binding: any) {
    let { options, isLoading } = resolveOptions(binding);
    if (options.fullscreen) {
      BsLoading(options).updateProps({
        ...options,
        visible: isLoading
      });
      return;
    }
    let loadingIns = (el as any).loadingIns;
    if (!loadingIns) {
      return;
    }
    loadingIns.updateProps({
      ...options,
      visible: isLoading
    });
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount (el: HTMLElement, binding: any) {
    let { options } = resolveOptions(binding);
    if (options.fullscreen) {
      BsLoading(options).hide();
      return;
    }
    let loadingIns = (el as any).loadingIns;
    if (!loadingIns) {
      return;
    }
    loadingIns.destroy();
    (el as any).loadingIns = null;
  }
};
