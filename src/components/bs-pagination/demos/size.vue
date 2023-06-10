<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Different size
description:
  zh-CN: `bs-pagination`有大、中、小3种尺寸，通过`size`属性来设置它们，它们对应的值为`lg`、`默认`、`lg`。
  en-US: `bs-pagination` has three sizes：large, medium, and small. They are set through the `size` attribute, and their corresponding values are `lg`, `default`, and `lg`.
---
</docs>

<template>
  <div>
    <h6>Large pagination(<code>size=lg</code>)</h6>
    <bs-pagination v-model:current-page="page" size="lg" :total="100" layout="total,pager,sizes,jumper,slot"></bs-pagination>

    <h6>Default pagination</h6>
    <bs-pagination v-model:current-page="page" :total="100" layout="total,pager,sizes,jumper,slot"></bs-pagination>

    <h6>Small pagination(<code>size=sm</code>)</h6>
    <bs-pagination v-model:current-page="page" size="sm" :total="100" layout="total,pager,sizes,jumper,slot"></bs-pagination>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const page = ref(2);
</script>
