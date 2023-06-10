import BsDrawer from './BsDrawer.vue';
import { Plugin } from 'vue';

BsDrawer.install = function (vueApp: any) {
  vueApp.component(BsDrawer.name, BsDrawer);
  return vueApp;
};

export default BsDrawer as typeof BsDrawer & Plugin;
