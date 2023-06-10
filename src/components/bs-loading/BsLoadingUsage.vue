<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>全局加载</h3>
      <GlobalLoading></GlobalLoading>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import GlobalLoading from './demos/global-loading.vue';

export default defineComponent({
  name: 'BsLoadingUsage',
  components: {
    Basic,
    GlobalLoading
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
 min-height: 1200px;
}
.container1{
  //position: relative;
  max-width: 1200px;
  padding: 1rem;
  height: 100px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
