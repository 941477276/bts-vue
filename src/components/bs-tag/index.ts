import BsTag from './BsTag.vue';
import { Plugin } from 'vue';

BsTag.install = function (vueApp: any) {
  vueApp.component(BsTag.name, BsTag);
  return vueApp;
};

export default BsTag as typeof BsTag & Plugin;
