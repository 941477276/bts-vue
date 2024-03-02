<docs>

---
order: 0
title:
  zh-CN: 环形进度条
  en-US: Basic usage
description:
  zh-CN: 设置`type=circle`属性来指定使用环形进度条，在环形进度条中，可以通过`width属性来设置其大小。
  en-US: Set the `type=circle` attribute to specify the use of a circular progress bar. In a circular progress bar, its size can be set through the `width` attribute.
---
</docs>

<template>
  <div>
    <bs-progress type="circle" :percentage="percentage"></bs-progress>
    <bs-button-group style="margin: 0 1rem;">
      <bs-button type="primary" plain @click="decrement">-</bs-button>
      <bs-button type="primary" plain @click="increment">+</bs-button>
    </bs-button-group>
    <bs-progress type="circle" :percentage="100" status="success"></bs-progress>
    <bs-progress type="circle" :percentage="70" status="warning"></bs-progress>
    <bs-progress type="circle" :percentage="50" status="danger"></bs-progress>
  </div>
</template>
<style lang="scss" scoped>
.bs-progress{
  margin-bottom: 1rem;
}
</style>
<script setup lang="ts">
import {
  ref
} from 'vue';

let percentage = ref(25);
const decrement = function () {
  percentage.value -= 5;
};
const increment = function () {
  percentage.value += 5;
};
</script>
