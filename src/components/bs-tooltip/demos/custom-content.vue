<docs>

---
order: 0
title:
  zh-CN: 自定义内容
  en-US: Custom content
description: 
  zh-CN: 可以通过`content`插槽或`raw-content`属性来自定义Tooltip的内容
  en-US: The content of the Tooltip can be customized through the `content` slot or the `raw-content` prop
---
</docs>

<template>
  <div>
    <BsTooltip placement="bottom-start">
      <bs-button type="primary">Use slot</bs-button>
      <template #content>
        <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的Tooltip！</h6>
        <p>
          我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>插槽</strong></mark>的Tooltip！
        </p>
      </template>
    </BsTooltip>

    <BsTooltip
      :content="rawContent"
      :is-raw-content="true"
      placement="top-start">
      <bs-button type="primary">Use html string</bs-button>
    </BsTooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let rawContent = ref(`
  <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的Tooltip！</h6>
  <p>
    我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>HTML文本</strong></mark>的Tooltip！
  </p>`);
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
