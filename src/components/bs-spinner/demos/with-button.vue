<docs>

---
order: 0
title:
  zh-CN: 与按钮一起使用
  en-US: Use with the button
description: 
  zh-CN: 与按钮一起使用
  en-US: Use with the button
---
</docs>

<template>
  <div>
    <bs-button type="primary" :disabled="true">
      <bs-spinner></bs-spinner>
      提交中...
    </bs-button>
    <bs-button type="primary" :disabled="true">
      <bs-spinner grow></bs-spinner>
      提交中...
    </bs-button>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
