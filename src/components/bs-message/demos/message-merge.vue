<docs>

---
order: 0
title:
  zh-CN: 相同内容消息合并
  en-US: Merge messages
description:
  zh-CN: 设置 `grouping` 为 `true`，内容相同的 `message` 将被合并。该特性特别适用于api接口报错信息提示！
  en-US: Set `grouping` to `true`, `message` with the same content will be merged. This feature is especially suitable for API interface error message prompts!
---
</docs>

<template>
  <div>
    <bs-button type="success" plain @click="showMsg">Click me more</bs-button>
  </div>
</template>

<script setup>
import { BsMessage } from '../../bs-message';

let showMsg = function () {
  BsMessage.info({
    message: 'This is a normal message',
    grouping: true
  });
};
</script>
