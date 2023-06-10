<template>
<div class="demo-index">
  <Basic></Basic>
  <InContainer></InContainer>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import InContainer from './in-container.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    InContainer
  }
});
</script>
