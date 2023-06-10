<docs>

---
order: 0
title:
  zh-CN: 新增和关闭标签页
  en-US: Add and close tabs
description: 
  zh-CN: 给`bs-tab-pane`组件设置`closeable`属性可关闭该标签页
  en-US: Set the `closeable` attribute to the `bs-tab-pane` component to close the tab
---
</docs>

<template>
  <div style="max-width: 600px;">
    <bs-button type="primary" size="sm" @click="addPane">Add tab</bs-button>
    <bs-tabs
      :closeable="true"
      @close="onClose">
      <bs-tab-pane
        v-for="pane in panes"
        :key="pane.name"
        :label="pane.label"
        :name="pane.name"
        :disabled="pane.disabled">
      </bs-tab-pane>
    </bs-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let panes = ref([
  { name: 'firstTab', label: 'Tab one' },
  { name: 'articleManage', label: 'Article manage' },
  { name: 'articleCategory', label: 'Article category', disabled: true },
  { name: 'articleKeywords', label: 'Article keywords' }
]);

let onClose = function (name) {
  let index = panes.value.findIndex(item => item.name == name);
  if (index > -1) {
    panes.value.splice(index, 1);
  }
};
let addPane = function () {
  panes.value.push({
    name: `added_tab-${panes.value.length + 1}`,
    label: `Tab_${panes.value.length + 1}`
  });
};
</script>
