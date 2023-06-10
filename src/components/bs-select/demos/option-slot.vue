<docs>

---
order: 0
title:
  zh-CN: 自定义模板
  en-US: Option slot
description: 
  zh-CN: 自定义下拉选项内容
  en-US: Custom dropdown option content
---
</docs>

<template>
  <div>
    <h6>Use <code>bs-option</code> component</h6>
    <bs-select v-model="selectOne" clearable>
      <bs-option value="vue" label="Vue">
        <div class="option-custom-content">
          <span>Vue</span>
          <small>Value: vue</small>
        </div>
      </bs-option>
      <bs-option value="react" label="React">
        <div class="option-custom-content">
          <span>React</span>
          <small>Value: react</small>
        </div>
      </bs-option>
      <bs-option value="ng" :disabled="true" label="Angular">
        <div class="option-custom-content">
          <span>Angular</span>
          <small>Value: ng</small>
        </div>
      </bs-option>
      <bs-option value="jquery">
        <div class="option-custom-content">
          <span>jQuery</span>
          <small>Value: jquery</small>
        </div>
      </bs-option>
    </bs-select>

    <h6>Use <code>options</code> prop</h6>
    <bs-select
      v-model="selectTwo"
      :options="options"
      clearable>
      <template #option="{ option }">
        <div class="option-custom-content">
          <span>{{ option.label }}</span>
          <small>Value: {{ option.value }}</small>
        </div>
      </template>
    </bs-select>

    <h6>Extended menu</h6>
    <bs-select v-model="selectThree" clearable>
      <bs-option value="vue">Vue</bs-option>
      <bs-option value="react" label="React"></bs-option>
      <bs-option value="ng" :disabled="true">Angular</bs-option>
      <bs-option value="jquery">jQuery</bs-option>
      <template #extra>
        <hr>
        <bs-button type="primary" style="margin: 0 1rem 1rem;">a button</bs-button>
      </template>
    </bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectOne = ref('');
const selectTwo = ref('vue');
const selectThree = ref('');

const options = ref([
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular', disabled: true },
  { value: 'jquery', label: 'jQuery' }
]);
</script>

<style lang="scss" scoped>
.option-custom-content{
  overflow: hidden;
  small{
    float: right;
    color: #aaa;
  }
}
</style>
