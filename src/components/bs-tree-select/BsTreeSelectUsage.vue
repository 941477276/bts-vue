<template>
  <div class="component-usage">
    <div>
      <h3 style="margin-top: 10rem;">基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>多选</h3>
      <Multiple></Multiple>
    </div>

    <div>
      <hr>
      <h3>异步加载数据</h3>
      <AsyncData></AsyncData>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Basic from './demos/basic.vue';
import Multiple from './demos/multiple.vue';
import AsyncData from './demos/async-data.vue';

export default defineComponent({
  name: 'BsTreeSelectUsage',
  components: {
    Basic,
    Multiple,
    AsyncData
  },
  setup (props: any) {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  padding: 100px 0;
}
::v-deep(.bs-tree-select) {
 max-width: 300px;
}
</style>
