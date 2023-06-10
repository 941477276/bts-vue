<template>
<div class="demo-index">
  <Basic></Basic>
  <Triggers></Triggers>
  <Aligns></Aligns>
  <AutoPlacement></AutoPlacement>
  <DestroyOnHide></DestroyOnHide>
  <CustomContent></CustomContent>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Triggers from './triggers.vue';
import Aligns from './aligns.vue';
import AutoPlacement from './auto-placement.vue';
import DestroyOnHide from './destroy-on-hide.vue';
import CustomContent from './custom-content.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Triggers,
    Aligns,
    AutoPlacement,
    DestroyOnHide,
    CustomContent
  }
});
</script>
