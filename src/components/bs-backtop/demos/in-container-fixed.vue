<docs>
---
order: 0
title:
  zh-CN: 容器中使用Fixed
  en-US: Use Fixed in container
description:
  zh-CN: 设置`useFixedPosition`属性可在容器中使用`fixed`定位
  en-US: Set the `useFixedPosition` property to use `fixed` positioning in the container
---

</docs>

<template>
  <div class="scroll-box" id="scrollBox1">
    <div class="scroll-content">
      <BsBackTop target="#scrollBox1" visibilityHeight="30%" :useFixedPosition="true" style="bottom: auto;"></BsBackTop>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-box{
  position: relative;
  max-width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  overflow: auto;
  &::after{
    position: absolute;
    top: 45%;
    width: 100%;
    content: 'Scroll me';
    font-size: 2rem;
    text-align: center;
    color: #999;
  }
}
.scroll-content{
  height: 1560px;
}
</style>
