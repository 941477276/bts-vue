import {
  provide,
  Ref,
  InjectionKey
} from 'vue';

export type SetForwardRef = <T>(el: T) => void;

export type ForwardRefContext = {
  setForwardRef: SetForwardRef;
}

export const forwardRefKey: InjectionKey<ForwardRefContext> = Symbol('bsForwardRef');

/**
 * 此hooks作用：子孙组件向父级组件传递dom元素
 */
export function useForwardRef <T> (forwardRef: Ref<T|null>): void {
  // 提供一个函数给子孙组件调用，以设置dom元素进变量
  provide(forwardRefKey, {
    setForwardRef (el: any) {
      forwardRef.value = el;
    }
  });
};

/**
 * 定义更新forward ref的指令，使用了该指令的dom或组件会在dom创建、更新、销毁时及时的更新forward ref
 * @param setForwardRef
 */
export const useForwardRefDirective = (setForwardRef: SetForwardRef) => {
  let oldEl:HTMLElement|null = null;
  return {
    mounted (el: HTMLElement) {
      oldEl = el;
      setForwardRef(el);
    },
    updated (el: HTMLElement) {
      // 防止当dom的属性更新时执行setForwardRef
      if (el === oldEl) {
        console.log('updated 新旧dom元素一样，不执行更新');
        return;
      }
      oldEl = el;
      setForwardRef(el);
    },
    unmounted (el: HTMLElement) {
      oldEl = null;
      setForwardRef(null);
    }
  };
};
