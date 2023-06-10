<docs>

---
order: 0
title:
  zh-CN: 触发方式
  en-US: Trigger
description: 
  zh-CN: 虚拟触发是指Popover可以通过外部dom或无dom方式触发，添加`virtual-triggering`属性可以开启虚拟触发
  en-US: Virtual triggering means that Popover can be triggered by external dom or no dom, adding `virtual-triggering` attribute can enable virtual triggering
---
</docs>

<template>
  <div>
    <bs-popover
      virtual-triggering
      virtual-ref="#btn1"
      title="由id为btn1的元素触发"
      content="我由id为btn1的元素触发">
    </bs-popover>
    <bs-popover
      virtual-triggering
      :virtual-ref="getEle"
      title="virtualRef1触发"
      content="我由virtualRef1触发">
    </bs-popover>
    <bs-popover
      virtual-triggering
      :visible="virtualVisible"
      :virtual-ref="virtualRef"
      title="没有实际元素触发"
      content="我真正的虚拟触发！">
    </bs-popover>

    <bs-button id="btn1" type="primary">我的id是btn1</bs-button>
    <bs-button id="btn2" type="primary">我的id是btn2</bs-button>
    <bs-button
      type="primary"
      @click="noDomTriggerClick">无dom触发(点击我)</bs-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let getEle = () => {
  return document.getElementById('btn2');
};
let virtualVisible = ref(false);

let position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
});
let virtualRef = ref({
  getBoundingClientRect () {
    return position.value;
  }
});
let setPosition = (e) => {
  position.value = DOMRect.fromRect({
    width: 0,
    height: 0,
    x: e.clientX,
    y: e.clientY + 10
  });
};
let noDomTriggerClick = function () {
  virtualVisible.value = !virtualVisible.value;
  if (virtualVisible.value) {
    document.addEventListener('mousemove', setPosition, false);
  } else {
    document.removeEventListener('mousemove', setPosition, false);
  }
};
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
