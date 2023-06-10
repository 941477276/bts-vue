<template>
  <transition
    :name="transitionName"
    @after-leave="$emit('after-leave')">
    <div
      v-show="visible"
      class="bs-loading"
      :class="[
        {
          'horizontal-align': !vertical,
          'is-fullscreen': fullscreen
        },
        customClass
      ]"
      :style="{
        ...style,
        'background-color': maskBackground
      }">
      <div
        class="bs-loading-content"
        :style="{ color: textColor }">
        <slot name="spinner">
          <BsSpinner
            :text="text"
            :grow="grow"></BsSpinner>
        </slot>
        <div class="bs-loading-text" v-if="text || $slots.default">
          <slot>{{ text }}</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onUnmounted
} from 'vue';
import BsSpinner from '../bs-spinner/BsSpinner.vue';
import { bsLoadingProps } from './bs-loading-types';
import { supportedBsColorTypes } from '../types';

export default defineComponent({
  name: 'BsLoading',
  components: {
    BsSpinner
  },
  props: bsLoadingProps,
  emits: ['destroy', 'after-leave'],
  setup (props: any, ctx: any) {
    let textColor = computed(function () {
      let color = props.color;
      if (!color) {
        return '';
      }
      if (supportedBsColorTypes.includes(color)) {
        return `var(--${color})`;
      }
      return color;
    });

    let maskBackground = computed(function () {
      let bg = props.background;
      if (!bg) {
        return '';
      }
      if (supportedBsColorTypes.includes(bg)) {
        return `var(--${bg})`;
      }
      return bg;
    });

    onUnmounted(function () {
      ctx.emit('destroy');
    });

    return {
      textColor,
      maskBackground
    };
  }
});
</script>
