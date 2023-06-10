<template>
  <bs-config-provider size="sm">
    <!--<div class="box">
      <BsButtonUsage></BsButtonUsage>
    </div>-->
    <!--<div class="box">
      <BsButtonGroupUsage></BsButtonGroupUsage>
    </div>-->
    <!--<div class="box">
      <BsInputUsage></BsInputUsage>
    </div>-->
    <!--<div class="box">
      <BsRadioUsage></BsRadioUsage>
    </div>-->
    <!--<div class="box">
      <BsRadioGroupUsage></BsRadioGroupUsage>
    </div>-->
    <!--<div class="box">
      <BsCheckboxUsage></BsCheckboxUsage>
    </div>-->
    <!--<div class="box">
      <BsCheckboxGroupUsage></BsCheckboxGroupUsage>
    </div>-->
    <!--<div class="box">
      <BsSelectUsage></BsSelectUsage>
    </div>-->
    <!--<div class="box">
      <BsFormUsage></BsFormUsage>
    </div>-->
    <!--<div class="box">
      <BsDropdownUsage></BsDropdownUsage>
    </div>-->
    <!--<div class="box">
      <BsDropdownTransitionUsage></BsDropdownTransitionUsage>
    </div>-->
    <!--<router-view></router-view>-->
    <!--<div class="box">
      <BsPaginationUsage></BsPaginationUsage>
    </div>-->
    <!--<div class="box">
      <BsBadgeUsage></BsBadgeUsage>
    </div>-->
    <!--<div class="box">
      <BsMessageUsage></BsMessageUsage>
    </div>-->
    <!--<div class="box">
      <BsBreadcrumbUsage></BsBreadcrumbUsage>
    </div>-->
    <!--<div class="box">
      <BsTagUsage></BsTagUsage>
    </div>-->
    <!--<div class="box">
      <BsProgressUsage></BsProgressUsage>
    </div>-->
    <!--<div class="box">
      <BsTabsUsage></BsTabsUsage>
    </div>-->
    <!--<div class="box">
      <BsSwitchUsage></BsSwitchUsage>
    </div>-->
    <!--<div class="box">
      <BsMessageBoxUsage></BsMessageBoxUsage>
    </div>-->
    <!--<div class="box">
      <BsMaskUsage></BsMaskUsage>
    </div>-->
    <!--<div class="box">
      <BsAlertUsage></BsAlertUsage>
    </div>-->
    <!--<div class="box">
      <BsInputNumberUsage></BsInputNumberUsage>
    </div>-->
    <!--<div class="box">
      <BsPopperUsage></BsPopperUsage>
    </div>-->
    <!--<div class="box">
      <BsTooltipUsage></BsTooltipUsage>
    </div>-->
    <!--<div class="box">
      <BsSliderUsage></BsSliderUsage>
    </div>-->
    <!--<div class="box">
      <BsModalUsage></BsModalUsage>
    </div>-->
    <!--<div class="box">
      <BsDrawerUsage></BsDrawerUsage>
    </div>-->
    <!--<div class="box">
      <BsPopoverUsage></BsPopoverUsage>
    </div>-->
    <!--<div class="box">
      <BsSpinnerUsage></BsSpinnerUsage>
    </div>-->
    <!--<div class="box">
      <BsPopConfirmUsage></BsPopConfirmUsage>
    </div>-->
    <!--<div class="box">
      <BsCollapseUsage></BsCollapseUsage>
    </div>-->
    <!--<div class="box">
      <BsTreeUsage></BsTreeUsage>
    </div>-->
    <!--<div class="box">
      <BsTreeSelectUsage></BsTreeSelectUsage>
    </div>-->
    <!--<div class="box">
      <BsInputTagsUsage></BsInputTagsUsage>
    </div>-->
    <!--<div class="box">
      <BsSelectInputUsage></BsSelectInputUsage>
    </div>-->
    <!--<div class="box">
      <BsTimePickerUsage></BsTimePickerUsage>
    </div>-->
    <!--<div class="box">
      <BsDatePickerUsage></BsDatePickerUsage>
    </div>-->
    <!--<div class="box">
      <BsBackTopUsage></BsBackTopUsage>
    </div>-->
    <!--<div class="box">
      <BsRelativeTimeUsage></BsRelativeTimeUsage>
    </div>-->
    <!--<div class="box">
      <BsLoadingUsage></BsLoadingUsage>
    </div>-->
    <!--<div class="box">
      <BsCascaderUsage></BsCascaderUsage>
    </div>-->
    <!--<div class="box">
      <BsToastUsage></BsToastUsage>
    </div>-->
    <!--<div class="box">
      <BsMenuUsage></BsMenuUsage>
    </div>-->
    <!--<BsCollapseTransitionUsage></BsCollapseTransitionUsage>-->
    <div class="box">
      <BsTableUsage></BsTableUsage>
    </div>
  </bs-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, ref, reactive } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import AsyncValidatorUsage from './components/AsyncValidatorUsage.vue';
