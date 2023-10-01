<docs>

---
order: 0
title:
  zh-CN: 树型数据
  en-US: Tree data
description:
  zh-CN: 表格支持树形数据的展示，当`row`数据中有`children`字段时会自动展示为树形表格，渲染树形数据时，必须要指定`row-key`。如果你想用别的key来获取children，那么可以通过`children-key`属性进行设定
  en-US: The table supports the display of tree-shaped data. When the `row` data has a `children` field, it will be automatically displayed as a tree-shaped table. When rendering tree-shaped data, `row-key` must be specified. If you want to use another key to get children, you can set it through the `children-key` prop.
---
</docs>

<template>
  <div>
    <BsTable :columns="columns2" :data="data2" stripe border row-key="value">
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
        'value': '001001003'
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
            'value': '001001001003'
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
]);

setTimeout(function () {
  data2.value.push({
    'title': '清远市',
    'key': '64c204f08cdedc661690eed9',
    'value': '001004'
  });
}, 1500);
</script>
