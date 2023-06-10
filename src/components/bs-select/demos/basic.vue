<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 使用 `v-model` 实现数据双向绑定。`bs-select`有2种方式渲染下拉内容，一种是使用`bs-option`组件，另一种是通过给`bs-select`组件设置`options`属性
  en-US: Use `v-model` to achieve two-way data binding. `bs-select` has two ways to render the drop-down content, one is to use the `bs-option` component, and the other is to set the `options` property for the `bs-select` component
---
</docs>

<template>
  <div>
    <h6>Use <code>bs-option</code> component</h6>
    <bs-select v-model="selectOne" clearable>
      <bs-option value="vue">Vue</bs-option>
      <bs-option value="react" label="React"></bs-option>
      <bs-option value="ng" :disabled="true">Angular</bs-option>
      <bs-option value="jquery">jQuery</bs-option>
    </bs-select>

    <h6>Use <code>options</code> prop</h6>
    <bs-select
      v-model="selectTwo"
      :options="options"
      clearable></bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectOne = ref('');
const selectTwo = ref('vue');

const options = ref([
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular', disabled: true },
  { value: 'jquery', label: 'jQuery' }
]);
</script>
