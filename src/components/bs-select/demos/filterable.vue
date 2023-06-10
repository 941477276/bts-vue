<docs>

---
order: 0
title:
  zh-CN: 可搜索
  en-US: Filterable
description:
  zh-CN:
    设置`filterable`属性可以开启搜索模式，默认情况下`bs-select`会从下拉选项的`label`或下拉选项的`innerText`中进行查找，如果希望使用其他
    的搜索逻辑，可以传递一个`filterMethod`给bs-select。`filterMethod`会在输入值变化的时候被调用
  en-US: Set the `filterable` attribute to enable the search mode. By default, `bs-select` will search from the `label` of the drop-down option or the `innerText` of the drop-down option. If you want to use other search logic, you can pass a `filterMethod` `Attributes to bs-select. `filterMethod` will be called when the input value changes
---
</docs>

<template>
  <div style="display: flex;flex-wrap: wrap;">
    <bs-select
      v-model="selectOne"
      clearable
      placeholder="Single-select searchable"
      filterable
      style="margin-right: 1rem;margin-bottom: 1rem;">
      <bs-option value="option1">Option1</bs-option>
      <bs-option value="option2" label="Option2"></bs-option>
      <bs-option :value="3">Option3</bs-option>
      <bs-option :value="4">Option4</bs-option>
      <bs-option value="5" :disabled="true">Option disabled</bs-option>
      <bs-option value="html">Html</bs-option>
      <bs-option value="css">Css</bs-option>
      <bs-option value="javascript">Javascript</bs-option>
    </bs-select>

    <bs-select
      v-model="selectTwo"
      clearable
      multiple
      placeholder="Multiple-select searchable"
      filterable
      style="margin-bottom: 1rem;">
      <bs-option value="option1">Option1</bs-option>
      <bs-option value="option2" label="Option2"></bs-option>
      <bs-option :value="3">Option3</bs-option>
      <bs-option :value="4">Option4</bs-option>
      <bs-option value="5" :disabled="true">Option disabled</bs-option>
      <bs-option value="html">Html</bs-option>
      <bs-option value="css">Css</bs-option>
      <bs-option value="javascript">Javascript</bs-option>
    </bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectOne = ref('');
const selectTwo = ref([]);
</script>
