<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: `Toast`组件主要用来较为复杂的、带有交互的通知内容
  en-US: The `Toast` component is mainly used for more complex notification content with interaction
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMsg">Show toast</bs-button>
  </div>
</template>

<script setup>
import { BsToast } from '../../bs-toast';

let showMsg = function () {
  BsToast({
    title: 'Bootstrap toast',
    message: 'this is a toast message！'
  });
};
</script>
