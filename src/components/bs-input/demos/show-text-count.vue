<docs>

---
order: 0
title:
  zh-CN: 字数限制
  en-US: Text count limit
description: 
  zh-CN: 
    使用`maxlength`和`minlength`属性, 来控制输入内容的最大字数和最小字数。设置`showCount`属性为`true`可以显示剩余字数，当`maxlength`值
    为0的时候不会限制字数。
  en-US: 
    Use the `maxlength` and `minlength` attributes to control the maximum and minimum number of words in the input content. Set the `showCount` property to `true` to display the remaining word count, when the `maxlength` value
    When it is 0, the number of characters will not be limited.
---
</docs>

<template>
  <div>
    <bs-input v-model="text" :maxlength="10" show-count placeholder="input something" />
    <p style="margin-top: 0.5rem;">Your input: <strong>{{ text || '--' }}</strong> </p>

    <h6>just show count(只是展示字数)</h6>
    <bs-input v-model="text2" show-count placeholder="just show count" />
    <p style="margin-top: 0.5rem;">Your input: <strong>{{ text2 || '--' }}</strong> </p>

    <bs-input v-model="text3" type="textarea" :maxlength="100" show-count auto-height placeholder="input something" />
    <p style="margin-top: 0.5rem;">Your input: <strong>{{ text3 || '--' }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const text = ref('');
const text2 = ref('');
const text3 = ref('');
</script>
