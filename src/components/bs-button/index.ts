import { Plugin } from 'vue';
import BsButton from './BsButton.vue';

BsButton.install = function (vueApp: any) {
  vueApp.component(BsButton.name, BsButton);
  return vueApp;
};

export default BsButton as typeof BsButton & Plugin;
