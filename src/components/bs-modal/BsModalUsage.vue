<template>
  <div class="component-usage">
    <header class="fixed-header">
      <h2>Modal</h2>
    </header>
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>可拖拽移动</h3>
      <Draggable></Draggable>
    </div>

    <div>
      <hr>
      <h3>不同大小</h3>
      <Sizes></Sizes>
    </div>

    <div>
      <hr>
      <h3>自定义弹窗</h3>
      <CustomModal></CustomModal>
    </div>

    <div>
      <hr>
      <h3>异步关闭</h3>
      <AsyncClose></AsyncClose>
    </div>

    <div>
      <hr>
      <h3>超长内容及滚动条</h3>
      <Scroll></Scroll>
    </div>

    <div>
      <hr>
      <h3>居中显示</h3>
      <Centered></Centered>
    </div>

    <div>
      <hr>
      <h3>弹窗嵌套</h3>
      <ModalNesting></ModalNesting>
    </div>

    <div>
      <hr>
      <h3>全屏弹窗</h3>
      <Fullscreen></Fullscreen>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue';
import Basic from './demos/basic.vue';
import Draggable from './demos/draggable.vue';
import Sizes from './demos/sizes.vue';
import CustomModal from './demos/custom-modal.vue';
import AsyncClose from './demos/async-close.vue';
import Scroll from './demos/scroll.vue';
import Centered from './demos/centered.vue';
import ModalNesting from './demos/modal-nesting.vue';
import Fullscreen from './demos/fullscreen.vue';

export default defineComponent({
  name: 'BsModalUsage',
  components: {
    Basic,
    Draggable,
    Sizes,
    CustomModal,
    AsyncClose,
    Scroll,
    Centered,
    ModalNesting,
    Fullscreen
  },
  setup () {
    let visible = ref(false);
    let visible1 = ref(false);
    let visible2 = ref(false);
    let visible3 = ref(false);
    let visible4 = ref(false);
    let visible5 = ref(false);
    let visible6 = ref(false);
    let visible7 = ref(false);
    let visible8 = ref(false);
    let visible9 = ref(false);
    let visible10 = ref(false);
    let visible11 = ref(false);
    let visible12 = ref(false);
    let visible13 = ref(false);
    let visible14 = ref(false);
    let visible15 = ref(false);
    let visible16 = ref(false);
    let draggable = ref(true);

    let closeDisabled11 = ref(false);
    let deleteUser = function () {
      if (closeDisabled11.value) {
        return;
      }
      closeDisabled11.value = true;
      return new Promise(function (resolve) {
        let timer = setTimeout(function () {
          clearTimeout(timer);
          closeDisabled11.value = false;
          // 如果这里resolve(false)则弹窗不会主动关闭
          // resolve(true);
          resolve(true);
        }, 3000);
      });
    };
    return {
      visible,
      visible1,
      visible2,
      visible3,
      visible4,
      visible5,
      visible6,
      visible7,
      visible8,
      visible9,
      visible10,
      visible11,
      visible12,
      visible13,
      visible14,
      visible15,
      visible16,
      draggable,

      closeDisabled11,

      deleteUser
    };
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  padding-top: 60px;
  min-height: 1000px;
}
.fixed-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
  text-align: right;
  background-color: #fff;
}
</style>
