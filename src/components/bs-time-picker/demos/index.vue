<template>
<div class="demo-index">
  <Basic></Basic>
  <Format></Format>
  <ChooseTime></ChooseTime>
  <Use12Hour></Use12Hour>
  <Disabled></Disabled>
  <Size></Size>
  <CustomTrigger></CustomTrigger>
  <ShowBottomButton></ShowBottomButton>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Format from './format.vue';
import ChooseTime from './choose-time.vue';
import Use12Hour from './use-12-hours.vue';
import Disabled from './disabled.vue';
import Size from './size.vue';
import CustomTrigger from './custom-trigger.vue';
import ShowBottomButton from './show-bottom-button.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Format,
    ChooseTime,
    Use12Hour,
    Disabled,
    Size,
    CustomTrigger,
    ShowBottomButton
  }
});
</script>
