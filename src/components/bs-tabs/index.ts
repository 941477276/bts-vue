import BsTabs from './BsTabs.vue';
import BsTabPane from './widgets/BsTabPane.vue';
import { Plugin } from 'vue';

BsTabs.install = function (vueApp: any) {
  vueApp.component(BsTabs.name, BsTabs);
  vueApp.component(BsTabPane.name, BsTabPane);
  return vueApp;
};

export default BsTabs as typeof BsTabs & Plugin;
