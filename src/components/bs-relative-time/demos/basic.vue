<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 设置一个时间戳或`Date`，可自动转为相对于当前的时间。
  en-US: 设置一个时间戳或`Date`，可自动转为相对于当前的时间。
---
</docs>

<template>
  <div>
    <div>此刻：<BsRelativeTime :time="time1"></BsRelativeTime></div>
    <div>Now<code>(lang=en)</code>：<BsRelativeTime :time="time1" lang="en"></BsRelativeTime></div>
    <div>30分钟前：<BsRelativeTime :time="time2"></BsRelativeTime></div>
    <div>30 minutes ago<code>(lang=en)</code>：<BsRelativeTime :time="time2" lang="en"></BsRelativeTime></div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let now = new Date();
let time1 = now;
let time2 = now.getTime() - (30 * 60 * 1000);
</script>
