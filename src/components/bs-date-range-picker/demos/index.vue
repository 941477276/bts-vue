<template>
<div class="demo-index">
  <Basic></Basic>
  <CustomCell></CustomCell>
  <Disabled></Disabled>
  <Formatter></Formatter>
  <Sidebar></Sidebar>
  <CustomTrigger></CustomTrigger>
  <PanelViewDate></PanelViewDate>
  <Size></Size>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import CustomCell from './custom-cell.vue';
import CustomTrigger from './custom-trigger.vue';
import Disabled from './disabled.vue';
import Formatter from './formatter.vue';
import Sidebar from './sidebar.vue';
import PanelViewDate from './panl-view-date.vue';
import Size from './size.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    CustomCell,
    CustomTrigger,
    Disabled,
    Formatter,
    Sidebar,
    PanelViewDate,
    Size
  }
});
</script>
