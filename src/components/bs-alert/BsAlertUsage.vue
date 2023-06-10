<template>
  <div class="component-usage">
    <div>
      <h3>基础用法</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>可关闭</h3>
      <Closeable></Closeable>
    </div>

    <div>
      <hr>
      <h3>辅助性文字</h3>
      <AuxiliaryText></AuxiliaryText>
    </div>

    <div>
      <hr>
      <h3>自定义关闭按钮</h3>
      <CustomCloseBtn></CustomCloseBtn>
    </div>

    <div>
      <hr>
      <h3>带图标</h3>
      <WithIcon></WithIcon>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import Closeable from './demos/cloasable.vue';
import AuxiliaryText from './demos/auxiliary-text.vue';
import CustomCloseBtn from './demos/custom-close-btn.vue';
import WithIcon from './demos/with-icon.vue';

export default defineComponent({
  name: 'BsAlertUsage',
  components: {
    Basic,
    Closeable,
    AuxiliaryText,
    CustomCloseBtn,
    WithIcon
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  max-width: 600px;
}
</style>
