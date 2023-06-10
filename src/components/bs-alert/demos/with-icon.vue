<docs>
---
order: 0
title:
  zh-CN: 带图标
  en-US: With icon
description:
  zh-CN: 通过`icon`插槽可以自定义图标
  en-US: The icon can be customized through the `icon` slot
---
</docs>

<template>
  <div>
    <BsAlert
      title="This is a closable alert box!"
      type="primary"
      closeable>
      <template #icon>
        <BsiInfoCircleFill></BsiInfoCircleFill>
      </template>
    </BsAlert>
    <BsAlert
      title="A successful alert box!"
      type="success">
      <template #icon>
        <BsiCheckCircleFill></BsiCheckCircleFill>
      </template>
    </BsAlert>

    <BsAlert
      title="很多文字的警告框！很多文字的警告框！很多文字的警告框！很多文字的警告框！很多文字的警告框！很多文字的警告框！很多文字的警告框！"
      type="info"
      closeable>
      <template #icon>
        <BsiExclamationCircleFill></BsiExclamationCircleFill>
      </template>
    </BsAlert>

    <BsAlert
      title="Alert box with helper text!"
      description="This is a helper text!"
      type="danger"
      closeable>
      <template #icon>
        <BsiExclamationCircleFill></BsiExclamationCircleFill>
      </template>
    </BsAlert>
  </div>
</template>

<script setup>
import { BsiInfoCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiInfoCircleFill';
import { BsiCheckCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiCheckCircleFill';
import { BsiExclamationCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiExclamationCircleFill';
</script>
