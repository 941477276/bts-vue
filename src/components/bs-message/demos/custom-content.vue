<docs>

---
order: 0
title:
  zh-CN: 自定义消息内容
  en-US: Custom message content
description:
  zh-CN: `Message`组件的消息内容可以为字符串、函数(函数需返回string或VNode)、VNode
  en-US: The message content of the `Message` component can be a string, a function (the function needs to return a string or VNode), VNode
---
</docs>

<template>
  <div>
    <bs-button type="success" plain @click="showMsg">VNode message</bs-button>
    <bs-button type="warning" plain @click="showMsg2">Function message</bs-button>
  </div>
</template>

<script setup>
import { BsMessage } from '../../bs-message';
import { createVNode } from 'vue';
import { BsiBootstrapFill } from 'vue3-bootstrap-icon/es/icons/BsiBootstrapFill';
import BsBadge from '../../bs-badge/BsBadge.vue';

let showMsg = function () {
  BsMessage.success({
    icon: createVNode('strong', {
      style: {
        color: '#fff',
        fontSize: '1.2rem'
      }
    }, { default: () => [createVNode(BsiBootstrapFill)] }),
    message: createVNode('div', null, {
      default: () => [
        createVNode(BsBadge, {
          style: { marginRight: '0.5rem' }
        }, { default: () => '徽章' }),
        'This is a normal message！'
      ]
    })
  });
};

let showMsg2 = function () {
  BsMessage.warning({
    message: createVNode('div', null, {
      default: () => [
        createVNode(BsiBootstrapFill, {
          style: {
            fontSize: '1.2rem',
            verticalAlign: 'middle',
            marginRight: '0.5rem'
          }
        }),
        'this is a function message!'
      ]
    })
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
