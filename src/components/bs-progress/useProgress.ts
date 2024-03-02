import { computed } from 'vue';

export function getPercentageNumber (percentage: number|string) {
  if (typeof percentage === 'string' && /%$/.test(percentage)) {
    percentage = percentage.split('%')[0];
  }
  percentage = Number(percentage);
  if (percentage < 0) {
    percentage = 0;
  } else if (percentage > 100) {
    percentage = 100;
  }
  return percentage;
}

export function getFormatText (showText: boolean, percentage: number|string, textFormat: (num: number) => any) {
  if (!showText) {
    return '';
  }
  let percentageNumber = getPercentageNumber(percentage);
  if (typeof textFormat === 'function') {
    return textFormat(percentageNumber);
  }
  return percentageNumber + '%';
}

export function useProgress (props: any) {
  let percentageNumber = computed(function () {
    return getPercentageNumber(props.percentage);
  });

  // 显示文字
  let text = computed(function () {
    let {
      showText,
      percentage,
      textFormat
    } = props;
    return getFormatText(showText, percentage, textFormat);
  });

  return {
    percentageNumber,
    text
  };
}
