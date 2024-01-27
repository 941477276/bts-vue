<template>
  <component
    class="bs-badge badge"
    :class="badgeClass"
    :is="tag"
    @click="onBadgeClick">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { bsBadgeProps } from './bs-badge-types';

export default defineComponent({
  name: 'BsBadge',
  props: bsBadgeProps,
  emits: ['click'],
  setup (props: any, ctx) {
    let badgeClass = computed<Array<string|unknown>>(() => {
      let classArr: string[] = [];
      let bntType = props.type;

      if (bntType) {
        classArr.push(`badge-${bntType}`);
      }
      if (props.pill) {
        classArr.push('badge-pill');
      }
      if (props.circle) {
        classArr.push('badge-circle');
      }
      return classArr;
    });
    let onBadgeClick = function (evt: MouseEvent): void {
      ctx.emit('click', evt);
    };

    return {
      badgeClass,
      onBadgeClick
    };
  }
});
</script>
