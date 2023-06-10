<template>
<div class="demo-index">
  <Basic></Basic>
  <MultipleCheck></MultipleCheck>
  <SingleCheck></SingleCheck>
  <Paging></Paging>
  <CustomContent></CustomContent>
  <Filterable></Filterable>
  <AsyncLoad></AsyncLoad>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import MultipleCheck from './multiple-check.vue';
import SingleCheck from './single-check.vue';
import Paging from './paging.vue';
import CustomContent from './custom-content.vue';
import Filterable from './filterable.vue';
import AsyncLoad from './async-load.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    MultipleCheck,
    SingleCheck,
    Paging,
    CustomContent,
    Filterable,
    AsyncLoad
  }
});
</script>
