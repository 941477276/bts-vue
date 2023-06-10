<template>
<div class="demo-index">
  <Basic></Basic>
  <Closeable></Closeable>
  <AuxiliaryText></AuxiliaryText>
  <CustomCloseBtn></CustomCloseBtn>
  <WithIcon></WithIcon>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Closeable from './cloasable.vue';
import AuxiliaryText from './auxiliary-text.vue';
import CustomCloseBtn from './custom-close-btn.vue';
import WithIcon from './with-icon.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Closeable,
    AuxiliaryText,
    CustomCloseBtn,
    WithIcon
  }
});
</script>
