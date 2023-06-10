<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 高精度的数字输入框
  en-US: High-precision digital input box
---
</docs>

<template>
  <div>
    <div style="margin-bottom: 1rem;">
      <BsInputNumber v-model="number"></BsInputNumber>
      Value: {{ number }}
    </div>

    <div>
      <BsInputNumber v-model="number" :control-inner="false"></BsInputNumber>
      Value: {{ number }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let number = ref(10);
</script>
