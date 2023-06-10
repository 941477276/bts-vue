<template>
<div class="demo-index">
  <Basic></Basic>
  <PillBadge></PillBadge>
  <DotCircleBadge></DotCircleBadge>
  <OtherTag></OtherTag>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import PillBadge from './pill-badge.vue';
import DotCircleBadge from './dot-circle-badge.vue';
import OtherTag from './other-tag.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    PillBadge,
    DotCircleBadge,
    OtherTag
  }
});
</script>
