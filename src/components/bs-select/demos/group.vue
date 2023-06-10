<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 使用`bs-option-group`组件可对选项进行分组，它的label属性为分组名
  en-US: Use the `bs-option-group` component to group options, and its label attribute is the group name
---
</docs>

<template>
  <div>
    <bs-select
      v-model="selectVal"
      multiple
      clearable
      :multiple-limit="4"
      @select-limit="onMultipleLimit">
      <bs-option value="opt1">Option 1</bs-option>
      <bs-option-group label="Group 1">
        <bs-option value="group-value1">Group option1</bs-option>
        <bs-option value="group-value2" label="Group option2"></bs-option>
        <bs-option :value="3">Group option3</bs-option>
      </bs-option-group>
      <bs-option value="opt2">Option 2</bs-option>
      <bs-option :value="true" label="Boolean value option"></bs-option>
      <bs-option value="6" :disabled="true">Disabled option</bs-option>
      <bs-option-group label="Group 2">
        <bs-option value="group-value7">Group2 option1</bs-option>
        <bs-option value="group-value8" :disabled="true" title="disabled option">Group2 option2</bs-option>
      </bs-option-group>
      <bs-option-group label="Group3(disabled)" disabled>
        <bs-option value="group-value9">Group3 option1</bs-option>
        <bs-option value="group-value10">Group3 option2</bs-option>
      </bs-option-group>
    </bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectVal = ref([]);
let onMultipleLimit = function () {
  alert('At most 4 items can be selected! ');
};
</script>
