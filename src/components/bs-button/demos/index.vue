<template>
<div class="demo-index">
  <Basic></Basic>
  <BorderRadius></BorderRadius>
  <Size></Size>
  <Block></Block>
  <Disabled></Disabled>
  <Loading></Loading>
  <Other></Other>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import BorderRadius from './border-radius.vue';
import Size from './size.vue';
import Block from './block.vue';
import Disabled from './disabled.vue';
import Loading from './loading.vue';
import Other from './other.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    BorderRadius,
    Size,
    Block,
    Disabled,
    Loading,
    Other
  }
});
</script>
