<template>
<div class="component-usage">
  <h3>默认效果</h3>
  <bs-checkbox-group v-model="checkboxGroupVal">
    <bs-checkbox checked value="yuwen">语文</bs-checkbox>
    <bs-checkbox value="shuxue">数学</bs-checkbox>
    <bs-checkbox value="yingyu">英语</bs-checkbox>
    <bs-checkbox disabled value="tiyu">体育</bs-checkbox>
    <bs-checkbox value="wuli">物理</bs-checkbox>
    <bs-checkbox readonly value="shengwu">生物</bs-checkbox>
  </bs-checkbox-group>

  <hr>
  <h3>限制最大选择4个选项</h3>
  <bs-checkbox-group v-model="checkboxGroupVal2" :max="4">
    <bs-checkbox checked value="yuwen">语文</bs-checkbox>
    <bs-checkbox value="shuxue">数学</bs-checkbox>
    <bs-checkbox value="yingyu">英语</bs-checkbox>
    <bs-checkbox value="tiyu">体育</bs-checkbox>
    <bs-checkbox value="wuli">物理</bs-checkbox>
    <bs-checkbox value="shengwu">生物</bs-checkbox>
  </bs-checkbox-group>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BsCheckboxGroupUsage',
  setup (props: any) {
    let checkboxGroupVal = ref([]);
    let checkboxGroupVal2 = ref('');
    return {
      checkboxGroupVal,
      checkboxGroupVal2
    };
  }
});
</script>

<style scoped>

</style>
