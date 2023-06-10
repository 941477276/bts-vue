<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="`popper-${transitionName}`"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @after-leave="onAfterLeave">
      <BsPopperContent
        ref="popperContentComRef"
        v-if="display"
        v-show="visible"
        :placement="placement"
        :visible="visible"
        :arrow-offset="arrowOffset"
        :popper-class="popperClass"
        :popper-options="popperOptions"
        :popper-style="popperStyle"
        :offset="offset"
        :z-index="zIndex"
        :strategy="strategy"
        :gpu-acceleration="gpuAcceleration"
        :data-transition="`popper-${transitionName}`"
        :data-id="id"
        :aria-hidden="!visible"
        @mouseenter="onContentMouseenter"
        @mouseleave="onContentMouseleave">
        <slot v-if="!destroyed"></slot>
      </BsPopperContent>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {
  ref,
  PropType,
  computed,
  watch,
  inject,
  unref,
  defineComponent,
  onBeforeUnmount
} from 'vue';
import BsPopperContent from '../bs-popper/BsPopperContent.vue';
import { bsPopperContentProps } from '../bs-popper/bs-popper-content-props';
import { bsTooltipContentProps } from './bs-tooltip-content-props';
import {
  BsTooltipContext,
  bsTooltipContextKey
} from '../bs-popper/bs-popper-types';

export default defineComponent({
  name: 'BsTooltipContent',
  components: {
    BsPopperContent
  },
  props: {
    ...bsPopperContentProps,
    ...bsTooltipContentProps
  },
  inheritAttrs: false,
  setup (props: any) {
    let destroyed = ref(false);
    let popperContentComRef = ref(null);

    // 是否渲染
    let display = ref(false);

    let bsTooltipCtx = inject<BsTooltipContext>(bsTooltipContextKey)!;

    let needStop = function () {
      // 如果组件为受控模式，或者被禁用，则不能再往下执行
      if (unref(bsTooltipCtx.isControlled) || props.disabled) {
        return true;
      }
      return false;
    };

    let onBeforeEnter = function () {
      bsTooltipCtx.onBeforeShow();
    };
    let onAfterEnter = function () {
      bsTooltipCtx.onShow();
    };
    let onBeforeLeave = function () {
      bsTooltipCtx.onBeforeHide();
    };
    let onAfterLeave = function () {
      bsTooltipCtx.onHide();
      if (props.destroyOnHide) {
        display.value = false;
      }
    };

    // 当trigger类型为hover，并且鼠标可以进入popper时需在content的mouseenter、mouseleave事件上做处理
    let onContentMouseenter = function (evt: MouseEvent) {
      bsTooltipCtx.onContentMouseenter(evt);
      if (!props.enterable) {
        return;
      }
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (unref(bsTooltipCtx.trigger) !== 'hover') {
        return;
      }
      bsTooltipCtx.show();
    };
    let onContentMouseleave = function (evt: MouseEvent) {
      bsTooltipCtx.onContentMouseleave(evt);
      if (!props.enterable) {
        return;
      }
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (unref(bsTooltipCtx.trigger) !== 'hover') {
        return;
      }
      bsTooltipCtx.hide();
    };

    let stopWatch = watch(() => props.visible, function (isVisible) {
      if (isVisible && props.destroyOnHide) {
        display.value = true;
        return;
      }
      if (!display.value && isVisible) {
        display.value = true;
        stopWatch();
      }
    }, { immediate: true });

    // 更新popper位置
    let updatePopper = function (updateZIndex: boolean) {
      if (popperContentComRef.value) {
        (popperContentComRef.value as any).updatePopper?.(updateZIndex);
      }
    };

    onBeforeUnmount(function () {
      destroyed.value = true;
      stopWatch();
    });
    return {
      destroyed,
      display,
      popperContentComRef,

      updatePopper,
      onBeforeEnter,
      onAfterEnter,
      onBeforeLeave,
      onAfterLeave,
      onContentMouseenter,
      onContentMouseleave
    };
  }
});
</script>
