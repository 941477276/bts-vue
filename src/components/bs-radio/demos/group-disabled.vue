<docs>

---
order: 0
title:
  zh-CN: 单选组合——禁用
  en-US: Radio group--disabled
description: 
  zh-CN: 给`bs-radio-group`组件设置`disabled`属性即可禁用所有单选按钮
  en-US: Set the `disabled` attribute to the `bs-radio-group` component to disable all radio buttons
---
</docs>

<template>
  <div>
    <bs-radio-group v-model="jsFramework" disabled>
      <bs-radio v-model="jsFramework" value="vue">Vue</bs-radio>
      <bs-radio v-model="jsFramework" value="react" label="React" />
      <bs-radio v-model="jsFramework" value="angular">Angular</bs-radio>
    </bs-radio-group>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const jsFramework = ref('');
</script>
