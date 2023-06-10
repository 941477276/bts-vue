<template>
<div class="demo-index">
  <Basic></Basic>
  <Draggable></Draggable>
  <Sizes></Sizes>
  <CustomModal></CustomModal>
  <AsyncClose></AsyncClose>
  <Scroll></Scroll>
  <Centered></Centered>
  <ModalNesting></ModalNesting>
  <Fullscreen></Fullscreen>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Draggable from './draggable.vue';
import Sizes from './sizes.vue';
import CustomModal from './custom-modal.vue';
import AsyncClose from './async-close.vue';
import Scroll from './scroll.vue';
import Centered from './centered.vue';
import ModalNesting from './modal-nesting.vue';
import Fullscreen from './fullscreen.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Draggable,
    Sizes,
    CustomModal,
    AsyncClose,
    Scroll,
    Centered,
    ModalNesting,
    Fullscreen
  }
});
</script>
