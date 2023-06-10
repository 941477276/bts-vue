import BsPopover from './BsPopover.vue';
import { Plugin } from 'vue';

BsPopover.install = function (vueApp: any) {
  vueApp.component(BsPopover.name, BsPopover);
  return vueApp;
};

export default BsPopover as typeof BsPopover & Plugin;
