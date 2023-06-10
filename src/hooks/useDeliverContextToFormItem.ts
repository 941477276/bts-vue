import { inject, nextTick } from 'vue';
import { useDeliverContextToParent } from './useDeliverContextToParent';
import {
  FormItemContext,
  formItemContextKey
} from '../components/bs-form/bs-form-types';

/**
 * 将组件信息向上传递给<bs-form-item>组件
 * @param props {any} props
 * @param contextDeliverToFormItem {any} 待传递给<bs-form-item>组件的上下文信息
 */
export function useDeliverContextToFormItem (props: any, contextDeliverToFormItem: any) {
  let formItemContext = inject<FormItemContext|null>(formItemContextKey, null);
  if (props.deliveContextToFormItem && formItemContext) {
    // 如果当前组件处在<bs-form-item>组件中，则将当前组件信息存储到<bs-form-item>组件中
    useDeliverContextToParent<FormItemContext>(formItemContextKey, contextDeliverToFormItem);
  }
  let callFormItem = function (fnName: string, ...args: any) {
    if (!props.deliveContextToFormItem || !formItemContext) {
      return;
    }
    let timer = setTimeout(function () {
      clearTimeout(timer);
      (formItemContext as any)[fnName](...args);
    }, 0);
  };
  return {
    formItemContext,
    callFormItem
  };
};
