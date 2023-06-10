<template>
<div class="component-usage">
  <div>
    <h3>基本使用</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>不同类型</h3>
    <OtherType></OtherType>
  </div>

  <div>
    <hr>
    <h3>不同显示位置</h3>
    <Placements></Placements>
  </div>

  <div>
    <hr>
    <h3>自定义内容</h3>
    <Custom></Custom>
  </div>

  <div>
    <hr>
    <h3>静态的</h3>
    <Static></Static>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';

import Basic from './demos/basic.vue';
import OtherType from './demos/other-types.vue';
import Placements from './demos/placemnts.vue';
import Custom from './demos/custom.vue';
import Static from './demos/static.vue';
export default defineComponent({
  name: 'BsToastUsage',
  components: {
    // BsToastCom,
    Basic,
    OtherType,
    Placements,
    Custom,
    Static
  },
  setup (props: any) {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.bs-button + .bs-button{
  margin-left: 1rem;
}
.static-toast-container{
  padding: 20px;
  height: 180px;
  max-width: 600px;
  background-color: #343A40;
}
</style>
