<template>
<div class="demo-index">
  <Basic></Basic>
  <OtherTypes></OtherTypes>
  <MessageMerge></MessageMerge>
  <ForeverMessage></ForeverMessage>
  <CustomMessage></CustomMessage>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import OtherTypes from './other-types.vue';
import MessageMerge from './message-merge.vue';
import ForeverMessage from './forever-message.vue';
import CustomMessage from './custom-content.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    OtherTypes,
    MessageMerge,
    ForeverMessage,
    CustomMessage
  }
});
</script>
