<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 使用`<bs-toast>`组件即可得到一个静态都Toast
  en-US: Use `<bs-toast>` component to get a static Toast
---
</docs>

<template>
  <div>
    <div class="static-toast-container">
      <bs-button type="primary" @click="showStaticToast">{{ staticToastVisible ? 'Hide' : 'Show' }} static toast</bs-button>
      <bs-toast
        id="staticToast"
        title="Static toast"
        style="margin-top: 1rem;"
        :duration="0"
        @hide="staticToastVisible = false"
        @show="staticToastVisible = true">
        This is a <strong style="font-size: 1.2rem;">Static</strong> toast!
      </bs-toast>
    </div>
  </div>
</template>

<script setup>
// import BsToast from '@/components/BsToast.vue';
import { BsToast as BsToastController } from '../../bs-toast';
import { ref, onMounted } from 'vue';

let staticToastVisible = ref(false);
let showStaticToast = function () {
  if (!staticToastVisible.value) {
    BsToastController.show('staticToast');
  } else {
    BsToastController.hide('staticToast');
  }
};

onMounted(function () {
  showStaticToast();
});
</script>

<style lang="scss" scoped>
.static-toast-container{
  padding: 20px;
  height: 180px;
  max-width: 600px;
  background-color: #343A40;
}
</style>
