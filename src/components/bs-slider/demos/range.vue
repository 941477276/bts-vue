<docs>

---
order: 0
title:
  zh-CN: 区间模式
  en-US: Range
description: 
  zh-CN: 区间模式即为双滑块模式，设置`range`属性即可开启区间模式，当开启区间模式后`modelValue`需为一个长度为2的`int`数组
  en-US: The interval mode is the double slider mode. Set the `range` attribute to enable the interval mode. When the interval mode is enabled, `modelValue` needs to be an `int` array with a length of 2
---
</docs>

<template>
  <div>
    <h6>Normal(普通的)</h6>
    <BsSlider range v-model="slider"></BsSlider>
    <h6>No crossing allowed(不允许交叉)</h6>
    <BsSlider range :enable-cross="false" v-model="slider2"></BsSlider>
    <h6>Range min: 3，Rang max: 10(区间值最小值为3，最大值为10)</h6>
    <BsSlider
      range
      :range-min="3"
      :range-max="10"
      :enable-cross="false"
      v-model="slider3"></BsSlider>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let slider = ref([7, 21]);
let slider2 = ref([40, 60]);
let slider3 = ref([15, 25]);
</script>

<style lang="scss" scoped>
.bs-slider{
  margin-bottom: 0.5rem;
}
</style>
