<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
      <!--<BsCascader
        v-model="cascader1"
        :multiple="true"
        :show-all-levels="true"
        :options="dataOptions1"
        expand-trigger="hover"
        clearable
        :emit-path="true"
        name="aaa"
        :check-strictly="false"></BsCascader>
      <div>{{ cascader1 }}</div>
      <bs-button type="primary" @click="removeLastCheckedItem">移除最后一个选中项</bs-button>
      <bs-button type="primary" style="margin-left: 1rem;" @click="addCheckedItem">添加一个选中项</bs-button>-->
    </div>

    <div>
      <hr>
      <h3>多选</h3>
      <Multiple></Multiple>
    </div>

    <div>
      <hr>
      <h3>仅显示最后一级</h3>
      <ShowLastLevelOnly></ShowLastLevelOnly>
    </div>

    <div>
      <hr>
      <h3>懒加载</h3>
      <LazyLoad></LazyLoad>
    </div>

    <div>
      <hr>
      <h3>自定义节点内容</h3>
      <CustomContent></CustomContent>
    </div>

    <div>
      <hr>
      <h3>禁用</h3>
      <Disabled></Disabled>
    </div>

    <div>
      <hr>
      <h3>Loading与无数据</h3>
      <LoadingAndEmpty></LoadingAndEmpty>
    </div>

    <div>
      <hr>
      <h3>自定义Tag</h3>
      <CustomTag></CustomTag>
    </div>

    <div>
      <hr>
      <h3>自定义触发</h3>
      <CustomTrigger></CustomTrigger>
    </div>

    <div>
      <hr>
      <h3>不同大小</h3>
      <Size></Size>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import Multiple from './demos/multiple.vue';
import ShowLastLevelOnly from './demos/show-last-level-only.vue';
import LazyLoad from './demos/lazy-load.vue';
import CustomContent from './demos/custom-content.vue';
import Disabled from './demos/disabled.vue';
import LoadingAndEmpty from './demos/loading-and-empty.vue';
import CustomTag from './demos/custom-tag.vue';
import CustomTrigger from './demos/custom-trigger.vue';
import Size from './demos/size.vue';

export default defineComponent({
  name: 'BsCascaderUsage',
  components: {
    Basic,
    Multiple,
    ShowLastLevelOnly,
    LazyLoad,
    CustomContent,
    Disabled,
    LoadingAndEmpty,
    CustomTag,
    CustomTrigger,
    Size
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
::v-deep(.bs-cascader),
.bs-cascader{
  max-width: 360px;
}
</style>
