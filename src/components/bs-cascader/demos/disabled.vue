<docs>
---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
description:
  zh-CN: 设置`disabled`可禁用整个级联选择器，在节点的`option`中设置`disabled`属性可禁用该节点
  en-US: Setting `disabled` can disable the entire cascading selector, and setting the `disabled` attribute in the node‘s `option` can disable the node
---
</docs>

<template>
  <div>
    <h6>Disable cascader</h6>
    <BsCascader v-model="cascader1" :options="options" disabled></BsCascader>
    <p>Value: {{ cascader1 || '--' }}</p>
    <h6>Disable some node</h6>
    <BsCascader v-model="cascader1" :options="options"></BsCascader>
    <p>Value: {{ cascader1 || '--' }}</p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let cascader1 = ref('');
let options = ref([
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      {
        label: '广州市',
        value: 'guangzhou',
        disabled: true,
        children: [
          { label: '白云区', value: 'baiyun' },
          { label: '越秀区', value: 'yuexiu' },
          { label: '增城', value: 'zengcheng' }
        ]
      },
      {
        label: '深圳市',
        value: 'shenzhen',
        children: [
          { label: '福田区', value: 'futian', disabled: true },
          { label: '宝安区', value: 'baoan' },
          {
            label: '龙岗区',
            value: 'longgang',
            children: [
              { label: '坂田街道', value: 'bantian_street' },
              { label: '民治街道', value: 'minzhi_street' },
              { label: '布吉街道', value: 'buji_street' },
              { label: '吉华街道', value: 'jihua_street' }
            ]
          }
        ]
      },
      { label: '佛山市', value: 'foshan', disabled: true },
      { label: '东莞市', value: 'dongguan' }
    ]
  },
  {
    label: '江西省',
    value: 'jiangxi',
    children: [
      {
        label: '南昌市',
        value: 'nanchang',
        disabled: true,
        children: [
          { label: '高新区', value: 'gaoxin' },
          { label: '青云谱区', value: 'qingyunpu' },
          { label: '昌北区', value: 'changbei' }
        ]
      },
      {
        label: '吉安市',
        value: 'jian',
        children: [
          { label: '吉州区', value: 'jizhou' },
          { label: '青原区', value: 'qingyuan' },
          {
            label: '遂川县',
            value: 'suichuan',
            children: [
              { label: '泉江镇', value: 'quanjiang_town' },
              { label: '枚江镇', value: 'meijiang_town' },
              { label: '碧洲镇', value: 'bizhou_town' },
              { label: '高坪镇', value: 'gaoping_town' }
            ]
          },
          { label: '万安县', value: 'wanan', disabled: true }
        ]
      }
    ]
  }
]);
</script>
