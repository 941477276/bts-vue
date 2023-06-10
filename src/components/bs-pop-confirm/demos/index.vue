<template>
<div class="demo-index">
  <Basic></Basic>
  <CustomContent></CustomContent>
  <ControlledConfirm></ControlledConfirm>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import CustomContent from './custom-content.vue';
import ControlledConfirm from './controlled-mode.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    CustomContent,
    ControlledConfirm
  }
});
</script>
