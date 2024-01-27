import BsDropdown from './BsDropdown.vue';
import BsDropdownItem from './widgets/BsDropdownItem.vue';
import { Plugin } from 'vue';

BsDropdown.install = function (vueApp: any) {
  vueApp.component(BsDropdown.name, BsDropdown);
  vueApp.component(BsDropdownItem.name, BsDropdownItem);
  return vueApp;
};

export default BsDropdown as typeof BsDropdown & Plugin;
