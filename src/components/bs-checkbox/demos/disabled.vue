<docs>
---
order: 0
title:
  zh-CN: 禁用状态
  en-US: Disabled
description:
  zh-CN: 添加`disabled`属性可设置为不可用状态
  en-US: Adding `disabled` attribute can be set to unavailable state
---
</docs>

<template>
  <div>
    <bs-checkbox v-model="jsFramework" value="vue" disabled>Vue</bs-checkbox>
    <bs-checkbox v-model="jsFramework" value="react" label="React" />
    <bs-checkbox v-model="jsFramework" value="jquery" label="jQuery" />
    <bs-checkbox v-model="jsFramework" value="angular" disabled>Angular</bs-checkbox>
    <p style="margin-top: 0.5rem;">Your choose is: <strong>{{ jsFramework || '--' }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const jsFramework = ref(['vue']);
</script>
