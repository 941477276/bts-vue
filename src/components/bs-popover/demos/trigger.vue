<docs>

---
order: 0
title:
  zh-CN: 触发方式
  en-US: Trigger
description: 
  zh-CN: Popover默认支持`hover`、`click`、`focus`、`contextmenu`触发
  en-US: The simplest usage is to display the Popover when the mouse is enter in
---
</docs>

<template>
  <div>
    <bs-popover
      trigger="click"
      title="click触发"
      content="我是由click事件触发！">
      <bs-button
        type="primary">Trigger by click</bs-button>
    </bs-popover>

    <bs-popover
      title="hover触发"
      content="我是由hover触发！">
      <bs-button type="primary">Trigger by hover</bs-button>
    </bs-popover>

    <bs-popover
      trigger="focus"
      title="focus触发"
      content="我是由focus事件触发，鼠标左键按住触发元素不动即可触发，点击页面或页面外任意位置就会隐藏！">
      <bs-button type="primary">Trigger by focus（鼠标左键按住我不放）</bs-button>
    </bs-popover>

    <bs-popover
      title="contextmenu触发"
      trigger="contextmenu"
      content="我是由contextmenu事件触发，即鼠标右键触发！">
      <bs-button type="primary">Trigger by contextmenu（鼠标右键触发）</bs-button>
    </bs-popover>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
