<template>
  <div class="component-usage">
    <div>
      <!--<bs-button type="primary" id="aBtn">一个按钮</bs-button>-->
      <h3>基本使用</h3>
      <BsPopper>
        <BsPopperTrigger>
          <bs-button type="primary" v-if="triggerElType == 1">一个按钮</bs-button>
          <mark v-if="triggerElType == 2">一个按钮</mark>
        </BsPopperTrigger>
        <BsPopperContent
          popper-class="bs-popper">
          我是一个 <strong>Popper</strong>内容 !

          <BsPopperArrow></BsPopperArrow>
        </BsPopperContent>
      </BsPopper>
      <!--<bs-button @click="setTriggerEl(1)">切换trigger为bs-button元素</bs-button>
      <bs-button @click="setTriggerEl(2)">切换trigger为mark元素</bs-button>
      <bs-button @click="setTriggerEl(0)">销毁trigger</bs-button>-->
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import BsPopper from './BsPopper.vue';
import BsPopperTrigger from './BsPopperTrigger.vue';
import BsPopperContent from './BsPopperContent.vue';
import BsPopperArrow from './BsPopperArrow.vue';

export default defineComponent({
  name: 'BsPopperUsage',
  components: {
    BsPopper,
    BsPopperTrigger,
    BsPopperContent,
    BsPopperArrow
  },
  setup () {
    let triggerElType = ref(1);
    let setTriggerEl = function (type: number) {
      triggerElType.value = type;
    };
    return {
      triggerElType,
      setTriggerEl
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
