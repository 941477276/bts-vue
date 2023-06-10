<docs>
---
order: 0
title:
  zh-CN: 复选框组合
  en-US: Checkbox group
description:
  zh-CN:
    `bts-vue`提供了`bs-checkbox-group`组件来将多个多选选按钮进行组合，组合后无需在每一个`bs-checkbox`组件中都绑定`v-model`，
    而只需在`bs-checkbox-group`组件上绑定`v-model`，在`bs-checkbox`中设置`value`即可
  en-US:
    `bts-vue` provides the `bs-checkbox-group` component to combine multiple checkbox buttons. After the combination,
    there is no need to bind `v-model` in each `bs-checkbox` component. Instead, just bind `v-model` on the `bs-checkbox-group` component and set `value` in `bs-checkbox`
---
</docs>

<template>
  <div>
    <bs-checkbox-group v-model="checkboxGroupVal">
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
