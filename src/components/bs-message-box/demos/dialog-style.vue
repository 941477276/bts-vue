<docs>

---
order: 0
title:
  zh-CN: 弹窗风格
  en-US: Dialog style
description:
  zh-CN: 弹窗风格的MessageBox
  en-US: Pop-up style MessageBox
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMsg">Show MessageBox</bs-button>
    <bs-button type="info" @click="showMsg2">Prompt</bs-button>
  </div>
</template>

<script setup>
import { BsMessageBox } from '../../bs-message-box';

let showMsg = function () {
  BsMessageBox.info({
    title: '提示',
    message: '这是一个弹窗样式的消息盒子！',
    dialogTheme: true
  });
};

let showMsg2 = function () {
  BsMessageBox({
    title: '绑定邮箱',
    type: 'prompt',
    dialogTheme: true,
    inputPlaceholder: '请输入邮箱',
    inputAfter: '请勿输入错误邮箱格式',
    inputRules: {
      required: true,
      whitespace: true,
      message: '请输入邮箱',
      trigger: ['blur']
    }
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
