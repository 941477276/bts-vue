<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: `bs-pagination`通过`layout`属性来控制分页器的显示内容。`pager`表示页码列表，`sizes`表示分页数量选择器，`total`表示总条目数量，`jumper`表示跳页输入框，`slot`表示自定义内容插槽
  en-US: `bs-pagination` controls the display content of the pager through the `layout` property. `pager` indicates the page number list, `sizes` indicates the page number selector, `total` indicates the total number of entries, `jumper` indicates the page jump input box, `slot` indicates the custom content slot
---
</docs>

<template>
  <div>
    <h6>Simple pagination</h6>
    <bs-pagination
      layout="pager"
      :total="pageData.total"
      :pager-count="7"
      v-model:pageSize="pageData.pageSize"
      v-model:current-page="pageData.currentPage">
    </bs-pagination>

    <h6>Integral pagination</h6>
    <bs-pagination
      layout="total,pager,sizes,jumper,slot"
      :total="pageData.total"
      :pager-count="7"
      v-model:pageSize="pageData.pageSize"
      v-model:current-page="pageData.currentPage">
      Hello!
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
