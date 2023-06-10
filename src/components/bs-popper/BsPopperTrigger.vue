<template>
  <BsOnlyChild
    v-bind="$attrs"
    v-if="!virtualTriggering">
    <slot></slot>
  </BsOnlyChild>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  PropType,
  watch,
  inject,
  onMounted,
  onUnmounted
} from 'vue';
import BsOnlyChild from '../bs-slot/BsOnlyChild.vue';
import { bsPopperTriggerProps } from './bs-popper-trigger-props';
import {
  bsPopperContextKey,
  BsPopperContext
} from './bs-popper-types';

let eventsName = [
  'onMouseenter',
  'onMouseleave',
  'onClick',
  'onKeydown',
  'onFocus',
  'onBlur',
  'onContextmenu'
];
export default defineComponent({
  name: 'BsPopperTrigger',
  components: {
    BsOnlyChild
  },
  props: {
    ...bsPopperTriggerProps
  },
  setup (props: any, ctx: any) {
    let { triggerRef } = inject<BsPopperContext>(bsPopperContextKey, {} as BsPopperContext)!;

    let stopWatch: () => void;
    let stopWatchTrigger: () => void;
    onMounted(function () {
      // 如果使用虚拟元素触发，则在这里更新父组件的triggerRef变量
      stopWatch = watch(() => props.virtualRef, function (el: HTMLElement|string|(() => HTMLElement)) {
        if (el && triggerRef) {
          let type = typeof el;
          if (type === 'string') {
            // 如果传递的是一个字符串（css选择器），则需在dom更新后再去获取dom，这里使用nextTick函数是一样的
            setTimeout(function () {
              triggerRef.value = document.querySelector(el as string);
            }, 0);
          } else if (type === 'function') {
            // 如果传递的是一个函数，则需在dom更新后再去获取dom，这里使用nextTick函数是一样的
            setTimeout(function () {
              triggerRef.value = (el as () => HTMLElement)();
            }, 0);
          } else {
            triggerRef.value = el as HTMLElement;
          }
        }
      }, { immediate: true });

      // 给trigger元素绑定事件
      stopWatchTrigger = watch(() => triggerRef.value, function (triggerEl, prevTriggerEl) {
        if (triggerEl && triggerEl.nodeType == 1) {
          eventsName.forEach(eventName => {
            let eventFn = props[eventName];
            eventName = eventName.slice(2).toLowerCase();
            if (!eventFn) {
              return;
            }
            triggerEl.addEventListener(eventName, eventFn, false);
            // 移除之前触发popper元素的事件
            if (prevTriggerEl && prevTriggerEl.nodeType == 1) {
              prevTriggerEl.removeEventListener(eventName, eventFn, false);
            }
          });
        }
      }, { immediate: true });
    });

    onUnmounted(function () {
      stopWatch();
      stopWatchTrigger();
    });
  }
});
</script>

<style lang="scss">

</style>
