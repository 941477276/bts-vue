import BsModal from './BsModal.vue';
import { Plugin } from 'vue';

BsModal.install = function (vueApp: any) {
  vueApp.component(BsModal.name, BsModal);
  return vueApp;
};

export default BsModal as typeof BsModal & Plugin;
