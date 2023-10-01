<docs>

---
order: 0
title:
  zh-CN: 自定义头部和内容
  en-US: Custom table head and content
description:
  zh-CN: 在`bs-table`中可以通过`column.label`、`column.headSlotName`插槽、`head`插槽来自定表格头部；通过`column.customCell`、`column.prop`插槽来自定义表格单元格。
  en-US: In `bs-table`, you can customize the table header through the `column.label`, `column.headSlotName` slots and `head` slots; you can customize the table cells through the `column.customCell` and `column.prop` slots grid.
---
</docs>

<template>
  <div>
    <h6>Custom table header</h6>
    <BsTable :columns="columns1" :data="data2" row-key="id">
      <template #address>
        <i style="color: #307DF6;font-weight: 400;" title="This is a custom table header created through the 'headSlotName' configuration(这是通过'headSlotName'配置创建的自定义表格头)">Address</i>
      </template>
    </BsTable>

    <h6>Custom table header <small style="color: #999;">(by "head" slot)</small></h6>
    <BsTable :columns="columns2" :data="data2" row-key="id">
      <template #head="{column}">
        <a href="javascript: void(0);" style="color: #307DF6;font-weight: 400;text-decoration: underline;">{{ column.label }}</a>
      </template>
    </BsTable>

    <h6>Custom table cell</h6>
    <BsTable :columns="columns3" :data="data2" row-key="id">
      <template #opt="{row}">
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';

const columns1 = [
  {
    label: 'Name',
    prop: 'name'
  },
  {
    label () {
      return h('strong', {
        style: {
          color: '#f00',
          fontSize: '16px'
        },
        title: 'This is a custom table header created through the "label" function(这是一个通过"label"函数创建的自定义表格头)'
      }, 'Age');
    },
    prop: 'age'
  },
  {
    label: 'Address',
    prop: 'addr',
    headSlotName: 'address'
  }
];

const columns2 = [
  {
    label: 'Name',
    prop: 'name'
  },
  {
    label: 'Age',
    prop: 'age'
  },
  {
    label: 'Address',
    prop: 'addr'
  }
];

const columns3 = [
  {
    label: 'Name',
    prop: 'name'
  },
  {
    label: 'Age',
    prop: 'age',
    customCell (row: Record<string, any>, cellIndex: number, rowIndex: number) {
      return h('span', [
        row.age,
        h('small', {
          style: {
            color: '#999'
          }
        }, [' (yeas old)'])
      ])
    }
  },
  {
    label: 'Address',
    prop: 'addr',
    showTooltip: true
  },
  {
    label: 'Operate',
    prop: 'opt'
  }
];

const generateData = function () {
  return Array.from({ length: 5 }).map((_, index) => {
    return {
      id: index,
      name: `Table row ${index + 1}`,
      age: 22,
      addr: `Shenzhen, baoan no. ${index}`
    };
  });
};
const data2 = ref(generateData());
</script>
