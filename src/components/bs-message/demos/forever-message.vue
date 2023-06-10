<docs>

---
order: 0
title:
  zh-CN: 永不消失的消息
  en-US: Forever message
description:
  zh-CN: 设置 `duration` 为 `0`，消息将永远不会消失，除非手动关闭它
  en-US: Set `duration` to `0`, the message will never disappear unless it is manually turned off
---
</docs>

<template>
  <div>
    <bs-button type="danger" plain @click="showMsg">Click me more</bs-button>
  </div>
</template>

<script setup>
import { BsMessage } from '../../bs-message';

let showMsg = function () {
  BsMessage({
    type: 'danger',
    message: 'This is a never disappear message!',
    duration: 0,
    onClose () {
      alert('The message was manually closed');
    }
  });
};
</script>
