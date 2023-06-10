<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <h3>行内表单</h3>
      <InlineForm></InlineForm>
    </div>

    <div>
      <h3>垂直表单</h3>
      <HorizontalForm></HorizontalForm>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './demos/basic.vue';
import InlineForm from './demos/inline-form.vue';
import HorizontalForm from './demos/horizontal-form.vue';

export default defineComponent({
  name: 'BsFormUsage',
  components: {
    Basic,
    InlineForm,
    HorizontalForm
  },
  setup (props: any) {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  max-width: 600px;
}
</style>
