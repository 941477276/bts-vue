import {
  h
} from 'vue';
function BsCascaderMenuItemLabel (props: any, ctx: any) {
  let slotContent;
  let cascaderLabelSlot = props.cascaderSlots.label;
  if (cascaderLabelSlot) {
    slotContent = cascaderLabelSlot;
  } else {
    slotContent = ctx.slots.default;
  }
  return h('div', {
    className: 'bs-cascader-menu-item-label'
  }, slotContent(props.optionItem));
};

BsCascaderMenuItemLabel.props = ['cascaderSlots', 'optionItem'];

export default BsCascaderMenuItemLabel;
