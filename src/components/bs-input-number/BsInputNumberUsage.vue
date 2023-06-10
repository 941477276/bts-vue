<template>
<div class="component-usage">
  <div>
    <h3>基础用法</h3>
    <Basic></Basic>
  </div>

  <div class="bs-input-number3">
    <hr>
    <h3>高精度小数</h3>
    <HighPrecision></HighPrecision>
  </div>

  <div>
    <hr>
    <h3>不同大小</h3>
    <Size></Size>
  </div>

  <div>
    <hr>
    <h3>不同步长</h3>
    <Step></Step>
  </div>

  <div>
    <hr>
    <h3>格式化展示</h3>
    <Formatter></Formatter>
  </div>

  <div>
    <hr>
    <h3>添加前缀、后缀</h3>
    <PrefixAndSuffix></PrefixAndSuffix>
  </div>

  <div>
    <hr>
    <h3>只读、禁用</h3>
    <DisabledAndReadonly></DisabledAndReadonly>
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Basic from './demos/basic.vue';
import HighPrecision from './demos/high-precision.vue';
import Size from './demos/size.vue';
import Step from './demos/step.vue';
import Formatter from './demos/formatter.vue';
import PrefixAndSuffix from './demos/prefix-and-suffix.vue';
import DisabledAndReadonly from './demos/disabled-and-readonly.vue';

export default defineComponent({
  name: 'BsInputNumberUsage',
  components: {
    Basic,
    HighPrecision,
    Size,
    Step,
    Formatter,
    PrefixAndSuffix,
    DisabledAndReadonly
  },
  setup (props: any) {
    return {};
  }
});
</script>
