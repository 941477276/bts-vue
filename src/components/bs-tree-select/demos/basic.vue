<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 最简单的用法
  en-US: 最简单的用法
---
</docs>

<template>
  <div>
    <bs-tree-select v-model="checkedKeys1" :tree-data="treeData1" node-key="id" clearable></bs-tree-select>
    <h6>Show radio</h6>
    <bs-tree-select show-radio radio-visible v-model="checkedKeys1" :tree-data="treeData1" node-key="id"></bs-tree-select>
    <h6>Only leaf nodes can be selected(只能选择叶子节点)</h6>
    <bs-tree-select check-strictly v-model="checkedKeys2" :tree-data="treeData1" node-key="id"></bs-tree-select>
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

let checkedKeys1 = ref();
let checkedKeys2 = ref();
</script>
