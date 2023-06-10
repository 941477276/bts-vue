<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>垂直的</h3>
      <Vertical></Vertical>
    </div>

    <div>
      <hr>
      <h3>不同大小</h3>
      <Size></Size>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import Vertical from './demos/vertical.vue';
import Size from './demos/size.vue';

export default defineComponent({
  name: 'BsButtonGroupUsage',
  components: {
    Basic,
    Vertical,
    Size
  }
});
</script>

<style lang="scss" scoped>

</style>
