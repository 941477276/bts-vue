<template>
  <div
    ref="popperContentRef"
    class="bs-popper"
    :class="popperClass"
    :style="contentStyle"
    role="tooltip">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  watch,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  PropType
} from 'vue';
import {
  BsPopperContext,
  bsPopperContextKey
} from './bs-popper-types';
import {
  createPopper,
  Instance as PopperInstance,
  Options as PopperOptions
} from '@popperjs/core';
import {
  buildPopperOptions
} from './bs-popper-util';
import { useZIndex } from '../../hooks/useZIndex';
import { bsPopperContentProps } from './bs-popper-content-props';

export default defineComponent({
  name: 'BsPopperContent',
  props: bsPopperContentProps,
  setup (props: any) {
    let {
      popperContentRef,
      popperInstanceRef,
      popperArrowRef,
      triggerRef
    } = inject<BsPopperContext>(bsPopperContextKey, {} as BsPopperContext);

    let { nextZIndex } = useZIndex();
    let contentZIndex = ref(props.zIndex || 2000);
    let contentStyle = computed(function () {
      return [
        { zIndex: contentZIndex.value },
        props.popperStyle
      ];
    });

    // 更新popper，更新时会重新计算popper的位置
    let updatePopper = function (updateZIndex: boolean) {
      popperInstanceRef.value?.update();
      if (updateZIndex) {
        contentZIndex.value = props.zIndex || nextZIndex();
      }
    };

    let stopWatchTriggerRef: () => void;
    let stopWatchVisible: () => void;
    let stopWatchElBoundingClient: () => void;
    onMounted(function () {
      // 监听触发popper的元素，并创建popper实例
      stopWatchTriggerRef = watch(() => triggerRef.value, (triggerEl) => {
        let popperInstance = popperInstanceRef.value;
        if (popperInstance) {
          popperInstance.destroy();
        }
        stopWatchElBoundingClient?.();
        if (triggerEl) {
          popperInstanceRef.value = createPopper(triggerEl as Element, popperContentRef.value as HTMLElement, buildPopperOptions(props, triggerEl));

          // 在dom元素位置改变后及时的更新popper
          stopWatchElBoundingClient = watch(() => triggerEl.getBoundingClientRect?.(), function (clientRect: DOMRect) {
            updatePopper(false);
          }, { immediate: true });
        } else {
          popperInstanceRef.value = undefined;
        }
      }, { immediate: true });

      // popper显示/或隐藏的时候更新popper
      stopWatchVisible = watch(() => props.visible, function (isVisible: boolean) {
        // 如果popper隐藏掉了，则禁用掉popper的事件监听，这样当resize、scroll时就不会计算popper的位置信息了
        let monitorable = { name: 'eventListeners', enabled: isVisible };
        popperInstanceRef.value?.setOptions?.((options: any) => ({
          ...options,
          modifiers: [...(options.modifiers || []), monitorable]
        }));
        updatePopper(isVisible);
      }, { immediate: true });
    });

    onBeforeUnmount(function () {
      stopWatchTriggerRef();
      stopWatchVisible();
      popperInstanceRef.value?.destroy();
    });

    return {
      popperContentRef,
      contentStyle,
      updatePopper
    };
  }
});
</script>

<style lang="scss">

</style>
