<template>
<div class="component-usage">
 <div>
   <h3>基本使用</h3>
   <Basic></Basic>
 </div>

  <div>
    <hr>
    <h3>条纹进度条</h3>
    <Striped></Striped>
  </div>

  <div>
    <hr>
    <h3>多个进度条</h3>
    <Multiple></Multiple>
  </div>

  <div>
    <hr>
    <h3>自定义颜色</h3>
    <CustomColor></CustomColor>
  </div>

  <div>
    <hr>
    <h3>条纹动画</h3>
    <StripedAnimation></StripedAnimation>
  </div>

  <div>
    <hr>
    <h3>环形进度条</h3>
    <Circle></Circle>
  </div>

  <div>
    <hr>
    <h3>仪表盘</h3>
    <Dashboard></Dashboard>
  </div>

  <div>
    <hr>
    <h3>圆角/方角</h3>
    <StrokeLinecap></StrokeLinecap>
  </div>

  <div>
    <hr>
    <h3>渐变色</h3>
    <GradientColor></GradientColor>
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Basic from './demos/basic.vue';
import Striped from './demos/striped.vue';
import Multiple from './demos/multiple.vue';
import CustomColor from './demos/custom-color.vue';
import StripedAnimation from './demos/striped-animation.vue';
import Circle from './demos/circle.vue';
import Dashboard from './demos/dashboard.vue';
import StrokeLinecap from './demos/stroke-linecap.vue';
import GradientColor from './demos/circle-custom-color.vue';
export default defineComponent({
  name: 'BsTagUsage',
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
  },
  setup (props: any) {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.bs-progress{
  margin-bottom: 1rem;
}
</style>
