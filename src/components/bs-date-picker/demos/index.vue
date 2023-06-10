<template>
<div class="demo-index">
  <Basic></Basic>
  <DateTime></DateTime>
  <CustomCell></CustomCell>
  <Disabled></Disabled>
  <Sidebar></Sidebar>
  <PanelViewDate></PanelViewDate>
  <Size></Size>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import DateTime from './date-time.vue';
import CustomCell from './custom-cell.vue';
import Disabled from './disabled.vue';
import Sidebar from './sidebar.vue';
import PanelViewDate from './panl-view-date.vue';
import Size from './size.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    DateTime,
    CustomCell,
    Disabled,
    Sidebar,
    PanelViewDate,
    Size
  }
});
</script>
