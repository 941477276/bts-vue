<template>
<div class="component-usage">
  <div>
    <h3>基本使用</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>垂直模式</h3>
    <div>
      <Vertical></Vertical>
    </div>
  </div>

  <div>
    <hr>
    <h3>区间</h3>
    <Range></Range>
  </div>

  <div>
    <hr>
    <h3>显示间断点（step=10）</h3>
    <Step></Step>
  </div>

  <div>
    <hr>
    <h3>显示标记</h3>
    <Marks></Marks>
  </div>

  <div>
    <hr>
    <h3>自定义提示</h3>
    <CustomTip></CustomTip>
  </div>

</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  h
} from 'vue';
import Basic from './demos/basic.vue';
import Vertical from './demos/veritcal.vue';
import Range from './demos/range.vue';
import Step from './demos/step.vue';
import Marks from './demos/marks.vue';
import CustomTip from './demos/custom-tip.vue';

export default defineComponent({
  name: 'BsSliderUsage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Basic,
    Vertical,
    Range,
    Step,
    Marks,
    CustomTip
  },
  setup (props: any) {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.max-w-600{
  max-width: 600px;
}
.component-usage{
  padding-top: 150px;
  //max-width: 600px;
  min-height: 1200px;
}
</style>
