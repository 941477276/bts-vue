<template>
<div class="component-usage">
  <div>
    <h2>基本使用</h2>
    <Basic></Basic>
  </div>

  <div>
    <hr>
    <h2>不同类型</h2>
    <DifferentTypes></DifferentTypes>
  </div>

  <div>
    <hr>
    <h2>弹窗样式</h2>
    <DialogStyle></DialogStyle>
  </div>

  <div>
    <hr>
    <h2>延迟关闭</h2>
    <AsyncClose></AsyncClose>
  </div>

  <div>
    <hr>
    <h2>自定义标题、图标、内容</h2>
    <Custom></Custom>
  </div>

  <div>
    <hr>
    <h2>居中显示</h2>
    <Centered></Centered>
  </div>

  <div>
    <hr>
    <h2>手动关闭</h2>
    <ManualClose></ManualClose>
  </div>

  <!--<div style="display: none;">
    <h2>基础样式</h2>
    <h4>1、UI样式</h4>
    <bs-message-box
      style="position: static;display: inline-block; padding: 30px; background-color: rgba(0,0,0,0.2);"
      title="温馨提示"
      message="一个消息盒子！">
      消息盒子内容！
    </bs-message-box>

    <hr>
    <h4>2、弹窗样式</h4>
    <bs-message-box
      style="position: static;display: inline-block; padding: 30px; background-color: rgba(0,0,0,0.2);"
      title="弹窗样式的温馨提示"
      :dialog-theme="true"
      :show-close="true">
      一个弹窗样式消息盒子！
    </bs-message-box>

    <hr>
    <h4>3、没有图标</h4>
    <bs-message-box
      style="position: static;display: inline-block; padding: 30px; background-color: rgba(0,0,0,0.2);"
      title="没有图标的消息盒子"
      :dialog-theme="true"
      :show-close="true"
      :show-icon="false">
      一个弹窗样式消息盒子！
    </bs-message-box>

    <hr>
    <h4>4、提交内容(prompt)</h4>
    <bs-message-box
      style="position: static;display: inline-block; padding: 30px; background-color: rgba(0,0,0,0.2);"
      title="没有图标的消息盒子"
      type="prompt"
      :input-rules="[
      {required: true, message: '请输入你的邮箱', whitespace: true, trigger: ['input', 'blur']},
      {pattern: /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/, message: '邮箱格式输入不正确', whitespace: true, trigger: ['input', 'blur']}
    ]"
      :ok-loading="false"
      input-label="你的邮箱"
      input-placeholder="请输入你的邮箱"
      :dialog-theme="false">
      一个弹窗样式消息盒子！
    </bs-message-box>
  </div>-->
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  h,
  onMounted,
  createVNode
} from 'vue';
// import BsMessageBoxCom from '@/components/bs-message-box/BsMessageBox.vue';
import Basic from './demos/basic.vue';
import DifferentTypes from './demos/different-types.vue';
import DialogStyle from './demos/dialog-style.vue';
import AsyncClose from './demos/async-close.vue';
import Custom from './demos/custom.vue';
import Centered from './demos/centered.vue';
import ManualClose from './demos/manual-close.vue';

export default defineComponent({
  name: 'BsMessageBoxUsage',
  components: {
    // BsMessageBox: BsMessageBoxCom
    Basic,
    DifferentTypes,
    DialogStyle,
    AsyncClose,
    Custom,
    Centered,
    ManualClose
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>

</style>
