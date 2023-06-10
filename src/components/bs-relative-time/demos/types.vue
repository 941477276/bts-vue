<docs>

---
order: 0
title:
  zh-CN: 不同类型
  en-US: Types
description:
  zh-CN: `bs-relative-time`有`relative`、`date`、`datetime`3种类型，它们分别表示相对时间、日期、日期时间。
  en-US: `bs-relative-time` has three types：`relative`, `date`, and `datetime`, which represent relative time, date, and datetime respectively.
---
</docs>

<template>
  <div>
    <li><code>viewType=relative</code>：<BsRelativeTime :time="time1" ></BsRelativeTime></li>
    <li><code>viewType=date</code>：<BsRelativeTime :time="time2" view-type="date"></BsRelativeTime></li>
    <li><code>viewType=datetime</code>：<BsRelativeTime :time="time1" view-type="datetime"></BsRelativeTime></li>
    <li>
      <code>viewType=datetime</code>(自定义格式)：
      <BsRelativeTime :time="time1" view-type="datetime" format="YYYY年MM月DD日 HH时mm分ss秒"></BsRelativeTime>
    </li>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let now = new Date();
let time1 = now;
let time2 = new Date('2021/05/13 00:00:00');
</script>
