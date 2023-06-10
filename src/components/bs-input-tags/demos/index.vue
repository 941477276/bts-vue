<template>
<div class="demo-index">
  <Basic></Basic>
  <MaxCount></MaxCount>
  <Sizes></Sizes>
  <CustomTag></CustomTag>
  <ViewTagLimit></ViewTagLimit>
  <Disabled></Disabled>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import MaxCount from './max-count.vue';
import Sizes from './sizes.vue';
import CustomTag from './custom-tag.vue';
import ViewTagLimit from './view-tag-limit.vue';
import Disabled from './disabled.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    MaxCount,
    Sizes,
    CustomTag,
    ViewTagLimit,
    Disabled
  }
});
</script>
