<template>
  <div
    ref="popperArrowRef"
    class="bs-popper-arrow"
    :class="[
      arrowClass
    ]"
    data-popper-arrow></div>
</template>

<script lang="ts">
import {
  inject,
  defineComponent
} from 'vue';
import {
  BsPopperContext,
  bsPopperContextKey
} from './bs-popper-types';

export default defineComponent({
  name: 'BsPopperArrow',
  props: {
    arrowClass: { // 三角箭头的class
      type: String,
      default: ''
    }
  },
  setup () {
    let { popperArrowRef } = inject<BsPopperContext>(bsPopperContextKey, {} as BsPopperContext);
    return {
      popperArrowRef
    };
  }
});
</script>

<style lang="scss">

</style>
