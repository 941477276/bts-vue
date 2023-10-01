<docs>

---
order: 0
title:
  zh-CN: 排序
  en-US: Sort
description:
  zh-CN: 给列设置`sorter`函数可以显示该列的排序按钮。`sorter： function(rowA, rowB) { ... }`， rowA、rowB 为比较的两个行数据。`<bs-table>`默认认为`sorter`是升序的，如果`sorter`是降序的可以通过`sortOrder`修改。
  en-US: Setting the `sorter` function on a column will display the sort button for that column. `sorter： function(rowA, rowB) { ... }`, rowA and rowB are two row data to be compared. `<bs-table>` assumes that `sorter` is in ascending order by default, if `sorter` is in descending order, it can be modified by `sortOrder`.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns2" :data="data2" border row-key="value">
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const columns2 = [
  {
    label: 'Name',
    prop: 'name',
    // After the sorting function is executed, it is in ascending order, and the value of sortOrder needs to be `ascend`
    // 排序函数执行完成后为升序，sortOrder的值需为`ascend`
    sortOrder: 'ascend',
    sorter (rowData1: Record<string, any>, rowData2: Record<string, any>) {
      return rowData1.name.length - rowData2.name.length;
    }
  },
  {
    label: 'Age',
    prop: 'age',
    width: 100,
    sortOrder: 'ascend',
    defaultSortOrder: 'descend', // default descending sort（默认降序排序）
    sorter (rowData1: Record<string, any>, rowData2: Record<string, any>) {
      return rowData1.age - rowData2.age;
    }
  },
  {
    label: 'Address',
    prop: 'address',
    showTooltip: true,
    minWidth: 160,
    resizeable: true,
    sortDirections: ['descend'], // Only supports descending order（只支持降序排序）
    sorter (rowData1: Record<string, any>, rowData2: Record<string, any>) {
      return rowData2.address.length - rowData1.address.length;
    }
  },
  {
    label: 'Hobbies',
    prop: 'hobbies',
    customCell (rowData: Record<string, any>) {
      return rowData.hobbies.join(', ');
    }
  },
  {
    label: 'Operate',
    prop: 'opt',
    width: 140,
    resizeable: true
  }
];

const data2 = ref([
  {
    'name': 'Jon',
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
    'name': 'Daniel',
    'age': 29,
    'address': '654 Birch St, Miami, FL',
    'id': 'E567890',
    'hobbies': ['traveling', 'dancing']
  },
  {
    'name': 'Olivia',
    'age': 24,
    'address': '321 Cedar St, Seattle, WA',
    'id': 'F234567',
    'hobbies': ['yoga', 'movies']
  },
  {
    'name': 'Sophia',
    'age': 32,
    'address': '876 Maple St, Boston, MA',
    'id': 'G890123',
    'hobbies': ['sports', 'cooking']
  },
  {
    'name': 'William',
    'age': 31,
    'address': '234 Spruce St, Austin, TX',
    'id': 'H456789',
    'hobbies': ['gaming', 'coding']
  },
  {
    'name': 'James',
    'age': 23,
    'address': '567 Cherry St, Denver, CO',
    'id': 'I012345',
    'hobbies': ['swimming', 'writing']
  },
  {
    'name': 'Emma',
    'age': 26,
    'address': '789 Rose St, Philadelphia, PA',
    'id': 'J678901',
    'hobbies': ['singing', 'shopping']
  }
]);
</script>
