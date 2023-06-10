<docs>

---
order: 0
title:
  zh-CN: 加载中
  en-US: Loading state
description: 
  zh-CN: 当下拉内容还在加载时可以给`bs-select`添加一个`loading`属性，以让select呈现加载中样式
  en-US: When the drop-down content is still loading, you can add a `loading` attribute to `bs-select`, so that the select can display the loading style
---
</docs>

<template>
  <div style="display: flex;flex-wrap: wrap;">
    <bs-select
      v-model="selectOne"
      :options="options"
      :loading="loading"
      style="margin-right: 1rem;margin-bottom: 1rem;"
      filterable
      clearable></bs-select>

    <bs-select
      v-model="selectTwo"
      :options="options"
      :loading="loading"
      style="margin-right: 1rem;"
      multiple
      filterable
      clearable></bs-select>
      <bs-button type="primary" @click="loadData">Load data</bs-button>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectOne = ref('');
const selectTwo = ref(['vue']);

const options = ref();
const loading = ref(true);
const loadData = function () {
  loading.value = true;
  let timer = setTimeout(function () {
    clearTimeout(timer);
    options.value = [
      { value: 'vue', label: 'Vue' },
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular', disabled: true },
      { value: 'jquery', label: 'jQuery' }
    ];
    loading.value = false;
  }, 1500);
};
</script>
