<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Switch size
description:
  zh-CN: `bs-tag`有大、中、小、3种尺寸，通过`size`属性来设置它们，它们对应的值为`lg`、`默认`、`sm`。
  en-US: `bs-tag` has 3 sizes： large, medium, small. They are set through the `size` attribute, and their corresponding values are `lg`, `default`, `sm`.
---
</docs>

<template>
  <div>
    <bs-switch v-model="switch1" active-text="lg" inactive-text="lg" size="lg" style="margin-right: 1rem;"></bs-switch>

    <bs-switch v-model="switch1" style="margin-right: 1rem;"></bs-switch>

    <bs-switch v-model="switch1" active-text="sm" inactive-text="sm" size="sm"></bs-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let switch1 = ref(false);
</script>
