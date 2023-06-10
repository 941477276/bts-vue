<template>
<div class="demo-index">
  <Basic></Basic>
  <Placements></Placements>
  <Trigger></Trigger>
  <Theme></Theme>
  <CustomContent></CustomContent>
  <TooltipTransition></TooltipTransition>
  <ControlledMode></ControlledMode>
  <VirtualTrigger></VirtualTrigger>
  <Container></Container>
  <DestroyOnHide></DestroyOnHide>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Placements from './placements.vue';
import Trigger from './trigger.vue';
import Theme from './theme.vue';
import CustomContent from './custom-content.vue';
import TooltipTransition from './transition.vue';
import ControlledMode from './controlled-mode.vue';
import VirtualTrigger from './virtual-trigger.vue';
import Container from './container.vue';
import DestroyOnHide from './destroy-on-hide.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    Placements,
    Trigger,
    Theme,
    CustomContent,
    TooltipTransition,
    ControlledMode,
    VirtualTrigger,
    Container,
    DestroyOnHide
  }
});
</script>
