<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>不同颜色</h3>
      <OtherColor></OtherColor>
    </div>

    <div>
      <hr>
      <h3>与按钮一起使用</h3>
      <WithButton></WithButton>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import OtherColor from './demos/other-color.vue';
import WithButton from './demos/with-button.vue';

export default defineComponent({
  name: 'BsSpinnerUsage',
  components: {
    Basic,
    OtherColor,
    WithButton
  },
  setup () {
    return {};
  }
});
</script>
