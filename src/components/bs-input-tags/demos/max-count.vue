<docs>

---
order: 0
title:
  zh-CN: 限制最大输入个数
  en-US: Limit count
description:
  zh-CN: 设置`tag-limit`属性可以限制允许输入Tag的最大数量
  en-US: Set the `tag-limit` attribute to limit the maximum number of tags allowed to be entered
---
</docs>

<template>
  <div>
    <BsInputTags
      v-model="values1"
      :tag-limit="5"
      @limited="onLimited"
      @tag-close="onTagClose"></BsInputTags>
    <p style="margin-top: 0.5rem;">Values: {{ values1.map(item => item.label) }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsMessage } from '../../bs-message';

let values1 = ref([
  { label: 'HTML', value: 'html' },
  { label: 'Css', value: 'css' },
  { label: 'Javascript', value: 'javascript' }
]);
let onLimited = function () {
  BsMessage.warning('标签数量不能超过5个！');
};
let onTagClose = function (tag) {
  console.log('tag标签关闭事件', tag);
};
</script>