import BsFormUsage from '@/components/bs-form/BsFormUsage.vue';
import BsButtonUsage from '@/components/bs-button/BsButtonUsage.vue';
import BsButtonGroupUsage from '@/components/bs-button-group/BsButtonGroupUsage.vue';
import BsInputUsage from '@/components/bs-input/BsInputUsage.vue';
import BsRadioUsage from '@/components/bs-radio/BsRadioUsage.vue';
import BsRadioGroupUsage from '@/components/bs-radio-group/BsRadioGroupUsage.vue';
import BsCheckboxUsage from '@/components/bs-checkbox/BsCheckboxUsage.vue';
import BsCheckboxGroupUsage from '@/components/bs-checkbox-group/BsCheckboxGroupUsage.vue';
import BsSelectUsage from '@/components/bs-select/BsSelectUsage.vue';
import BsDropdownUsage from '@/components/bs-dropdown/BsDropdownUsage.vue';
import BsDropdownTransitionUsage from '@/components/bs-dropdown-transition/BsDropdownTransitionUsage.vue';
import BsPaginationUsage from '@/components/bs-pagination/BsPaginationUsage.vue';
import BsBadgeUsage from '@/components/bs-badge/BsBadgeUsage.vue';
import BsMessageUsage from '@/components/bs-message/BsMessageUsage.vue';
import BsBreadcrumbUsage from '@/components/bs-breadcrumb/BsBreadcrumbUsage.vue';
import BsTagUsage from '@/components/bs-tag/BsTagUsage.vue';
import BsProgressUsage from '@/components/bs-progress/BsProgressUsage.vue';
import BsTabsUsage from '@/components/bs-tabs/BsTabsUsage.vue';
import BsSwitchUsage from '@/components/bs-switch/BsSwitchUsage.vue';
import BsMessageBoxUsage from '@/components/bs-message-box/BsMessageBoxUsage.vue';
import BsMaskUsage from '@/components/bs-mask/BsMaskUsage.vue';
import BsAlertUsage from '@/components/bs-alert/BsAlertUsage.vue';
import BsInputNumberUsage from '@/components/bs-input-number/BsInputNumberUsage.vue';
import BsPopperUsage from '@/components/bs-popper/BsPopperUsage.vue';
import BsTooltipUsage from '@/components/bs-tooltip/BsTooltipUsage.vue';
import BsSliderUsage from '@/components/bs-slider/BsSliderUsage.vue';
import BsModalUsage from '@/components/bs-modal/BsModalUsage.vue';
import BsDrawerUsage from '@/components/bs-drawer/BsDrawerUsage.vue';
import BsPopoverUsage from '@/components/bs-popover/BsPopoverUsage.vue';
import BsSpinnerUsage from '@/components/bs-spinner/BsSpinnerUsage.vue';
import BsPopConfirmUsage from '@/components/bs-pop-confirm/BsPopConfirmUsage.vue';
import BsCollapseUsage from '@/components/bs-collapse/BsCollapseUsage.vue';
import BsCollapseTransitionUsage from '@/components/bs-collapse-transition/BsCollapseTransitionUsage.vue';
import BsTreeUsage from '@/components/bs-tree/BsTreeUsage.vue';
import BsTreeSelectUsage from '@/components/bs-tree-select/BsTreeSelectUsage.vue';
import BsInputTagsUsage from '@/components/bs-input-tags/BsInputTagsUsage.vue';
import BsSelectInputUsage from '@/components/bs-select-input/BsSelectInputUsage.vue';
import BsTimePickerUsage from '@/components/bs-time-picker/BsTimePickerUsage.vue';
import BsDatePickerUsage from '@/components/bs-date-picker/BsDatePickerUsage.vue';
import BsBackTopUsage from '@/components/bs-backtop/BsBackTopUsage.vue';
import BsRelativeTimeUsage from '@/components/bs-relative-time/BsRelativeTimeUsage.vue';
import BsLoadingUsage from '@/components/bs-loading/BsLoadingUsage.vue';
import BsCascaderUsage from '@/components/bs-cascader/BsCascaderUsage.vue';
import BsToastUsage from '@/components/bs-toast/BsToastUsage.vue';
import BsMenuUsage from '@/components/bs-menu/BsMenuUsage.vue';
import BsTableUsage from '@/components/bs-table/BsTableUsage.vue';

export default defineComponent({
  name: 'App',
  /* eslint-disable */
  components: {
    // HelloWorld
    // AsyncValidatorUsage,
    BsFormUsage,
    BsButtonUsage,
    BsButtonGroupUsage,
    BsInputUsage,
    BsRadioUsage,
    BsRadioGroupUsage,
    BsCheckboxUsage,
    BsCheckboxGroupUsage,
    BsSelectUsage,
    BsDropdownUsage,
    BsDropdownTransitionUsage,
    BsPaginationUsage,
    BsBadgeUsage,
    BsMessageUsage,
    BsBreadcrumbUsage,
    BsTagUsage,
    BsProgressUsage,
    BsTabsUsage,
    BsSwitchUsage,
    BsMessageBoxUsage,
    BsMaskUsage,
    BsAlertUsage,
    BsInputNumberUsage,
    BsPopperUsage,
    BsTooltipUsage,
    BsSliderUsage,
    BsModalUsage,
    BsDrawerUsage,
    BsPopoverUsage,
    BsSpinnerUsage,
    BsPopConfirmUsage,
    BsCollapseUsage,
    BsCollapseTransitionUsage,
    BsTreeUsage,
    BsTreeSelectUsage,
    BsInputTagsUsage,
    BsSelectInputUsage,
    BsTimePickerUsage,
    BsDatePickerUsage,
    BsBackTopUsage,
    BsRelativeTimeUsage,
    BsLoadingUsage,
    BsCascaderUsage,
    BsToastUsage,
    BsMenuUsage,
    BsTableUsage
  },
  setup () {
    return {

    };
  }
});
</script>

<style lang="scss">
/*body{
  height: 2000px;
}*/
.box{
  padding: 20px;
}
.component-usage{
  h1,
  h2,
  h3,
  h4,
  /*h5,*/
  h6{
    margin-bottom: 1.5rem;
  }
  h6{
    margin: 1rem 0;
  }
}
</style>
