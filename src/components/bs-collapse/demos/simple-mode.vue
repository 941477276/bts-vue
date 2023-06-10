<docs>

---
order: 0
title:
  zh-CN: 简洁模式
  en-US: Simple mode
description: 
  zh-CN: 设置`simple`属性开启简洁模式
  en-US: Set `simple` attribute to enable simple mode
---
</docs>

<template>
  <div>
    <bs-collapse v-model="activeNames" simple>
      <BsCollapseItem title="Html">
        <p>HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。</p>
      </BsCollapseItem>
      <BsCollapseItem title="Javascript">
        <p>JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。</p>
        虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。
      </BsCollapseItem>
      <BsCollapseItem title="Css">
        <p>层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
      </BsCollapseItem>
      <BsCollapseItem title="Angular(disabled)" disabled>Angular</BsCollapseItem>
      <BsCollapseItem title="Vue">
        <p>Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的JavaScript框架。它基于标准HTML、CSS和JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助开发者高效地开发用户界面。</p>
      </BsCollapseItem>
    </bs-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let activeNames = ref();
</script>
