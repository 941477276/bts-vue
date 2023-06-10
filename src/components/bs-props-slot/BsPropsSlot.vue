<!-- 组件作用：渲染从props传递过来的任何内容 -->
<script lang="ts">
import {
  defineComponent,
  isVNode,
  createVNode,
  h
} from 'vue';

export default defineComponent({
  name: 'BsPropsSlot',
  props: ['content'],
  setup (props: any, ctx: any) {
    return function () {
      let defaultSlot = ctx.slots.default;
      let content = props.content;
      if (!defaultSlot) {
        let contentType = typeof content;
        if (contentType == 'string' || contentType == 'number') {
          defaultSlot = () => content;
        } else if (contentType == 'function') {
          defaultSlot = content;
        } else if (isVNode(content)) {
          defaultSlot = () => content;
        } else {
          defaultSlot = () => h('span', document.createComment('no-props-slot'));
        }
      }

      return defaultSlot(ctx.$attrs);
    };
  }
});
</script>
