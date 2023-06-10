<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: `Message`组件主要用来信息提醒反馈
  en-US: The `Message` component is mainly used for information reminder feedback
---
</docs>

<template>
  <div>
    <bs-button type="info" @click="showMsg">Display a normal message</bs-button>
  </div>
</template>

<script setup>
import { BsMessage } from '../../bs-message';

let showMsg = function () {
  BsMessage('This is a normal message');
};
</script>
