import BsInputTags from './BsInputTags.vue';
import { Plugin } from 'vue';

BsInputTags.install = function (vueApp: any) {
  vueApp.component(BsInputTags.name, BsInputTags);
  return vueApp;
};

export default BsInputTags as typeof BsInputTags & Plugin;
