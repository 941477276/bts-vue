<docs>

---
order: 0
title:
  zh-CN: 异步关闭
  en-US: Asynchronous close
description:
  zh-CN: `onOk`事件函数若返回`Promise`，那么MessageBox将在Promise状态变更为`fulfilled`后关闭，如果Promise状态为`rejected`或`onOk`事件函数若返回`false`那么MessageBox将不会关闭
  en-US: If the `onOk` event function returns `Promise`, then the MessageBox will be closed after the Promise state changes to `fulfilled`, if the Promise state is `rejected` or if the `onOk` event function returns `false`, then the MessageBox will not be closed
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMessageBox">Async Close Messagebox</bs-button>
  </div>
</template>

<script setup>
import { BsMessageBox } from '../../bs-message-box';
import { BsMessage } from '../../bs-message';

let showMessageBox = function () {
  BsMessageBox({
    title: '温馨提示',
    type: 'warning',
    message: '确定要删除吗？',
    okLoadingText: 'Loading...',
    onOk () {
      return new Promise(resolve => {
        let timer = setTimeout(function () {
          clearTimeout(timer);
          resolve(1);
          BsMessage.success('删除成功！');
        }, 3000);
      });
    }
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
