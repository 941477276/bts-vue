<docs>

---
order: 0
title:
  zh-CN: 触发方式
  en-US: Trigger
description: 
  zh-CN: Tooltip默认支持`hover`、`click`、`focus`、`contextmenu`触发
  en-US: The simplest usage is to display the Tooltip when the mouse is enter in
---
</docs>

<template>
  <div>
    <BsTooltip trigger="click" content="我是由click事件触发！">
      <bs-button type="primary">Trigger by click</bs-button>
    </BsTooltip>

    <BsTooltip
      content="我是由hover触发！">
      <bs-button type="primary">Trigger by hover</bs-button>
    </BsTooltip>

    <BsTooltip
      trigger="focus"
      content="我是由focus事件触发，鼠标左键按住触发元素不动即可触发，点击页面或页面外任意位置就会隐藏！">
      <bs-button type="primary">Trigger by focus（鼠标左键按住我不放）</bs-button>
    </BsTooltip>

    <BsTooltip
      trigger="contextmenu"
      content="我是由contextmenu事件触发，即鼠标右键触发！">
      <bs-button type="primary">Trigger by contextmenu（鼠标右键触发）</bs-button>
    </BsTooltip>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
