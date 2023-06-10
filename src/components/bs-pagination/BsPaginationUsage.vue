<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>不同大小</h3>
      <Size></Size>
    </div>

    <div>
      <hr>
      <h3>禁用项</h3>
      <Disabled></Disabled>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive
} from 'vue';
import Basic from './demos/basic.vue';
import Size from './demos/size.vue';
import Disabled from './demos/disabled.vue';

export default defineComponent({
  name: 'BsPaginationUsage',
  components: {
    Basic,
    Size,
    Disabled
  },
  setup () {
    let pageData = reactive({
      total: 153,
      currentPage: 6,
      currentPage2: 1,
      pageSize: 10
    });
    return {
      pageData
    };
  }
});
</script>

<style lang="scss">
h1{
  margin: 30px 0 10px 0;
}
</style>
