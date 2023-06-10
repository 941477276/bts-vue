import BsSlider from './BsSlider.vue';
import { Plugin } from 'vue';

BsSlider.install = function (vueApp: any) {
  vueApp.component(BsSlider.name, BsSlider);

  return vueApp;
};

export default BsSlider as typeof BsSlider & Plugin;
