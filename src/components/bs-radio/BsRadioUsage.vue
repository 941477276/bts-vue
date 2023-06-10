<template>
<div class="component-usage">
  <div>
    <h2>基本使用</h2>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h2>禁用状态</h2>
    <Disabled></Disabled>
  </div>

  <div>
    <hr>
    <h2>不同类型的值</h2>
    <DifferentValues></DifferentValues>
  </div>

  <div>
    <hr>
    <h2>单选组合</h2>
    <Group></Group>
  </div>

  <div>
    <hr>
    <h2>单选组合(禁用)</h2>
    <GroupDisabled></GroupDisabled>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Basic from './demos/basic.vue';
import Disabled from './demos/disabled.vue';
import DifferentValues from './demos/different-values.vue';
import Group from './demos/group.vue';
import GroupDisabled from './demos/group-disabled.vue';

export default defineComponent({
  name: 'BsRadioUsage',
  components: {
    Basic,
    Disabled,
    DifferentValues,
    Group,
    GroupDisabled
  },
  setup (props: any) {
    let radioVal = ref('');
    let radioValNumber = ref(3);
    return {
      radioVal,
      radioValNumber
    };
  }
});
</script>

<style scoped>

</style>
