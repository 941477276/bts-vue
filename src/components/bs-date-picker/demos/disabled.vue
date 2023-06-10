<docs>

---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
description: 
  zh-CN: 设置`disabled`属性可以禁用日期选择器，设置`disabled-date`属性可以禁用部分日期
  en-US: Set the `disabled` attribute to disable the date picker, and set the `disabled-date` attribute to disable some dates
---
</docs>

<template>
  <div>
    <h6>Disable date picker</h6>
    <BsDatePicker v-model="date" disabled placeholder="请选择日期"></BsDatePicker>

    <h6>Disable some dates</h6>
    <BsDatePicker v-model="date2" :disabled-date="disabledDate" placeholder="请选择日期"></BsDatePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

let date = ref(new Date());
let date2 = ref(new Date());

let disabledDate = function (current) {
  let now = dayjs();
  console.log('current', current);
  return (current.valueOf() < now.valueOf()) || (current.endOf('month').valueOf() > now.endOf('month').valueOf());
};
</script>
