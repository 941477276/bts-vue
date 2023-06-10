<docs>

---
order: 0
title:
  zh-CN: 显示标记
  en-US: Show mark
description: 
  zh-CN: 设置`marks`属性即可显示标记，`marks`为一个`key`为`number`类型，`value`为`string`或`object`类型的对象
  en-US: Set the `marks` attribute to display the mark, `marks` is an object whose `key` is of type `number`, and `value` is of type `string` or `object`
---
</docs>

<template>
  <div>
    <h6>Normal(普通的)</h6>
    <BsSlider :marks="marks" v-model="slider"></BsSlider>
    <h6><code>included=false</code></h6>
    <BsSlider :marks="marks" :included="false" v-model="slider2"></BsSlider>
    <h6>Range(区间)</h6>
    <BsSlider :marks="marks" range v-model="slider3"></BsSlider>
  </div>
</template>

<script setup>
import { h, ref } from 'vue';
import { BsiInfoCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiInfoCircleFill';

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
    // label: '100°C',
    label: h('span', [h(BsiInfoCircleFill), '100°C']),
    style: {
      color: '#f00',
      fontWeight: 'bold'
    }
  }
});

let slider = ref(10);
let slider2 = ref(15);
let slider3 = ref([20, 35]);
</script>

<style lang="scss" scoped>
.bs-slider.has-marks{
  margin-bottom: 1.5rem;
}
</style>
