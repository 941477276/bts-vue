import {
  computed,
  Ref,
  unref
} from 'vue';
import { BigNumber } from 'bignumber.js';
import { getNewValueWithRange } from './bsSliderUitl';

export function useSlider (props:any, ctx: any, value1: Ref<string|number>, value2: Ref<string|number>) {
  // 计算百分比
  let percentage = computed<number[]>(function () {
    let min = new BigNumber(props.min);
    let dividend = new BigNumber(props.max).minus(min); // minus减法

    // dividedBy 除法
    let percent1 = (new BigNumber(unref(value1)).minus(min)).dividedBy(dividend).toNumber();
    let percent2 = (new BigNumber(unref(value2)).minus(min)).dividedBy(dividend).toNumber();
    if (percent1 < 0) {
      percent1 = 0;
    }
    if (percent2 > 1) {
      percent2 = 1;
    }

    return [percent1, percent2];
  });
  // 计算高亮轨道的宽度
  let trackWidth = computed(function () {
    let percentageVal = percentage.value;
    if (props.range) {
      return (percentageVal[1] - percentageVal[0]) * 100;
    } else {
      return percentageVal[0] * 100;
    }
  });
  // 精度值
  let precision = computed(function () {
    let arr = [props.min, props.max, props.step];
    if (props.range) {
      arr.push(props.rangeMin || 0);
      arr.push(props.rangeMax || 0);
    }
    let decimalLengthArr = arr.map(valueItem => {
      let decimal = (valueItem + '').split('.')[1];
      return decimal ? decimal.length : 0;
    });
    return Math.max.apply(null, decimalLengthArr);
  });

  let trackStyle = computed(function () {
    // 当props.range为true时，若第二个滑块的值小于第一个滑块，则trackWidth可能出现负数
    let width = Math.abs(trackWidth.value) + '%';
    let left = '0%';
    if (!props.included) {
      return left;
    }
    if (props.range) {
      if (percentage.value[1] < percentage.value[0]) {
        left = percentage.value[1] * 100 + '%';
      } else {
        left = percentage.value[0] * 100 + '%';
      }
    } else {
      left = '0%';
    }
    if (props.vertical) {
      return {
        height: width,
        top: left
      };
    } else {
      return {
        width: width,
        left: left
      };
    }
  });

  let setValue1 = function (newValue: string|number) {
    let range = props.range;
    let modelValue = props.modelValue;
    // 不允许交叉
    if (range && !props.enableCross && newValue > modelValue[1]) {
      return;
    }
    let newValues = getNewValueWithRange(newValue, modelValue[1], props, true, precision.value) as (string|number)[];

    if (!newValues) {
      return;
    }
    let changedValue:string|number|(string|number)[] = range ? newValues : newValues[0];
    ctx.emit('update:modelValue', changedValue);
    ctx.emit('change', changedValue);
  };
  let setValue2 = function (newValue: string|number) {
    let modelValue = props.modelValue;
    // 不允许交叉
    if (props.range && !props.enableCross && newValue < props.modelValue[0]) {
      return;
    }

    let newValues = getNewValueWithRange(modelValue[0], newValue, props, false, precision.value) as (string|number)[];
    if (!newValues) {
      return;
    }

    let changedValue:(string|number)[] = newValues;
    ctx.emit('update:modelValue', changedValue);
    ctx.emit('change', changedValue);
  };

  return {
    percentage,
    precision,
    trackStyle,

    setValue1,
    setValue2
  };
};
