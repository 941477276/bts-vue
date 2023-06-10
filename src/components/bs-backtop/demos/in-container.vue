<docs>
---
order: 0
title:
  zh-CN: 在容器中
  en-US: In container
description:
  zh-CN: `bs-backup`除了能应用在`body`中，也能应用在其他`dom`中
  en-US: `bs-backup` can be applied not only in `body`, but also in other `dom`
---
</docs>

<template>
  <div class="scroll-box" id="scrollBox1">
    <div class="scroll-content">
      <BsBackTop target="#scrollBox1" visibilityHeight="30%" style="bottom: auto;"></BsBackTop>
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
