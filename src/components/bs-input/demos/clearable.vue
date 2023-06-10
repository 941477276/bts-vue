<docs>

---
order: 0
title:
  zh-CN: 可清空
  en-US: Clearable
description: 
  zh-CN: 使用`clearable`属性即可得到一个可快速清空的输入框
  en-US: Use the `clearable` attribute to get an input box that can be quickly cleared
---
</docs>

<template>
  <div>
    <bs-input v-model="text" clearable placeholder="input something" />
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const text = ref('');
</script>
