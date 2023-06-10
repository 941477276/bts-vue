<template>
<div class="demo-index">
  <Basic></Basic>
  <Types></Types>
  <Interval></Interval>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Types from './types.vue';
import Interval from './interval.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Types,
    Interval
  }
});
</script>
