<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>多选</h3>
      <MultipleCheck></MultipleCheck>
    </div>

    <div>
      <hr>
      <h3>单选</h3>
      <SingleCheck></SingleCheck>
    </div>

    <div>
      <hr>
      <h3>分页</h3>
      <Paging></Paging>
    </div>

    <div>
      <hr>
      <h3>自定义内容</h3>
      <CustomContent></CustomContent>
    </div>

    <div>
      <hr>
      <h3>节点过滤</h3>
      <Filterable></Filterable>
    </div>

    <div>
      <hr>
      <h3>动态加载</h3>
      <AsyncLoad></AsyncLoad>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Basic from './demos/basic.vue';
import MultipleCheck from './demos/multiple-check.vue';
import SingleCheck from './demos/single-check.vue';
import Paging from './demos/paging.vue';
import CustomContent from './demos/custom-content.vue';
import Filterable from './demos/filterable.vue';
import AsyncLoad from './demos/async-load.vue';

export default defineComponent({
  name: 'BsTreeUsage',
  components: {
    Basic,
    MultipleCheck,
    SingleCheck,
    Paging,
    CustomContent,
    Filterable,
    AsyncLoad
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>

</style>
