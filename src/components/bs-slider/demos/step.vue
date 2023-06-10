<docs>

---
order: 0
title:
  zh-CN: 显示断点
  en-US: Show step
description: 
  zh-CN: 设置`show-step`属性即可显示滑块断点，断点通常与`step`属性搭配使用，`step`默认值为1
  en-US: Set the `show-step` attribute to display the slider breakpoint. The breakpoint is usually used in conjunction with the `step` attribute. The default value of `step` is 1
---
</docs>

<template>
  <div>
    <BsSlider show-steps :step="10" v-model="slider"></BsSlider>
    <div class="vertical-breakpoint-step-box">
      <BsSlider vertical show-steps :step="10" v-model="slider"></BsSlider>
      <BsSlider vertical show-steps :step="10" v-model="slider"></BsSlider>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let slider = ref(65);
</script>

<style lang="scss" scoped>
.bs-slider{
  margin-bottom: 1rem;
}
.vertical-breakpoint-step-box{
  display: flex;
  justify-content: space-between;
  .bs-slider{
    height: 15rem;
    margin-bottom: 0;
  }
}
</style>
