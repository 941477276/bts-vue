<template>
<div class="demo-index">
  <Basic></Basic>
  <Disabled></Disabled>
  <Ideterminate></Ideterminate>
  <TrueFalseValue></TrueFalseValue>
  <Group></Group>
  <GroupLimit></GroupLimit>
  <GroupDisabled></GroupDisabled>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import Ideterminate from './ideterminate.vue';
import TrueFalseValue from './true-false-value.vue';
import Group from './group.vue';
import GroupLimit from './group-limit.vue';
import GroupDisabled from './group-disabled.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Disabled,
    Ideterminate,
    TrueFalseValue,
    Group,
    GroupLimit,
    GroupDisabled
  }
});
</script>
