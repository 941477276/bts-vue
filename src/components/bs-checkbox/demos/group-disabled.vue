<docs>
---
order: 0
title:
  zh-CN: 复选框组合——禁用
  en-US: Checkbox group--disabled
description:
  zh-CN: 给`bs-checkbox-group`组件设置`disabled`属性即可禁用所有复选框
  en-US: Set the `disabled` attribute to the `bs-checkbox-group` component to disable all checkbox buttons
---
</docs>

<template>
  <div>
    <bs-checkbox-group v-model="checkboxGroupVal" disabled>
      <bs-checkbox checked value="yuwen">语文</bs-checkbox>
      <bs-checkbox value="shuxue">数学</bs-checkbox>
      <bs-checkbox value="yingyu">英语</bs-checkbox>
      <bs-checkbox disabled value="tiyu">体育</bs-checkbox>
      <bs-checkbox value="wuli">物理</bs-checkbox>
      <bs-checkbox readonly value="shengwu">生物</bs-checkbox>
    </bs-checkbox-group>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const checkboxGroupVal = ref([]);
</script>
