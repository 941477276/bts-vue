<template>
<slot></slot>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  provide,
  ref,
  watch,
  onMounted,
  onUnmounted
} from 'vue';
import {
  ForwardRefContext,
  useForwardRef
} from '../../hooks/useForwardRef';
import {
  BsPopperContext,
  bsPopperContextKey
} from './bs-popper-types';
import { bsPopperProps } from './bs-popper-props';
import {
  createPopper,
  Placement,
  Instance as PopperInstance
} from '@popperjs/core';

export default defineComponent({
  name: 'BsPopper',
  props: bsPopperProps,
  setup (props: any, ctx: any) {
    // 触发popper的元素
    let triggerRef = ref<HTMLElement|null>(null);
    // popper内容元素
    let popperContentRef = ref<HTMLElement|null>(null);
    // popper三角箭头元素
    let popperArrowRef = ref<HTMLElement|null>(null);
    // popper实例
    let popperInstanceRef = ref<PopperInstance>();

    // 向子孙组件传递（透传）触发popper元素的变量,让子孙组件去更新这个变量
    useForwardRef(triggerRef);

    provide<BsPopperContext>(bsPopperContextKey, {
      triggerRef,
      popperContentRef,
      popperArrowRef,
      popperInstanceRef
    });

    return {
      triggerRef,
      popperContentRef,
      popperArrowRef,
      popperInstanceRef
    };
  }
});
</script>
