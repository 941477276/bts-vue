import BsSelectInput from './BsSelectInput.vue';

BsSelectInput.install = function (vueApp: any) {
  vueApp.component(BsSelectInput.name, BsSelectInput);
  return vueApp;
};

export default BsSelectInput;
