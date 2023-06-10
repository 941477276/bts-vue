<docs>

---
order: 0
title:
  zh-CN: 密码框
  en-US: Password input
description: 
  zh-CN: 设置`type=password`可得到一个密码输入框，开启`showPassword`属性可以切换显示隐藏密码
  en-US: Set `type=password` to get a password input box, turn on the `showPassword` attribute to switch to display hidden passwords
---
</docs>

<template>
  <div>
    <bs-input v-model="text" type="password" placeholder="input some password" />
    <h6>Toggle password or text</h6>
    <bs-input v-model="text" type="password" show-password placeholder="input some password" />
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const text = ref('');
</script>
