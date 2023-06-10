<docs>

---
order: 0
title:
  zh-CN: 选择时分
  en-US: Choose time
description: 
  zh-CN: 下拉浮窗中的列会随着`format`变化，当略去`format`中的某部分时，浮层中对应的列也会消失。注意，format只是改变显示的格式，并非改变`model-value`值。
  en-US: The columns in the drop-down will change with `format`, when a certain part in `format` is omitted, the corresponding columns in the drop-down will also disappear. Note that format only changes the displayed format, not the `model-value` value.
---
</docs>

<template>
  <div>
    <h6>Only hours and minutes(<code>format="HH:mm"</code>)</h6>
    <BsTimePicker v-model="time1" format="HH:mm"></BsTimePicker>

    <h6>Only minutes and seconds(<code>format="mm:ss"</code>)</h6>
    <BsTimePicker v-model="time2" format="mm:ss"></BsTimePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time1 = ref(new Date());
let time2 = ref(new Date());
</script>
