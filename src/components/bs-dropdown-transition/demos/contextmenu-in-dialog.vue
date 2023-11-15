<docs>
---
order: 0
title:
  zh-CN: 右键菜单—在弹窗中
  en-US: Contextmenu in the popup
description:
  zh-CN:
    `easy-dropdown-transition`组件的右键菜单在弹窗中也能正确的工作
  en-US:
    The right-click(contextmenu) menu of the `easy-dropdown-transition` component also works correctly in the pop-up window.
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="showModal(1)" style="margin-right: 1rem;">Show Modal</bs-button>
    <bs-button type="primary" @click="showModal(2)">Show Modal2</bs-button>

    <bs-modal class="modal1" title="A bts-vue modal" v-model:visible="modalVisible" :scrollable="scrollable" @open="handleDialogOpen(1)" @close="handleDialogClose(1)">
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p v-if="scrollable">modalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodal</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>

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
        <div class="context-menu-demo">
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
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
      <p>modal content!</p>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

let allowTeleport = ref(false);
let placement = ref('top');
let useZoomTransition = ref(false);
let willVisible = ref(false);
let show = ref(false);
let scrollable = ref(false);
let modalVisible = ref(false);
let referenceRef = ref();
let virtualMouseEvent = reactive({
  clientX: 0,
  clientY: 0
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

const showModal = function (dialogNumber) {
  scrollable.value = dialogNumber == 2;
  modalVisible.value = true;
};

const contextmenuEvt = function (evt) {
  evt.preventDefault();
  virtualMouseEvent.clientX = evt.clientX;
  virtualMouseEvent.clientY = evt.clientY;
  showDropdown();
};

const handleDialogOpen = function (dialogNumber) {
  document.documentElement.addEventListener('contextmenu', contextmenuEvt, false);
};

const handleDialogClose = function (dialogNumber) {
  show.value = false;
  document.documentElement.removeEventListener('contextmenu', contextmenuEvt, false);
};
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
