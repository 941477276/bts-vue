<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 最简单的用法，常用于二次确认操作。`confirm`事件若返回`Promise`那么二次确认弹窗将在Promise状态变为`fulfilled`后关闭，如返回`false`二次确认弹窗不会关闭
  en-US: The simplest usage is often used for secondary confirmation operations. If the `confirm` event returns `Promise`, then the second confirmation popup will be closed after the Promise status becomes `fulfilled`, if `false` is returned, the second confirmation popup will not be closed
---
</docs>
<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
---

## zh-CN
最简单的用法，常用于二次确认操作。`confirm`事件若返回`Promise`那么二次确认弹窗将在Promise状态变为`fulfilled`后关闭，如返回`false`二次确认弹窗不会关闭

## en-US
The simplest usage is often used for secondary confirmation operations. If the `confirm` event returns `Promise`, then the second confirmation popup will be closed after the Promise status becomes `fulfilled`, if `false` is returned, the second confirmation popup will not be closed</docs>

<template>
  <div>
    <bs-pop-confirm
      trigger="click"
      content="确定要删除吗?"
      @confirm="onConfirm">
      <bs-button type="primary">Show popup</bs-button>
    </bs-pop-confirm>

    <bs-pop-confirm
      trigger="click"
      content="确定要删除吗?"
      :disabled="true"
      @confirm="onConfirm">
      <bs-button type="primary" disabled>Disabled popup</bs-button>
    </bs-pop-confirm>
  </div>
</template>

<script setup>
let onConfirm = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true);
    }, 3000);
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
