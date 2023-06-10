<docs>

---
order: 0
title:
  zh-CN: 自定义颜色
  en-US: Custom color
description:
  zh-CN: 给`bs-progress`组件设置`color`属性可以自定义颜色，它可以是一个`string`类型的颜色值、一个函数或者一个`{color:string; percentage:number}`类型的数组
  en-US: You can customize the color by setting the `color` attribute to the `bs-progress` component, which can be a color value of type `string`, a function or an array of type `{color:string; percentage:number}`
---
</docs>

<template>
  <div>
    <bs-progress
      :percentage="percentage"
      color="#f60"></bs-progress>
    <bs-progress
      :percentage="percentage"
      :color="customColorFn"></bs-progress>
    <bs-progress
      :percentage="percentage"
      :color="customColors"></bs-progress>
    <bs-button @click="handlePercentage(-1)" type="primary" size="sm">Sub</bs-button>
    <bs-button @click="handlePercentage(1)" type="primary" size="sm" style="margin-left: 1rem;">Add</bs-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let percentage = ref(20);
let handlePercentage = function (type) {
  let val = 0;
  if (type == -1) {
    val = percentage.value - 20;
  } else {
    val = percentage.value + 20;
  }
  if (val < 0) {
    val = 0;
  } else if (val > 100) {
    val = 100;
  }
  percentage.value = val;
};
let customColorFn = function (percentage) {
  if (percentage <= 20) {
    return '#f00';
  }
  if (percentage <= 60) {
    return '#ffc107';
  }
  if (percentage <= 80) {
    return '#17a2b8';
  }
  return '#28a745';
};
const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
];
</script>

<style lang="scss" scoped>
.bs-progress{
  margin-bottom: 1rem;
}
</style>
