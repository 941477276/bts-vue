<script lang="ts">
import {
  defineComponent,
  h,
  inject
} from 'vue';
import {
  bsTreeContextKey,
  TreeContext
} from '../bs-tree-types';

export default defineComponent({
  name: 'BsTreeNodeSwitcherIcon',
  props: {
    nodeData: { // 节点数据
      type: Object,
      default () {
        return {};
      }
    },
    node: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  setup (props: any, ctx: any) {
    const treeCtx = inject<TreeContext>(bsTreeContextKey)!;
    return function () {
      if (!treeCtx.ctx.slots['switcher-icon']) {
        /* <i class="bs-tree-node-switcher-arrow" role="img">
          <svg class="switcher-arrow-svg" viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z"></path></svg>
        </i> */
        return h('i', {
          className: 'bs-tree-node-switcher-arrow',
          role: 'img',
          innerHTML: '<svg class="switcher-arrow-svg" viewBox="0 0 1024 1024" fill="currentColor" width="1em" height="1em"><path d="M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z"></path></svg>'
        });
      } else {
        return treeCtx.ctx.slots['switcher-icon']({
          data: props.nodeData,
          node: props.node
        });
      }
    };
  }
});
</script>
