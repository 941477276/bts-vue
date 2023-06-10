<template>
  <BsPopperTrigger
    :virtual-triggering="virtualTriggering"
    :virtual-ref="virtualRef"
    @click="onTriggerClick"
    @mouseenter="onTriggerMouseenter"
    @mouseleave="onTriggerMouseleave"
    @focus="onTriggerFocus"
    @blur="onTriggerBlur"
    @contextmenu="onTriggerContextmenu">
    <slot v-if="$slots.default"></slot>
  </BsPopperTrigger>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  PropType,
  onMounted,
  onUnmounted,
  watch,
  unref
} from 'vue';
import BsPopperTrigger from '../bs-popper/BsPopperTrigger.vue';
import { bsPopperTriggerProps } from '../bs-popper/bs-popper-trigger-props';
import { bsTooltipTriggerProps } from './bs-tooltip-trigger-props';
import { useClickOutside } from '../../hooks/useClickOutside';
import {
  bsTooltipContextKey,
  bsPopperContextKey,
  BsTooltipContext,
  BsPopperContext
} from '../bs-popper/bs-popper-types';

export default defineComponent({
  name: 'BsTooltipTrigger',
  components: {
    BsPopperTrigger
  },
  props: {
    ...bsPopperTriggerProps,
    ...bsTooltipTriggerProps
  },
  setup (props: any) {
    // triggerRef触发popper的dom元素
    let { triggerRef, popperContentRef } = inject<BsPopperContext>(bsPopperContextKey)!;
    let { show, hide, isShow, isControlled } = inject<BsTooltipContext>(bsTooltipContextKey)!;

    let isClickOutSide = useClickOutside(triggerRef);
    let isClickOutSideContent = useClickOutside(popperContentRef);

    let needStop = function () {
      // 如果组件为受控模式，或者被禁用，则不能再往下执行
      if (unref(isControlled) || props.disabled) {
        return true;
      }
      return false;
    };

    // 点击事件（trigger类型为click有效）
    let onTriggerClick = function () {
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (props.trigger !== 'click') {
        return;
      }
      if (isShow.value) {
        hide();
      } else {
        show();
      }
    };

    // mouseenter、mouseleave事件（trigger类型为hover有效）
    let onTriggerMouseenter = function () {
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (props.trigger !== 'hover') {
        return;
      }
      show();
    };
    let onTriggerMouseleave = function () {
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (props.trigger !== 'hover') {
        return;
      }
      hide();
    };

    // focus、blur事件（trigger类型为focus有效）
    let onTriggerFocus = function () {
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (props.trigger !== 'focus') {
        return;
      }
      show();
    };
    let onTriggerBlur = function () {
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (props.trigger !== 'focus') {
        return;
      }
      hide();
    };

    // contextmenu事件（trigger类型为contextmenu有效）
    let onTriggerContextmenu = function (evt: Event) {
      let isNeedStop = needStop();
      if (isNeedStop) {
        return;
      }
      if (props.trigger !== 'contextmenu') {
        return;
      }
      evt = evt || window.event;
      evt.preventDefault();
      if (isShow.value) {
        hide();
      } else {
        show();
      }
    };

    let stopWatchClickOutSide = watch([isClickOutSide, isClickOutSideContent], function ([clickOutsideTrigger, clickOutsideContent]) {
      let trigger = props.trigger;
      if (!isShow.value && (trigger !== 'click' || trigger !== 'contextmenu')) {
        return;
      }
      if (props.enterable) {
        // 如果点击的元素不是trigger，或不是content，则隐藏掉popper
        if (clickOutsideTrigger && clickOutsideContent) {
          hide();
        }
        return;
      }
      if (clickOutsideTrigger) {
        hide();
      }
    });

    onUnmounted(function () {
      stopWatchClickOutSide();
    });

    return {
      onTriggerClick,
      onTriggerMouseenter,
      onTriggerMouseleave,
      onTriggerFocus,
      onTriggerBlur,
      onTriggerContextmenu
    };
  }
});
</script>

<style lang="scss">

</style>
