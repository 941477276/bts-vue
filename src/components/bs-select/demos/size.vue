<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Different size
description:
  zh-CN: `bs-select`有大、中、小3种尺寸，通过`size`属性来设置它们，它们对应的值为`lg`、`默认`、`sm`。
  en-US: `bs-select` has three sizes：large, medium, and small. They are set through the `size` attribute, and their corresponding values are `lg`, `default`, and `lg`.
---
</docs>

<template>
  <div>
    <h6>Large select(<code>size=lg</code>)</h6>
    <bs-select v-model="selectVal" size="lg" :options="options" clearable></bs-select>

    <h6>Default select</h6>
    <bs-select v-model="selectVal" :options="options" clearable></bs-select>

    <h6>Small select(<code>size=sm</code>)</h6>
    <bs-select v-model="selectVal" size="sm" :options="options" clearable></bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectVal = ref('');
const options = ref([
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular', disabled: true },
  { value: 'jquery', label: 'jQuery' }
]);
</script>
