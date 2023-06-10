<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: `input-tag`是一种常用于给某件物体设置标签或属性的组件
  en-US: `input-tag` is a component commonly used to set a tag or property for an object
---
</docs>

<template>
  <div>
    <BsInputTags v-model="values1"></BsInputTags>
    <p style="margin-top: 0.5rem;">Values: {{ values1.map(item => item.label) }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let values1 = ref([{ label: 'HTML', value: 'html' }]);
</script>
