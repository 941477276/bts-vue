<template>
  <div class="component-usage">
    <header class="fixed-header">
      <h2>Drawer</h2>
    </header>
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>不同方向</h3>
      <Directions></Directions>
    </div>

    <bs-drawer
      v-model:visible="visible5"
      width="70%"
      title="抽屉弹窗">
      <p>这是一个自定义大小的弹窗，宽度为70%！</p>
    </bs-drawer>

    <div>
      <hr>
      <h3>异步关闭</h3>
      <AsyncClose></AsyncClose>
    </div>

    <div>
      <hr>
      <h3>弹窗嵌套</h3>
      <DrawerNesting></DrawerNesting>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import Directions from './demos/directions.vue';
import AsyncClose from './demos/async-close.vue';
import DrawerNesting from './demos/drawer-nesting.vue';

export default defineComponent({
  name: 'BsDrawerUsage',
  components: {
    Basic,
    Directions,
    AsyncClose,
    DrawerNesting
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  padding-top: 60px;
  min-height: 1000px;
}
.fixed-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
  text-align: right;
  background-color: #fff;
}
</style>
