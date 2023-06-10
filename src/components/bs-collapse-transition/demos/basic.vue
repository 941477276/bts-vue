<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: `bs-collapse-transition`的用法很简单，只要传递一个组件或dom元素给它就行了
  en-US: The usage of `bs-collapse-transition` is very simple, just pass a component or dom element to it
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="show = !show">{{ show ? 'Hide' : 'Show' }} box</bs-button>
    <bs-collapse-transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave">
      <div class="a-box" v-show="show">
        The usage of <code>bs-collapse-transition</code> is very simple
      </div>
    </bs-collapse-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let show = ref(true);

let onBeforeEnter = function (el) {
  console.log('onBeforeEnter', el);
};
let onEnter = function (el) {
  console.log('onEnter', el);
};
let onAfterEnter = function (el) {
  console.log('onAfterEnter', el);
};
let onBeforeLeave = function (el) {
  console.log('onBeforeLeave', el);
};
let onLeave = function (el) {
  console.log('onLeave', el);
};
let onAfterLeave = function (el) {
  console.log('onAfterLeave', el);
};
</script>

<style lang="scss" scoped>
.a-box{
  padding: 4rem 1rem;
  max-width: 600px;
  border: 1px solid var(--primary);
  margin-top: 1rem;
  text-align: center;
  color: #fff;
}
</style>
