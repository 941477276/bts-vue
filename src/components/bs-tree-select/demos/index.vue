<template>
<div class="demo-index">
  <Basic></Basic>
  <Multiple></Multiple>
  <AsyncData></AsyncData>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Multiple from './multiple.vue';
import AsyncData from './async-data.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Multiple,
    AsyncData
  }
});
</script>
