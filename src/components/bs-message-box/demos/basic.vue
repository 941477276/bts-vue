<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 从场景上说，`MessageBox` 的作用是美化系统自带的`alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用`Modal`。
  en-US: From the perspective of the scene, the function of `MessageBox` is to beautify the `alert`, `confirm` and `prompt` that comes with the system, so it is suitable for displaying relatively simple content. If you need to pop up more complicated content, please use `Modal`.
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMsg">Show MessageBox</bs-button>
    <bs-button type="info" @click="showMsg2">Prompt</bs-button>
    <bs-button type="primary" @click="showMsg3">Dynamic title and message</bs-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsMessageBox } from '../../bs-message-box';
import { BsMessage } from '../../bs-message';

let showMsg = function () {
  BsMessageBox.info('温馨提示', '这是一个美化后的alert！');
};

let showMsg2 = function () {
  BsMessageBox.prompt({
    title: '绑定邮箱',
    inputPlaceholder: '请输入您的邮箱',
    inputLabel: '您的邮箱',
    inputRules: [
      { required: true, message: '请输入你的邮箱', whitespace: true, trigger: ['input', 'blur'] },
      { pattern: /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/, message: '邮箱格式输入不正确', whitespace: true, trigger: ['input', 'blur'] }
    ],
    onOk () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(true);
          BsMessage.success('邮箱绑定成功！');
        }, 1500);
      });
    }
  });
};

let showMsg3 = function () {
  let title = ref('温馨提示');
  let message = ref(`当前时间为：${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);
  let count = 0;
  let timer;
  BsMessageBox({
    title: title,
    // centered: true,
    message,
    onCancel () {
      clearInterval(timer);
    }
  });
  timer = setInterval(function () {
    title.value = `温馨提示：${++count}`;
    message.value = `当前时间为：${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  }, 1000);
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
