<docs>

---
order: 0
title:
  zh-CN: 保留选中项
  en-US: Keep selected
description:
  zh-CN: 在表格分页且多选的场景下，如果需要切换分页后仍然保留之前的选中项，设置`selectionConfig.reserveSelectedRowKeys=true`可以满足您的需求
  en-US: In the scenario where the table is paginated and multi-selected, if you need to keep the previous selected item after switching the paging, set `selectionConfig.reserveSelectedRowKeys=true`.
---
</docs>

<template>
  <div>
    <h6>Selected count: {{ selectedRowsKeys.length }}</h6>
    <BsTable ref="bTableRef" :columns="columns2" :data="data2" stripe border row-key="id"
      :selection-config="{
        type: 'checkbox',
        reserveSelectedRowKeys: true,
        onSelectChange
      }"
      :selected-row-keys="selectedRowsKeys">
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
let selectedRows2 = ref([]);
let selectedRowsKeys = ref(['1|0', '1|2', '1|3', '2|1', '2|2', '2|5']);
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

const onSelectChange = function (selection) {
  console.log('selection info:', selection);
  // selectedRows2.value = selection.selectedRows;
  selectedRowsKeys.value = selection.selectedRowKeys;
};
const handlePageChange = function () {
  data2.value = generateData();
  setTimeout(function () {
    console.log('selection info：', bTableRef.value.getSelectionInfo());
  }, 0);
};
</script>
