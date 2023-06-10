<docs>

---
order: 0
title:
  zh-CN: 可拖拽移动
  en-US: Draggable
description: 
  zh-CN: 设置`draggable`即可拖拽弹窗
  en-US: Set `draggable` to drag the modal
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show draggable modal</bs-button>
    <bs-modal
      v-model:visible="visible"
      :draggable="draggable"
      title="温馨提示">
      <p>这是一个可拖拽的弹窗！</p>
      <bs-button type="primary" size="sm" @click="draggable = true" style="margin-right: 1rem;">启用拖拽</bs-button>
      <bs-button type="primary" size="sm" @click="draggable = false">禁用拖拽</bs-button>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let draggable = ref(true);
let visible = ref(false);
</script>
