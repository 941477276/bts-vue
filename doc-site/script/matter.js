const matter = require('gray-matter');

var str = `---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: \`bs-collapse-transition\`的用法很简单，只要传递一个组件或dom元素给它就行了
  en-US: The usage of \`bs-collapse-transition\` is very simple, just pass a component or dom element to it
---`;
console.log(
  matter(str)
);
