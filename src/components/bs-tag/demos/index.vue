<template>
<div class="demo-index">
  <Basic></Basic>
  <DifferentTheme></DifferentTheme>
  <Size></Size>
  <Closeable></Closeable>
  <AsyncClose></AsyncClose>
  <DynamicAdd></DynamicAdd>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import DifferentTheme from './different-theme.vue';
import Size from './size.vue';
import Closeable from './closable.vue';
import AsyncClose from './async-close.vue';
import DynamicAdd from './dynamic-add.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    DifferentTheme,
    Size,
    Closeable,
    AsyncClose,
    DynamicAdd
  }
});
</script>
