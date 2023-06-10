<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 最简单的用法
  en-US: The simplest usage
---
</docs>

<template>
  <div>
    <BsTimePicker v-model="time" placeholder="Select a time"></BsTimePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time = ref(new Date());
</script>
