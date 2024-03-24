<docs>

---
order: 0
title:
  zh-CN: 自定义触发
  en-US: Custom trigger
description:
  zh-CN: Trigger time range dropdown selector using custom element
  en-US: The simplest usage
---
</docs>

<template>
  <div>
    <BsDateRangePicker v-model="date" value-format="YYYY-MM-DD" clearable>
      <span style="display: inline-block;padding: 0.2rem 0.5rem;background-color: #0E45E8;color: #fff;">Click me(点击我)</span>
    </BsDateRangePicker>
    <p>Value: {{ date }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

let date = ref([]);
</script>
