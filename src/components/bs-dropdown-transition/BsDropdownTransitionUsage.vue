<template>
  <div class="component-usage">
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>自定义过渡名称</h3>
      <CustomTransition></CustomTransition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import CustomTransition from './demos/custom-transition.vue';

export default defineComponent({
  name: 'BsDropdownTransitionUsage',
  components: {
    Basic,
    CustomTransition
  },
  setup (props: any) {
    return {
    };
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  height: 2000px;
  padding-top: 5rem;
}
.fixed-header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  line-height: 60px;
  //padding: 0 20px;
  text-align: right;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  background-color: #fff;
}
.fixed-box{
  position: fixed;
  top: 40%;
  right: 10%;
  z-index: 15;
  padding: 1.2rem;
  box-shadow: 0 0 .6rem rgba(0,0,0,0.3);
  background-color: #fff;
  h3{
    margin-top: 0;
  }
}
</style>
