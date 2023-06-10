import { App, Plugin } from 'vue';
import BsBackTop from './BsBackTop.vue';

BsBackTop.install = function (vueApp: App) {
  vueApp.component(BsBackTop.name, BsBackTop);
  return vueApp;
};

export default BsBackTop as typeof BsBackTop & Plugin;
