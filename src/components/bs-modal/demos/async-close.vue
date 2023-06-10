<docs>

---
order: 0
title:
  zh-CN: 异步关闭
  en-US: Async close
description: 
  zh-CN: 给Modal设置`confirm-loading`属性，点击确定后不会立即关闭对话框，而是需要手动关闭，或者`on-ok`事件返回值为`Promise`且状态为`fulfilled`，常用于提交表单。
  en-US: Set the `confirm-loading` attribute to Modal. After clicking OK, the modal will not be closed immediately, but needs to be closed manually, or the return value of the `on-ok` event is `Promise` and the status is `fulfilled`, which is often used to submit forms .
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Delete user</bs-button>
    <bs-button type="primary" @click="visible2 = true">Delete user2</bs-button>
    <bs-modal
      title="温馨提示"
      :confirm-loading="committing"
      v-model:visible="visible"
      :on-ok="deleteUser">
      <h5>确定要删除此用户吗？删除后将不可恢复！</h5>
      <p>在“确定”按钮转圈圈期间点击任何位置都无法关闭弹窗！</p>
    </bs-modal>

    <bs-modal
      title="温馨提示"
      :confirm-loading="committing2"
      v-model:visible="visible2"
      :on-ok="deleteUser2">
      <h5>确定要删除此用户吗？删除后将不可恢复！</h5>
      <p>在“确定”按钮转圈圈期间点击任何位置都无法关闭弹窗！</p>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let committing = ref(false);
let visible = ref(false);
let deleteUser = function () {
  if (committing.value) {
    return;
  }
  committing.value = true;
  return new Promise(function (resolve) {
    let timer = setTimeout(function () {
      clearTimeout(timer);
      committing.value = false;
      // 如果这里resolve(false)则弹窗不会主动关闭
      // resolve(true);
      resolve(true);
    }, 3000);
  });
};

let committing2 = ref(false);
let visible2 = ref(false);
let deleteUser2 = function () {
  if (committing2.value) {
    return;
  }
  committing2.value = true;
  let timer = setTimeout(function () {
    clearTimeout(timer);
    committing2.value = false;
    visible2.value = false;
  }, 3000);
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
