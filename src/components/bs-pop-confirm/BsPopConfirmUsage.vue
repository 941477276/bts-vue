<template>
  <div class="component-usage">
    <div>
      <h3>基础用法</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>自定义内容</h3>
      <CustomContent></CustomContent>
    </div>

    <div>
      <hr>
      <h3>受控模式</h3>
      <ControlledConfirm></ControlledConfirm>
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
import CustomContent from './demos/custom-content.vue';
import ControlledConfirm from './demos/controlled-mode.vue';

export default defineComponent({
  name: 'BsPopConfirmUsage',
  components: {
    Basic,
    CustomContent,
    ControlledConfirm
  },
  setup () {
    let visible1 = ref(false);

    let rawContent = `
      <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的popover！</h6>
      <p>
        我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>HTML文本</strong></mark>的popover！
      </p>`;

    let onConfirm1 = function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(true);
        }, 3000);
      });
    };

    return {
      visible1,
      rawContent,

      onConfirm1
    };
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  min-height: 1500px;
  padding: 3% 10%;
}
.directions-box{
  max-width: 600px;
}
.direction-top,
.direction-bottom{
  text-align: center;
  .bs-button{
    & + .bs-button{
      margin-left: 25px;
    }
  }
}
.direction-left-right{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
}
.direction-left,
.direction-right{
  .bs-button{
    display: block;
    & + .bs-button{
      margin-top: 25px;
    }
  }
}
.popover-container{
  height: 60px;
  line-height: 60px;
  max-width: 600px;
  margin-bottom: 20px;
  color: #f00;
  text-align: center;
  background-color: rgba(64,158, 255, 0.5);
  ::v-deep .bs-pop-confirm{
    line-height: 1.5;
    color: #f00;
    font-size: 14px;
  }
}
</style>
