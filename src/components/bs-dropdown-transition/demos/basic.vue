<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 需给`bs-dropdown-transition`传递一个`reference-ref`属性，该属性的值可以是一个`组件`、`dom节点`
  en-US: A `reference-ref` attribute needs to be passed to `bs-dropdown-transition`, and the value of this attribute can be a `component`, `dom node`
---
</docs>

<template>
  <div>
    <bs-button ref="referenceRef" type="primary" @click="showDropdown">{{ show ? 'Hide' : 'Show' }} custom dropdown</bs-button>
    <bs-button type="primary" @click="allowTeleport = true">Teleport to body</bs-button>

    <teleport :disabled="!allowTeleport" to="body">
      <bs-dropdown-transition
        :will-visible="willVisible"
        :reference-ref="referenceRef">
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
</script>

<style lang="scss" scoped>
.my-custom-dropdown{
  position: absolute;
  padding: 0;
  margin: 0;
  z-index: 999;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  list-style: none;
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
