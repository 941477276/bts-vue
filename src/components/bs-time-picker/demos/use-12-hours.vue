<docs>

---
order: 0
title:
  zh-CN: 12小时制
  en-US: 12-hour
description: 
  zh-CN: 12小时制的时间选择器，设置`use12Hours`属性可开启12小时制，默认的`format`为`hh:mm:ss a`。
  en-US: 12-hour time selector, set `use12Hours` attribute to enable 12-hour format, default `format` is `hh:mm:ss a`.
---
</docs>

<template>
  <div>
    <BsTimePicker v-model="time" use12-hours value-format="h:mm:ss"></BsTimePicker>
    <p>Value：{{ time }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time = ref('09:27:30 am');
</script>
