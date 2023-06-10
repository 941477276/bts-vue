<template>
  <transition
    :name="transitionName"
    @before-enter="collapseBeforeEnter"
    @enter="collapseEnter"
    @after-enter="collapseAfterEnter"
    @before-leave="collapseBeforeLeave"
    @leave="collapseLeave"
    @after-leave="collapseAfterLeave">
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCollapseTransition } from '../../hooks/useCollapseTransition';
import { bsCollapseTransitionProps } from './bs-collapse-transition-types';

/**
 * 元素折叠过度效果
 */
export default defineComponent({
  name: 'BsCollapseTransition',
  props: bsCollapseTransitionProps,
  emits: ['before-enter', 'enter', 'after-enter', 'before-leave', 'leave', 'after-leave'],
  setup (props: any, ctx: any) {
    let transitionEvents = useCollapseTransition(ctx, true);

    return {
      ...transitionEvents
    };
  }
});
</script>
