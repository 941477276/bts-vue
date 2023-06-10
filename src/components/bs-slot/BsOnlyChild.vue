<script lang="ts">
import {
  defineComponent,
  cloneVNode,
  h,
  Comment,
  Text,
  Fragment,
  VNode,
  inject,
  withDirectives
} from 'vue';
import {
  isObject,
  NOOP
} from '@vue/shared';
import {
  ForwardRefContext,
  useForwardRefDirective,
  forwardRefKey
} from '../../hooks/useForwardRef';

/**
 * 获取第一个类型为元素的节点
 * @param node
 */
function findFirstLegitChild (node: VNode[] | undefined): VNode | null {
  if (!node) {
    return null;
  }
  for (let child of node) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment: // 注释节点
          continue;
        case Text: // 文本节点
          return wrapTextContent(child);
        case Fragment: // 文档碎片
          return findFirstLegitChild(child.children as VNode[]);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
};

/**
 * 将文本进行包装，这样元素才可以绑定事件
 * @param content
 */
function wrapTextContent (content: string | VNode) {
  return h('span', {
    'class': 'bs-only-child-wrap'
  }, content);
}

/**
 * 组件作用：将外部传递进来的dom元素、文本、svg标签包裹成dom元素
 */
export default defineComponent({
  name: 'BsOnlyChild',
  setup (props: any, ctx: any) {
    let forwardRefInjection = inject<ForwardRefContext>(forwardRefKey, {
      setForwardRef: NOOP
    });
    // 获取更新forward ref的指令，以更新父级的forwardRef变量
    const forwardRefDirective = useForwardRefDirective(forwardRefInjection.setForwardRef);

    return () => {
      // 将默认插槽里的组件渲染成dom元素
      let defaultSlot = ctx.slots.default?.(ctx.attrs);
      if (!defaultSlot) {
        return null;
      }
      // 获取插槽里的第一个节点元素（非文本、注释、属性元素）
      let firstChild = findFirstLegitChild(defaultSlot);
      if (!firstChild) {
        return null;
      }
      return withDirectives(cloneVNode(firstChild), [
        [forwardRefDirective]
      ]);
    };
  }
});
</script>
