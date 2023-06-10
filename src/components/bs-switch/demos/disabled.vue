<docs>

---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
description: 
  zh-CN: 添加`disabled`属性可禁用开关
  en-US: Add `disabled` attribute to disable switch
---
</docs>

<template>
  <div>
    <bs-switch v-model="switch1" style="margin-right: 1rem" disabled></bs-switch>
    <bs-switch :model-value="true" disabled></bs-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let switch1 = ref(false);
</script>
