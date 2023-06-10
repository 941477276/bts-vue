import type { Plugin } from 'vue';
import BsAlert from './BsAlert.vue';

BsAlert.install = function (vueApp: any) {
  vueApp.component(BsAlert.name, BsAlert);
  return vueApp;
};

export default BsAlert as typeof BsAlert & Plugin;
