import BsSwitch from './BsSwitch.vue';
import { Plugin } from 'vue';

BsSwitch.install = function (vueApp: any) {
  vueApp.component(BsSwitch.name, BsSwitch);
  return vueApp;
};

export default BsSwitch as typeof BsSwitch & Plugin;
