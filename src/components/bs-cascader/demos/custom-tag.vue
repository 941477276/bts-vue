<docs>
---
order: 0
title:
  zh-CN: 自定义Tag
  en-US: Custom tag
description:
  zh-CN: 通过`tag`插槽可以自定义Tag内容，或通过`tag-type`属性指定Tag类型
  en-US: The Tag can be customized through the `tag` slot, Or specify the Tag type through the `tag-type` attribute
---
</docs>

<template>
  <div>
    <h6>Use `tag` slot</h6>
    <BsCascader
      v-model="cascader1"
      :multiple="true"
      :options="options"
      clearable>
      <template #tag="tag">
        {{ tag.label }}
        <strong style="color: var(--primary);">(Node level: {{tag.optionPath.length}})</strong>
      </template>
    </BsCascader>
    <p>Value: {{ cascader1 }}</p>

    <h6>Custom tag type</h6>
    <BsCascader
      v-model="cascader1"
      :multiple="true"
      :options="options"
      tag-type="primary"
      clearable>
    </BsCascader>

    <h6>Custom tag type2</h6>
    <BsCascader
      v-model="cascader1"
      :filterable="false"
      :multiple="true"
      :show-all-levels="true"
      :options="options2"
      :emit-path="true"
      :check-strictly="false"
      clearable>
    </BsCascader>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let cascader1 = ref(['baiyun', 'dongguan', 'bantian_street']);

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

let options2 = ref([
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      {
        label: '广州市',
        value: 'guangzhou',
        children: [
          { label: '白云区', value: 'baiyun', tagType: 'success' },
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
              { label: '坂田街道', value: 'bantian_street', tagType: 'primary' },
              { label: '民治街道', value: 'minzhi_street' },
              { label: '布吉街道', value: 'buji_street' },
              { label: '吉华街道', value: 'jihua_street' }
            ]
          }
        ]
      },
      { label: '佛山市', value: 'foshan' },
      { label: '东莞市', value: 'dongguan', tagType: 'warning' }
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
