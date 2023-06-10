<template>
<div class="demo-index">
  <Basic></Basic>
  <Disabled></Disabled>
  <DifferentValues></DifferentValues>
  <Group></Group>
  <GroupDisabled></GroupDisabled>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import DifferentValues from './different-values.vue';
import Group from './group.vue';
import GroupDisabled from './group-disabled.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Disabled,
    DifferentValues,
    Group,
    GroupDisabled
  }
});
</script>
