import {
  Ref,
  ComputedRef
} from 'vue';
import {
  hasClass
} from '../../utils/bs-util';
import { calcValueByPosition, convertValue, getSliderHandlerNameByValue } from './bsSliderUitl';

type SetValueFunction = (value: string|number) => void;
export function useSliderRail (value1: Ref<string|number>, value2: Ref<string|number>, setValue1: SetValueFunction, setValue2: SetValueFunction, props: any, sliderRef: Ref<HTMLElement|null>, precision: ComputedRef<number>, sliderHandler1Ref: any, sliderHandler2Ref: any) {
  let handleSliderRailClick = function (evt: MouseEvent) {
    if (props.disabled) {
      return;
    }
    evt = evt || window.event;
    let target = evt.target! as HTMLElement;
    if (hasClass(target, 'bs-slider-handler')) {
      return;
    }
    let sliderRect = sliderRef.value?.getBoundingClientRect();
    if (!sliderRect) {
      return;
    }
    let clientX = props.vertical ? evt.clientY : evt.clientX;
    let sliderLeft = props.vertical ? sliderRect.top : sliderRect.left;
    let sliderWidth = props.vertical ? sliderRect.height : sliderRect.width;
    let mousePosition = clientX - sliderLeft;

    let value = calcValueByPosition(mousePosition, sliderWidth, props, precision.value);
    value = convertValue(value, props, precision.value);
    let sliderHandlerName = getSliderHandlerNameByValue(value as number, value1.value, value2.value, props);
    if (sliderHandlerName === 'sliderHandler1') {
      setValue1(value);
      setTimeout(function () {
        sliderHandler1Ref.value?.tooltipShortShow();
      }, 0);
    } else {
      setValue2(value);
      // sliderHandler1Ref.value2.tooltipShortShow();
      setTimeout(function () {
        sliderHandler2Ref.value?.tooltipShortShow();
      }, 0);
    }
  };
  return {
    handleSliderRailClick
  };
}
