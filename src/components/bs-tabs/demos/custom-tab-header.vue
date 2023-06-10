<docs>

---
order: 0
title:
  zh-CN: 自定义标签页头
  en-US: Custom tab head
description: 
  zh-CN: 通过`label`插槽，或给`label`属性传递一个函数可以实现自定义标签页头
  en-US: Customize the label header by passing the `label` slot, or passing a function to the `label` attribute
---
</docs>

<template>
  <div>
    <bs-tabs v-model="activeTab">
      <bs-tab-pane label="Bootstrap" name="bootstrap">
        <template #label>
          <BsiBootstrapFill style="vertical-align: middle; margin-right: 0.5rem; font-size: 1.2em;"></BsiBootstrapFill>Bootstrap
        </template>
        Content of Tab Pane Bootstrap
      </bs-tab-pane>
      <bs-tab-pane label="Android" name="android">
        <template #label>
          <BsiAndroid2 style="vertical-align: middle; margin-right: 0.5rem; font-size: 1.2em;"></BsiAndroid2>Android
        </template>
        Content of Tab Pane Android
      </bs-tab-pane>
      <bs-tab-pane label="IOS" name="ios">
        Content of Tab Pane IOS
      </bs-tab-pane>
      <bs-tab-pane :label="windowsLabel" name="windows">
        Content of Tab Pane Windows
      </bs-tab-pane>
    </bs-tabs>
  </div>
</template>

<script setup>
import { ref, createVNode, h } from 'vue';
import { BsiAndroid2 } from 'vue3-bootstrap-icon/es/icons/BsiAndroid2';
import { BsiWindows } from 'vue3-bootstrap-icon/es/icons/BsiWindows';
import { BsiBootstrapFill } from 'vue3-bootstrap-icon/es/icons/BsiBootstrapFill';

let activeTab = ref('');
let windowsLabel = function () {
  return h('span', null, [
    createVNode(BsiWindows, {
      style: {
        verticalAlign: 'middle',
        marginRight: '0.5rem',
        fontSize: '1.2em'
      }
    }),
    'Windows'
  ]);
};
</script>
