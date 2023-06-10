<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>不同类型</h3>
      <Types></Types>
    </div>

    <div>
      <hr>
      <h3>自动更新间隔</h3>
      <Interval></Interval>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import Types from './demos/types.vue';
import Interval from './demos/interval.vue';

export default defineComponent({
  name: 'BsRelativeTimeUsage',
  components: {
    Basic,
    Types,
    Interval
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
ol li{
  list-style: decimal;
}
</style>
