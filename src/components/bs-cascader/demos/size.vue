<docs>
---
order: 0
title:
  zh-CN: 不同大小
  en-US: Different size
description:
  zh-CN: `bs-cascader`有大、中、小3种尺寸，通过`size`属性来设置它们，它们对应的值为`lg`、`默认`、`sm`。
  en-US: `bs-cascader` has three sizes：large, medium, and small. They are set through the `size` attribute, and their corresponding values are `lg`, `default`, and `lg`.
---
</docs>

<template>
  <div>
    <h6>Large size(<code>size=lg</code>)</h6>
    <BsCascader v-model="cascader1" :options="options" size="lg"></BsCascader>

    <h6>Default size</h6>
    <BsCascader v-model="cascader1" :options="options"></BsCascader>

    <h6>Small size(<code>size=sm</code>)</h6>
    <BsCascader v-model="cascader1" :options="options" size="sm"></BsCascader>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';
let cascader1 = ref('gaoping_town');
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
