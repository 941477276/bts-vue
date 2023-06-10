<docs>

---
order: 0
title:
  zh-CN: 不同方向
  en-US: Different direction
description: 
  zh-CN: 设置`tabPosition`可改变标签页的展示位置，有4个位置可选，`top|left|bottom|right`
  en-US: Setting `tabPosition` can change the display position of the tab page, there are 4 positions to choose from, `top|left|bottom|right`
---
</docs>

<template>
  <div>
    <div class="operate-btn-wrapper">
      <bs-button type="primary" size="sm" @click="direction = 'top'">Top</bs-button>
      <bs-button type="primary" size="sm" @click="direction = 'right'">Right</bs-button>
      <bs-button type="primary" size="sm" @click="direction = 'bottom'">Bottom</bs-button>
      <bs-button type="primary" size="sm" @click="direction = 'left'">Left</bs-button>
    </div>
    <bs-tabs v-model="activeTab" :tab-position="direction">
      <bs-tab-pane label="Vue" name="vue">
        Content of Tab Pane Vue
      </bs-tab-pane>
      <bs-tab-pane label="React" name="react">
        Content of Tab Pane React
      </bs-tab-pane>
      <bs-tab-pane label="Angular" name="ng">
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
let direction = ref('top');
</script>

<style lang="scss" scoped>
.operate-btn-wrapper{
  .bs-button {
    margin: 0 1rem 0.5rem 0;
  }
}
</style>
