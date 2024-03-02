<template>
  <svg class="bs-progress-circle-svg" viewBox="0 0 100 100">
    <BsProgressCircleDefs v-if="realColor.isGradient" :gradient-color="realColor.color" :gradient-id="gradientId"></BsProgressCircleDefs>
    <path :d="pathFirstStyles.pathString" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" fill="none" fill-opacity="0" class="bs-progress-circle-track"
      :style="pathFirstStyles.pathStyle"></path>
    <path :d="pathStyles.pathString" :stroke-width="percentageNumber <= 0 ? 0 : strokeWidth" :stroke-linecap="strokeLinecap" fill="none"
       :class="['bs-progress-circle-path', !!realColor.color ? 'bs-progress-circle-path-custom-stroke' : '']" :style="pathStyles.pathStyle"
       :stroke="!!realColor.color ? (realColor.isGradient ? `url(#${gradientId})` : realColor.color) : null"></path>
  </svg>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref
} from 'vue';
import BsProgressCircleDefs from './BsProgressCircleDefs.vue';
import { bsProgressProps, bsProgressCircleProps, BsGapPositionType } from '../bs-progress-types';
import { useProgress } from '../useProgress';
import { getType } from '../../../utils/bs-util';

/**
 * 获取svg path路径及样式
 * @param offset {number} 绘制线段时的偏移量
 * @param percent {number} 进度值
 * @param strokeColor {string} 进度条颜色
 * @param strokeWidth {number} 进度条宽度
 * @param gapDegree {number} 仪表盘进度条缺口角度，可取值 0 ~ 295
 * @param gapPosition {string} 仪表盘进度条缺口位置
 */
function getPathStyles (
  offset: number,
  percent: number,
  strokeColor: string,
  strokeWidth: number,
  gapDegree = 0,
  gapPosition: BsGapPositionType
) {
  const radius = 50 - strokeWidth / 2;

  console.log('gapPosition', gapPosition);
  let beginPositionX = 0;
  let beginPositionY = -radius;
  let endPositionX = 0;
  let endPositionY = -2 * radius;
  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;
    case 'right':
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;
    case 'bottom':
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;
    default:
  }
  /* 如：
    M 50,50 m 0,-47
    a 47,47 0 1 1 0,94
    a 47,47 0 1 1 0,-94
   */
  const pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
   a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
   a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
  const len = Math.PI * 2 * radius;

  const pathStyle = {
    // stroke: strokeColor,
    strokeDasharray: `${(percent / 100) * (len - gapDegree)}px ${len}px`,
    strokeDashoffset: `-${gapDegree / 2 + (offset / 100) * (len - gapDegree)}px`,
    transition:
      'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s', // eslint-disable-line
  };

  return {
    strokeColor: strokeColor,
    pathString,
    pathStyle
  };
}

let bsProgressCircleCount = 0;
export default defineComponent({
  name: 'BsProgressCircle',
  components: {
    BsProgressCircleDefs
  },
  props: {
    ...bsProgressProps,
    ...bsProgressCircleProps
  },
  setup (props: any, ctx: any) {
    let {
      percentageNumber,
      text
    } = useProgress(props);
    let id = 'bs-progress-circle_' + (++bsProgressCircleCount);

    let gapPos = computed(function () {
      let {
        type,
        gapPosition
      } = props;
      return gapPosition || (type == 'dashboard' && 'bottom') || 'top';
    });

    // 进度条轨道 path 标签的样式信息
    let pathFirstStyles = computed(function () {
      let {
        strokeWidth,
        gapDegree,
        type
      } = props;

      if (type == 'dashboard' && !gapDegree) {
        gapDegree = 75;
      }

      return getPathStyles(0, 100, '', strokeWidth, gapDegree, gapPos.value);
    });

    // 进度条 path 标签的样式信息
    let pathStyles = computed(function () {
      let {
        strokeWidth,
        gapDegree,
        type
      } = props;
      let percentageVal = percentageNumber.value;

      if (type == 'dashboard' && !gapDegree) {
        gapDegree = 75;
      }
      return getPathStyles(0, percentageVal, '', strokeWidth, gapDegree, gapPos.value);
    });

    // 真实颜色
    let realColor = computed(function () {
      let {
        color
      } = props;
      let percentageVal = percentageNumber.value;
      if (typeof color === 'function') {
        color = color(percentageVal);
      }

      if (typeof color == 'string') {
        return {
          isGradient: false,
          color
        };
      }
      if (Array.isArray(color)) {
        let result = {
          isGradient: false,
          color: ''
        };
        // 根据当前进度显示不同的颜色
        let colorItem = color.sort((item1, item2) => item1.percentage - item2.percentage).find(item => percentageVal <= (item.percentage || 0));
        if (!colorItem) {
          return result;
        }
        result.color = colorItem.color;
        return result;
      }

      let isObj = getType(color) == 'object';
      if (isObj) {
        let newColor = {
          ...color
        };
        if (newColor.from) {
          newColor[0] = newColor.from;
          delete newColor.from;
        }
        if (newColor.to) {
          newColor[100] = newColor.to;
          delete newColor.to;
        }
        return {
          isGradient: true,
          color: newColor
        };
      }
      return {
        isGradient: false,
        color: ''
      };
    });

    return {
      // text,
      gradientId: 'bs-progress-gradient_' + bsProgressCircleCount,
      realColor,
      percentageNumber,
      pathFirstStyles,
      pathStyles
    };
  }
});
</script>
