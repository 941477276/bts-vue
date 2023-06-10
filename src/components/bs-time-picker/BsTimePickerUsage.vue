<template>
  <div class="component-usage">
    <div style="margin-top: 1rem;">
      <hr>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>
    <div>
      <hr>
      <h3>格式化</h3>
      <Format></Format>
    </div>
    <div>
      <hr>
      <h3>选择时分</h3>
      <ChooseTime></ChooseTime>
    </div>
    <div style="margin-top: 1rem;">
      <hr>
      <h3>12小时制</h3>
      <Use12Hour></Use12Hour>
    </div>
    <div style="margin-top: 1rem;">
      <hr>
      <h3>禁用</h3>
      <Disabled></Disabled>
    </div>
    <div style="margin-top: 1rem;">
      <hr>
      <h3>不同大小</h3>
      <Size></Size>
    </div>
    <div style="margin-top: 1rem;">
      <hr>
      <h3>自定义触发</h3>
      <CustomTrigger></CustomTrigger>
    </div>
    <div style="margin-top: 1rem;">
      <hr>
      <h3>显示底部按钮</h3>
      <ShowBottomButton></ShowBottomButton>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  watch,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import Format from './demos/format.vue';
import ChooseTime from './demos/choose-time.vue';
import Use12Hour from './demos/use-12-hours.vue';
import Disabled from './demos/disabled.vue';
import Size from './demos/size.vue';
import CustomTrigger from './demos/custom-trigger.vue';
import ShowBottomButton from './demos/show-bottom-button.vue';

export default defineComponent({
  name: 'BsTimePickerUsage',
  components: {
    Basic,
    Format,
    ChooseTime,
    Use12Hour,
    Disabled,
    Size,
    CustomTrigger,
    ShowBottomButton
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  padding: 1rem 0;
}
.bs-date-editor{
  //max-width: 200px;
}
</style>
