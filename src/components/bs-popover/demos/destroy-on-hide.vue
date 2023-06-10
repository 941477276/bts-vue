<docs>

---
order: 0
title:
  zh-CN: 隐藏即销毁
  en-US: Destroy on hide
description: 
  zh-CN: 设置`destroy-on-hide`属性可以在Popover隐藏后立即销毁 dom
  en-US: Set the `destroy-on-hide` attribute to destroy the dom immediately after the Popover is hidden
---
</docs>

<template>
  <div>
    <bs-popover destroy-on-hide title="隐藏即销毁" content="popper隐藏其dom就会被销毁">
      <bs-button type="primary">Show popover</bs-button>
    </bs-popover>
  </div>
</template>
