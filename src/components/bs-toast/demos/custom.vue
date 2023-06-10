<docs>

---
order: 0
title:
  zh-CN: 自定义内容
  en-US: Custom content
description:
  zh-CN: 可以通过给`title`、`message`传递一个`函数`、`VNode`或`Html字符串`来自定义它们
  en-US: They can be customized by passing a `function`, `VNode` or `Html string` to `title`, `message`
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="customTitle">Custom title and message</bs-button>
    <bs-button type="primary" @click="showSecondaryTitle">Show subtitle</bs-button>
    <bs-button type="primary" @click="dynamicTitle">Dynamic title</bs-button>
    <bs-button type="primary" @click="useDangerouslyHTML">Use html string</bs-button>
  </div>
</template>

<script setup>
import { BsToast } from '../../bs-toast';
import dayjs from 'dayjs';
import { h, ref, onBeforeUnmount } from 'vue';
import imgSrc from './icons-hero.png';

let timeNow = ref('');
let timer = setInterval(function () {
  timeNow.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
}, 1000);

onBeforeUnmount(() => {
  clearInterval(timer);
});
let customTitle = function () {
  BsToast({
    type: 'primary',
    title () {
      return h('div', { className: 'custom-title' }, [
        h('img', {
          src: imgSrc,
          style: 'display: inline-block;width: 40px;height: 30px'
        }),
        h('h5', {
          style: 'display: inline-block;text-align: vertical;color: #fff;'
        }, '自定义标题')
      ]);
    },
    message: h('div', [
      h('mark', {
        style: 'padding: 0.5rem;font-size: 1.2rem;font-weight: bold;'
      }, '自定义'),
      '的Toast内容！'
    ])
  });
};
let showSecondaryTitle = function () {
  var toastCtx = BsToast({
    type: 'info',
    title: '消息通知',
    placement: 'bottom-right',
    duration: 0,
    secondaryTitle: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    message: h('div', [
      '您有',
      h('strong', {
        style: 'color: #f00;'
      }, '99+'),
      '条消息待阅读！'
    ]),
    onClick () {
      alert('点击了Toast, Toast即将关闭！');
      toastCtx.hide();
    }
  });
};
let dynamicTitle = function () {
  BsToast({
    type: 'primary',
    title: timeNow,
    duration: 0,
    secondaryTitle: '当前时间',
    message: timeNow
  });
};
let useDangerouslyHTML = function () {
  BsToast({
    type: 'warning',
    title: '使用HTML片段',
    duration: 0,
    secondaryTitle: '（危险）',
    dangerouslyUseHTMLString: true,
    message: `设置<strong><code>dangerouslyUseHTMLString=true</code></strong>即可使用HTML片段来渲染内容
                    <p style="color: #DC3545;">这是一种危险行为哦~</p>`
  });
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
