<docs>

---
order: 0
title:
  zh-CN: 自定义内容
  en-US: Custom content
description: 
  zh-CN: 可以通过`content`插槽或`raw-content`属性来自定义Popover的内容
  en-US: The content of the Popover can be customized through the `content` slot or the `raw-content` prop
---
</docs>

<template>
  <div>
    <bs-popover placement="bottom-start" title="内容使用插槽">
      <bs-button type="primary">Use slot</bs-button>
      <template #content>
        <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的popover！</h6>
        <p>
          我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>插槽</strong></mark>的popover！
        </p>
      </template>
    </bs-popover>

    <bs-popover
      title="内容使用HTML文本"
      :content="rawContent"
      :is-raw-content="true"
      placement="top-start">
      <bs-button type="primary">Use html string</bs-button>
    </bs-popover>

    <bs-popover
      placement="top-start">
      <bs-button type="primary">Custom header</bs-button>
      <template #title>
        一个 <strong style="color: #f00;font-size: 1.5rem;font-weight: bold">不一样</strong> 的标题
      </template>
      <template #content>
        <h3>别看我</h3>
        <p style="padding-left: 50px;padding-right: 100px;">看上面的标题</p>
      </template>
    </bs-popover>

    <bs-popover
      :show-title="false"
      placement="top-start">
      <bs-button type="primary">No header</bs-button>
      <template #title>
        一个 <strong style="color: #f00;font-size: 1.5rem;font-weight: bold">不一样</strong> 的标题
      </template>
      <template #content>
        <h4>啊哦，没有标题了。。。</h4>
      </template>
    </bs-popover>

    <bs-popover
      width="50%"
      title="宽度为50%"
      content="Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site."
      placement="top-start">
      <bs-button type="primary">Custom width</bs-button>
    </bs-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let rawContent = ref(`
  <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的Popover！</h6>
  <p>
    我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>HTML文本</strong></mark>的Popover！
  </p>`);
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
