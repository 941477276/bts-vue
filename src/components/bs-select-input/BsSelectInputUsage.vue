<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <BsSelectInput
        :values="values1"></BsSelectInput>
    </div>
    <div>
      <hr>
      <h3>多选</h3>
      <BsSelectInput
        :values="values2"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        :loading="false"
        @tag-close="onTagClose2"></BsSelectInput>
    </div>

    <div>
      <hr>
      <h3>Loading</h3>
      <BsSelectInput
        :values="values1"
        loading
        style="margin-bottom: 1rem;"></BsSelectInput>
      <BsSelectInput
        :values="values2"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        :loading="true"
        @tag-close="onTagClose2"></BsSelectInput>
    </div>

    <div>
      <hr>
      <h3>自定义Tag内容</h3>
      <BsSelectInput
        :values="values2"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        :loading="false"
        style="margin-bottom: 1rem;"
        @tag-close="onTagClose2">
        <template #tag="tag">
          {{ tag.label }}
          <small style="color: #f00;" v-if="tag.value == 'html'">(超文本标记语言)</small>
          <small style="color: #f00;" v-if="tag.value == 'css'">(层叠样式表)</small>
          <small style="color: #f00;" v-if="tag.value == 'javascript'">(脚本语言)</small>
        </template>
      </BsSelectInput>
      <BsSelectInput
        :values="values2"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        :loading="false"
        :max-tag-count="3"
        @tag-close="onTagClose2">
        <template #maxTagPlaceholder="data">
          还有 <strong style="color: #f00;">{{ data.omittedCount }}</strong> 个Tag
        </template>
      </BsSelectInput>
    </div>

    <div>
      <hr>
      <h3>自定义标签样式</h3>
      <BsSelectInput
        :values="values3"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        @tag-close="onTagClose3"></BsSelectInput>
    </div>

    <div>
      <hr>
      <h3>标签禁用关闭</h3>
      <BsSelectInput
        :values="values4"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        @tag-close="onTagClose4"></BsSelectInput>
    </div>

    <div>
      <hr>
      <h3>不同大小</h3>
      <h6>大的</h6>
      <BsSelectInput
        :values="values5"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        size="lg"
        @tag-close="onTagClose4"></BsSelectInput>
      <h6 style="margin: 1rem 0;">中等的</h6>
      <BsSelectInput
        :values="values5"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        @tag-close="onTagClose4"></BsSelectInput>
      <h6 style="margin: 1rem 0;">小的</h6>
      <BsSelectInput
        :values="values5"
        :is-focus="false"
        :clearable="true"
        :multiple="true"
        :filterable="true"
        size="sm"
        @tag-close="onTagClose4"></BsSelectInput>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent
} from 'vue';
import BsSelectInput from './BsSelectInput.vue';

export default defineComponent({
  name: 'BsSelectInputUsage',
  components: {
    BsSelectInput
  },
  setup () {
    let values1 = ref([{ label: 'HTML', value: 'html' }]);
    let values2 = ref([
      { label: 'HTML', value: 'html' },
      { label: 'Css', value: 'css' },
      { label: 'Javascript', value: 'javascript' },
      { label: 'Vue.js', value: 'vue' },
      { label: 'React.js', value: 'react' }
    ]);
    let onTagClose2 = function (tag: any) {
      console.log('tag标签关闭事件');
      let index = values2.value.findIndex(item => item.value === tag.value);
      if (index > -1) {
        values2.value.splice(index, 1);
      }
    };

    let values3 = ref([
      { label: 'HTML', value: 'html', tagType: 'primary' },
      { label: 'Css', value: 'css' },
      { label: 'Javascript', value: 'javascript', tagType: 'success' },
      { label: 'Vue.js', value: 'vue', tagType: 'warning' },
      { label: 'React.js', value: 'react', tagType: 'danger' },
      { label: 'Angular.js', value: 'angular', tagClass: 'angular-tag' }
    ]);
    let onTagClose3 = function (tag: any) {
      console.log('tag标签关闭事件');
      let index = values3.value.findIndex(item => item.value === tag.value);
      if (index > -1) {
        values3.value.splice(index, 1);
      }
    };

    let values4 = ref([
      { label: 'HTML', value: 'html', disabled: true },
      { label: 'Css', value: 'css', disabled: true },
      { label: 'Javascript', value: 'javascript', disabled: true },
      { label: 'Vue.js', value: 'vue' },
      { label: 'React.js', value: 'react' },
      { label: 'Angular.js', value: 'angular' }
    ]);
    let values5 = ref([
      { label: 'HTML', value: 'html' }
      // { label: 'Css', value: 'css' }
      // { label: 'Vue.js', value: 'vue' },
      // { label: 'React.js', value: 'react' }
    ]);
    let onTagClose4 = function (tag: any) {
      console.log('tag标签关闭事件');
      let index = values4.value.findIndex(item => item.value === tag.value);
      if (index > -1) {
        values4.value.splice(index, 1);
      }
    };
    return {
      values1,
      values2,
      values3,
      values4,
      values5,

      onTagClose2,
      onTagClose3,
      onTagClose4
    };
  }
});
</script>

<style lang="scss" scoped>
.bs-select-input{
  max-width: 260px;
}
:deep(.angular-tag){
  border-color: #cd2f55;
  font-weight: bold;
  color: #fff;
  background-color: #C50030;
}
</style>
