<docs>

---
order: 0
title:
  zh-CN: 单选组合
  en-US: Radio group
description:
  zh-CN:
    `bts-vue`提供了`bs-radio-group`组件来将多个单选按钮进行组合，组合后无需在每一个`bs-radio`组件中都绑定`v-model`，
    而只需在`bs-radio-group`组件上绑定`v-model`，在`bs-radio`中设置`value`即可
  en-US:
    `bts-vue` provides the `bs-radio-group` component to combine multiple radio buttons. After the combination, there is no need to bind `v-model` in each `bs-radio` component.
    Instead, just bind `v-model` on the `bs-radio-group` component and set `value` in `bs-radio`
---
</docs>

<template>
  <div>
    <bs-radio-group v-model="jsFramework">
      <bs-radio v-model="jsFramework" value="vue">Vue</bs-radio>
      <bs-radio v-model="jsFramework" value="react" label="React" />
      <bs-radio v-model="jsFramework" value="angular">Angular</bs-radio>
    </bs-radio-group>
    <p style="margin-top: 0.5rem;">Your choose is: <strong>{{ jsFramework || '--' }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const jsFramework = ref('');
</script>
