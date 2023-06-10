<script lang="ts">
import {
  defineComponent,
  h,
  inject
} from 'vue';

export default defineComponent({
  name: 'SelectInputTagSlot',
  props: {
    name: { // 插槽名称，从父组件中获取插槽时会使用到该name
      type: String,
      required: true,
      default: ''
    },
    bindData: { // 插槽绑定的数据
      default () {
        return {};
      }
    }
  },
  setup (props: any, ctx: any) {
    // 父组件上下文
    let parentCtx = inject('parentCtx', {});
    return function () {
      // 优先从父组件中获取插槽
      let slot = ((parentCtx as any).ctx || {}).slots?.[props.name];
      if (!slot) {
        slot = ctx.slots.default;
      }
      if (!slot) {
        return h('span', document.createComment('select-input-tag-slot'));
      }
      return slot(props.bindData);
    };
  }
});
</script>
