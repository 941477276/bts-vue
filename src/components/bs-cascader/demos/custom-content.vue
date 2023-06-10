<docs>
---
order: 0
title:
  zh-CN: 自定义节点
  en-US: Custom node
description:
  zh-CN: 通过`label`插槽可以自定义节点内容
  en-US: The node content can be customized through the `label` slot
---
</docs>

<template>
  <div>
    <BsCascader
      v-model="cascader1"
      :options="options"
      :check-strictly="false">
      <template #label="option">
        {{ option.label }}
        <small v-if="(option.children || []).length > 0" style="color: var(--success);">({{ (option.children || []).length }})</small>
      </template>
    </BsCascader>
    <p>Value: {{ cascader1.length > 0 ? cascader1 : '--' }}</p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let cascader1 = ref([]);
let options = ref([
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      {
        label: '广州市',
        value: 'guangzhou',
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
          { label: '福田区', value: 'futian' },
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
      { label: '佛山市', value: 'foshan' },
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
          { label: '万安县', value: 'wanan' }
        ]
      }
    ]
  }
]);
</script>
