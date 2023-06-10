<template>
<div class="demo-index">
  <Basic></Basic>
  <Size></Size>
  <Disabled></Disabled>
  <Loading></Loading>
  <Colors></Colors>
  <BeforeSwitch></BeforeSwitch>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Size from './size.vue';
import Disabled from './disabled.vue';
import Loading from './loading.vue';
import Colors from './colors.vue';
import BeforeSwitch from './before-switch.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Size,
    Disabled,
    Loading,
    Colors,
    BeforeSwitch
  }
});
</script>
