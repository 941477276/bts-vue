<template>
<div class="demo-index">
  <Basic></Basic>
  <CustomTransition></CustomTransition>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import CustomTransition from './custom-transition.vue';


export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    CustomTransition
  }
});
</script>
