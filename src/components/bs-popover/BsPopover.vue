<template>
  <BsTooltip
    ref="tooltipRef"
    v-bind="$props"
    :popperClass="['bs-popover popover', popperClass]"
    :pure="false"
    :arrowClass="arrowClass"
    :popper-style="[
      {
        maxWidth: width ? (typeof width === 'number' ? width + 'px' : width) : ''
      },
      popperStyle
    ]"
    :id="popoverId"
    :hide-condition="canHide"
    @before-show="$emit('before-show')"
    @before-hide="$emit('before-hide')"
    @content-mouseenter="$emit('content-mouseenter', $event)"
    @content-mouseleave="$emit('content-mouseleave', $event)"
    @show="$emit('show')"
    @hide="$emit('hide')">
    <slot></slot>
    <template #content>
      <h3 class="popover-header" v-if="showTitle && ($slots.title || title)">
        <slot name="title">{{ title }}</slot>
      </h3>
      <div class="popover-body">
        <slot name="content">
          <template v-if="!isRawContent">{{ content }}</template>
          <div v-else v-html="content"></div>
        </slot>
      </div>
    </template>
  </BsTooltip>
</template>

<script lang="ts">
import BsTooltip from '../bs-tooltip/BsTooltip.vue';
import {
  ref,
  defineComponent
} from 'vue';
import { bsPopoverProps } from './bs-popover-types';

let popoverCount = 0;
export default defineComponent({
  name: 'BsPopover',
  components: {
    BsTooltip
  },
  props: bsPopoverProps,
  emits: ['before-show', 'before-hide', 'content-mouseenter', 'content-mouseleave', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let popoverId = ref(props.id || `bs_popover-${++popoverCount}`);
    let tooltipRef = ref(null);
    // 显示
    let show = function () {
      (tooltipRef.value as any).show();
    };

    // 隐藏
    let hide = function () {
      (tooltipRef.value as any).hide();
    };

    let canHide = function () {
      return !props.hideDisabled;
    };

    return {
      popoverId,
      tooltipRef,

      canHide,
      show,
      hide
    };
  }
});
</script>
