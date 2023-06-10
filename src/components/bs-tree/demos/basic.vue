<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 基础的树形结构展示，必须给`bs-tree`组件设置`node-key`属性以告诉组件每个节点的唯一标识属性
  en-US: For the basic tree structure display, the `node-key` attribute must be set for the `bs-tree` component to tell the component the unique identification attribute of each node
---
</docs>

<template>
  <div>
    <bs-tree
      :tree-data="treeData1"
      node-key="id"
      :highlightCurrent="true"
      :autoExpandParent="true"
      :expandedKeys="['2_1_1', '3', '4']">
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
                id: '2_1_1_3'
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
        id: '2_3'
      }
    ]
  },
  {
    label: '一级 3',
    id: '3',
    children: [
      {
        label: '二级 3-1',
        id: '3_1'
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
</script>
