import { BigNumber } from 'bignumber.js';

/**
 * 根据鼠标的位置计算最终值
 * @param mousePosition 鼠标位置
 * @param props props
 * @return {string|number}
 */
export function calcValueByPosition (mousePosition: number, sliderTotalWidth: number, props: any, precision: number) {
  let propsMin = props.min;
  let propsMax = props.max;
  // 滑块总值
  let totalValue = new BigNumber(propsMax).minus(new BigNumber(propsMin)); // minus 减法
  // 一步对应的值
  let oneStepValue = 100 / totalValue.dividedBy(new BigNumber(props.step)).toNumber();
  // 总步长 = (当前移动的距离 / 滑块总长度 * 100) / 步长值
  let steps = Math.round(new BigNumber(mousePosition).dividedBy(sliderTotalWidth).multipliedBy(100).dividedBy(oneStepValue).toNumber());
  // 步长值
  let valueOfSteps = new BigNumber(steps).multipliedBy(oneStepValue); // multipliedBy 乘法
  let value = valueOfSteps.multipliedBy(totalValue).dividedBy(100).plus(propsMin);
  let resultValue = convertValue(value.toNumber(), props, precision);
  return resultValue;
};

/**
 * 转换值
 * @param originValue
 */
export function convertValue (originValue: string|number, props: any, precision: number) {
  let value = new BigNumber(originValue);
  let propsMin = props.min;
  let propsMax = props.max;
  // 滑块总值
  // let totalValue = new BigNumber(propsMax).minus(new BigNumber(propsMin)); // minus 减法

  if (value.lt(propsMin)) { // lt 判断数是否小于
    value = new BigNumber(propsMin);
  }
  if (value.gt(propsMax)) { // gt判断数是否大于
    value = new BigNumber(propsMax);
  }

  let resultValue: number|string = value.toFixed(precision);
  if (precision > 0) {
    // 如果有小数点，且小数点最后一位不是0，则将其转换成number类型。如果最后一位是0还将其转换成number类型的化，后面的0会消失
    if (resultValue[resultValue.length - 1] !== '0') {
      resultValue = Number(resultValue);
    }
  } else {
    resultValue = Number(resultValue);
  }
  return resultValue;
};

/**
 * 根据区间值计算新的滑块值
 * @param newValue1 滑块1的值
 * @param newValue2 滑块2的值
 * @param props
 * @param value1IsMotionless 滑块1的值是否保持不动
 */
export function getNewValueWithRange (value1:string|number, value2:string|number, props:any, value1IsMotionless = true, precision: number) {
  let range = props.range;

  if (range) {
    let rangeMin = props.rangeMin;
    let rangeMax = props.rangeMax;
    let diff = new BigNumber(value2).minus(value1);
    if (typeof rangeMin == 'number') { // 判断两个滑块之间的值是否小于区间最小值
      if (diff.lt(rangeMin)) {
        let newValue;
        if (value1IsMotionless) {
          newValue = new BigNumber(value2).plus(new BigNumber(rangeMin).minus(diff));
          if (newValue.gt(props.max) || (typeof rangeMax === 'number' && newValue.minus(value1).gt(rangeMax))) {
            return;
          }
          value2 = convertValue(newValue.toNumber(), props, precision);
        } else {
          newValue = new BigNumber(value1).minus(new BigNumber(rangeMin).minus(diff));
          if (newValue.lt(props.min) || new BigNumber(value2).minus(newValue).lt(rangeMin)) {
            return;
          }
          value1 = convertValue(newValue.toNumber(), props, precision);
        }
      }
    }
    if (typeof rangeMax == 'number') { // 判断两个滑块之间的值是否大于区间最大值
      if (diff.gt(rangeMax)) {
        let newValue;
        if (value1IsMotionless) {
          newValue = new BigNumber(value2).minus(new BigNumber(diff).minus(rangeMax));
          if (newValue.lt(props.min) || (typeof rangeMin === 'number' && newValue.minus(value1).lt(rangeMin))) {
            return;
          }
          value2 = convertValue(newValue.toNumber(), props, precision);
        } else {
          newValue = new BigNumber(value1).plus(new BigNumber(diff).minus(rangeMax));
          // 两个滑块区间值大于最大区间值，右侧滑块值不动
          if (newValue.gt(props.max) || new BigNumber(value2).minus(newValue).gt(rangeMax)) {
            return;
          }
          value1 = convertValue(newValue.toNumber(), props, precision);
        }
      }
    }
  }

  return [value1, value2];
};

/**
 * 根据当前值获取滑块按钮名称
 * @param targetValue 当前值
 * @param value1 滑块1的值
 * @param value2 滑块2的值
 * @param props
 */
export function getSliderHandlerNameByValue (targetValue: number, value1: string|number, value2: string|number, props: any) {
  let sliderHandler1 = 'sliderHandler1';
  let sliderHandler2 = 'sliderHandler2';
  if (!props.range) {
    return sliderHandler1;
  }
  let min = Math.min(value1 as number, value2 as number);
  let max = Math.max(value1 as number, value2 as number);
  if (Math.abs(min - targetValue) < Math.abs(max - targetValue)) {
    return value1 < value2 ? sliderHandler1 : sliderHandler2;
  } else {
    return value1 > value2 ? sliderHandler1 : sliderHandler2;
  }
}

/**
 * 计算百分比
 * @param value 当前值
 * @param min 最小值
 * @param max 最大值
 */
export function calcPercentage (value: number|string, min: number, max: number) {
  let dividend = new BigNumber(max).minus(min); // minus减法

  // dividedBy 除法
  let percent1 = (new BigNumber(value).minus(min)).dividedBy(dividend).toNumber();
  if (percent1 < 0) {
    percent1 = 0;
  }
  if (percent1 > 1) {
    percent1 = 1;
  }

  return percent1 * 100;
};
