<template>
  <div class="component-usage">
    <div>
      <h3>基础用法</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>不同方向</h3>
      <Placements></Placements>
    </div>

    <div>
      <hr>
      <h3>不同的触发方式</h3>
      <Trigger></Trigger>
    </div>

    <div>
      <hr>
      <h3>自定义内容</h3>
      <CustomContent></CustomContent>
    </div>

    <div>
      <hr>
      <h3>不同过度效果</h3>
      <PopoverTransition></PopoverTransition>
    </div>

    <div>
      <hr>
      <h3>受控模式</h3>
      <ControlledMode></ControlledMode>
    </div>

    <div>
      <hr>
      <h3>虚拟触发</h3>
      <VirtualTrigger></VirtualTrigger>
    </div>

    <div>
      <hr>
      <h3>Popper插入到指定dom元素中</h3>
      <Container></Container>
    </div>

    <div>
      <hr>
      <h3>隐藏即销毁</h3>
      <DestroyOnHide></DestroyOnHide>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted
} from 'vue';
import Basic from './demos/basic.vue';
import Placements from './demos/placements.vue';
import Trigger from './demos/trigger.vue';
import CustomContent from './demos/custom-content.vue';
import PopoverTransition from './demos/transition.vue';
import ControlledMode from './demos/controlled-mode.vue';
import VirtualTrigger from './demos/virtual-trigger.vue';
import Container from './demos/container.vue';
import DestroyOnHide from './demos/destroy-on-hide.vue';

export default defineComponent({
  name: 'bs-popoverUsage',
  components: {
    Basic,
    Placements,
    Trigger,
    CustomContent,
    PopoverTransition,
    ControlledMode,
    VirtualTrigger,
    Container,
    DestroyOnHide
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  min-height: 1500px;
  padding: 3% 10%;
}
</style>
