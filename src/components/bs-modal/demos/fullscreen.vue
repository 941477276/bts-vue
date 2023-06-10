<docs>

---
order: 0
title:
  zh-CN: 全屏弹窗
  en-US: Fullscreen modal
description: 
  zh-CN: 设置`fullscreen`属性可开启全屏弹窗
  en-US: Set the `fullscreen` property to open a full screen modal
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show fullscreen modal</bs-button>
    <bs-modal
      title="全屏弹窗"
      fullscreen
      v-model:visible="visible">
      <p>这是一个全屏弹窗！</p>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
</script>
