<docs>

---
order: 0
title:
  zh-CN: 异步切换
  en-US: Async switching
description: 
  zh-CN: `before-change`函数若返回`Promise`，那么Switch将在`Promise`状态为`fulfilled`后进行切换
  en-US: If `before-change` function returns `Promise`, then Switch will switch after `Promise` state is `fulfilled`
---
</docs>

<template>
  <div>
    <bs-switch
      v-model="switch1"
      :loading="isStart"
      :extra-data="{name: 'switch'}"
      :before-change="onBeforeChange"></bs-switch>
    <span v-if="!isStart" style="margin-left: 1rem;display: inline-block;vertical-align: middle">点击一下开关吧</span>
    <span v-else style="margin-left: 1rem;display: inline-block;vertical-align: middle">{{ count }}秒后改变状态</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let switch1 = ref(false);
let isStart = ref(false);
let count = ref(3);
let onBeforeChange = function (flag, extraData) {
  console.log('开关中的额外数据', extraData);
  return new Promise(function (resolve) {
    isStart.value = true;
    let timer = setInterval(function () {
      if (count.value == 1) {
        clearInterval(timer);
        resolve(true);
        count.value = 3;
        isStart.value = false;
        return;
      }
      count.value--;
    }, 1000);
  });
};
</script>
