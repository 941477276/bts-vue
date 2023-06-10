<template>
<div class="component-usage">
  <h3>默认使用</h3>
  <Basic></Basic>

  <div>
    <hr>
    <h3>禁用状态</h3>
    <Disabled></Disabled>
  </div>

  <div>
    <hr>
    <h3>不确定状态</h3>
    <Ideterminate></Ideterminate>
  </div>

  <div>
    <hr>
    <h3>选中或未选中时的值</h3>
    <TrueFalseValue></TrueFalseValue>
  </div>

  <div>
    <hr>
    <h3>复选框组</h3>
    <Group></Group>
  </div>

  <div>
    <hr>
    <h3>可选项数量限制</h3>
    <GroupLimit></GroupLimit>
  </div>
  <div>
    <hr>
    <h3>复选框组——禁用</h3>
    <GroupDisabled></GroupDisabled>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import Basic from './demos/basic.vue';
import Disabled from './demos/disabled.vue';
import Ideterminate from './demos/ideterminate.vue';
import TrueFalseValue from './demos/true-false-value.vue';
import Group from './demos/group.vue';
import GroupLimit from './demos/group-limit.vue';
import GroupDisabled from './demos/group-disabled.vue';

export default defineComponent({
  name: 'BsCheckboxUsage',
  components: {
    Basic,
    Disabled,
    Ideterminate,
    TrueFalseValue,
    Group,
    GroupLimit,
    GroupDisabled
  },
  setup (props: any) {
    let checkboxVal = ref('');
    let checkboxVal2 = ref([]);
    let checkboxVal3 = ref(1);
    let checkboxVal4 = ref(0);
    let checkboxVal5 = ref(0);

    let checkAll = ref(false);
    let language = ref(['Javascript']);
    let isIndeterminate = computed(function () {
      // return true;
      return language.value.length != 0 && language.value.length != 3;
    });
    watch(language, function () {
      checkAll.value = language.value.length == 3;
    });
    return {
      checkboxVal,
      checkboxVal2,
      checkboxVal3,
      checkboxVal4,
      checkboxVal5,
      checkAll,
      language,
      isIndeterminate
    };
  }
});
</script>

<style scoped>

</style>
