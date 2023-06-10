<template>
<div class="component-usage">

  <div>
    <h3>基础用法</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>不同主题</h3>
    <DifferentTheme></DifferentTheme>
  </div>

  <div>
    <hr>
    <h3>不同大小</h3>
    <Size></Size>
  </div>

  <div>
    <hr>
    <h3>可关闭</h3>
    <Closeable></Closeable>
  </div>

  <div>
    <hr>
    <h3>异步关闭</h3>
    <AsyncClose></AsyncClose>
  </div>

  <div>
    <hr>
    <h3>动态添加</h3>
    <DynamicAdd></DynamicAdd>
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Basic from './demos/basic.vue';
import DifferentTheme from './demos/different-theme.vue';
import Size from './demos/size.vue';
import Closeable from './demos/closable.vue';
import AsyncClose from './demos/async-close.vue';
import DynamicAdd from './demos/dynamic-add.vue';

export default defineComponent({
  name: 'BsTagUsage',
  components: {
    Basic,
    DifferentTheme,
    Size,
    Closeable,
    AsyncClose,
    DynamicAdd
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
.async-close-tag{
  .bs-spinner{
    width: 1.1em;
    height: 1.1em;
    border-width: 1px;
    margin-right: 0.25rem;
  }
}
</style>
