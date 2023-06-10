<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 我们提供了`v-bsloading`及`api调用`2种调用Loading的方式，通常情况下`Loading`遮罩会插入到绑定元素的子节点
  en-US: We provide `v-bsloading` and `api calling` two ways to call Loading. Usually, the `Loading` mask will be inserted into the child node of the bound element
---
</docs>

<template>
  <div>
    <h6>Use <code>v-bsloading</code> directive</h6>
    <div
      v-bsloading="{ loading: loading, text: loadingText, vertical: vertical}"
      class="loading-container">
      <dl>
        <dt>HTML</dt>
        <dd>HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等。</dd>
      </dl>
      <dl>
        <dt>Javascript</dt>
        <dd>JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。</dd>
      </dl>
    </div>
    <bs-button type="primary" @click="loading = true">Show loading</bs-button>
    <bs-button type="primary" @click="loading = false">Hide loading</bs-button>
    <bs-button type="primary" @click="updateLoadingText">Update loading text</bs-button>
    <bs-button type="primary" @click="setLoadingVertical">Loading vertical</bs-button>

    <h6>Use <code>api</code></h6>
    <div class="loading-container" id="container1">
      <dl>
        <dt>HTML</dt>
        <dd>HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等。</dd>
      </dl>
      <dl>
        <dt>Javascript</dt>
        <dd>JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。</dd>
      </dl>
    </div>
    <bs-button type="primary" @click="showLoading">Show loading</bs-button>
    <bs-button type="primary" @click="hideLoading">Hide loading</bs-button>
    <bs-button type="primary" @click="modifyLoadingText">Update loading text</bs-button>
    <bs-button type="primary" @click="setLoadingTextVertical">Loading vertical</bs-button>
  </div>
</template>

<script setup>
import {
  ref,
  nextTick,
  onMounted
} from 'vue';
import { BsLoading } from '../../bs-loading';

let loading = ref(true);
let vertical = ref(false);
let loadingText = ref('Loading...');
let updateLoadingText = function () {
  loadingText.value = loadingText.value === 'Loading...' ? '加载中...' : 'Loading...';
};
let setLoadingVertical = function () {
  vertical.value = !vertical.value;
};

let loading1 = null;
let loading1Vertical = false;
let showLoading = function () {
  if (!loading1) {
    loading1 = BsLoading({
      text: '加载中...',
      target: '#container1',
      lock: false,
      customClass: 'custom-loading'
    });
  }
  /* loading1.updateProps({
    visible: true
  }); */
  loading1.show();
  console.log(loading1);
};
let hideLoading = function () {
  if (loading1) {
    /* loading1.updateProps({
      visible: false
    }); */
    loading1.hide();
  }
};
let modifyLoadingText = function () {
  if (loading1) {
    loading1.updateProps({
      text: '动态修改的加载文案！'
    });
  }
};
let setLoadingTextVertical = function () {
  if (loading1) {
    loading1.updateProps({
      vertical: !loading1Vertical
    });
    loading1Vertical = !loading1Vertical;
  }
};
onMounted(function () {
  showLoading();
});
</script>

<style lang="scss" scoped>
.loading-container{
  max-width: 600px;
  height: 140px;
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  overflow: auto;
}
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
