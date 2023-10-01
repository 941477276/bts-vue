<docs>

---
order: 0
title:
  zh-CN: 展开行
  en-US: Expandable row
description:
  zh-CN: 当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能
  en-US: When the row content is too long and you do not want to display the horizontal scroll bar, you can use the expandable row feature.
---
</docs>

<template>
  <div>
    <h6>Basic Expandable row</h6>
    <BsTable :columns="columns" :data="data" stripe border max-height="400" allow-expand row-key="id"
             @expandChange="handleRowExpandChange">
      <template #expandRow="{row}">
        {{ row }}
      </template>
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>

    <h6>Dynamic load data && Expandable row</h6>
    <BsTable :columns="columns" :data="data" stripe border max-height="400" allow-expand row-key="id"
             @expandChange="handleRowExpandChange2">
      <!--Expandable column header slot-->
      <!--可展开列头部插槽-->
      <template #expandColumnHeader>
        <mark>--</mark>
      </template>
      <template #expandRow="{row}">
        {{ row }}
      </template>
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsMessage } from '../../bs-message';

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
    minWidth: 200,
    fixed: 'right'
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
  },
  {
    id: '7',
    name: 'Optimus Prime',
    date: '2023-08-23',
    email: 'user7@bts.com',
    phone: '13712345678',
    job: 'flutter developer',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'Dublin No. 2 Lake Park'
  },
  {
    id: '8',
    name: 'Bumblebee',
    date: '2023-09-09',
    email: 'user8@bts.com',
    phone: '13812345678',
    job: 'Web front developer',
    createdTime: '2023-07-09 16:24:35',
    hobbies: ['movies', 'music', 'code'],
    address: 'Dublin No. 2 Lake Park'
  }
]);

const getRandomNumber = function (min, max) {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
};

let handleRowExpandChange = function (rowData, done) {
  console.log('row expand', rowData);
  done();
};

let handleRowExpandChange2 = function (rowData, done) {
  console.log('row expand2', rowData);
  let isLoadFailed = getRandomNumber(0, 10) % 3 == 0;
  setTimeout(function () {
    if (isLoadFailed) {
      BsMessage?.warning('Data Load failed!');
      done(true);
    } else {
      done();
    }
  }, getRandomNumber(500, 2500));

  // the another way（另一种实现方式）
  /* return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (isLoadFailed) {
        BsMessage?.warning('Data Load failed!');
        reject();
      } else {
        resolve();
      }
    }, getRandomNumber(500, 2500));
  }); */
};
</script>
