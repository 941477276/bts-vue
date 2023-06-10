<template>
<div class="demo-index">
  <Basic></Basic>
  <OtherColor></OtherColor>
  <WithButton></WithButton>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import OtherColor from './other-color.vue';
import WithButton from './with-button.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    OtherColor,
    WithButton
  }
});
</script>
