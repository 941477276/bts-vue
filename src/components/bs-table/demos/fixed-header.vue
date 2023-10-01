<docs>

---
order: 0
title:
  zh-CN: 固定表头
  en-US: Fixed header
description:
  zh-CN: 纵向内容过多时，可选择固定表头。只要设置了`bs-table`组件的`height`或`max-height`属性，即可实现固定表头的表格。
  en-US: When there are too many vertical contents, you can choose to fix the header. As long as the `height` or `max-height` attribute of the `bs-table` component is set, a table with a fixed header can be realized.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns" :data="data" stripe border max-height="290" row-key="id"></BsTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  {
    label: 'Date',
    prop: 'date',
    width: 150
  },
  {
    label: 'Name',
    prop: 'name',
    width: 130
  },
  {
    label: 'Address',
    prop: 'address',
    minWidth: 200
  }
];

const data = ref([
  {
    id: '1',
    name: 'John Brown',
    date: '2023-07-09',
    address: 'New York No. 1 Lake Park'
  },
  {
    id: '2',
    name: 'Jim Green',
    date: '2023-07-10',
    address: 'London No. 1 Lake Park'
  },
  {
    id: '3',
    name: 'Joe Black',
    date: '2023-07-17',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    id: '4',
    name: 'Jim Red',
    date: '2023-08-01',
    address: 'London No. 2 Lake Park'
  },
  {
    id: '5',
    name: 'Jake White',
    date: '2023-08-13',
    address: 'Dublin No. 2 Lake Park'
  },
  {
    id: '6',
    name: 'Jake Lee',
    date: '2023-08-19',
    address: 'Dublin No. 2 Lake Park'
  },
  {
    id: '7',
    name: 'Optimus Prime',
    date: '2023-08-23',
    address: 'Dublin No. 2 Lake Park'
  },
  {
    id: '8',
    name: 'Bumblebee',
    date: '2023-09-09',
    address: 'Dublin No. 2 Lake Park'
  }
]);
</script>
