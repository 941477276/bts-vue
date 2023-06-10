<docs>

---
order: 0
title:
  zh-CN: 加载状态
  en-US: Loading
description: 
  zh-CN: 添加`loading`属性将开关置为加载状态，加载状态时的开关不可操作
  en-US: Add the `loading` attribute to set the switch to the loading state, and the switch in the loading state cannot be operated
---
</docs>

<template>
  <div>
    <bs-switch v-model="switch1"  style="margin-right: 1rem" active-text="是" inactive-text="否" loading></bs-switch>
    <bs-switch :model-value="true" active-text="是" inactive-text="否" loading></bs-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let switch1 = ref(false);
</script>
