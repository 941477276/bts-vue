<docs>
---
order: 0
title:
  zh-CN: 自定义头部
  en-US: Custom header
---
</docs>

<template>
  <div>
    <bs-collapse v-model="activeNames">
      <BsCollapseItem name="html">
        <template #title>
          <div class="html-collapse-header">
            <strong>H</strong>tml
            <BsiFiletypeHtml></BsiFiletypeHtml>
          </div>
        </template>
        <p>HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。</p>
        <p>HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等。</p>
      </BsCollapseItem>
      <BsCollapseItem title="Javascript" name="javascript">
        <p>JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。</p>
        虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。
      </BsCollapseItem>
      <BsCollapseItem title="Css">
        <p>层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
        <p>CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。</p>
      </BsCollapseItem>
      <BsCollapseItem title="Angular(disabled)" name="angular" disabled>Angular</BsCollapseItem>
      <BsCollapseItem title="Vue" name="vue">
        <p>Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的JavaScript框架。它基于标准HTML、CSS和JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助开发者高效地开发用户界面。</p>
        <p>Vue是一个独立的社区驱动的项目，它是由尤雨溪在2014年作为其个人项目创建， [8]  是一个成熟的、经历了无数实战考验的框架，它是目前生产环境中使用最广泛的JavaScript框架之一，可以轻松处理大多数web应用的场景，并且几乎不需要手动优化，并且Vue完全有能力处理大规模的应用。</p>
      </BsCollapseItem>
    </bs-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsiFiletypeHtml } from 'vue3-bootstrap-icon/es/icons/BsiFiletypeHtml';

let activeNames = ref(['html', 2]);
</script>

<style lang="scss" scoped>
.html-collapse-header{
  display: flex;
  flex: 1;
  strong{
    line-height: 1;
    font-size: 1.2rem;
    color: #f00;
  }
  .bs-icon{
    line-height: 1;
    margin-left: auto;
    margin-right: 0.5rem;
    vertical-align: middle;
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
