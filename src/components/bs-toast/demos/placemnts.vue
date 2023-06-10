<docs>

---
order: 0
title:
  zh-CN: 显示位置
  en-US: Placement
description:
  zh-CN: `Toast`组件共有`top-left`、`top-center`、`top-right`、`bottom-left`、`bottom-center`、`bottom-right`6个显示位置;
  en-US: `Toast` component has 6 placements：`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`;
---
</docs>

<template>
  <div>
    <div>
      <bs-button type="primary" @click="showToast('top-left')">top-left</bs-button>
      <bs-button type="primary" @click="showToast( 'top-right')">top-right</bs-button>
      <bs-button type="primary" @click="showToast( 'top-center')">top-center</bs-button>
    </div>
    <div style="margin-top: 1rem;">
      <bs-button type="primary" @click="showToast( 'bottom-left')">bottom-left</bs-button>
      <bs-button type="primary" @click="showToast( 'bottom-right')">bottom-right</bs-button>
      <bs-button type="primary" @click="showToast( 'bottom-center')">bottom-center</bs-button>
    </div>
  </div>
</template>

<script setup>
import { BsToast } from '../../bs-toast';
import dayjs from 'dayjs';

const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
const getRandomNumber = function (min, max) {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
};
let showToast = function (placement) {
  let type = types[getRandomNumber(0, types.length - 1)];
  BsToast({
    title: placement,
    type,
    secondaryTitle: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    message: `这是一个显示方位为【${placement}】的toast！`,
    placement
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
