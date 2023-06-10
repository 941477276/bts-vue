<docs>

---
order: 0
title:
  zh-CN: 不同步长
  en-US: Step
description: 
  zh-CN: `prefix`属性用于在输入框前面添加额外内容，`suffix`属性用于在输入框后面添加额外内容
  en-US: The `prefix` attribute is used to add extra content in front of the input box, and the `suffix` attribute is used to add extra content after the input box
---
</docs>

<template>
  <div>
    <div style="margin-bottom: 1rem;">
      <BsInputNumber style="margin-right: 1rem;" v-model="number" prefix="￥" :step="2"></BsInputNumber>
      <BsInputNumber v-model="number" prefix="￥" :control-inner="false" :step="2"></BsInputNumber>
    </div>
    <div style="margin-bottom: 1rem;">
      <BsInputNumber style="margin-right: 1rem;" v-model="number" :step="2">
        <template #prepend>¥</template>
      </BsInputNumber>
      <BsInputNumber v-model="number" :control-inner="false" :step="2">
        <template #prepend>¥</template>
      </BsInputNumber>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const number = ref(10);
</script>
