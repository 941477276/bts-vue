<docs>

---
order: 0
title:
  zh-CN: 右键菜单—上下文元素
  en-US: Contextmenu(context element)
description:
  zh-CN: 设置`contextElement`参数后下拉菜单将以该元素为承载容器，下拉菜单的位置始终不会超出该元素
  en-US: After setting the `contextElement` parameter, the drop-down menu will use this element as the hosting container, and the position of the drop-down menu will never exceed this element.
---
</docs>

<template>
  <div>
    <bs-form-item label="Placement">
      <bs-radio-group v-model="placement">
        <bs-radio value="top">top</bs-radio>
        <bs-radio value="top-end">top-end</bs-radio>
        <bs-radio value="bottom">bottom</bs-radio>
        <bs-radio value="bottom-end">bottom-end</bs-radio>
      </bs-radio-group>
    </bs-form-item>
    <bs-form-item label="Use zoom transition">
      <bs-radio-group v-model="useZoomTransition">
        <bs-radio :value="true">Yes</bs-radio>
        <bs-radio :value="false">No</bs-radio>
      </bs-radio-group>
    </bs-form-item>
    <div class="context-menu-demo" ref="demoRef">
      <bs-button type="primary" @click="allowTeleport = !allowTeleport">Dropdown content teleport to body</bs-button>
      <bs-button type="primary" @click="show = false">Hide Dropdown</bs-button>

      <teleport :disabled="!allowTeleport" to="body">
        <bs-dropdown-transition
          context-menu
          :use-zoom-transition="useZoomTransition"
          :placement="placement"
          :will-visible="willVisible"
          :virtual-mouse-event="virtualMouseEvent">
            <ul v-show="show" class="my-custom-dropdown">
              <li>Html</li>
              <li>Javascript</li>
              <li>Css</li>
            </ul>
        </bs-dropdown-transition>
      </teleport>

      <div class="content">Right click here!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, onBeforeUnmount } from 'vue';

let allowTeleport = ref(false);
let placement = ref('top');
let useZoomTransition = ref(false);
let willVisible = ref(false);
let show = ref(false);
let demoRef = ref();
let virtualMouseEvent = reactive({
  clientX: 0,
  clientY: 0,
  contextElement: null
});

let showDropdown = function () {
  if (!willVisible.value) {
    // willVisible必须比show先行，这样才能确保<easy-dropdown-transition>组件正确的计算过渡动画名称
    willVisible.value = !willVisible.value;
    let timer = setTimeout(function () {
      clearTimeout(timer);
      show.value = !show.value;
    }, 60);
  } else {
    if (!show.value) {
      show.value = true;
    }
  }
};

const contextmenuEvt = function (evt: MouseEvent) {
  evt.preventDefault();
  virtualMouseEvent.clientX = evt.clientX;
  virtualMouseEvent.clientY = evt.clientY;
  virtualMouseEvent.contextElement = demoRef.value;
  showDropdown();
};

onMounted(function () {
  document.documentElement.addEventListener('contextmenu', contextmenuEvt, false);
});

onBeforeUnmount(function () {
  document.documentElement.removeEventListener('contextmenu', contextmenuEvt, false);
});
</script>

<style lang="scss" scoped>
.context-menu-demo{
  position: relative;
  padding: 20px;
  height: 300px;
  max-width: 600px;
  border: 1px solid #ccc;
  overflow: auto;
  .content{
    width: 1200px;
    height: 600px;
    padding: 50px 0 0 100px;
    font-size: 32px;
    color: #ccc;
    background-color: #f5f5f5;
  }
}
.my-custom-dropdown{
  //display: none;
  position: absolute;
  padding: 0;
  //margin: 0;
  z-index: 999;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  list-style: none;
  li{
    height: 2rem;
    line-height: 2rem;
    padding: 0 1rem;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: all .3s;
    &:last-child{
      border-bottom: 0;
    }
    &:hover{
      color: #fff;
      background-color: var(--primary);
    }
  }
}
.bs-form-item{
  margin-bottom: 1rem;
}
.bs-button {
  margin: 0 1rem 1rem 0;
}
</style>
