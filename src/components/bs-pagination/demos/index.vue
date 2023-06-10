<template>
<div class="demo-index">
  <Basic></Basic>
  <Size></Size>
  <Disabled></Disabled>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Size from './size.vue';
import Disabled from './disabled.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Size,
    Disabled
  }
});
</script>
