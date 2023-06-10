<template>
  <div class="component-usage">
    <div>
      <hr>
      <h3>水平菜单</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>垂直菜单(折叠展开子菜单)</h3>
      <Vertical></Vertical>
    </div>

    <div>
      <hr>
      <h3>垂直菜单(手风琴式菜单)</h3>
      <VerticalUniqueOpened></VerticalUniqueOpened>
    </div>

    <div>
      <hr>
      <h3>垂直菜单(收起菜单)</h3>
      <CollapseMenu></CollapseMenu>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import Basic from './demos/horizontal.vue';
import Vertical from './demos/vertical.vue';
import VerticalUniqueOpened from './demos/vertical-unique-opened.vue';
import CollapseMenu from './demos/collapse-menu.vue';

export default defineComponent({
  name: 'BsMenuUsage',
  components: {
    // BsSubMenu,
    // BsMenu,
    Basic,
    Vertical,
    VerticalUniqueOpened,
    CollapseMenu
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss">
@import "./test-usage-assets/fonts/iconfont.css";
</style>

<style lang="scss" scoped>
::v-deep(.bs-menu-vertical),
.bs-menu-vertical{
  width: 300px;
}
</style>
