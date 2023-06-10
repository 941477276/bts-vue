<docs>

---
order: 0
title:
  zh-CN: 自定义
  en-US: Custom
description:
  zh-CN: 你可以通过`VNode`、`函数`、`html字符串`3种方式自定义MessageBox的头部和内容
  en-US: You can customize the header and content of the MessageBox in 3 ways：`VNode`, `function`, `html string`
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showMessageBox1">Custom title</bs-button>
    <bs-button type="primary" @click="showMessageBox2">Custom icon</bs-button>
    <bs-button type="primary" @click="showMessageBox3">Custom content</bs-button>
    <bs-button type="primary" @click="showMessageBox4">Custom content(use html string)</bs-button>
  </div>
</template>

<script setup>
import { BsMessageBox } from '../../bs-message-box';
import { h } from 'vue';
import imgSrc from './icons-hero.png';

let showMessageBox1 = function () {
  BsMessageBox({
    title: () => {
      return h('strong', ['这是一个加粗的标题，而且还', h('small', h('mark', '加黄'))]);
    },
    message: '这个标题你喜欢吗？',
    dialogTheme: true
  });
};

let showMessageBox2 = function () {
  BsMessageBox({
    title: '自定义图标',
    icon: h('img', {
      src: imgSrc,
      style: {
        width: '50px'
        // height: '64px'
      }
    }),
    message: '不要看我，看左边的图标！'
  });
};

let showMessageBox3 = function () {
  BsMessageBox({
    title: '自定义内容，请看下面的内容！',
    message: h('div', [
      h('h4', {
        style: {
          paddingTop: '0.5rem'
        }
      }, '日出东方催人醒'),
      h('h4', [
        '不及晚',
        h('strong', ' 霞'),
        h('mark', {
          style: {
            padding: '0 .5rem',
            fontSize: '1.2em'
          }
        }, 'in'),
        '我心'
      ])
    ])
  });
};

let showMessageBox4 = function () {
  BsMessageBox({
    title: '自定义内容，请看下面的内容！',
    dangerouslyUseHTMLString: true,
    message: `<div>
                <h4 style="padding-top: 0.5rem;">日出东方催人醒</h4>
                <h4>不及晚<strong> 霞</strong><mark style="padding: 0 .5rem;font-size:1.2em;">in</mark>我心</h4>
              </div>`
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
