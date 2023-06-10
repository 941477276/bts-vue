<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 最简单的用法，使用`v-model:visible`来显示/隐藏抽屉，按`ESC`键可以关闭抽屉
  en-US: The simplest usage, use `v-model:visible` to show/hide the drawer, press the `ESC` key to close the drawer
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show drawer</bs-button>
    <bs-drawer
      v-model:visible="visible"
      title="温馨提示">
      <p v-for="item in 30" :key="item">This is a Bootstrap drawer!</p>
      <template #footer>
        <bs-button type="primary">确定</bs-button>
      </template>
    </bs-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
</script>
