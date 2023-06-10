<template>
<div class="component-usage">
  <bs-radio-group v-model="inputGroupVal">
    <bs-radio value="yuwen">语文</bs-radio>
    <bs-radio value="shuxue">数学</bs-radio>
    <bs-radio value="yingyu">英语</bs-radio>
  </bs-radio-group>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BsRadioGroupUsage',
  setup (props: any) {
    let inputGroupVal = ref('yingyu');
    return {
      inputGroupVal
    };
  }
});
</script>

<style scoped>

</style>
