<template>
<div class="demo-index">
  <Basic></Basic>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic
  }
});
</script>
