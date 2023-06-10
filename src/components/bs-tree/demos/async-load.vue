<docs>

---
order: 0
title:
  zh-CN: 动态加载
  en-US: Dynamic loading
description:
  zh-CN: 设置`lazy`属性，并设置`load-data-fn`属性可实现动态加载子节点
  en-US: Set the `lazy` attribute and set the `load-data-fn` attribute to dynamically load child nodes
---
</docs>

<template>
  <div>
    <bs-tree
      :tree-data="treeData2"
      :lazy="true"
      :load-data-fn="loadNode"
      :show-checkbox="true"
      :expanded-keys="['1', '1_1', '1_1_1', '1_3', '1_3_2']"
      v-model:checkedKeys="checkedKeys2"
      node-key="id">
    </bs-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsMessage } from '../../bs-message';

let treeData2 = ref([{
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
        },
        {
          label: '三级 1-1-2',
          id: '1_1_2'
        }
      ]
    },
    {
      label: '二级(叶子节点) 1-2',
      id: '1_2',
      isLeaf: true
    },
    {
      label: '二级 1-3',
      id: '1_3'
    }
  ]
}]);
let checkedKeys2 = ref(['1_1', '1_2', '1_3_1', '1_3_2', '1_3_3', '1_3_2_2']);

let randoms = function (min, max) {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
};
// 加载节点函数
let loadNode = function (nodeData, nodeState) {
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
