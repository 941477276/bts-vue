<docs>

---
order: 0
title:
  zh-CN: 禁用状态
  en-US: Disabled
description: 
  zh-CN: 添加`disabled`属性可设置为不可用状态
  en-US: Add the `disabled` attribute to set it to an unavailable state
---
</docs>

<template>
  <div style="display: flex;flex-wrap: wrap;">
    <bs-select
      v-model="selectOne"
      :options="options"
      style="margin-right: 1rem;margin-bottom: 1rem;"
      disabled></bs-select>

    <bs-select
      v-model="selectTwo"
      :options="options"
      multiple
      disabled></bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectOne = ref('');
const selectTwo = ref(['vue']);

const options = ref([
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular', disabled: true },
  { value: 'jquery', label: 'jQuery' }
]);
</script>
