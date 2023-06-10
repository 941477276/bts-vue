<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 使用 `v-model` 实现数据双向绑定。在单一的`bs-checkbox`中使用`v-model`，默认绑定变量的值会是`Boolean`类型，选中为`true`，反之为`false`
  en-US: Use `v-model` to achieve two-way data binding. Using `v-model` in a single `bs-checkbox`, the value of the default binding variable will be `Boolean` type, `true` is selected, and `false` otherwise
---
</docs>

<template>
  <div>
    <div>
      <bs-checkbox v-model="boolVal">Click me</bs-checkbox>
      <p style="margin-top: 0.5rem;">Value is: <strong>{{ boolVal + '' }}</strong> </p>
    </div>
    <div>
      <bs-checkbox v-model="langs" value="html">Html</bs-checkbox>
      <bs-checkbox v-model="langs" value="javascript" label="Javascript" />
      <bs-checkbox v-model="langs" value="css">Css</bs-checkbox>
      <p style="margin-top: 0.5rem;">Value is: <strong>{{ langs }}</strong> </p>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const boolVal = ref(true);
const langs = ref(['javascript']);
</script>
