<template>
<div class="demo-index">
  <Basic></Basic>
  <GlobalLoading></GlobalLoading>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import GlobalLoading from './global-loading.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    GlobalLoading
  }
});
</script>
