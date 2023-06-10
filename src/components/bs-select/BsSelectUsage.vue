<template>
<div class="component-usage">
  <div>
    <h3 style="margin-top: 200px;margin-bottom: 15px;">基本使用</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>多选</h3>
    <Multiple></Multiple>
  </div>

  <div>
    <hr>
    <h3>分组</h3>
    <Group></Group>
  </div>

  <div>
    <hr>
    <h3>不同尺寸</h3>
    <Size></Size>
  </div>

  <div>
    <hr>
    <h3>自定义模板</h3>
    <OptionSlot></OptionSlot>
  </div>

  <div>
    <hr>
    <h3>可搜索</h3>
    <Filterable></Filterable>
  </div>

  <div>
    <hr>
    <h3>禁用</h3>
    <Disabled></Disabled>
  </div>

  <div>
    <hr>
    <h3>异步加载</h3>
    <Loading></Loading>
  </div>

  <div>
    <hr>
    <h3>自定义Tag内容</h3>
    <MultipleCustomTag></MultipleCustomTag>
  </div>

  <div>
    <hr>
    <h3 style="margin: 0.5rem 0 1rem 0;">溢出Tag</h3>
    <MultipleTagLimit></MultipleTagLimit>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { SelectOptionContextItem } from './bs-select-types';
import Basic from './demos/basic.vue';
import Multiple from './demos/multiple.vue';
import Group from './demos/group.vue';
import Size from './demos/size.vue';
import OptionSlot from './demos/option-slot.vue';
import Filterable from './demos/filterable.vue';
import Disabled from './demos/disabled.vue';
import Loading from './demos/loading.vue';
import MultipleCustomTag from './demos/multiple-custom-tag.vue';
import MultipleTagLimit from './demos/multiple-tag-limit.vue';

export default defineComponent({
  name: 'BsSelectUsage',
  components: {
    Basic,
    Multiple,
    Group,
    Size,
    OptionSlot,
    Filterable,
    Disabled,
    Loading,
    MultipleCustomTag,
    MultipleTagLimit
  },
  setup (props: any) {
    let show = ref(true);
    let selectVal = ref('');
    let selectVals = ref([]);

    let options1 = ref([
      { value: 'a', label: '第1个选项' },
      {
        label: '组1',
        options: [
          { value: 'group-value1', label: '组1第1个选项' },
          { value: 'group-value2', label: '组1第2个选项' }
        ]
      },
      { value: 'b', label: '第2个选项' },
      { value: 3, label: '第3个选项，值为number类型' },
      { value: 4, label: '第4个选项，值为number类型' },
      { value: '5', label: '禁用的', disabled: true },
      { value: '6', label: '未被禁用的' }
    ]);

    let onMultipleLimit = function (limitCount: number) {
      alert(`最多只能选择${limitCount}项！`);
    };

    let selectVal2 = ref('');
    let selectVal3 = ref(['javascript']);

    let selectVal4 = ref('');
    let selectVal9 = ref(['html', 'javascript']);
    let options4 = ref<SelectOptionContextItem[]>([]);
    let loading4 = ref(true);
    let loadData4 = function () {
      loading4.value = true;
      let timer = setTimeout(function () {
        clearTimeout(timer);
        loading4.value = false;
        options4.value = [
          { id: '1', label: 'Html', value: 'html' },
          { id: '2', label: 'Css', value: 'css' },
          { id: '3', label: 'Javascript', value: 'javascript' },
          { id: '4', label: 'Vue', value: 'vue' }
        ];
      }, 1500);
    };

    let selectVal5 = ref('html');
    let selectVal6 = ref(['html', 'javascript']);
    let selectVal7 = ref(['html', 'javascript', 'css', 'vue', 'react']);

    let selectVal8 = ref(['html', 'javascript', 'css', 'vue', 'react']);

    let options10 = ref([
      { id: '1', label: 'Html', value: 'html' },
      { id: '2', label: 'Css', value: 'css' },
      { id: '3', label: 'Javascript', value: 'javascript' }
    ]);
    let addOption10 = function () {
      let optionLen = options10.value.length + 1;
      options10.value.push({
        id: optionLen + '',
        label: 'Item_' + optionLen,
        value: 'Value_' + optionLen
      });
    };

    return {
      show,
      selectVal,
      selectVals,
      options1,
      onMultipleLimit,

      selectVal2,
      selectVal3,

      selectVal4,
      selectVal9,
      options4,
      loading4,
      loadData4,

      selectVal5,
      selectVal6,
      selectVal7,
      selectVal8,

      options10,
      addOption10
    };
  }
});
</script>

<style lang="scss" scoped>
::v-deep(.bs-select),
.bs-select{
  //width: auto;
  max-width: 260px;
}
:deep(.react-tag){
  border-color: #61DAFB!important;
  background-color: #61DAFB!important;
  color: #fff!important;
}
.custom-option-content{
  overflow: hidden;
  small{
    float: right;
    color: #999;
  }
}
</style>
