<docs>

---
order: 0
title:
  zh-CN: 行列合并
  en-US: ColSpan and rowSpan
description:
  zh-CN: 表头只支持列合并，使用 column 里的`colSpan`进行设置。 表格支持行/列合并，使用 column里的 `customCellAttrs` 进行设置， `customCellAttrs`函数返回的对象中包含`colSpan`属性会进行列合并，包含`rowSpan`属性会进行行合并，当它们的值为0时不会进行合并。
  en-US: The table header only supports column merging, which is set using `colSpan` in column. Tables support row or column merging, use `customCellAttrs` in column to set, The object returned by the `customCellAttrs` function contains the `colSpan` attribute for column merging, and the `rowSpan` attribute for row merging. When their values are 0, no merging will be performed.
---
</docs>

<template>
  <div>
    <h6>Simple colSpan</h6>
    <BsTable :columns="columns" :data="tableData" border>
      <template #homeTh>
        <span style="color: #f60;">Home</span>
      </template>

      <template #name="{ row }">
        <a href="###">{{ row.name }}</a>
      </template>
    </BsTable>

    <h6>ColSpan and rowSpan</h6>
    <BsTable :columns="columns2" :data="tableData" border>
      <template #homeTh>
        Home
      </template>

      <template #name="{ row }">
        <a href="###">{{ row.name }}</a>
      </template>
    </BsTable>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';

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
    colSpan: 2, // table head merge
    prop: 'tel',
    headSlotName: 'homeTh', // custom table head
    customHeadCellAttrs () { // set head cell attributes
      return {
        style: {
          fontSize: '1.2em'
        },
        'data-prop': 'tel'
      };
    },
    customCellAttrs: (row: any, index: number, rowIndex: number) => {
      if (index === 2 && rowIndex == 2) {
        return { colSpan: 2, style: { textAlign: 'center' } }; // table cell merge
      }
    }
  },
  {
    label: 'Phone',
    colSpan: 0,
    prop: 'phone'
  },
  {
    label: 'Address',
    prop: 'address'
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
    // label: 'Home phone',
    label (cellIndex: number) { // custom table head
      return h('strong', {
        style: {
          color: '#f60'
        }
      }, 'Home');
    },
    colSpan: 2,
    prop: 'tel',
    customHeadCellAttrs () { // set head cell attributes
      return {
        style: {
          fontSize: '1.2em'
        },
        'data-prop': 'tel'
      };
    },
    customCellAttrs: (row: any, index: number, rowIndex: number) => {
      if (rowIndex === 1) {
        return { // table cell and row merge
          rowSpan: 3,
          colSpan: 2,
          style: { // set cell style
            verticalAlign: 'middle',
            textAlign: 'center'
          }
        };
      }
    }
  },
  {
    label: 'Phone',
    colSpan: 0,
    prop: 'phone'
  },
  {
    label: 'Address',
    prop: 'address'
  }
];

const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  }
];
</script>
