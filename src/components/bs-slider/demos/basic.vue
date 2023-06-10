<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN:
    最简单的用法，使用`v-model`双向绑定数据；设置属性`range`可开启双滑块，设置属性`disabled`可禁用滑块。
    注意：单滑块时，`modelValue`值为数字类型，当滑块为双滑块时，`modelValue`值为`int[]`类型。
  en-US:
    The simplest usage is to use `v-model` to bind data in two directions; set the attribute `range` to enable double sliders, and set the attribute `disabled` to disable the sliders.
    Note：When the slider is single, the `modelValue` value is a number type, and when the slider is a double slider, the `modelValue` value is an `int[]` type.
---
</docs>

<template>
  <div>
    <BsSlider v-model="slider"></BsSlider>
    <BsSlider range v-model="slider2"></BsSlider>
    <BsSlider range disabled :model-value="[40, 60]"></BsSlider>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let slider = ref(50);
let slider2 = ref([40, 60]);
</script>

<style lang="scss" scoped>
.bs-slider{
  margin-bottom: 0.5rem;
}
</style>
