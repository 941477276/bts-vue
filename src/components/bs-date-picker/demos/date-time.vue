<docs>

---
order: 0
title:
  zh-CN: 日期时间选择
  en-US: Date time selection
description: 
  zh-CN: 设置`picker-type=dateTime`属性可选择日期及时间
  en-US: Set `picker-type=dateTime` attribute to select date and time
---
</docs>

<template>
  <div>
    <BsDatePicker v-model="dateTime" picker-type="dateTime" placeholder="请选择日期时间"></BsDatePicker>

    <h6>12-hour(12小时制)</h6>
    <BsDatePicker
      v-model="dateTime2"
      picker-type="dateTime"
      value-format="YYYY-MM-DD hh:mm:ss a"
      :time-panel-props="{ use12Hours: true }"></BsDatePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let dateTime = ref(new Date());
let dateTime2 = ref('2022-08-20 19:37:50');
</script>
