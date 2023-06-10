<!--<template>
  <div
    class="bs-progress progress"
    :class="[
      `bs-progress-${colorType}`
    ]">
    <BsProgressBar
      v-if="!multiple"
      v-bind="$props">
      &lt;!&ndash;<template><slot></slot></template>&ndash;&gt;
      <slot></slot>
    </BsProgressBar>
    <template v-else>
      <BsProgressBar
        v-for="(progress, index) in progresses"
        v-bind="progress"
        :key="`multiple_progress_item-${index}`">
        <slot></slot>
      </BsProgressBar>
    </template>
  </div>
</template>-->

<script lang="ts">
import {
  defineComponent,
  h
} from 'vue';
import { bsProgressProps, BsMultipleProgressDefine } from './bs-progress-types';
import BsProgressBar from './widgets/BsProgressBar.vue';

export default defineComponent({
  name: 'BsProgress',
  components: {
    BsProgressBar
  },
  props: bsProgressProps,
  setup (props: any, ctx: any) {
    return function () {
      let children;
      let slotDefault = ctx.slots.default;

      if (!props.multiple) {
        children = h(BsProgressBar, props, slotDefault);
      } else {
        children = props.progresses.map((progress: BsMultipleProgressDefine, index: number) => {
          return h(BsProgressBar, {
            ...progress,
            key: `multiple_progress_item-${index}`
          }, slotDefault);
        });
      }
      let classnames = ['bs-progress progress'];
      if (!props.multiple) {
        if (!props.color) {
          classnames.push(`bs-progress-${props.colorType}`);
        }
      } else {
        classnames.push('bs-progress-multiple');
      }
      if (props.color) {
        classnames.push('bs-progress-custom-color');
      }
      return h('div', {
        'class': classnames
      }, children);
    };
  }
});
</script>
