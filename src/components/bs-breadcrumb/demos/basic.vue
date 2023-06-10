<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 最简单的用法，设置`to`属性可以添加跳转链接。
  en-US: The simplest usage, setting the `to` attribute can add a jump link.
---
</docs>

<template>
  <div>
    <bs-breadcrumb>
      <breadcrumb-item to="/home">Home</breadcrumb-item>
      <breadcrumb-item :to="{path: '/login'}">Library1</breadcrumb-item>
      <breadcrumb-item><a href="https://github.com/941477276/vue3-bootstrap-icon" target="_blank">vue3-bootstrap-icon</a></breadcrumb-item>
      <breadcrumb-item to="https://github.com/941477276/vue3-country-intl" target="_blank">vue3-country-intl</breadcrumb-item>
      <breadcrumb-item :disabled="true">Library3</breadcrumb-item>
      <breadcrumb-item>Library4</breadcrumb-item>
      <breadcrumb-item v-if="show">Library5</breadcrumb-item>
    </bs-breadcrumb>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let show = ref(false);
let timer = setTimeout(function () {
  clearTimeout(timer);
  show.value = true;
}, 1500);
</script>
