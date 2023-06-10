<template>
<div class="demo-index">
  <Basic></Basic>
  <DifferentTypes></DifferentTypes>
  <DialogStyle></DialogStyle>
  <AsyncClose></AsyncClose>
  <Custom></Custom>
  <Centered></Centered>
  <ManualClose></ManualClose>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import DifferentTypes from './different-types.vue';
import DialogStyle from './dialog-style.vue';
import AsyncClose from './async-close.vue';
import Custom from './custom.vue';
import Centered from './centered.vue';
import ManualClose from './manual-close.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    DifferentTypes,
    DialogStyle,
    AsyncClose,
    Custom,
    Centered,
    ManualClose
  }
});
</script>
