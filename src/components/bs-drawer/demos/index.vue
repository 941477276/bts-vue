<template>
<div class="demo-index">
  <Basic></Basic>
  <Directions></Directions>
  <AsyncClose></AsyncClose>
  <DrawerNesting></DrawerNesting>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Directions from './directions.vue';
import AsyncClose from './async-close.vue';
import DrawerNesting from './drawer-nesting.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Directions,
    AsyncClose,
    DrawerNesting
  }
});
</script>
