<template>
<div class="demo-index">
  <Basic></Basic>
  <CustomSplitor></CustomSplitor>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import CustomSplitor from './custom-splitor.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    CustomSplitor
  }
});
</script>
