<docs>

---
order: 0
title:
  zh-CN: 居中显示
  en-US: Centered
description:
  zh-CN: 给`MessageBox`设置`centered`参数，将得到一个垂直水平方向都居中都消息盒子
  en-US: Set the `centered` parameter to `MessageBox`, and you will get a message box that is centered both vertically and horizontally
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMessageBox">Show MessageBox</bs-button>
  </div>
</template>

<script setup>
import { BsMessageBox } from '../../bs-message-box';

let showMessageBox = function () {
  BsMessageBox({
    title: '温馨提示',
    centered: true,
    message: '看，消息盒子水平，垂直方向都是居中的！'
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
