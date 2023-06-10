<docs>

---
order: 0
title:
  zh-CN: 文本框
  en-US: Textarea
description: 
  zh-CN: `type`设置为`textarea`可呈现文本框，常用于多行输入
  en-US: `type` is set to `textarea` to render a textarea, often used for multi-line input
---
</docs>

<template>
  <div>
    <bs-input v-model="text" type="textarea" placeholder="input something" />
    <p style="margin-top: 0.5rem;">Your input: <strong>{{ text || '--' }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const text = ref('');
</script>
