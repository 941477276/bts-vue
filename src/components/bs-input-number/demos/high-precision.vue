<docs>

---
order: 0
title:
  zh-CN: 高精度
  en-US: High-precision
description:
  zh-CN: `input-number`组件内部使用`bignumber.js`来进行计算，因此它可以有很高的精度
  en-US: The `input-number` component internally uses `bignumber.js` for calculations, so it can have high precision
---
</docs>

<template>
  <div>
    <div style="margin-bottom: 1rem;">
      <BsInputNumber class="high-percision-input" v-model="number" :step="0.00000000000001"></BsInputNumber>
      Value: {{ number }}
    </div>

    <div>
      <BsInputNumber
        style="margin: 0 1rem 1rem 0;"
        v-model="number2"
        :precision="3"></BsInputNumber>

      <BsInputNumber
        style="margin-bottom: 1rem;"
        v-model="number2"
        :precision="3"
        :control-inner="false"></BsInputNumber>

      Value: {{ number2 }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let number = ref(1.00000000000009);
let number2 = ref('1.020');
</script>

<style lang="scss" scoped>
.high-percision-input{
  max-width: 13rem;
}
</style>
