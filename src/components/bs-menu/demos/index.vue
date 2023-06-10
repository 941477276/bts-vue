<template>
<div class="demo-index">
  <Horizontal></Horizontal>
  <Vertical></Vertical>
  <VerticalUniqueOpened></VerticalUniqueOpened>
  <CollapseMenu></CollapseMenu>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Horizontal from './horizontal.vue';
import Vertical from './vertical.vue';
import VerticalUniqueOpened from './vertical-unique-opened.vue';
import CollapseMenu from './collapse-menu.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Horizontal,
    Vertical,
    VerticalUniqueOpened,
    CollapseMenu
  }
});
</script>
