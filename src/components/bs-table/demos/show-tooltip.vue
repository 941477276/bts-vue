<docs>

---
order: 0
title:
  zh-CN: 带提示的省略
  en-US: Ellipsis with tooltip
description:
  zh-CN: 设置`column.ellipsis`可以让单元格内容根据宽度自动省略，如果您想要鼠标移到内容上后有提示，可以设置`column.showTooltip`属性。
  en-US: Setting `column.ellipsis` can make the cell content automatically omit according to the width. If you want to have a prompt after the mouse moves over the content, you can set the `column.showTooltip` property.
---
</docs>

<template>
  <div>
    <BsTable style="max-width: 900px;" :columns="columns2" :data="data2" stripe border max-height="400" row-key="value">
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
    showTooltip: true
  },
  {
    label: 'Value',
    prop: 'value',
    ellipsis: true
  },
  {
    label: 'Operate',
    prop: 'opt',
    minWidth: 140
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
    'value': '001002001002001002001002'
  },
  {
    'title': '深圳市',
    'key': '64b5e8bafc205615f7314d95',
    'value': '001001001001001001001001'
  },
  {
    'title': '清远市',
    'key': '64c204f08cdedc661690eed9',
    'value': '001004'
  }
]);
</script>
