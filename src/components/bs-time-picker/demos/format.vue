<docs>

---
order: 0
title:
  zh-CN: 格式化
  en-US: Format
description: 
  zh-CN: 最简单的用法
  en-US: The simplest usage
---
</docs>

<template>
  <div>
    <h6>Display formatting(<code>format="HH时mm分ss秒"</code>)</h6>
    <BsTimePicker v-model="time1" format="HH时mm分ss秒"></BsTimePicker>
    <p>Value：{{ time1 }}</p>

    <h6>Value formatting(<code>value-format="HH时mm分ss秒"</code>)</h6>
    <BsTimePicker v-model="time2" value-format="HH时mm分ss秒"></BsTimePicker>
    <p>Value：{{ time2 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time1 = ref(new Date());
let time2 = ref('18时02分25秒');
</script>
