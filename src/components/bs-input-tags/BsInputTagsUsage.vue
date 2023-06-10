<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>限制个数</h3>
      <MaxCount></MaxCount>
    </div>

    <div>
      <hr>
      <h3>不同大小</h3>
      <Sizes></Sizes>
    </div>

    <div>
      <hr>
      <h3>自定义Tag</h3>
      <CustomTag></CustomTag>
    </div>

    <div>
      <hr>
      <h3>Tag显示数量限制</h3>
      <ViewTagLimit></ViewTagLimit>
    </div>

    <div>
      <hr>
      <h3>禁用</h3>
      <Disabled></Disabled>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import MaxCount from './demos/max-count.vue';
import Sizes from './demos/sizes.vue';
import CustomTag from './demos/custom-tag.vue';
import ViewTagLimit from './demos/view-tag-limit.vue';
import Disabled from './demos/disabled.vue';

export default defineComponent({
  name: 'BsInputTagsUsage',
  components: {
    // BsInputTags,
    Basic,
    MaxCount,
    Sizes,
    CustomTag,
    ViewTagLimit,
    Disabled
  },
  setup () {
    let values1 = ref([{ label: 'HTML', value: 'html' }]);
    let values2 = ref([
      { label: 'HTML', value: 'html', tagEffect: 'plain', tagType: 'primary' },
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
      { label: 'HTML', value: 'html', tagEffect: 'plain', tagType: 'primary' },
      { label: 'Css', value: 'css' },
      { label: 'Javascript', value: 'javascript' }
      // { label: 'Vue.js', value: 'vue' },
      // { label: 'React.js', value: 'react' }
    ]);
    let values6 = ref([
      { label: 'HTML', value: 'html' }
      // { label: 'Css', value: 'css' }
      // { label: 'Vue.js', value: 'vue' },
      // { label: 'React.js', value: 'react' }
    ]);
    let onTagClose4 = function (tag: any) {
      console.log('tag标签关闭事件');
      /* let index = values4.value.findIndex(item => item.value === tag.value);
      if (index > -1) {
        values4.value.splice(index, 1);
      } */
    };

    let verifyStatusRef = ref(null);
    return {
      values1,
      values2,
      values3,
      values4,
      values5,
      values6,
      verifyStatusRef,

      onTagClose2,
      onTagClose3,
      onTagClose4,
      onLimited () {
        alert('标签数量不能超过5个！');
      },

      setVerifyStatus (type: number) {
        (verifyStatusRef as any).value.setValidateStatus(type == 1 ? 'success' : 'error');
      }
    };
  }
});
</script>

<style lang="scss" scoped>
::v-deep(.bs-input-tags){
  max-width: 300px;
}
:deep(.angular-tag){
  border-color: #cd2f55;
  font-weight: bold;
  color: #fff;
  background-color: #C50030;
}
</style>
