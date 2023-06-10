<docs>

---
order: 0
title:
  zh-CN: 自定义过渡名称
  en-US: Custom transition name
description:
  zh-CN: 设置`custom-transition-name`属性可自定义过渡名称，它接收一个`Function`，该函数需返回一个`string`类型的名称
  en-US: Set the `custom-transition-name` attribute to customize the transition name, which receives a `Function`, which needs to return a name of type `string`
---
</docs>

<template>
  <div>
    <bs-button ref="referenceRef" type="primary" @click="showDropdown">
      {{ show ? 'Hide' : 'Show' }}
      <strong style="font-size: 1.2em;">my-zoom</strong>
      transition dropdown
    </bs-button>

    <teleport :disabled="!allowTeleport" to="body">
      <bs-dropdown-transition
        :will-visible="willVisible"
        :reference-ref="referenceRef"
        :custom-transition-name="getTransitionName"
        :custom-style="getStyle"
        :offset="{ top: 5.36, left: 5.36 }">
        <ul
          v-show="show"
          class="my-custom-dropdown"
          @click="showDropdown">
          <li>Html</li>
          <li>Javascript</li>
          <li>Css</li>
        </ul>
      </bs-dropdown-transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let willVisible = ref(false);
let show = ref(false);
let allowTeleport = ref(false);

let referenceRef = ref();
let showDropdown = function () {
  // willVisible必须比show先行，这样才能确保<dropdown-transition>组件正确的计算过渡动画名称
  willVisible.value = !willVisible.value;
  let timer = setTimeout(function () {
    clearTimeout(timer);
    show.value = !show.value;
  }, 0);
};
let getTransitionName = function (positionInfo) {
  // 定位信息
  console.log('positionInfo', positionInfo);
  return 'my-zoom';
};
let getStyle = function (positionInfo) {
  // 定位信息
  console.log('positionInfo', positionInfo);
  let direction = positionInfo.direction;
  let origin = '';
  if (direction.startsWith('top')) {
    origin = 'center bottom';
  } else if (direction.startsWith('bottom')) {
    origin = 'center top';
  }
  if (origin) {
    return {
      'transform-origin': origin,
      '-ms-transform-origin': origin,
      '-webkit-transform-origin': origin
    };
  }
  return null;
};
</script>

<style lang="scss" scoped>
.my-custom-dropdown{
  position: absolute;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 999;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  &.my-zoom-enter-active,
  &.my-zoom-leave-active{
    transition: transform .2s, opacity .2s;
  }
  &.my-zoom-enter-from,
  &.my-zoom-leave-to{
    transform: scale(0.2);
    //transform-origin: 100% 100%;
    opacity: 0.2;
  }
  &.my-zoom-enter-to,
  &.my-zoom-leave-from{
    transform: scale(1);
    //transform-origin: 100% 100%;
    opacity: 1;
  }
  li{
    height: 2rem;
    line-height: 2rem;
    padding: 0 1rem;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      color: #fff;
      background-color: var(--primary);
    }
  }
}
.bs-button {
  margin: 0 1rem 1rem 0;
}
</style>
