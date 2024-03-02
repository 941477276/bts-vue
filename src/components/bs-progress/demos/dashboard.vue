<docs>

---
order: 0
title:
  zh-CN: 仪表盘
  en-US: Dashboard
description:
  zh-CN: 设置`type=dashboard`，可以很方便地实现仪表盘样式的进度条。若想要修改缺口的角度，可以设置`gapDegree`为你想要的值。
  en-US: Set `type=dashboard` can easily implement a dashboard-style progress bar. If you want to modify the angle of the gap, you can set `gapDegree` to the value you want.
---
</docs>

<template>
  <div>
    <bs-progress type="dashboard" :percentage="percentage"></bs-progress>
    <bs-button-group style="margin: 0 1rem;">
      <bs-button type="primary" plain @click="decrement">-</bs-button>
      <bs-button type="primary" plain @click="increment">+</bs-button>
    </bs-button-group>
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
