<template>
<div class="component-usage">
  <div>
    <h3>基本使用</h3>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h3>不同大小</h3>
    <Size></Size>
  </div>

  <div>
    <hr>
    <h3>可清空</h3>
    <Clearable></Clearable>
  </div>

  <div>
    <hr>
    <h3>密码输入框</h3>
    <Password></Password>
  </div>

  <div>
    <hr>
    <h3>前缀和后缀</h3>
    <PrefixAndSuffix></PrefixAndSuffix>
  </div>

  <div>
    <hr>
    <h3>复合型输入框</h3>
    <Slots></Slots>
  </div>

  <div>
    <hr>
    <h3>文本域</h3>
    <Textarea></Textarea>
  </div>

  <div>
    <hr>
    <h3>文本域——自动计算高度</h3>
    <TextareaAutoHeight></TextareaAutoHeight>
  </div>

  <div>
    <hr>
    <h3>字数限制</h3>
    <ShowTextCount></ShowTextCount>
  </div>

   <div>
    <hr>
    <h3>禁用和只读</h3>
    <DisabledAndReadonly></DisabledAndReadonly>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Basic from './demos/basic.vue';
import Size from './demos/size.vue';
import Clearable from './demos/clearable.vue';
import Password from './demos/password.vue';
import PrefixAndSuffix from './demos/prefix-and-suffix.vue';
import Slots from './demos/slots.vue';
import Textarea from './demos/textarea.vue';
import ShowTextCount from './demos/show-text-count.vue';
import TextareaAutoHeight from './demos/textarea-auto-height.vue';
import DisabledAndReadonly from './demos/disabled-and-readonly.vue';

export default defineComponent({
  name: 'BsInputUsage',
  components: {
    Basic,
    Size,
    Clearable,
    Password,
    PrefixAndSuffix,
    Slots,
    Textarea,
    ShowTextCount,
    DisabledAndReadonly,
    TextareaAutoHeight
  },
  setup (props: any) {
    let inputValue = ref('哈哈');
    let textareaVal = ref('文本框');
    return {
      inputValue,
      textareaVal
    };
  }
});
</script>

<style lang="scss" scoped>
::v-deep(.bs-input){
  max-width: 600px;
}
</style>
