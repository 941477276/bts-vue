<docs>

---
order: 0
title:
  zh-CN: 拖拽调整列宽
  en-US: Ellipsis with tooltip
description:
  zh-CN: 给某一列设置属性`resizable`为`true`，可以拖拽调整该列的宽度。
  en-US: Set the attribute `resizable` to `true` for a certain column, you can drag and drop to adjust the width of the column.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns2" :data="data2" stripe border max-height="400" row-key="value">
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns2 = [
  {
    label: 'Area name',
    prop: 'title'
  },
  {
    label: 'Key',
    prop: 'key',
    width: 120,
    showTooltip: true,
    resizeable: true
  },
  {
    label: 'Value',
    prop: 'value',
    resizeable: true
  },
  {
    label: 'Operate',
    prop: 'opt',
    minWidth: 140,
    resizeable: true
  }
];

const data2 = ref([
  {
    'title': '佛山市',
    'key': '64c204f08cdedc661690ffd9',
    'value': '001003'
  },
  {
    'title': '广州市',
    'key': '64c204cb8cdedc661690ffd2',
    'value': '001002'
  },
  {
    'title': '深圳市',
    'key': '64b5e8bafc205615f7314d95',
    'value': '001001'
  },
  {
    'title': '清远市',
    'key': '64c204f08cdedc661690eed9',
    'value': '001004'
  }
]);
</script>
