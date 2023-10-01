<docs>

---
order: 0
title:
  zh-CN: 固定列
  en-US: Fixed column
description:
  zh-CN: 横向内容过多时，可选择固定列。固定列需要使用`fixed`属性，它接受`Boolean`值或者`left`、`right`，表示左边固定还是右边固定。
  en-US: When there is too much horizontal content, you can choose fixed columns. A fixed column needs to use the `fixed` attribute, which accepts `Boolean` values or `left`, `right`, indicating whether the left side is fixed or the right side is fixed.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns" :data="data" stripe border row-key="id">
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  {
    label: 'ID',
    prop: 'id',
    fixed: true
  },
  {
    label: 'UserName',
    prop: 'name',
    width: 130,
    fixed: 'left'
  },
  {
    label: 'Email',
    prop: 'email',
    minWidth: 150
  },
  {
    label: 'Phone',
    prop: 'phone',
    minWidth: 160
  },
  {
    label: 'Hobbies',
    prop: 'hobbies',
    minWidth: 200
  },
  {
    label: 'Job',
    prop: 'job',
    minWidth: 100
  },
  {
    label: 'CreatedTime',
    prop: 'createdTime',
    width: 150
  },
  {
    label: 'Address',
    prop: 'address',
    minWidth: 200
    // fixed: 'right'
  },
  {
    label: 'Operates',
    prop: 'opt',
    minWidth: 160,
    fixed: 'right'
  }
];

const data = ref([
  {
    id: '1',
    name: 'John Brown',
    date: '2023-07-09',
    email: 'user1@bts.com',
    phone: '13112345678',
    job: 'Web front developer',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'New York No. 1 Lake Park'
  },
  {
    id: '2',
    name: 'Jim Green',
    date: '2023-07-10',
    email: 'user2@bts.com',
    phone: '13212345678',
    job: 'java developer',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'London No. 1 Lake Park'
  },
  {
    id: '3',
    name: 'Joe Black',
    date: '2023-07-17',
    email: 'user3@bts.com',
    phone: '13312345678',
    job: 'UI',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'Sidney No. 1 Lake Park'
  },
  {
    id: '4',
    name: 'Jim Red',
    date: '2023-08-01',
    email: 'user4@bts.com',
    phone: '13412345678',
    job: 'tester',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'London No. 2 Lake Park'
  },
  {
    id: '5',
    name: 'Jake White',
    date: '2023-08-13',
    email: 'user5@bts.com',
    phone: '13512345678',
    job: 'android developer',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'Dublin No. 2 Lake Park'
  },
  {
    id: '6',
    name: 'Jake Lee',
    date: '2023-08-19',
    email: 'user6@bts.com',
    phone: '13612345678',
    job: 'ios developer',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'Dublin No. 2 Lake Park'
  }
]);
</script>
