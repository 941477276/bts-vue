<docs>

---
order: 0
title:
  zh-CN: 禁用
  en-US: Basic usage
description: 
  zh-CN: 给`bs-tab-pane`组件设置`disabled`属性可禁用该Tab
  en-US: Set the `disabled` attribute to the `bs-tab-pane` component to disable the Tab
---
</docs>

<template>
  <div>
    <bs-tabs v-model="activeTab">
      <bs-tab-pane label="Vue" name="vue">
        Content of Tab Pane Vue
      </bs-tab-pane>
      <bs-tab-pane label="React" name="react">
        Content of Tab Pane React
      </bs-tab-pane>
      <bs-tab-pane label="Angular" name="ng" disabled>
        Content of Tab Pane Angular
      </bs-tab-pane>
      <bs-tab-pane label="jQuery" name="jquery">
        Content of Tab Pane jQuery
      </bs-tab-pane>
    </bs-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let activeTab = ref('');
</script>
