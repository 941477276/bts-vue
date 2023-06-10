<docs>

---
order: 0
title:
  zh-CN: 显示底部按钮
  en-US: Show bottom button
description: 
  zh-CN: 设置`show-footer`属性可以显示底部按钮
  en-US: Set the `show-footer` property to display the bottom button
---
</docs>

<template>
  <div>
    <BsTimePicker v-model="time" show-footer></BsTimePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time = ref(new Date());
</script>
