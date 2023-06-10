<docs>
---
order: 0
title:
  zh-CN: 不同类型
  en-US: Different type
description:
  zh-CN: `MessageBox`有`success`, `danger`, `warning`, `info`, `prompt`5种类型，对应的有5个函数
  en-US: `MessageBox` has 5 types：`success`, `danger`, `warning`, `info`, `prompt`, corresponding to 5 functions
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMsgBox('info')">Info</bs-button>
    <bs-button type="success" @click="showMsgBox('success')">Success</bs-button>
    <bs-button type="warning" @click="showMsgBox('warning')">Warning</bs-button>
    <bs-button type="danger" @click="showMsgBox('danger')">Danger</bs-button>
    <bs-button type="info" @click="showMsgBox2">Prompt（提交内容）</bs-button>
  </div>
</template>

<script setup>
import { BsMessageBox } from '../../bs-message-box';
import { BsMessage } from '../../bs-message';

let showMsgBox = function (typeName) {
  // BsMessageBox[typeName]('温馨提示', `一条${typeName}消息！`);
  BsMessageBox({
    title: '温馨提示',
    type: typeName,
    message: `一个"${typeName}"消息弹窗！`
  });
};

let showMsgBox2 = function () {
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
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
