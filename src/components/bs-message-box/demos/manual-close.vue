<docs>

---
order: 0
title:
  zh-CN: 手动关闭
  en-US: Close manually
description:
  zh-CN: `MessageBox`提供了`closeMessageBox`函数来关闭单个消息盒子，同时也提供了`closeAllMessageBox`函数来关闭所有消息盒子
  en-US: `MessageBox` provides the `closeMessageBox` function to close a single message box, and also provides the `closeAllMessageBox` function to close all message boxes
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMessageBox">Show MessageBox</bs-button>
  </div>
</template>

<script setup>
import { BsMessageBox, closeMessageBox } from '../../bs-message-box';
import { ref } from 'vue';

let showMessageBox = function () {
  let loading = ref(true);
  let messageBoxId = BsMessageBox({
    title: '温馨提示',
    centered: true,
    message: '2秒后关闭',
    okLoadingText: '稍等2秒才可以点击哦~',
    okLoading: loading,
    onOk () {
      closeMessageBox(messageBoxId);
      return false;
    }
  });

  setTimeout(function () {
    loading.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
