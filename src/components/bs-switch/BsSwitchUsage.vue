<template>
<div class="component-usage">
  <div>
    <h3>基础用法</h3>
    <Basic></Basic>
  </div>
  
  <div>
    <hr>
    <h3>不同大小</h3>
    <Size></Size>
  </div>

  <div>
    <hr>
    <h3>禁用</h3>
    <Disabled></Disabled>
  </div>

  <div>
    <hr>
    <h3>加载状态</h3>
    <Loading></Loading>
  </div>

  <div>
    <hr>
    <h3>不同的颜色</h3>
    <Colors></Colors>
  </div>

  <div>
    <hr>
    <h3>改变状态前触发条件</h3>
    <BeforeSwitch></BeforeSwitch>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Basic from './demos/basic.vue';
import Size from './demos/size.vue';
import Disabled from './demos/disabled.vue';
import Loading from './demos/loading.vue';
import Colors from './demos/colors.vue';
import BeforeSwitch from './demos/before-switch.vue';

export default defineComponent({
  name: 'BsSwitchUsage',
  components: {
    Basic,
    Size,
    Disabled,
    Loading,
    Colors,
    BeforeSwitch
  },
  setup (props: any) {
    return {
    };
  }
});
</script>

<style lang="scss" scoped>
.bs-tag{
  margin-right: 10px;
}
</style>
