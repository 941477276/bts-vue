<docs>
---
order: 0
title:
  zh-CN: 动态加载
  en-US: Dynamic load
description:
  zh-CN:
    设置`lazy`属性开启动态加载，并需要设置`lazy-load-fn`函数来加载数据。
    `lazy-load-fn`函数有2个参数，第一个参数为当前点击的节点，第二个参数为`设置节点数据加载状态`的一个函数，该函数接收一个`boolean`类型的参数，若值为`true`表示节点数据加载成功，反之表示节点数据加载失败
  en-US:
    Set the `lazy` attribute to enable dynamic loading, and you need to set the `lazy-load-fn` function to load data.
    The `lazy-load-fn` function has 2 parameters, the first parameter is the currently clicked node, and the second parameter is a function of `setting node data loading status`, which receives a `boolean` type parameter, If the value is `true`, it means that the node data loading is successful, otherwise it means that the node data loading fails
---
</docs>

<template>
  <div>
    <BsCascader
      v-model="cascader1"
      :multiple="false"
      :options="options"
      lazy
      :lazy-load-fn="lazyLoadFn"
      :check-strictly="false"></BsCascader>
    <p>Value: {{ cascader1.length > 0 ? cascader1 : '--' }}</p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';
import { BsMessage } from '../../bs-message';

let obj = {
  guangdong: [
    {
      label: '广州市',
      value: 'guangzhou'
    },
    {
      label: '深圳市',
      value: 'shenzhen'
    },
    { label: '佛山市', value: 'foshan' },
    { label: '东莞市', value: 'dongguan' }
  ],
  guangzhou: [
    { label: '白云区', value: 'baiyun' },
    { label: '越秀区', value: 'yuexiu' },
    { label: '增城', value: 'zengcheng' }
  ],
  shenzhen: [
    { label: '福田区', value: 'futian' },
    { label: '宝安区', value: 'baoan' },
    {
      label: '龙岗区',
      value: 'longgang'
    }
  ],
  longgang: [
    { label: '坂田街道', value: 'bantian_street' },
    { label: '民治街道', value: 'minzhi_street' },
    { label: '布吉街道', value: 'buji_street' },
    { label: '吉华街道', value: 'jihua_street' }
  ],
  jiangxi: [
    {
      label: '南昌市',
      value: 'nanchang'
    },
    {
      label: '吉安市',
      value: 'jian'
    }
  ],
  nanchang: [
    { label: '高新区', value: 'gaoxin' },
    { label: '青云谱区', value: 'qingyunpu' },
    { label: '昌北区', value: 'changbei' }
  ],
  jian: [
    { label: '吉州区', value: 'jizhou' },
    { label: '青原区', value: 'qingyuan' },
    {
      label: '遂川县',
      value: 'suichuan'
    },
    { label: '万安县', value: 'wanan' }
  ],
  suichuan: [
    { label: '泉江镇', value: 'quanjiang_town' },
    { label: '枚江镇', value: 'meijiang_town' },
    { label: '碧洲镇', value: 'bizhou_town' },
    { label: '高坪镇', value: 'gaoping_town' }
  ]
};
let cascader1 = ref([]);
let options = ref([
  {
    label: '广东省',
    value: 'guangdong'
  },
  {
    label: '江西省',
    value: 'jiangxi'
  }
]);
let randoms = function (min, max) {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
};
let lazyLoadFn = function (nodeOption, setLoadStatus) {
  let isFail = randoms(1, 10) % 3 == 0;
  let timer = setTimeout(function () {
    clearTimeout(timer);
    if (isFail) {
      setLoadStatus(false);
      BsMessage.warning('Node children load failed, please retry!');
      return;
    }
    let children = obj[nodeOption.value];
    nodeOption.children = children;
    setLoadStatus(true);
  }, randoms(800, 2500));
};
</script>
