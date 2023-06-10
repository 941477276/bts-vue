<docs>

---
order: 0
title:
  zh-CN: 自定义内容
  en-US: Custom content
description: 
  zh-CN: 可以通过`content`插槽或`raw-content`属性来自定义Confirm的内容
  en-US: The content of the Confirm can be customized through the `content` slot or the `raw-content` prop
---
</docs>

<template>
  <div>
    <bs-pop-confirm placement="bottom-start" @confirm="onConfirm">
      <bs-button type="primary">Use slot</bs-button>
      <template #content>
        <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的popover！</h6>
        <p>
          我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>插槽</strong></mark>的popover！
        </p>
      </template>
    </bs-pop-confirm>

    <bs-pop-confirm
      :content="rawContent"
      :is-raw-content="true"
      placement="top-start"
      @confirm="onConfirm">
      <bs-button type="primary">Use html string</bs-button>
    </bs-pop-confirm>

    <bs-pop-confirm
      width="50%"
      content="Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site."
      placement="top-start"
      @confirm="onConfirm">
      <bs-button type="primary">Custom width</bs-button>
    </bs-pop-confirm>
  </div>
</template>

<script setup>
let rawContent = `
    <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的popover！</h6>
    <p>
      我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>HTML文本</strong></mark>的popover！
    </p>`;

let onConfirm = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true);
    }, 3000);
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
