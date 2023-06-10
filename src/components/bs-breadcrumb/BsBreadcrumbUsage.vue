<template>
  <div class="component-usage">
    <div>
      <h3>基础用法</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>自定义分隔符</h3>
      <CustomSplitor></CustomSplitor>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';
import Basic from './demos/basic.vue';
import CustomSplitor from './demos/custom-splitor.vue';
export default defineComponent({
  name: 'BsBreadcrumbUsage',
  components: {
    Basic,
    CustomSplitor
  },
  setup () {
    let show = ref(true);

    setTimeout(function () {
      show.value = false;
    }, 1500);

    return {
      show
    };
  }
});
</script>

<style lang="scss">

</style>
