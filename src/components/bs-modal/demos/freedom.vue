<docs>

---
order: 0
title:
  zh-CN: 自由模式
  en-US: Free mode
description:
  zh-CN: 如果需要在页面中同时显示多个弹窗，且弹窗显示后不影响其他操作，那么可以使用自由模式
  en-US: If you need to display multiple modal at the same time on the page without affecting other operations after the modals are displayed, you can use free mode.
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show freedom modal</bs-button>
    <bs-modal
      v-model:visible="visible"
      :draggable="draggable"
      freedom
      title="温馨提示">
      <bs-button type="primary" size="sm" @click="draggable = true" style="margin-right: 1rem;">启用拖拽</bs-button>
      <bs-button type="primary" size="sm" @click="draggable = false">禁用拖拽</bs-button>
      <p>这是一个自由模式的且可以拖拽Bootstrap弹窗！</p>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
let draggable = ref(false);
</script>
