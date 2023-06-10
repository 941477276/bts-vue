<docs>
---
order: 0
title:
  zh-CN: 不同大小
  en-US: Size
description:
  zh-CN: `bs-input-tag`有大、中、小3种尺寸，通过`size`属性来设置它们，它们对应的值为`lg`、`默认`、`sm`。
  en-US: `bs-input-tag` has three sizes：large, medium, and small. They are set through the `size` attribute, and their corresponding values are `lg`, `default`, and `lg`.
---
</docs>

<template>
  <div>
    <h6>Large size(<code>size=lg</code>)</h6>
    <bs-input-tags v-model="values1" size="lg"></bs-input-tags>

    <h6>Default size</h6>
    <bs-input-tags v-model="values1"></bs-input-tags>

    <h6>Small size(<code>size=sm</code>)</h6>
    <bs-input-tags v-model="values1" size="sm"></bs-input-tags>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let values1 = ref([{ label: 'HTML', value: 'html' }]);
</script>
