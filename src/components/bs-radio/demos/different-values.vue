<docs>

---
order: 0
title:
  zh-CN: 不同类型的值
  en-US: Different types of values
description: 
  zh-CN: `bs-radio`组件可以接受`string`、`number`、`boolean`类型的值
  en-US: The `bs-radio` component can accept `string`, `number`, `boolean` values
---
</docs>

<template>
  <div>
    <h6>数字类型</h6>
    <div>
      <bs-radio v-model="numValue" :value="1">Man</bs-radio>
      <bs-radio v-model="numValue" :value="2">Woman</bs-radio>
      <bs-radio v-model="numValue" :value="3">Shemale</bs-radio>
      <bs-radio v-model="numValue" :value="4">Unknown</bs-radio>
    </div>
    <h6>Boolean类型</h6>
    <div>
      <bs-radio v-model="boolValue" :value="true">On</bs-radio>
      <bs-radio v-model="boolValue" :value="false">Off</bs-radio>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const numValue = ref('');
const boolValue = ref('');
</script>
