import {
  App, Plugin
} from 'vue';
import { BsLoading } from './loading';
import { bsLoadingDirective } from './directive';

export default {
  install (vueApp: App) {
    vueApp.directive('bsloading', bsLoadingDirective);
    return vueApp;
  }
} as Plugin;
export { BsLoading };
