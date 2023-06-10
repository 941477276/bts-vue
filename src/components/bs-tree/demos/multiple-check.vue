<docs>

---
order: 0
title:
  zh-CN: 多选
  en-US: Multiple choice
description:
  zh-CN: 设置`show-checkbox`属性可开起多选，使用`v-model:checkedKeys`双向绑定选中项
  en-US: Set the `show-checkbox` attribute to enable multiple selections, and use `v-model:checkedKeys` to bind the selected items two-way
---
</docs>

<template>
  <div>
    <bs-tree
      :tree-data="treeData1"
      node-key="id"
      :show-checkbox="true"
      :highlightCurrent="true"
      :autoExpandParent="true"
      :check-on-click-node="true"
      :expandedKeys="['2_1_1_2', '3', '4']"
      v-model:checkedKeys="checkedKeys">
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
                  }
                ]
              },
              {
                label: '四级 2-1-1-3',
                id: '2_1_1_3',
                disabled: true
              }
            ]
          }
        ]
      },
      {
        label: '二级 2-2',
        id: '2_2'
      },
      {
        label: '二级 2-3',
        id: '2_3',
        disabled: true
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
        disabled: true
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
      }
    ]
  }
]);

let checkedKeys = ref(['1', '2_1_1_2_1', '2_1_1_2_2', '2_3', '3_2_1']);
</script>
