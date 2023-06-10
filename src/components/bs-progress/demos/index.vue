<template>
<div class="demo-index">
  <Basic></Basic>
  <Striped></Striped>
  <Multiple></Multiple>
  <CustomColor></CustomColor>
  <StripedAnimation></StripedAnimation>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Striped from './striped.vue';
import Multiple from './multiple.vue';
import CustomColor from './custom-color.vue';
import StripedAnimation from './striped-animation.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Striped,
    Multiple,
    CustomColor,
    StripedAnimation
  }
});
</script>
