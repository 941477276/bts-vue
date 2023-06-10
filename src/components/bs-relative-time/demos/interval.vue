<docs>

---
order: 0
title:
  zh-CN: 自动更新时间间隔
  en-US: Update interval
description: 
  zh-CN: `interval`属性可以修改组件自动更新时间间隔，默认为`60`秒
  en-US: The `interval` attribute can modify the automatic update interval of the component, the default is `60` seconds
---
</docs>

<template>
  <div>
    <div>Now<code>(interval=60)</code>：<BsRelativeTime :time="time1"></BsRelativeTime></div>
    <div>Now<code>(interval=30)</code>：<BsRelativeTime :time="time1" :interval="30"></BsRelativeTime></div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let now = new Date();
let time1 = ref(now);
</script>
