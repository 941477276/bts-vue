<docs>
---
order: 0
title:
  zh-CN: 自定义分隔符
  en-US: Custom delimiter
description:
  zh-CN: 通过`separator`属性可以自定义分隔符
  en-US: The separator can be customized through the `separator` attribute
---
</docs>

<template>
  <div>
    <bs-breadcrumb  separator=">">
      <breadcrumb-item to="/home">Home</breadcrumb-item>
      <breadcrumb-item :to="{path: '/login'}">Library1</breadcrumb-item>
      <breadcrumb-item><a href="https://github.com/941477276/vue3-bootstrap-icon" target="_blank">vue3-bootstrap-icon</a></breadcrumb-item>
      <breadcrumb-item :disabled="true">Library3</breadcrumb-item>
      <breadcrumb-item>Library4</breadcrumb-item>
    </bs-breadcrumb>
  </div>
</template>
