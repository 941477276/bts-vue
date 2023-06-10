<docs>

---
order: 0
title:
  zh-CN: 其他类型
  en-US: Other type
description:
  zh-CN: `Toast`组件共有`默认`、`primary`、`secondary`、`success`、`danger`、`warning`、`info`、`light`、`dark`8种类型;
  en-US: The `Toast` component has eight types：`default`、`primary`、`secondary`、`success`、`danger`、`warning`、`info`、`light`、`dark`;
---
</docs>

<template>
  <div>
    <bs-button type="" @click="showToast('')">Default(none)</bs-button>
    <bs-button type="primary" @click="showToast('primary')">primary</bs-button>
    <bs-button type="secondary" @click="showToast('secondary')">secondary</bs-button>

    <bs-button type="success" @click="showToast('success')">success</bs-button>
    <bs-button type="danger" @click="showToast('danger')">danger</bs-button>
    <bs-button type="warning" @click="showToast('warning')">warning</bs-button>

    <bs-button type="info" @click="showToast('info')">info</bs-button>
    <bs-button type="light" @click="showToast('light')">light</bs-button>
    <bs-button type="dark" @click="showToast('dark')">dark</bs-button>
  </div>
</template>

<script setup>
import { BsToast } from '../../bs-toast';

let showToast = function (type) {
  BsToast({
    type,
    title: !type ? 'Default type（no type）' : `【${type}】`,
    message: `This is a【${!type ? 'Default type（no type）' : type}】toast！`
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
