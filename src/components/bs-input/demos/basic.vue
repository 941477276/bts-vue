<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 基本用法，可以使用 `v-model` 实现数据的双向绑定。
  en-US: Basic usage, you can use `v-model` to achieve two-way binding of data.
---
</docs>

<template>
  <div>
    <bs-input v-model="text" placeholder="input something" :native-attrs="{'data-tag-name': 'input'}" />
    <p style="margin-top: 0.5rem;">Your input: <strong>{{ text || '--' }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const text = ref('');
</script>
