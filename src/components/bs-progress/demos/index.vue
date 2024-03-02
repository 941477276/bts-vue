<template>
<div class="demo-index">
  <Basic></Basic>
  <Striped></Striped>
  <Multiple></Multiple>
  <CustomColor></CustomColor>
  <StripedAnimation></StripedAnimation>
  <Circle></Circle>
  <Dashboard></Dashboard>
  <StrokeLinecap></StrokeLinecap>
  <GradientColor></GradientColor>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Striped from './striped.vue';
import Multiple from './multiple.vue';
import CustomColor from './custom-color.vue';
import StripedAnimation from './striped-animation.vue';
import Circle from './circle.vue';
import Dashboard from './dashboard.vue';
import StrokeLinecap from './stroke-linecap.vue';
import GradientColor from './circle-custom-color.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Striped,
    Multiple,
    CustomColor,
    StripedAnimation,
    Circle,
    Dashboard,
    StrokeLinecap,
    GradientColor
  }
});
</script>
