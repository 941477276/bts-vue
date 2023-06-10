<template>
<div class="component-usage">
  <ul>
    <li>
      <h3>显示效果</h3>
      <div>
        <BsMessage
          :duration="0"
          style="display: inline-block; position: static;transform: translateX(0);"
          type="info"
          message="普通消息！"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          type="success"
          message="成功的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          type="warning"
          message="警告的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          type="danger"
          message="危险的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          :show-icon="false"
          type="info"
          message="不显示图标"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          :show-close="false"
          type="info"
          message="不显示关闭按钮"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
      <div>
        <BsMessage
          :duration="0"
          :grouping="true"
          :repeat-num="5"
          type="danger"
          message="合并相同内容的消息"
          style="display: inline-block; position: static;transform: translateX(0);margin-top: 20px;"></BsMessage>
      </div>
    </li>
    <li>
      <div>
        <h3>基本使用</h3>
        <Basic></Basic>
      </div>

      <div>
        <h3>其他类型</h3>
        <OtherTypes></OtherTypes>
      </div>

      <div>
        <h3>消息合并</h3>
        <MessageMerge></MessageMerge>
      </div>

      <div>
        <h3>永不消失的消息</h3>
        <ForeverMessage></ForeverMessage>
      </div>

      <div>
        <h3>自定义消息内容</h3>
        <CustomMessage></CustomMessage>
      </div>
    </li>
  </ul>
  <div id="message_test"></div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BsMessageCom from './BsMessage.vue';
import Basic from './demos/basic.vue';
import OtherTypes from './demos/other-types.vue';
import MessageMerge from './demos/message-merge.vue';
import ForeverMessage from './demos/forever-message.vue';
import CustomMessage from './demos/custom-content.vue';

export default defineComponent({
  name: 'BsMessageUsage',
  components: {
    BsMessage: BsMessageCom,
    Basic,
    OtherTypes,
    MessageMerge,
    ForeverMessage,
    CustomMessage
  },
  setup () {
    return {};
  }
});
</script>

<style lang="scss" scoped>
h3{
  margin: 20px 0 15px 0;
}
ul{
  display: flex;
  min-height: 100vh;
  li {
    &:nth-child(2){
      flex: 1;
      padding-left: 2rem;
    }
  }
}
</style>
