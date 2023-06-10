import {
  App, Plugin
} from 'vue';
import BsCascader from './BsCascader.vue';

BsCascader.install = function (vueApp: App) {
  vueApp.component(BsCascader.name, BsCascader);
  return vueApp;
};

export default BsCascader as typeof BsCascader  & Plugin;
