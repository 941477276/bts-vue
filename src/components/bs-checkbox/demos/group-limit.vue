<docs>
---
order: 0
title:
  zh-CN: 可选项数量限制
  en-US: Checkbox count limit
description:
  zh-CN: 使用`min`和`max`属性能够限制可以被勾选的复选框的数量。
  en-US: Use the `min` and `max` attributes to limit the number of checkboxes that can be checked.
---
</docs>

<template>
  <div>
    <bs-checkbox-group v-model="checkboxGroupVal" :min="1" :max="4">
      <bs-checkbox checked value="yuwen">语文</bs-checkbox>
      <bs-checkbox value="shuxue">数学</bs-checkbox>
      <bs-checkbox value="yingyu">英语</bs-checkbox>
      <bs-checkbox disabled value="tiyu">体育</bs-checkbox>
      <bs-checkbox value="wuli">物理</bs-checkbox>
      <bs-checkbox readonly value="shengwu">生物</bs-checkbox>
    </bs-checkbox-group>
    <p style="margin-top: 0.5rem;">Your choose is: <strong>{{ checkboxGroupVal }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const checkboxGroupVal = ref([]);
</script>
