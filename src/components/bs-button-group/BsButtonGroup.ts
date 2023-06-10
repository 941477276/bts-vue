import {
  h
} from 'vue';

const arrowSize = ['sm', 'lg'];
const buttonGroupPrefix = 'btn-group';
export function BsButtonGroup (props: any, ctx: any) {
  let className = ['bs-button-group'];
  let vertical = props.vertical;
  if (typeof vertical != 'undefined' && (vertical !== false && vertical !== 0)) {
    vertical = true;
  } else {
    vertical = false;
  }
  if (vertical) {
    className.push(`${buttonGroupPrefix}-vertical`);
  } else {
    className.push(buttonGroupPrefix);
  }
  let size = props.size;
  if (arrowSize.includes(size)) {
    className.push(`${buttonGroupPrefix}-${size}`);
  }
  return h('div', {
    className: className.join(' '),
    role: 'group'
  }, ctx.slots.default?.());
};
BsButtonGroup.props = ['size', 'vertical'];
