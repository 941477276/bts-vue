<template>
<div class="demo-index">
  <Basic></Basic>
  <Multiple></Multiple>
  <ShowLastLevelOnly></ShowLastLevelOnly>
  <LazyLoad></LazyLoad>
  <CustomContent></CustomContent>
  <Disabled></Disabled>
  <LoadingAndEmpty></LoadingAndEmpty>
  <CustomTag></CustomTag>
  <CustomTrigger></CustomTrigger>
  <Size></Size>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Multiple from './multiple.vue';
import ShowLastLevelOnly from './show-last-level-only.vue';
import LazyLoad from './lazy-load.vue';
import CustomContent from './custom-content.vue';
import Disabled from './disabled.vue';
import LoadingAndEmpty from './loading-and-empty.vue';
import CustomTag from './custom-tag.vue';
import CustomTrigger from './custom-trigger.vue';
import Size from './size.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Multiple,
    ShowLastLevelOnly,
    LazyLoad,
    CustomContent,
    Disabled,
    LoadingAndEmpty,
    CustomTag,
    CustomTrigger,
    Size
  }
});
</script>
