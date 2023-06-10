<template>
<div class="component-usage">
  <div>
    <h3>基础用法</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>圆角与平角按钮</h3>
    <BorderRadius></BorderRadius>
  </div>

  <div>
    <hr>
    <h3>不同大小</h3>
    <Size></Size>
  </div>

  <div>
    <hr>
    <h3>块级按钮</h3>
    <Block></Block>
  </div>

  <div>
    <hr>
    <h3>禁用</h3>
    <Disabled></Disabled>
  </div>

  <div>
    <hr>
    <h3>加载中</h3>
    <Loading></Loading>
  </div>

  <div>
    <hr>
    <h3>其他标签</h3>
    <Other></Other>
  </div>

</div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import { supportedBsColorTypes } from '../types';
import Basic from './demos/basic.vue';
import BorderRadius from './demos/border-radius.vue';
import Size from './demos/size.vue';
import Block from './demos/block.vue';
import Disabled from './demos/disabled.vue';
import Loading from './demos/loading.vue';
import Other from './demos/other.vue';

export default defineComponent({
  name: 'BsButtonUsage',
  components: {
    Basic,
    BorderRadius,
    Size,
    Block,
    Disabled,
    Loading,
    Other
  },
  setup (props: any) {
    let onClick = function (evt: MouseEvent) {
      console.log(evt);
    };
    let btnTypes = ref([...supportedBsColorTypes]);
    return {
      onClick,
      btnTypes
    };
  }
});
</script>

<style lang="scss" scoped>
::v-deep(.bs-button) {
  margin-bottom: 1rem;
}
::v-deep(.bs-button + .bs-button:not(.btn-block)){
  margin-left: 1rem;
}
</style>
