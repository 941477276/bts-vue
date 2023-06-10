<docs>

---
order: 0
title:
  zh-CN: 自定义提示
  en-US: Custom tooltip
description: 
  zh-CN: 使用`tooltipFormatter`可以格式化Tooltip的内容，它接收一个`Function`类型的数据
  en-US: Tooltip content can be formatted using `tooltipFormatter`, it receives a `Function`
---
</docs>

<template>
  <div>
    <BsSlider v-model="slider" :min="3" :max="93" :tooltip-formatter="(val) => { return '当前值为：' + val;}"></BsSlider>
    <BsSlider v-model="slider" :min="3" :max="93" tooltip-raw-content :tooltip-formatter="(val) => { return `当前值为：<strong style='font-size: 1.2rem;'>${val}</strong>`;}"></BsSlider>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let slider = ref(50);
</script>

<style lang="scss" scoped>
.bs-slider{
  margin-bottom: 0.5rem;
}
</style>
