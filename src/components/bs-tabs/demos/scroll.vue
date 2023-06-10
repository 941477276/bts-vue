<docs>

---
order: 0
title:
  zh-CN: 滚动条
  en-US: Scroll
description: 
  zh-CN: 当标签页数量过多导致长度超出容器长度时会隐藏掉不可见标签页，但依旧可以访问那些被隐藏但标签页
  en-US: When there are too many tabs and the width exceeds the width of the parent container, the invisible tabs will be automatically hidden, but those hidden but tabs can still be accessed
---
</docs>

<template>
  <div>
    <h6>切换隐藏标签方式为<code>auto</code></h6>
    <bs-tabs v-model="activeTab" style="max-width: 500px;margin-bottom: 1rem;">
      <bs-tab-pane
        v-for="pane in panes"
        :key="pane.name"
        :label="pane.label"
        :name="pane.name"
        :disabled="pane.disabled">
        <ol v-if="pane.name === 'userManage'">
          <li v-for="item in 10" :key="item">User {{ item + 1 }}</li>
        </ol>
        <p>{{ pane.label }}</p>
      </bs-tab-pane>
    </bs-tabs>

    <h6>切换隐藏标签方式为<code>more</code></h6>
    <div style="max-width: 500px;">
      <bs-tabs v-model="activeTab" triggerTypeOnOverflow="more">
        <bs-tab-pane
          v-for="pane in panes"
          :key="pane.name"
          :label="pane.label"
          :name="pane.name"
          :disabled="pane.disabled">
          <ol v-if="pane.name === 'userManage'">
            <li v-for="item in 10" :key="item">User {{ item + 1 }}</li>
          </ol>
          <p>{{ pane.label }}</p>
        </bs-tab-pane>
      </bs-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let activeTab = ref('policyManage');
let panes = ref([
  { name: 'firstTab', label: 'Tab one' },
  { name: 'articleManage', label: 'Article manage' },
  { name: 'articleCategory', label: 'Article category', disabled: true },
  { name: 'articleKeywords', label: 'Article keywords' },
  { name: 'userManage', label: 'User manage' },
  { name: 'identityManage', label: 'Identity manage' },
  { name: 'policyManage', label: 'Policy manage' },
  { name: 'vpnPolicyManage', label: 'Vpn manage' },
  { name: 'appPublish', label: 'App publish' }
]);
</script>
