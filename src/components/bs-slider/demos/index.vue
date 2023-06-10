<template>
<div class="demo-index">
  <Basic></Basic>
  <Vertical></Vertical>
  <Range></Range>
  <Step></Step>
  <Marks></Marks>
  <CustomTip></CustomTip>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Vertical from './veritcal.vue';
import Range from './range.vue';
import Step from './step.vue';
import Marks from './marks.vue';
import CustomTip from './custom-tip.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Vertical,
    Range,
    Step,
    Marks,
    CustomTip
  }
});
</script>
