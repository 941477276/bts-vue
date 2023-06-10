<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>在DOM容器内</h3>
      <InContainer></InContainer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import InContainer from './demos/in-container.vue';

export default defineComponent({
  name: 'BsBackTopUsage',
  components: {
    Basic,
    InContainer
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  min-height: 1800px;
}
</style>
