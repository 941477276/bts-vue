import BsTooltip from './BsTooltip.vue';
import { Plugin } from 'vue';

BsTooltip.install = function (vueApp: any) {
  vueApp.component(BsTooltip.name, BsTooltip);
  return vueApp;
};

export default BsTooltip as typeof BsTooltip & Plugin;
