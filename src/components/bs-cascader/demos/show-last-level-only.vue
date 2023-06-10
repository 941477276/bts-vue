<docs>
---
order: 0
title:
  zh-CN: 仅显示最后一级
  en-US: Last level only
description:
  zh-CN:
    设置`show-all-level=false`可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。
    设置`emit-path=false`可以设置在选中节点改变时只返回该节点的值，而不是该节点所在的各级菜单的值所组成的路径
  en-US:
    Set `show-all-level=false` to set only the label of the last level of the selected item to be displayed in the input box, instead of the full path where the selected item is located.
    Set `emit-path=false` to set that when the selected node changes, only the value of the node will be returned, instead of the path composed of the values of the menu levels where the node is located
---
</docs>

<template>
  <div>
    <BsCascader v-model="cascader1" :options="options" :show-all-levels="false" :emit-path="false"></BsCascader>
    <p>Value: {{ cascader1 || '--' }}</p>

    <BsCascader v-model="cascader2" :options="options" multiple :show-all-levels="false" :emit-path="false"></BsCascader>
    <p>Value: {{ cascader2.length > 0 ? cascader2 : '--' }}</p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let cascader1 = ref('');
let cascader2 = ref([]);
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
