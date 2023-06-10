<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 使用 `v-model` 实现数据双向绑定。
  en-US: Use `v-model` for two-way data binding.
---
</docs>

<template>
  <div>
    <bs-radio v-model="jsFramework" value="vue">Vue</bs-radio>
    <bs-radio v-model="jsFramework" value="react" label="React" />
    <bs-radio v-model="jsFramework" value="angular">Angular</bs-radio>
    <p style="margin-top: 0.5rem;">Your choose is: <strong>{{ jsFramework || '--' }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const jsFramework = ref('');
</script>
