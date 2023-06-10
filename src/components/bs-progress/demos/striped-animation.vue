<docs>

---
order: 0
title:
  zh-CN: 条纹动画
  en-US: Striped animation
description: 
  zh-CN: 设置`animated`属性可显示条纹动画
  en-US: Set the `animated` property to display the stripe animation
---
</docs>

<template>
  <div>
    <bs-progress striped animated color-type="primary" :percentage="50"></bs-progress>
    <bs-progress striped animated color-type="secondary" percentage="50"></bs-progress>
    <bs-progress striped animated color-type="success" percentage="50%"></bs-progress>
    <bs-progress striped animated color-type="danger" percentage="50%"></bs-progress>
  </div>
</template>
<style lang="scss" scoped>
.bs-progress{
  margin-bottom: 1rem;
}
</style>
