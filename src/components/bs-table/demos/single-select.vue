<docs>

---
order: 0
title:
  zh-CN: 可选择(单选)
  en-US: Selectable(single)
description:
  zh-CN: 设置`selectionConfig.type=radio`可以开启表格的单选择功能
  en-US: Set `selectionConfig.type=radio` to enable the single selection function of the table
---
</docs>

<template>
  <div>
    <h6>Selected count: {{ selectedRowKeys.length }}</h6>
    <BsTable ref="bTableRef" :columns="columns2" :data="data2" :selected-row-keys="selectedRowKeys" stripe border row-key="id"
      :selection-config="{
        type: 'radio',
        rowDisabled,
        onSelectChange
      }">
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
    <bs-pagination style="margin: 1rem;" v-model:current-page="page" :total="55" layout="total,pager"
      @current-change="handlePageChange"></bs-pagination>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns2 = [
  {
    label: 'Name',
    prop: 'name'
  },
  {
    label: 'Age',
    prop: 'age',
    resizeable: true
  },
  {
    label: 'Address',
    prop: 'addr',
    showTooltip: true
  },
  {
    label: 'Operate',
    prop: 'opt',
    resizeable: true
  }
];

let bTableRef = ref();
let page = ref(1);
let selectedRowKeys = ref(['1|1', '1|4']);
let selectedRows = ref([]);
const generateData = function () {
  return Array.from({ length: 10 }).map((_, index) => {
    return {
      id: page.value + '|' + index,
      name: `Table row ${page.value}-${index + 1}`,
      age: 22,
      addr: `Shenzhen, baoan no. ${index}`
    };
  });
};
const data2 = ref(generateData());

// set row disabled（设置行禁用）
const rowDisabled = function (row) {
  return ['1|2', '1|5', '2|6'].includes(row.id);
};
const onSelectChange = function (selection) {
  console.log('selection info:', selection);
  selectedRowKeys.value = selection.selectedRowKeys;
  selectedRows.value = selection.selectedRows;
};
const handlePageChange = function () {
  data2.value = generateData();

  selectedRowKeys.value = [];
  selectedRows.value = [];

  setTimeout(function () {
    console.log('selection info：', bTableRef.value.getSelectionInfo());
  }, 0);
};
</script>
