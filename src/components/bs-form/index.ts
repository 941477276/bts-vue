import BsForm from './BsForm.vue';
import BsFormItem from './widgets/BsFormItem.vue';
import { Plugin } from 'vue';

BsForm.install = function (vueApp: any) {
  vueApp.component(BsForm.name, BsForm);
  vueApp.component(BsFormItem.name, BsFormItem);
  return vueApp;
};

export default BsForm as typeof BsForm & Plugin;
