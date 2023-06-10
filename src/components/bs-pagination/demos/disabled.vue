<docs>

---
order: 0
title:
  zh-CN: 禁用项
  en-US: Disabled item
description: 
  zh-CN: 添加`disabled-page`属性可将指定的页码设置为禁用状态，它接收一个`number`类型的数组
  en-US: Add `disabled-page` attribute to set the specified page number to disabled state, it receives an array of `number` type
---
</docs>

<template>
  <div>
    <bs-pagination
      :total="pageData.total"
      :pager-count="5"
      :hideOnSinglePage="false"
      :disabled-page="[3,4,7,8,11]"
      v-model:pageSize="pageData.pageSize"
      v-model:current-page="pageData.currentPage">
    </bs-pagination>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

let pageData = reactive({
  total: 155,
  pageSize: 10,
  currentPage: 1
});
</script>
