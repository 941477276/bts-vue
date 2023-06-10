<docs>

---
order: 0
title:
  zh-CN: 格式化展示
  en-US: Format
description: 
  zh-CN: 通过`formatter`属性可以将数字格式化成更有具体含义的数据，它往往需要配合`parser`一起使用。
  en-US: The `formatter` attribute can be used to format numbers into more specific data, which often needs to be used together with `parser`.
---
</docs>

<template>
  <div>
    <BsInputNumber
      v-model="number1"
      style="margin: 0 1rem 0 0;"
      :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')"></BsInputNumber>

    <BsInputNumber
      v-model="number2"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
      :max="100"></BsInputNumber>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const number1 = ref(1024);
const number2 = ref(90);
</script>
