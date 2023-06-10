<docs>

---
order: 0
title:
  zh-CN: 不同步长
  en-US: Step
description: 
  zh-CN: 可以通过`step`属性设置`bs-input-number`每次改变的步数
  en-US: You can set the number of steps for each change of `bs-input-number` through the `step` attribute
---
</docs>

<template>
  <div>
    <div style="margin-bottom: 20px;">
      步长为2：
      <BsInputNumber v-model="number" :step="2"></BsInputNumber>
    </div>

    <div>
      步长为1.5：
      <BsInputNumber v-model="number2" :step="1.5"></BsInputNumber>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const number = ref(2);
const number2 = ref(2);
</script>
