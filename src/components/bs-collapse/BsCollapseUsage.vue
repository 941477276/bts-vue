<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>手风琴模式（每次只能打开一个面板）</h3>
      <AccordioMode></AccordioMode>
    </div>

    <div>
      <hr>
      <h3>简洁模式</h3>
      <SimpleMode></SimpleMode>
    </div>

    <div>
      <hr>
      <h3>自定义头部</h3>
      <Custom></Custom>
    </div>

    <div>
      <hr>
      <h3>嵌套</h3>
      <NestedCollapse></NestedCollapse>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import AccordioMode from './demos/accordio-mode.vue';
import SimpleMode from './demos/simple-mode.vue';
import Custom from './demos/custom.vue';
import NestedCollapse from './demos/nesting.vue';

export default defineComponent({
  name: 'BsCollapseUsage',
  components: {
    Basic,
    AccordioMode,
    SimpleMode,
    Custom,
    NestedCollapse
  },
  setup () {
    return {};
  }
});
</script>
