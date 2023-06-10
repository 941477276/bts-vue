<docs>

---
order: 0
title:
  zh-CN: 异步关闭
  en-US: Async close
description:
  zh-CN: 当给Tag组件的绑定的`close`事件返回一个`Promise`的时候，Tag将在promise状态转为`fulfilled`后关闭
  en-US: When a `Promise` is returned to the `close` event bound to the Tag component, the Tag will be closed after the promise state turns to `fulfilled`
---
</docs>

<template>
  <div>
    <bs-tag
      class="async-close-tag"
      :closeable="true"
      @close="beforeClose('a tag')">
      <BsSpinner v-if="closing"></BsSpinner>
      a async close tag
    </bs-tag>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BsSpinner from '../../bs-spinner/BsSpinner.vue';

let closing = ref(false);
let beforeClose = function (arg) {
  closing.value = true;
  console.log('arg', arg);
  return new Promise(function (resolve, reject) {
    let timer = setTimeout(function () {
      clearTimeout(timer);
      closing.value = false;
      resolve(1);
    }, 1500);
  });
};
</script>

<style lang="scss" scoped>
.async-close-tag{
  .bs-spinner{
    width: 1.1em;
    height: 1.1em;
    border-width: 1px;
    margin-right: 0.25rem;
  }
}
</style>
