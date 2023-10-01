<docs>

---
order: 0
title:
  zh-CN: 筛选
  en-US: Filter
description:
  zh-CN: 给列设置`filterSlotName`插槽，在插槽里自定义筛选UI，然后再调用Table组件的`filter`函数即可实现筛选功能。
  en-US: Set the `filterSlotName` slot for the column, customize the filtering UI in the slot, and then call the `filter` function of the Table component to realize the filtering function.
---
</docs>

<template>
  <div>
    <BsTable ref="tableRef" :columns="columns2" :data="data2" border row-key="value">
      <template #nameFilter>
        <bs-dropdown ref="dropdownRef" trigger="click" placement="bottom-end" dropdown-class="name-filter-dropdown" :show-toggle-arrow="false">
          <FilterIcon></FilterIcon>
          <template #content>
            <bs-input v-model="filterName" size="sm" placeholder="Search name"></bs-input>
            <div class="name-filter-btns">
              <bs-button size="sm" type="primary" @click="doFilter">Search</bs-button>
              <bs-button size="sm" style="margin-left: 0.5rem;" plain @click="clearFilter">Reset</bs-button>
            </div>
          </template>
        </bs-dropdown>
      </template>

      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';

function FilterIcon () {
  return h(
    'span',
    { class: 'filter-icon' },
    h('svg', {
      viewBox: '0 0 1024 1024',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      fill: 'currentColor'
    }, h('path', {
      'd': 'M597.439829 981.333333a42.666667 42.666667 0 1 1-85.2992 0v-597.333333c0-9.216 3.003733-18.2272 8.533334-25.6l204.8-273.066667H128.174763l204.8 273.066667c5.5296 7.3728 8.533333 16.384 8.533333 25.6v366.318933l72.8064 72.840534a42.666667 42.666667 0 0 1-60.3136 60.347733l-85.333333-85.333333a42.666667 42.666667 0 0 1-12.4928-30.173867V398.2336L8.708096 68.266667c-21.0944-28.125867-1.024-68.266667 34.133333-68.266667H810.773163c35.157333 0 55.227733 40.1408 34.133333 68.266667l-247.466667 329.966933V981.333333zM725.439829 512h256a42.666667 42.666667 0 1 1 0 85.333333h-256a42.666667 42.666667 0 1 1 0-85.333333z m0 170.666667h256a42.666667 42.666667 0 1 1 0 85.333333h-256a42.666667 42.666667 0 1 1 0-85.333333z m0 170.666666h256a42.666667 42.666667 0 1 1 0 85.333334h-256a42.666667 42.666667 0 1 1 0-85.333334z'
    }))
  );
}

const columns2 = [
  {
    label: 'Name',
    prop: 'name',
    filterSlotName: 'nameFilter'
  },
  {
    label: 'Age',
    prop: 'age',
    width: 60
  },
  {
    label: 'Address',
    prop: 'address',
    showTooltip: true,
    minWidth: 160
  },
  {
    label: 'Hobbies',
    prop: 'hobbies',
    customCell (rowData: Record<string, any>) {
      return rowData.hobbies.join(', ');
    },
    width: 140
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

let tableRef = ref();
let dropdownRef = ref();
let filterName = ref('');

const doFilter = function () {
  let filterText = filterName.value;
  tableRef.value.filter(function (rowData: Record<string, any>) {
    return rowData.name.toLowerCase().includes(filterText);
  });
  dropdownRef.value.hide();
};

const clearFilter = function () {
  filterName.value = '';
  tableRef.value.clearFilter();
  dropdownRef.value.hide();
};
</script>

<style lang="scss" scoped>
.filter-icon{
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color .3s, color .3s;
  &:hover{
    color: var(--primary);
    background-color: #eee;
  }
}

::v-global(.name-filter-dropdown){
  padding: 0.75rem!important;
}
::v-global(.name-filter-btns) {
  padding-top: 0.5rem;
  text-align: right;
}
</style>
