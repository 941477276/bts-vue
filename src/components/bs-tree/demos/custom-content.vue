<docs>

---
order: 0
title:
  zh-CN: 自定义内容
  en-US: Custom content
description: 
  zh-CN: 通过默认插槽可以自定义节点内容
  en-US: 通过默认插槽可以自定义节点内容
---
</docs>

<template>
  <div>
    <bs-tree
      ref="customContentTree"
      :tree-data="treeData1"
      :defaultExpandAll="true"
      node-key="id">
      <template #default="{data, nodeState}">
        {{ data.label }}
        <bs-button type="link" style="margin-left: auto;" @click.stop="addChildNode(data, nodeState)">添加子节点</bs-button>
        <bs-button type="link" style="margin-left: 0;" @click.stop="removeChildNode(data, nodeState)">移除</bs-button>
      </template>
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
        label: '二级 2-2',
        id: '2_2',
        disabled: true
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
      }
    ]
  }
]);
let customContentTree = ref();

let addChildNode = function (nodeData, nodeState) {
  let children = nodeData.children || [];
  let childNode = {
    label: `${nodeState.level + 1}级 ${children.length + 1}`,
    id: `${nodeState.levelPath}_${children.length + 1}`
  };
  children.push(childNode);
  if (!nodeData.children) {
    nodeData.children = children;
  }
};
let removeChildNode = function (nodeData, nodeState) {
  let parentNode = customContentTree.value.getParentNodeByNodeValue(nodeData.id);
  let parentChildren = parentNode.children || [];

  let index = parentChildren.findIndex((nodeDataItem) => nodeDataItem === nodeData);
  if (index > -1) {
    parentChildren.splice(index, 1);
  }
};
</script>
