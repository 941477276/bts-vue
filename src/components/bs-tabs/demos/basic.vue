<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 通过`v-model`绑定选中Tab的名称，默认选中第一项。若不设置`name`，则`name`默认为Tab的索引
  en-US: Bind the name of the selected Tab through `v-model`, and the first item is selected by default. If `name` is not set, `name` defaults to the index of Tab
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
      <bs-tab-pane label="Angular" name="ng">
        Content of Tab Pane Angular
      </bs-tab-pane>
    </bs-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let activeTab = ref('');
</script>
