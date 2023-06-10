<docs>

---
order: 0
title:
  zh-CN: 自定义触发
  en-US: Custom trigger
description: 
  zh-CN: 通过默认插槽可以自定义触发显示下拉的元素
  en-US: The element that triggers the display of the drop-down can be customized through the default slot
---
</docs>

<template>
  <div>
    <BsTimePicker v-model="time" value-format="HH:mm:ss">
      <bs-button type="primary" plain>Button trigger</bs-button>
    </BsTimePicker>
    <p>Value: {{ time || '--' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let time = ref();
</script>
