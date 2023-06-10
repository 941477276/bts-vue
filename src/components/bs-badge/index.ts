import BsBadge from './BsBadge.vue';
import { Plugin } from 'vue';

BsBadge.install = function (vueApp: any) {
  vueApp.component(BsBadge.name, BsBadge);
  return vueApp;
};

export default BsBadge as typeof BsBadge & Plugin;
