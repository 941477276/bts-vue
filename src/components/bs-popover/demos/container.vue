<docs>

---
order: 0
title:
  zh-CN: 父级容器
  en-US: Parent container
description: 
  zh-CN: Popover组件支持将 popper插入到指定的dom中（默认为`body`）
  en-US: The Popover component supports inserting the popper into the specified dom (the default is `body`)
---
</docs>

<template>
  <div>
    <div class="tooltip-container" id="popoverContainer">
      通过浏览器调试工具查看下我的dom结构吧！
    </div>
    <bs-popover
      v-if="render"
      teleported
      append-to="#popoverContainer"
      is-raw-content
      title="插入到指定dom元素中"
      trigger="click"
      content="看到我的dom在哪了吗？<br>嘻嘻！">
      <bs-button type="primary">Show popover</bs-button>
    </bs-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let render = ref(false);
let timer = setTimeout(function () {
  clearTimeout(timer);
  render.value = true;
}, 0);
</script>

<style lang="scss" scoped>
.tooltip-container{
  height: 60px;
  line-height: 60px;
  max-width: 600px;
  margin-bottom: 20px;
  color: var(--primary);
  text-align: center;
  background-color: rgba(64,158, 255, 0.5);
  ::v-deep(.bs-tooltip){
    line-height: 1.5;
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
