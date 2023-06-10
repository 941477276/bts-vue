<docs>

---
order: 0
title:
  zh-CN: 其他类型
  en-US: Other type
description:
  zh-CN: `Message`组件共有普通(默认)、成功、警告、错误4种类型，它们分别对应`info`、`success`、`danger`、`warning`;
  en-US: The `Message` component has four types：normal (default), success, warning, and error, which correspond to `info`, `success`, `danger`, and `warning`;
---
</docs>

<template>
  <div>
    <bs-button plain type="info" @click="showMsg">show normal message</bs-button>
    <bs-button plain type="success" @click="successMsg">show success message</bs-button>
    <bs-button plain type="warning" @click="warningMsg">show warning message</bs-button>
    <bs-button plain type="danger" @click="dangerMsg">show danger message</bs-button>
  </div>
</template>

<script setup>
import { BsMessage } from '../../bs-message';

let showMsg = function () {
  BsMessage('This is a normal message');
};
let successMsg = function () {
  BsMessage.success('This is a normal message');
};
let warningMsg = function () {
  BsMessage.warning('This is a normal message');
};
let dangerMsg = function () {
  BsMessage.danger('This is a normal message');
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
