import {
  App, Plugin
} from 'vue';
import BsConfigProvider from './BsConfigProvider';

BsConfigProvider.install = function (vueApp: App): App {
  vueApp.component(BsConfigProvider.name, BsConfigProvider);
  return vueApp;
};

export default BsConfigProvider as typeof BsConfigProvider  & Plugin;
