<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 基础的表格展示用法
  en-US: Basic table is just for data display.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns" :data="tableData" row-key="id"></BsTable>
  </div>
</template>

<script setup>
const columns = [
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
    prop: 'address'
  },
  {
    label: 'Hobbies',
    prop: 'hobbies',
    customCell (rowData) {
      return rowData.hobbies.join(', ');
    }
  }
];

const tableData = [
  {
    'name': 'John',
    'age': 25,
    'address': '123 Main St, New York, NY',
    'id': 'A123456',
    'hobbies': ['hiking', 'photography']
  },
  {
    'name': 'Alice',
    'age': 30,
    'address': '456 Elm St, Los Angeles, CA',
    'id': 'B789012',
    'hobbies': ['reading', 'painting']
  },
  {
    'name': 'Michael',
    'age': 22,
    'address': '789 Oak St, San Francisco, CA',
    'id': 'C345678',
    'hobbies': ['surfing', 'music']
  },
  {
    'name': 'Emily',
    'age': 28,
    'address': '987 Pine St, Chicago, IL',
    'id': 'D901234',
    'hobbies': ['cooking', 'gardening']
  },
  {
    'name': 'Daniel',
    'age': 29,
    'address': '654 Birch St, Miami, FL',
    'id': 'E567890',
    'hobbies': ['traveling', 'dancing']
  }
];
</script>
