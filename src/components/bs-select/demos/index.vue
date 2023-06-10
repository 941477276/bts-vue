<template>
<div class="demo-index">
  <Basic></Basic>
  <Multiple></Multiple>
  <Group></Group>
  <Size></Size>
  <OptionSlot></OptionSlot>
  <Filterable></Filterable>
  <Disabled></Disabled>
  <Loading></Loading>
  <MultipleCustomTag></MultipleCustomTag>
  <MultipleTagLimit></MultipleTagLimit>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Multiple from './multiple.vue';
import Group from './group.vue';
import Size from './size.vue';
import OptionSlot from './option-slot.vue';
import Filterable from './filterable.vue';
import Disabled from './disabled.vue';
import Loading from './loading.vue';
import MultipleCustomTag from './multiple-custom-tag.vue';
import MultipleTagLimit from './multiple-tag-limit.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Multiple,
    Group,
    Size,
    OptionSlot,
    Filterable,
    Disabled,
    Loading,
    MultipleCustomTag,
    MultipleTagLimit
  }
});
</script>
