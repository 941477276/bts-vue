<template>
<div class="demo-index">
  <Basic></Basic>
  <AccordioMode></AccordioMode>
  <SimpleMode></SimpleMode>
  <Custom></Custom>
  <NestedCollapse></NestedCollapse>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import AccordioMode from './accordio-mode.vue';
import SimpleMode from './simple-mode.vue';
import Custom from './custom.vue';
import NestedCollapse from './nesting.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    AccordioMode,
    SimpleMode,
    Custom,
    NestedCollapse
  }
});
</script>
