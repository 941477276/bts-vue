<docs>

---
order: 0
title:
  zh-CN: 禁用和只读
  en-US: Disabled and readonly
description: 
  zh-CN: 添加`disabled`属性禁用输入框，添加`readonly`属性输入框为只读状态
  en-US: Add the `disabled` attribute to disable the input box, add the `readonly` attribute to the input box as read-only
---
</docs>

<template>
  <div>
    disabled: <BsInputNumber style="margin-right: 1rem;" v-model="number" prefix="￥" disabled></BsInputNumber>
    readonly: <BsInputNumber v-model="number" prefix="￥" readonly></BsInputNumber>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const number = ref(10);
</script>
