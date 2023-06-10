<docs>

---
order: 0
title:
  zh-CN: 全局加载
  en-US: Global loading
description:
  zh-CN: 当使用`v-bsloading`指令方式时，全局加载状态需要添加`fullscreen`修饰符（遮罩会插入至`body`上）
  en-US: When using `v-bsloading`, global loading needs to add the `fullscreen` modifier (the mask will be inserted on the `body`)
---
</docs>

<template>
  <div>
    <bs-button
      type="primary"
      v-bsloading.fullscreen="{ loading: globalLoading, text: 'Loading....'}"
      @click="showGlobalLoading">Use v-bsloading directive</bs-button>
    <bs-button type="primary" @click="showGlobalLoading2">Use api</bs-button>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';
import { BsLoading } from '../../bs-loading';

let globalLoading = ref(false);
let showGlobalLoading = function () {
  globalLoading.value = true;

  setTimeout(function () {
    globalLoading.value = false;
  }, 2000);
};

let globalLoading2 = null;
let showGlobalLoading2 = function () {
  if (!globalLoading2) {
    globalLoading2 = BsLoading({
      text: '加载中...',
      fullscreen: true
      // color: '#fff',
      // background: '#f60'
    });
  }
  globalLoading2.show();

  setTimeout(function () {
    globalLoading2.hide();
  }, 2000);
};
let hideGlobalLoading2 = function () {
  if (globalLoading2) {
    globalLoading2.updateProps({
      visible: false
    });
  }
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
