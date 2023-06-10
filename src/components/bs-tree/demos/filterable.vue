<docs>

---
order: 0
title:
  zh-CN: 节点过滤
  en-US: Filter
description: 
  zh-CN: 设置`filter-method`、`filter-text`属性可实现节点过滤功能，`filter-method`接收一个函数
  en-US: Setting `filter-method` and `filter-text` attributes can realize node filtering function, and `filter-method` receives a function
---
</docs>

<template>
  <div>
    <bs-input v-model="filterText" placeholder="请输入关键字进行过滤" style="margin-bottom: 1rem;"></bs-input>
    <bs-tree
      :tree-data="treeData1"
      :defaultExpandAll="true"
      :filter-text="filterText"
      :filter-method="filterMethod"
      node-key="id">
    </bs-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let treeData1 = ref([
  {
    id: 'top',
    label: '心向晚霞',
    children: [
      {
        id: 'jiangxi',
        label: '江西',
        children: [
          {
            id: 'jian',
            label: '吉安',
            children: [
              {
                id: 'suichuan',
                label: '遂川',
                children: [
                  {
                    id: 'bizhou',
                    label: '碧洲'
                  },
                  {
                    id: 'gaoping',
                    label: '高坪'
                  },
                  {
                    id: 'quanjaing',
                    label: '泉江'
                  }
                ]
              }
            ]
          },
          {
            id: 'nanchang',
            label: '南昌'
          },
          {
            id: 'ganzhou',
            label: '赣州'
          }
        ]
      },
      {
        id: 'guangdong',
        label: '广东',
        children: [
          {
            id: 'guangzhou',
            label: '广州'
          },
          {
            id: 'shenzhen',
            label: '深圳'
          },
          {
            id: 'dongguan',
            label: '东莞',
            children: [
              {
                id: 'gaopo',
                label: '高坡'
              }
            ]
          }
        ]
      }
    ]
  }
]);

let filterText = ref('');
let filterMethod = function (nodeData, filterText) {
  return nodeData.label.includes(filterText);
};
</script>
