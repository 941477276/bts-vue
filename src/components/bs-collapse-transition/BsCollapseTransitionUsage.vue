<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';

export default defineComponent({
  name: 'BsCollapseUsage',
  components: {
    Basic
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  padding: 2rem;
}
</style>
