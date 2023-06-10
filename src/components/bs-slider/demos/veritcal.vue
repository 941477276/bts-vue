<docs>

---
order: 0
title:
  zh-CN: 垂直模式
  en-US: Vertical
description: 
  zh-CN: 设置`vertical`属性即可呈现垂直的滑块
  en-US: Set the `vertical` property to render a vertical slider
---
</docs>

<template>
  <div class="vertical-slider-wrapper">
    <BsSlider vertical v-model="slider"></BsSlider>
    <BsSlider vertical range v-model="slider2"></BsSlider>
    <BsSlider vertical :marks="marks" range v-model="slider3"></BsSlider>
  </div>
</template>

<script setup>
import { h, ref } from 'vue';
import { BsiInfoCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiInfoCircleFill';

let slider = ref(33);
let slider2 = ref([40, 60]);
let marks = ref({
  0: '0°C',
  24: '24°C',
  30: {
    label: '30°C',
    style: {
      color: '#ffe584'
    }
  },
  50: '50°C',
  100: {
    label: h('span', [h(BsiInfoCircleFill), '100°C']),
    style: {
      color: '#f00',
      fontWeight: 'bold'
    }
  }
});
let slider3 = ref([15, 37]);

</script>

<style lang="scss" scoped>
.vertical-slider-wrapper{
  display: flex;
  justify-content: space-around;
  .bs-slider{
    height: 15rem;
  }
}
/*.bs-slider{
  margin-right: 3rem;
}*/
</style>
