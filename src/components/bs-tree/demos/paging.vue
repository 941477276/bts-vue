<docs>

---
order: 0
title:
  zh-CN: 分页
  en-US: Paging
description: 
  zh-CN: 当有大量数据时可以通过分页的方式来提升渲染性能，设置`page-size`属性可开启分页，它接收一个`number`类型的值，默认为`30`，若值为`0`则不开启分页
  en-US: When there is a large amount of data, the rendering performance can be improved by paging. Setting the `page-size` property can enable paging. It accepts a `number` type value, and the default is `30`. If the value is `0`, it will disable paging.
---
</docs>

<template>
  <div>
    <bs-tree
      :tree-data="treeData1"
      node-key="id"
      :highlightCurrent="true"
      :autoExpandParent="true"
      :check-on-click-node="true"
      :page-size="3"
      :expandedKeys="['2']">
    </bs-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let treeData1 = ref([
  {
    label: '一级 1',
    id: '1',
    children: [
      {
        label: '二级 1-1',
        id: '1_1',
        children: [
          {
            label: '三级 1-1-1',
            id: '1_1_1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    id: '2',
    children: [
      {
        label: '二级 2-1',
        id: '2_1',
        children: [
          {
            label: '三级 2-1-1',
            id: '2_1_1',
            children: [
              {
                label: '四级 2-1-1-1',
                id: '2_1_1_1'
              },
              {
                label: '四级 2-1-1-2',
                id: '2_1_1_2',
                children: [
                  {
                    label: '五级 2-1-1-2-1',
                    id: '2_1_1_2_1'
                  },
                  {
                    label: '五级 2-1-1-2-2',
                    id: '2_1_1_2_2'
                  },
                  {
                    label: '五级 2-1-1-2-3',
                    id: '2_1_1_2_3',
                    children: [
                      {
                        label: '六级 2-1-1-2-3-1',
                        id: '2_1_1_2_3_1'
                      },
                      {
                        label: '六级 2-1-1-2-3-2',
                        id: '2_1_1_2_3_2'
                      }
                    ]
                  },
                  {
                    label: '五级 2-1-1-2-4',
                    id: '2_1_1_2_4'
                  },
                  {
                    label: '五级 2-1-1-2-5',
                    id: '2_1_1_2_5'
                  }
                ]
              },
              {
                label: '四级 2-1-1-3',
                id: '2_1_1_3'
              },
              {
                label: '四级 2-1-1-4',
                id: '2_1_1_4'
              }
            ]
          }
        ]
      },
      {
        label: '二级 2-2',
        id: '2_2',
        children: [
          {
            label: '三级 2-2-1',
            id: '2_2_1',
            children: [
              {
                label: '4级 2-2-1-1',
                id: '2_2_1_-1'
              }
            ]
          },
          {
            label: '三级 2-2-2',
            id: '2_2_2'
          }
        ]
      },
      {
        label: '二级 2-4',
        id: '2_4'
      },
      {
        label: '二级 2-5',
        id: '2_5'
      },
      {
        label: '二级 2-6',
        id: '2_6'
      },
      {
        label: '二级 2-7',
        id: '2_7'
      },
      {
        label: '二级 2-8',
        id: '2_8'
      }
    ]
  },
  {
    label: '一级 3',
    id: '3',
    children: [
      {
        label: '二级 3-1',
        id: '3_1',
        children: [
          {
            label: '三级 3-1-1',
            id: '3_1_1'
          }
        ]
      },
      {
        label: '二级 3-2',
        id: '3_2',
        children: [
          {
            label: '三级 3-2-1',
            id: '3_2_1'
          },
          {
            label: '三级 3-2-2',
            id: '3_2_2'
          }
        ]
      },
      {
        label: '二级 3-3',
        id: '3_3'
      },
      {
        label: '二级 3-4',
        id: '3_4'
      },
      {
        label: '二级 3-5',
        id: '3_5'
      }
    ]
  }
]);

</script>
