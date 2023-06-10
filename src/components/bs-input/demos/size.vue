<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Different size
description: 
  zh-CN: `vue3-bootstrap`预置了`sm`、`lg`和`默认`3种尺寸，通过`size`属性来设置它们
  en-US: `vue3-bootstrap` presets `sm`, `lg` and `default` 3 sizes, set them by `size` prop
---
</docs>

<template>
  <div>
    <h6>Large input(<code>size=lg</code>)</h6>
    <bs-input size="lg" v-model="text" placeholder="input something" />
    <h6>Default input</h6>
    <bs-input v-model="text" placeholder="input something" />
    <h6>Small input(<code>size=sm</code>)</h6>
    <bs-input size="sm" v-model="text" placeholder="input something" />
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const text = ref('');
</script>
