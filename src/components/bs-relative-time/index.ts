import { App, Plugin } from 'vue';
import BsRelativeTime from './BsRelativeTime.vue';

BsRelativeTime.install = function (vueApp: App) {
  vueApp.component(BsRelativeTime.name, BsRelativeTime);
  return vueApp;
};

export default BsRelativeTime as typeof BsRelativeTime & Plugin;
