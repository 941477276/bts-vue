<template>
<div class="component-usage">
  <div>
    <h3>基础用法</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>禁用某项</h3>
    <Disabled></Disabled>
  </div>

  <div>
    <hr>
    <h3>自定义标签页头</h3>
    <CustomTabHeader></CustomTabHeader>
  </div>

 <!-- <br>
  <hr>
  <h3>初始标签页为：[用户管理]</h3>
  <div style="max-width: 400px;">
    <bs-tabs v-model="tab2">
      <bs-tab-pane
        v-for="pane in panes"
        :key="pane.name"
        :label="pane.label"
        :name="pane.name"
        :disabled="pane.disabled">
        <ol v-if="pane.name === 'userManage'">
          <li v-for="item in 5" :key="item">用户{{ item }}</li>
        </ol>
        <p v-else>{{ pane.label }}</p>
      </bs-tab-pane>
    </bs-tabs>
  </div>-->

  <div>
    <hr>
    <h3>标签页长度超出父容器</h3>
    <Scroll></Scroll>
  </div>

  <div>
    <hr>
    <h3>不同方向</h3>
    <DifferentPlacement></DifferentPlacement>
  </div>

  <div>
    <hr>
    <h3>6、可新增/关闭标签页</h3>
    <DynamicAdd></DynamicAdd>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Basic from './demos/basic.vue';
import Disabled from './demos/disabled.vue';
import CustomTabHeader from './demos/custom-tab-header.vue';
import Scroll from './demos/scroll.vue';
import DifferentPlacement from './demos/different-placement.vue';
import DynamicAdd from './demos/dynamic-add.vue';

export default defineComponent({
  name: 'BsTagUsage',
  components: {
    Basic,
    Disabled,
    CustomTabHeader,
    Scroll,
    DifferentPlacement,
    DynamicAdd
  },
  setup (props: any) {
    return {
    };
  }
});
</script>

<style lang="scss" scoped>
.max-w-600{
  max-width: 600px;
}
.component-usage{
  max-width: 1200px;
  min-height: 1000px;
}
</style>
