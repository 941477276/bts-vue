<template>
<div class="demo-index">
  <Basic></Basic>
  <HighPrecision></HighPrecision>
  <Size></Size>
  <Step></Step>
  <Formatter></Formatter>
  <PrefixAndSuffix></PrefixAndSuffix>
  <DisabledAndReadonly></DisabledAndReadonly>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import HighPrecision from './high-precision.vue';
import Size from './size.vue';
import Step from './step.vue';
import Formatter from './formatter.vue';
import PrefixAndSuffix from './prefix-and-suffix.vue';
import DisabledAndReadonly from './disabled-and-readonly.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    HighPrecision,
    Size,
    Step,
    Formatter,
    PrefixAndSuffix,
    DisabledAndReadonly
  }
});
</script>
