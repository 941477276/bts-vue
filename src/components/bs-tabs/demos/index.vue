<template>
<div class="demo-index">
  <Basic></Basic>
  <Disabled></Disabled>
  <CustomTabHeader></CustomTabHeader>
  <Scroll></Scroll>
  <DifferentPlacement></DifferentPlacement>
  <DynamicAdd></DynamicAdd>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import CustomTabHeader from './custom-tab-header.vue';
import Scroll from './scroll.vue';
import DifferentPlacement from './different-placement.vue';
import DynamicAdd from './dynamic-add.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Disabled,
    CustomTabHeader,
    Scroll,
    DifferentPlacement,
    DynamicAdd
  }
});
</script>
