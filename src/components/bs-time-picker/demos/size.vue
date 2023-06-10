<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Different size
description:
  zh-CN: `bs-time-picker`有大、中、小3种尺寸，通过`size`属性来设置它们，它们对应的值为`lg`、`默认`、`sm`。
  en-US: `bs-time-picker` has three sizes：large, medium, and small. They are set through the `size` attribute, and their corresponding values are `lg`, `default`, and `lg`.
---
</docs>

<template>
  <div>
    <h6>Large size(<code>size=lg</code>)</h6>
    <bs-time-picker v-model="time" size="lg" clearable></bs-time-picker>

    <h6>Default size</h6>
    <bs-time-picker v-model="time" clearable></bs-time-picker>

    <h6>Small size(<code>size=sm</code>)</h6>
    <bs-time-picker v-model="time" size="sm" clearable></bs-time-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time = ref(new Date());
</script>
