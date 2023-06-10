<template>
  <div class="component-usage">
    <div>
      <h3>基础用法</h3>
      <bs-button type="primary" @click="visible = !visible">显示/隐藏</bs-button>
      <BsMask v-model:visible="visible" @click="visible = false"></BsMask>
    </div>

    <hr>
    <div>
      <h3>使用js创建</h3>
      <bs-button type="primary" @click="createMask1">显示/隐藏</bs-button>
    </div>

    <hr>
    <div>
      <h3>隐藏即销毁</h3>
      <bs-button type="primary" @click="createMask2">显示/隐藏</bs-button>
    </div>

    <hr>
    <div>
      <h3>添加到body</h3>
      <bs-button type="primary" @click="createMask3">显示/隐藏</bs-button>
    </div>

    <hr>
    <div>
      <h3>添加到id="aMask"的元素</h3>
      <bs-button type="primary" @click="createMask4">显示/隐藏</bs-button>
      <div id="aMask">我是aMask</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted
} from 'vue';
import BsMask from './bs-mask.vue';
import { createMask } from '@/components/bs-mask/index';

export default defineComponent({
  name: 'BsMaskUsage',
  components: {
    BsMask
  },
  setup (props: any) {
    let visible = ref(false);

    let mask1 = createMask({
      onClick () {
        alert('遮罩被点击了！');
        mask1.hide();
      }
    });
    let createMask1 = function () {
      mask1.show();
    };

    let createMask2 = function () {
      let mask1 = createMask({
        destroyOnHide: true
      });

      mask1.show();
    };

    let createMask3 = function () {
      let mask1 = createMask({
        destroyOnHide: true,
        appendTo: 'body'
      });

      mask1.show();
    };

    let createMask4 = function () {
      let mask1 = createMask({
        destroyOnHide: true,
        appendTo: '#aMask',
        extraClass: 'a-mask'
      });

      mask1.show();
    };

    onMounted(function () {
      visible.value = false;
    });
    return {
      visible,

      createMask1,
      createMask2,
      createMask3,
      createMask4
    };
  }
});
</script>

<style lang="scss">
.bs-mask{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  &.fadeMask-enter-from,
  &.fadeMask-leave-to{
    opacity: 0;
  }
  &.fadeMask-enter-active,
  &.fadeMask-leave-active{
    transition: opacity .3s;
  }
  &.fadeMask-enter-to,
  &.fadeMask-leave-from{
    opacity: 1;
  }
}
</style>
