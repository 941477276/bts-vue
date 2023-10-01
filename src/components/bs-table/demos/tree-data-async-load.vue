<docs>

---
order: 0
title:
  zh-CN: 异步加载树型数据
  en-US: Async load tree data
description:
  zh-CN: 树形表格支持子节点数据异步加载。设置`Table`的`lazy=true`，并设置加载函数`load`。
  en-US: The tree form supports asynchronous loading of child node data. Set `lazy=true` of `Table`, and set the loading function `load`.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns2" :data="data2" stripe border max-height="400" row-key="value" lazy :load="lazyLoadTreeData">
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

const columns2 = [
  {
    label: 'Area name',
    prop: 'title',
    minWidth: 160
  },
  {
    label: 'Key',
    prop: 'key',
    minWidth: 180
  },
  {
    label: 'Value',
    prop: 'value'
  },
  {
    label: 'Operate',
    prop: 'opt',
    minWidth: 140
  }
];
let treeData = [
  {
    'title': '佛山市',
    'key': '64c204f08cdedc661690ffd9',
    'value': '001003'
  },
  {
    'children': [
      {
        'title': '越秀区',
        'key': '64c204e68cdedc661690ffd8',
        'value': '001002002'
      },
      {
        'title': '增城区',
        'key': '64c204d98cdedc661690ffd7',
        'value': '001002001'
      }
    ],
    'title': '广州市',
    'key': '64c204cb8cdedc661690ffd2',
    'value': '001002'
  },
  {
    'children': [
      {
        'title': '福田区',
        'key': '64c204138cdedc661690ffbd',
        'value': '001001003',
        'isLeaf': true
      },
      {
        'children': [
          {
            'title': '新安街道',
            'key': '64c204c28cdedc661690ffd1',
            'value': '001001002003'
          },
          {
            'title': '西乡街道',
            'key': '64c204b28cdedc661690ffd0',
            'value': '001001002002'
          }
        ],
        'title': '宝安区',
        'key': '64c204098cdedc661690ffbc',
        'value': '001001002'
      },
      {
        'children': [
          {
            'title': '吉华街道',
            'key': '64c2043d8cdedc661690ffc4',
            'value': '001001001003',
            'isLeaf': true
          },
          {
            'children': [
              {
                'title': '布吉一街',
                'key': '64c2045e8cdedc661690ffc9',
                'value': '001001001002001'
              },
              {
                'title': '荣超花园',
                'key': '64c204798cdedc661690ffca',
                'value': '001001001002002'
              }
            ],
            'title': '布吉街道',
            'key': '64c2042a8cdedc661690ffc3',
            'value': '001001001002'
          },
          {
            'title': '坂田街道',
            'key': '64c204228cdedc661690ffc2',
            'value': '001001001001'
          }
        ],
        'title': '龙岗区',
        'key': '64b5e8c4fc205615f7314d9a',
        'value': '001001001'
      }
    ],
    'title': '深圳市',
    'key': '64b5e8bafc205615f7314d95',
    'value': '001001'
  }
];
const data2 = ref([
  {
    'title': '佛山市',
    'key': '64c204f08cdedc661690ffd9',
    'value': '001003'
  },
  {
    'children': [
      {
        'title': '越秀区',
        'key': '64c204e68cdedc661690ffd8',
        'value': '001002002'
      },
      {
        'title': '增城区',
        'key': '64c204d98cdedc661690ffd7',
        'value': '001002001',
        'isLeaf': true
      }
    ],
    'title': '广州市',
    'key': '64c204cb8cdedc661690ffd2',
    'value': '001002'
  },
  {
    'title': '深圳市',
    'key': '64b5e8bafc205615f7314d95',
    'value': '001001'
  }
]);

const getRandomNumber = function (min, max) {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
};

const lazyLoadTreeData = function (rowData, resolve) {
  console.log('lazyLoadTreeData', rowData);
  let timer = setTimeout(function () {
    clearTimeout(timer);
    let cityId = rowData.key;
    let getCityDetail = function (cities) {
      let city;
      for (let i = 0, len = cities.length; i < len; i++) {
        let item = cities[i];
        if (item.key === cityId) {
          city = item;
          break;
        }
        if (item.children) {
          let childCity = getCityDetail(item.children);
          if (!!childCity) {
            city = childCity;
          }
        }
      }
      return city;
    };
    let cityDetail = getCityDetail(treeData);
    console.log('cityDetail', cityDetail);
    if (!cityDetail || getRandomNumber(0, 10) % 3 == 0) {
      BsMessage.warning('Load failed,please retry！');
      resolve(true); // 模拟加载数据失败
    } else {
      let children = cityDetail.children?.map((item) => {
        let newItem = { ...item };
        delete newItem.children;
        return newItem;
      });

      rowData.children = children;
      resolve(); // 模拟加载数据失败
    }
  }, getRandomNumber(500, 2000));
};
</script>
