<docs>

---
order: 0
title:
  zh-CN: 异步加载数据
  en-US: Async load data
description:
  zh-CN: 设置`lazy`属性并设置`tree-props`的`loadDataFn`属性可异步加载数据
  en-US: Set the `lazy` property and set the `loadDataFn` property of `tree-props` to load data asynchronously
---
</docs>

<template>
  <div>
    <bs-tree-select
      v-model="checkedKeys1"
      :tree-data="treeData1"
      :lazy="true"
      :tree-props="{
        loadDataFn: loadDataFn5
      }"
      :checkbox-visible="true"
      :labels="labels"
      multiple
      node-key="id"
      clearable></bs-tree-select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsMessage } from '../../bs-message';

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
let labels = ref([
  { label: '1级节点', value: '1_1' },
  { label: '1_2级节点', value: '1_2' },
  { label: '1_3_1级节点', value: '1_3_1' },
  { label: '1_5_1级节点', value: '1_5_1' },
  { label: '1_6级节点', value: '1_6' },
  { label: '1_5_2级节点', value: '1_5_2' },
  { label: '1_5_3级节点', value: '1_5_3' }
]);

let checkedKeys1 = ref(['1_1', '2_1_1_1', '2_1_1_3']);

let randoms = function (min, max) {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
};
// 加载节点函数
let loadDataFn5 = function (nodeData, nodeState) {
  console.log('nodeData', nodeData);
  return new Promise(function (resolve, reject) {
    let count = Math.floor(Math.random() * 10);
    let nodes = [];

    let leafNodeIndex = -1; // 叶子节点索引
    if (count >= 4) {
      leafNodeIndex = randoms(2, count - 1);
    }
    for (let i = 1; i <= count; i++) {
      nodes.push({
        label: `${nodeState.level + 1}级${leafNodeIndex == i ? '(叶子节点)' : ''} ${i}`,
        id: `${nodeData.id}_${i}`,
        isLeaf: leafNodeIndex == i
      });
    }

    let randomNum = randoms(1, 10);
    let timer = setTimeout(function () {
      clearTimeout(timer);
      if (randomNum % 3 == 0) {
        reject();
        BsMessage.warning('节点加载失败!');
        return;
      }
      nodeData.children = nodes;
      resolve(true);
    }, randoms(500, 1500));
  });
};
</script>
