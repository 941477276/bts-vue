<docs>

---
order: 0
title:
  zh-CN: 自定义样式
  en-US: Custom style
description:
  zh-CN: 在`columns`列配置中设置`customHeadCellAttrs`函数可以自定义头部单元格属性及样式，设置`customCellAttrs`函数可以自定义数据单元格属性及样式，在表格中设置`rowClassName`属性可以自定义行的className。
  en-US: Set the `customHeadCellAttrs` function in the `columns` column configuration to customize the header cell attributes and styles, set the `customCellAttrs` function to customize the data cell attributes and styles, and set the `rowClassName` attribute in the table to customize the row className.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns2" :data="data2" :rowClassName="rowClassName" row-key="id">
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
    prop: 'name'
  },
  {
    label: 'Age',
    prop: 'age',
    resizeable: true,
    customHeadCellAttrs (index: number, column: any) { // Customize header cell properties and styles(自定义头部单元格属性及样式)
      return {
        class: 'custom-classname-head-cell',
        style: {
          color: '#f90',
          fontSize: '16px',
          textShadow: '0 0 5px rgba(0,0,0,0.5)'
        }
      };
    },
    customCellAttrs (rowData: any, cellIndex: number, rowIndex: number, column: any) { // Custom data cell properties and styles(自定义数据单元格属性及样式)
      if (rowIndex == 1) {
        return {
          title: 'a custom style cell',
          style: {
            color: '#fff',
            backgroundColor: '#f90'
          }
        };
      }
    }
  },
  {
    label: 'Address',
    prop: 'addr',
    showTooltip: true,
    customCellAttrs (rowData: any, cellIndex: number, rowIndex: number, column: any) { // 自定义数据单元格属性及样式
      if (rowIndex == 5) {
        return {
          title: 'a custom classname cell',
          class: ['custom-classname-cell']
        };
      }
    }
    /* cellClassName (rowData: any, cellIndex: number, rowIndex: number, column: any) { // Custom data cell class(自定义数据单元格class)
      if (rowIndex == 5) {
        return 'custom-classname-cell';
      }
    } */
  },
  {
    label: 'Operate',
    prop: 'opt'
  }
];

const generateData = function () {
  return Array.from({ length: 10 }).map((_, index) => {
    return {
      id: index,
      name: `Table row ${index + 1}`,
      age: 22,
      addr: `Shenzhen, baoan no. ${index}`
    };
  });
};
const data2 = ref(generateData());

const rowClassName = function (row: any, rowIndex: number) {
  // console.log('rowClassName', row, rowIndex);
  return (rowIndex == 3 || rowIndex == 7) ? 'highlight-row' : '';
};
</script>

<style lang="scss">
.custom-classname-cell{
  color: #fff!important;
  background-color: #f60!important;
}
.highlight-row{
  td{
    background-color: #EAF5FC;
  }
}
</style>
