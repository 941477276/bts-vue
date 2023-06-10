import { inject, onMounted, onBeforeUnmount } from 'vue';

type HasFun = {
  // 存储子组件上下文
  addChildComponentContext: (childContext: any) => any;
  // 移除子组件上下文
  removeChildComponentContext: (childContext: any) => any;
};
/**
 * 向父组件添加当前组件的上下文（即当前组件需要提供给父组件使用的数据或方法）
 * @param injectKey inject的key
 * @param context 组件上下文
 */
export function useDeliverContextToParent <T extends HasFun> (injectKey: any, context: any): void {
  let formItemContext = inject<T|null>(injectKey, null);
  onMounted(function () {
    if (formItemContext && typeof formItemContext.addChildComponentContext === 'function') {
      formItemContext.addChildComponentContext(context);
    } else {
      console.warn('useDeliverContextToParent函数中的context参数缺少[addChildComponentContext]属性');
    }
  });
  onBeforeUnmount(function () {
    if (formItemContext && typeof formItemContext.removeChildComponentContext === 'function') {
      formItemContext.removeChildComponentContext(context);
    } else {
      console.warn('useDeliverContextToParent函数中的context参数缺少[removeChildComponentContext]属性');
    }
  });
};
