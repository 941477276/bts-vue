<template>
<div class="demo-index">
  <Basic></Basic>
  <InlineForm></InlineForm>
  <HorizontalForm></HorizontalForm>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import InlineForm from './inline-form.vue';
import HorizontalForm from './horizontal-form.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    InlineForm,
    HorizontalForm
  }
});
</script>
