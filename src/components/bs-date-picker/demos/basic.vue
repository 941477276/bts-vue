<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 最简单的用法
  en-US: The simplest usage
---
</docs>

<template>
  <div>
    <BsDatePicker v-model="date" placeholder="请选择日期"></BsDatePicker>
    <BsDatePicker v-model="week" picker-type="week" placeholder="请选择周"></BsDatePicker>
    <BsDatePicker v-model="month" picker-type="month" placeholder="请选择月份"></BsDatePicker>
    <BsDatePicker v-model="quarter" picker-type="quarter" placeholder="请选择季度"></BsDatePicker>
    <BsDatePicker v-model="year" picker-type="year" placeholder="请选择年份"></BsDatePicker>
    <BsDatePicker v-model="decade" picker-type="decade" placeholder="请选择年份区间"></BsDatePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let date = ref('');
let week = ref('');
let month = ref('');
let quarter = ref('');
let year = ref('');
let decade = ref('');
</script>
'
<style lang="scss" scoped>
.bs-date-editor{
  margin: 0 1rem 1rem 0;
}
</style>
