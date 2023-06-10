<docs>

---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
description: 
  zh-CN: 设置`disabled`属性可以禁用时间选择，设置`disabled-hours`、`disabled-minutes`、`disabled-seconds`可分别禁用时、分、秒
  en-US: 12-hour time selector, set `use12Hours` attribute to enable 12-hour format, default `format` is `hh:mm:ss a`.
---
</docs>

<template>
  <div>
    <h6>Disable picker(整体禁用)</h6>
    <BsTimePicker v-model="time1" disabled></BsTimePicker>

    <h6>Disabled some options(禁用部分时分秒)</h6>
    <BsTimePicker
      v-model="time2"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"></BsTimePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time1 = ref(new Date());
let time2 = ref(new Date());

let disabledHours = function (hour, use12Hours) {
  return hour > 20;
};
let disabledMinutes = function (hour, minute, use12Hours) {
  return minute < 40;
};
let disabledSeconds = function (hour, minute, second, use12Hours) {
  return second > 20 && second < 35;
};
</script>
