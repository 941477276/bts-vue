<docs>

---
order: 0
title:
  zh-CN: 多选
  en-US: Multiple
description: 
  zh-CN: 为bs-select设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现
  en-US: Multiple selection can be enabled by setting `multiple` attribute for bs-select, at this time, the value of `v-model` is an array composed of currently selected values. By default, the selected value will be displayed in the form of Tag
---
</docs>

<template>
  <div>
    <bs-select v-model="selectOne" multiple clearable>
      <bs-option value="vue">Vue</bs-option>
      <bs-option value="react" label="React"></bs-option>
      <bs-option value="ng" :disabled="true">Angular</bs-option>
      <bs-option value="jquery">jQuery</bs-option>
      <bs-option value="svelte">Svelte</bs-option>
    </bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectOne = ref(['vue', 'react']);
</script>
