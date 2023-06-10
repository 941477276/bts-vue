<template>
<div class="demo-index">
  <Basic></Basic>
  <Vertical></Vertical>
  <Size></Size>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Vertical from './vertical.vue';
import Size from './size.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Vertical,
    Size
  }
});
</script>
