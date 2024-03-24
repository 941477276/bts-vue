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
    <BsDateRangePicker v-model="date" clearable></BsDateRangePicker>
    <BsDateRangePicker v-model="dateTime" picker-type="dateTime" clearable></BsDateRangePicker>
    <BsDateRangePicker v-model="month" picker-type="month" clearable></BsDateRangePicker>
    <BsDateRangePicker v-model="year" picker-type="year" clearable></BsDateRangePicker>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// The v-model value of the <BsDateRangePicker> component needs to be an array. The value type of each item in the array can be date string, timestamp, or Date object.
// When value-format is not set, the v-model value bound after the user selects a date will become a dayjs object.
// <BsDateRangePicker>组件的v-model值需为一个数组，数组中每一项的值的类型可以为日期字符串、时间戳、Date对象。
// 在未设置value-format的情况下，用户选择日期后绑定的v-model值会变成 dayjs 对象
let date = ref(['2024-03-15', new Date()]);
let dateTime = ref([1710552982345, new Date()]);
let month = ref(['2024-03', '2024-12']);
let year = ref(['2011', new Date().getFullYear()]);
</script>
'
<style lang="scss" scoped>
.bs-range-editor{
  margin: 0 1rem 1rem 0;
}
</style>
