<docs>

---
order: 0
title:
  zh-CN: 动态添加或删除
  en-US: Dynamically add or remove
description: 
  zh-CN: 用数组生成一组标签，可以动态添加和删除
  en-US: Use an array to generate a set of tags that can be added and removed dynamically
---
</docs>

<template>
  <div>
    <bs-tag
      v-for="(item) in tags"
      :key="item"
      :closeable="true"
      @close="onClose(item)">{{ item }}</bs-tag>
    <bs-button size="sm" type="primary" @click="addTag">添加标签</bs-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let tags = ref(['html', 'javascript', 'css']);
let count = tags.value.length;

let addTag = function () {
  tags.value.push(`tag ${++count}`);
};
let onClose = function (tag) {
  console.log('tag', tag);
  let index = tags.value.findIndex(item => item === tag);
  tags.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
.bs-tag{
  margin: 0 0.5rem 0.5rem 0;
}
</style>
