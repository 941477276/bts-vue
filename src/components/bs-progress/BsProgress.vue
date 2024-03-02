<!--<template>
  <div
    class="bs-progress progress"
    :class="[
      `bs-progress-${colorType}`
    ]">
    <BsProgressBar
      v-if="!multiple"
      v-bind="$props">
      &lt;!&ndash;<template><slot></slot></template>&ndash;&gt;
      <slot></slot>
    </BsProgressBar>
    <template v-else>
      <BsProgressBar
        v-for="(progress, index) in progresses"
        v-bind="progress"
        :key="`multiple_progress_item-${index}`">
        <slot></slot>
      </BsProgressBar>
    </template>
  </div>
</template>-->

<script lang="ts">
import {
  defineComponent,
  h
} from 'vue';
import { bsProgressProps, bsProgressCircleProps, BsMultipleProgressDefine, BsProgressStatus } from './bs-progress-types';
import { getPercentageNumber, getFormatText } from './useProgress';
import BsProgressBar from './widgets/BsProgressBar.vue';
import BsProgressCircle from './widgets/BsProgressCircle.vue';
import { BsiInfo } from 'vue3-bootstrap-icon/es/icons/BsiInfo';
import { BsiCheck } from 'vue3-bootstrap-icon/es/icons/BsiCheck';
import { BsiExclamation } from 'vue3-bootstrap-icon/es/icons/BsiExclamation';
import { BsiX } from 'vue3-bootstrap-icon/es/icons/BsiX';

export default defineComponent({
  name: 'BsProgress',
  components: {
    BsProgressBar,
    BsProgressCircle,
    BsiInfo,
    BsiCheck,
    BsiExclamation,
    BsiX
  },
  props: {
    ...bsProgressProps,
    ...bsProgressCircleProps
  },
  setup (props: any, ctx: any) {
    let statusIconMap: Record<BsProgressStatus, any> = {
      success: BsiCheck,
      warning: BsiExclamation,
      info: BsiInfo,
      danger: BsiX
    };
    const renderStatus = function (status: BsProgressStatus) {
      let Com = statusIconMap[(status + '').toLowerCase() as BsProgressStatus];
      return Com ? h(Com) : null;
    };
    return function () {
      let children;
      let slotDefault = ctx.slots.default;
      let {
        showText,
        percentage,
        textFormat,
        type,
        status
      } = props;
      let percentageNum = getPercentageNumber(props.percentage);

      let classnames = ['bs-progress progress'];
      if (type == 'line') {
        if (!props.multiple) {
          children = h(BsProgressBar, props, slotDefault);
        } else {
          children = props.progresses.map((progress: BsMultipleProgressDefine, index: number) => {
            return h(BsProgressBar, {
              ...progress,
              key: `multiple_progress_item-${index}`
            }, slotDefault);
          });
        }
        if (!props.multiple) {
          if (!props.color) {
            classnames.push(`bs-progress-${props.colorType}`);
          }
        } else {
          classnames.push('bs-progress-multiple');
        }
      } else { // 环形进度条
        children = [
          h(BsProgressCircle, props),
          h('div', {
            'class': 'bs-progress-text'
          }, slotDefault ? slotDefault(percentageNum) : !status ? getFormatText(showText, percentage, textFormat) : renderStatus(status))
        ];
        classnames.pop();
        classnames.push('bs-progress-circle');
        if (!!status && !slotDefault) {
          classnames.push('bs-progress-show-status');
          classnames.push('bs-progress-status-' + status);
        }
      }

      if (props.color) {
        classnames.push('bs-progress-custom-color');
      }
      return h('div', {
        'class': classnames
      }, children);
    };
  }
});
</script>
