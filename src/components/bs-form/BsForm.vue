<template>
<form
  class="bs-form"
  :class="[{
    'bs-form-hide-error-message': !showErrorMessage,
    'form-inline': layout == 'inline',
    'form-horizontal': layout == 'horizontal',
    'form-vertical': layout == 'vertical',
    'bs-form-has-required': hasFormItemRequired
  }, size ? `bs-form-${size}` : '']">
  <slot></slot>
</form>
</template>

<script lang="ts">
import {
  PropType,
  defineComponent,
  provide,
  ref,
  reactive
} from 'vue';
import { bsFormProps, formContextKey } from './bs-form-types';

type ValidateCallback = (valid:boolean) => void;

export default defineComponent({
  name: 'BsForm',
  props: bsFormProps,
  setup (props: any, ctx: any) {
    // 存储<bs-form-item>子组件的上下文
    let formItemCtxs = ref<any[]>([]);
    // 表单项是否有必填的
    let hasFormItemRequired = ref(false);

    let calcFormItemRequiredTimer: number;
    // 计算表单项是否有必填的
    let calcFormItemRequired = function () {
      clearTimeout(calcFormItemRequiredTimer);
      calcFormItemRequiredTimer = setTimeout(function () {
        hasFormItemRequired.value = formItemCtxs.value.some(function (formItemCtx) {
          return formItemCtx.isRequired;
        });
      }, 60);
    };
    /**
     * 添加form-item组件实例
     * @param formItem
     */
    let addFormItemCtx = function (formItem: any): void {
      if (!formItemCtxs.value.includes(formItem)) {
        formItemCtxs.value.push(formItem);
        calcFormItemRequired();
      }
    };
    /**
     * 移除form-item组件实例
     * @param formItem
     */
    let removeFormItemCtx = function (formItem: any): void {
      let index = formItemCtxs.value.indexOf(formItem);
      if (index > -1) {
        formItemCtxs.value.splice(index, 1);
        calcFormItemRequired();
      }
    };

    /**
     *  校验表单
     * @param callback 回调函数
     */
    let validate = function (callback?: ValidateCallback): any {
      let promise;
      // 支持promise的情况下返回一个promise
      if (typeof callback !== 'function' && Promise) {
        promise = new Promise(function (resolve, reject) {
          callback = function (valid: boolean) {
            valid ? resolve(valid) : reject(valid);
            // resolve(valid);
          };
        });
      }
      let formItemsCtxArr = formItemCtxs.value;
      let trueFlag = true;
      if (formItemsCtxArr.length === 0) {
        /* eslint-disable */
        callback?.(trueFlag);
        return promise;
      }
      let validateResult = true;
      formItemsCtxArr.forEach(formItemCtx => {
        // 调用<bs-form-item>子组件的validate方法获取校验结果
        /* eslint-disable */
        formItemCtx.validate?.('', (errorMsg: string|undefined) => {
          if (errorMsg) {
            validateResult = false;
          }
        });
      });
      /* eslint-disable */
      callback?.(validateResult);
      return promise;
    };

    /**
     *  对部分表单项进行校验
     *  @param fieldPropNames 表单项的 fieldPropName 属性
     *  @param callback 回调函数
     */
    let validateFields = function (fieldPropNames: string|string[] = '', callback?: ValidateCallback): any {
      let promise;
      // 支持promise的情况下返回一个promise
      if (typeof callback !== 'function' && Promise) {
        promise = new Promise(function (resolve, reject) {
          callback = function (valid: boolean) {
            resolve(valid);
          };
        });
      }
      let trueFlag = true;
      if (!fieldPropNames || fieldPropNames.length === 0) {
        callback?.(true);
        return promise;
      }
      let formItemsArr = formItemCtxs.value;
      if (formItemsArr.length === 0) {
        callback?.(trueFlag);
        return promise;
      }
      fieldPropNames = typeof fieldPropNames === 'string' ? [fieldPropNames] : fieldPropNames;
      let validateResult = true;
      formItemsArr.forEach(formIteCtx => {
        if (fieldPropNames.includes(formIteCtx.props.name)) {
          // 调用<bs-form-item>子组件的validate方法获取校验结果
          /* eslint-disable */
          formIteCtx.validate?.('', (errorMsg: string|undefined) => {
            if (typeof errorMsg !== 'undefined') {
              validateResult = false;
            }
          });
        }
      });

      /* eslint-disable */
      callback?.(validateResult);
      return promise;
    };

    /**
     * 移除表单校验结果 表单项的 fieldPropName 属性
     * @param fieldPropNames
     */
    let clearValidate = function (fieldPropNames: string|string[] = '') {
      let formItemsArr = formItemCtxs.value;
      if (formItemsArr.length === 0) {
        return;
      }
      if (!fieldPropNames || fieldPropNames.length === 0) {
        formItemsArr.forEach(formItemCtx => {
          /* eslint-disable */
          formItemCtx.clearValidate?.();
        });
        return;
      }
      fieldPropNames = typeof fieldPropNames === 'string' ? [fieldPropNames] : fieldPropNames;
      formItemsArr.forEach(formItemCtx => {
        if (fieldPropNames.includes(formItemCtx.props.name as string)) {
          /* eslint-disable */
          formItemCtx.clearValidate?.();
        }
      });
    };
    /**
     * 重置表单值，并移除表单校验结果
     */
    let resetFields = function () {
      let formItemsArr = formItemCtxs.value;
      if (formItemsArr.length === 0) {
        return;
      }
      formItemsArr.forEach(formItemCtx => {
          /* eslint-disable */
          formItemCtx.resetField?.();
      });
    };

    provide(formContextKey, reactive({
      props,
      addChildComponentContext: addFormItemCtx,
      removeChildComponentContext: removeFormItemCtx,
      validate,
      validateFields,
      resetFields,
      clearValidate
    }));

    return {
      hasFormItemRequired,
      addFormItemCtx,
      removeFormItemCtx,
      validate,
      validateFields,
      resetFields,
      clearValidate
    };
  }
});
</script>
