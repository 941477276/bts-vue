<template>
<div class="demo-index">
  <Basic></Basic>
  <Size></Size>
  <Clearable></Clearable>
  <Password></Password>
  <PrefixAndSuffix></PrefixAndSuffix>
  <Slots></Slots>
  <Textarea></Textarea>
  <ShowTextCount></ShowTextCount>
  <DisabledAndReadonly></DisabledAndReadonly>
  <TextareaAutoHeight></TextareaAutoHeight>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Size from './size.vue';
import Clearable from './clearable.vue';
import Password from './password.vue';
import PrefixAndSuffix from './prefix-and-suffix.vue';
import Slots from './slots.vue';
import Textarea from './textarea.vue';
import ShowTextCount from './show-text-count.vue';
import TextareaAutoHeight from './textarea-auto-height.vue';
import DisabledAndReadonly from './disabled-and-readonly.vue';

export default defineComponent({
  name: 'DemoIndex',
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
  }
});
</script>
