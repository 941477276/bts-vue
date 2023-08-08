<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 最简单的用法，使用`v-model:visible`来显示/隐藏模态弹窗，按`ESC`键可以关闭弹窗
  en-US: The simplest usage, use `v-model:visible` to show/hide the modal, press the `ESC` key to close the modal
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show modal</bs-button>
    <bs-modal
      class-name="my-modal"
      v-model:visible="visible"
      title="温馨提示">
      <p>这是一个Bootstrap弹窗！</p>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
</script>
