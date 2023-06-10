import {
  h
} from 'vue';
export default function InputText (props: any, ctx: any) {
  let tag = props.tag || 'span';
  return h(tag, {
    class: 'input-group-text',
    onClick (evt: MouseEvent) {
      ctx.emit('click', evt);
    }
  }, ctx.slots.default());
};

InputText.emits = ['click'];
InputText.props = ['tag'];
