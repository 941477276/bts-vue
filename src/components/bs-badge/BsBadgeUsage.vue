<template>
<div class="component-usage">
  <div>
    <h3>基本使用</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>胶囊式徽章</h3>
    <PillBadge></PillBadge>
  </div>

  <div>
    <hr>
    <h3>圆点式徽章</h3>
    <DotCircleBadge></DotCircleBadge>
  </div>

  <div>
    <hr>
    <h3>其他标签</h3>
    <OtherTag></OtherTag>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './demos/basic.vue';
import PillBadge from './demos/pill-badge.vue';
import DotCircleBadge from './demos/dot-circle-badge.vue';
import OtherTag from './demos/other-tag.vue';

export default defineComponent({
  name: 'BsBadgeUsage',
  components: {
    Basic,
    PillBadge,
    DotCircleBadge,
    OtherTag
  }
});
</script>
