<template>
<div class="demo-index">
  <Basic></Basic>
  <OtherType></OtherType>
  <Placements></Placements>
  <Custom></Custom>
  <Static></Static>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import OtherType from './other-types.vue';
import Placements from './placemnts.vue';
import Custom from './custom.vue';
import Static from './static.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    OtherType,
    Placements,
    Custom,
    Static
  }
});
</script>
