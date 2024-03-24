import dayjs, { Dayjs, ConfigType, OpUnitType } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isToday from 'dayjs/plugin/isToday';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(weekday);
// 设置国际化
dayjs.extend(localeData);
// 获取某个日期在年中第几周
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
// 让dayjs().format API 以支持更多模版
dayjs.extend(advancedFormat);
// 判断当前日期是否为今天
dayjs.extend(isToday);
// 开启强校验
dayjs.extend(customParseFormat);
// 季度插件
dayjs.extend(quarterOfYear);
// 比较插件
dayjs.extend(isBetween);

const localeMap: Record<string, string> = {
  // ar_EG:
  // az_AZ:
  // bg_BG:
  bn_BD: 'bn-bd',
  by_BY: 'be',
  // ca_ES:
  // cs_CZ:
  // da_DK:
  // de_DE:
  // el_GR:
  en_GB: 'en-gb',
  en_US: 'en',
  // es_ES:
  // et_EE:
  // fa_IR:
  // fi_FI:
  fr_BE: 'fr', // todo: dayjs has no fr_BE locale, use fr at present
  fr_CA: 'fr-ca',
  // fr_FR:
  // ga_IE:
  // gl_ES:
  // he_IL:
  // hi_IN:
  // hr_HR:
  // hu_HU:
  hy_AM: 'hy-am',
  // id_ID:
  // is_IS:
  // it_IT:
  // ja_JP:
  // ka_GE:
  // kk_KZ:
  // km_KH:
  kmr_IQ: 'ku',
  // kn_IN:
  // ko_KR:
  // ku_IQ: // previous ku in antd
  // lt_LT:
  // lv_LV:
  // mk_MK:
  // ml_IN:
  // mn_MN:
  // ms_MY:
  // nb_NO:
  // ne_NP:
  nl_BE: 'nl-be',
  // nl_NL:
  // pl_PL:
  pt_BR: 'pt-br',
  // pt_PT:
  // ro_RO:
  // ru_RU:
  // sk_SK:
  // sl_SI:
  // sr_RS:
  // sv_SE:
  // ta_IN:
  // th_TH:
  // tr_TR:
  // uk_UA:
  // ur_PK:
  // vi_VN:
  zh_CN: 'zh-cn',
  zh_HK: 'zh-hk',
  zh_TW: 'zh-tw'
};

const getLocale = (locale?: string) => {
  if (!locale) {
    return 'en';
  }
  const mapLocale = localeMap[locale];
  return mapLocale || locale.split('_')[0];
};

/**
 * 判断传入的参数是否为日期对象
 * @param date 日期对象
 */
export function isDate (date: any) {
  return date instanceof Date;
}

/**
 * 是否为闰年
 * @param year 年份
 */
export function isLeapYear (year: number): boolean {
  let res = false;
  if (year % 100 == 0) {
    res = year % 400 == 0;
  } else {
    res = year % 4 == 0;
  }
  return res;
};

/**
 * 获取月份对应的天数
 * @param year 年份
 * @param month 月份（需加1）
 */
export function getMonthDays (year: number, month: number): number {
  // 2月份如果是闰年则需要多加1天
  let month2 = 28 + (isLeapYear(year) ? 1 : 0);
  const monthDays = [31, month2, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return monthDays[month];
};

export const yearDecadeCount = 10;
export const decadeDistanceCount = yearDecadeCount * 10;

/**
 * 获取当前年份所处的十年区间
 * @param currentYear {number|Dayjs|Date} 当前年份
 */
export function getDecade (currentYear: number|Dayjs|Date) {
  let fullYear: number;
  if (currentYear instanceof Date) {
    fullYear = currentYear.getFullYear();
  } else if (typeof currentYear == 'number') {
    fullYear = currentYear;
  } else {
    fullYear = currentYear.year();
  }
  let startYear = Math.floor(fullYear / yearDecadeCount) * yearDecadeCount;
  let endYear = startYear + yearDecadeCount - 1;

  return {
    currentYear: fullYear,
    startYear,
    endYear
  };
}

/**
 * 获取下一个十年区间信息
 * @param currentYear
 */
export function getNextDecade (currentYear: number|Dayjs|Date) {
  let decadeInfo = getDecade(currentYear);
  decadeInfo.startYear += yearDecadeCount;
  decadeInfo.endYear += yearDecadeCount;
  return decadeInfo;
}

/**
 * 获取上一个十年区间信息
 * @param currentYear
 */
export function getPrevDecade (currentYear: number|Dayjs|Date) {
  let decadeInfo = getDecade(currentYear);
  decadeInfo.startYear -= yearDecadeCount;
  decadeInfo.endYear -= yearDecadeCount;
  return decadeInfo;
}

/**
 * 格式化日期
 * @param dateValue 日期
 * @param formatter 格式
 */
export function formatDate (dateValue: string|number|Dayjs|Date, formatter: string) {
  let valueType = typeof dateValue;
  if (!dateValue) {
    return dateValue;
  }
  if (valueType == 'string') {
    return dateValue;
  }
  if (dateValue instanceof Date || valueType == 'number') {
    dateValue = dayjs(dateValue);
  }
  return (dateValue as Dayjs).format(formatter);
}

export const dayjsUtil = {
  addYear: (dayIns: Dayjs, diff: number) => dayIns.add(diff, 'year'),
  addMonth: (dayIns: Dayjs, diff: number) => dayIns.add(diff, 'month'),
  addDate: (dayIns: Dayjs, diff: number) => dayIns.add(diff, 'day'),
  setYear: (dayIns: Dayjs, year: number) => dayIns.year(year),
  setMonth: (dayIns: Dayjs, month: number) => dayIns.month(month),
  setDate: (dayIns: Dayjs, date: number) => dayIns.date(date),

  getYear: (dayIns: Dayjs) => dayIns.year(),
  getMonth: (dayIns: Dayjs) => dayIns.month(),
  getDate: (dayIns: Dayjs) => dayIns.date(),
  parseToDayjs: (value: Dayjs|string|null, format: string) => {
    if (!value) {
      return null;
    }
    let valueType = typeof value;
    // 如果格式类型为年份，并且值为数字类型，那么需将其转为字符串类型，否则格式化不正确
    if (valueType == 'number' && format == 'YYYY') {
      value = value + '';
    }
    if (valueType === 'string') {
      console.log('parseToDayjs', value, format);
      return dayjs(value, format);
    } else {
      return dayjs(value);
    }
  },
  /**
   * 判断指定日期是否在开始和结束日期之间
   * @param dayIns 待比较的日期
   * @param startDate 开始日期
   * @param endDate 结束日期
   * @param unitType 精度单位
   * @param inclusivity 包含性
   * // 第5个参数是两个字符 '[' 表示包含, '(' 表示不包含
   * // '()' 不包含开始和结束的日期 (默认)
   * // '[]' 包含开始和结束的日期
   * // '[)' 包含开始日期但不包含结束日期
   * // 例如，当想包含开始的日期作为比较依据，你应该使用“day”作为第三个参数。
   */
  isBetween: (dayIns: Dayjs, startDate: ConfigType, endDate: ConfigType, unitType?: OpUnitType, inclusivity?: '()' | '[]' | '[)' | '(]') => {
    return dayIns.isBetween(startDate, endDate, unitType, inclusivity);
  },
  /**
   *  强校的验日期/时间
   * @param {string} value 日期/时间
   * @param {string} format 格式模板
   * @return {boolean}
   */
  strictDayjs (value: string, format: string) {
    return dayjs(value, format, true);
  },
  /**
   * 将格式化后的季度字符串转换为date对象
   * @param quarterValue 季度值
   * @param format 格式化模板
   */
  parseQuarter (quarterValue: Dayjs|string|null, format: string) {
    if (!quarterValue) {
      return null;
    }
    if (typeof quarterValue == 'object') {
      return quarterValue;
    }
    let date = dayjs(quarterValue, format);
    let year = date.year();
    if (!year || isNaN(year)) {
      return null;
    }
    // 获取季度，先将年份从字符串中移除，然后再用正则匹配剩余字符串中的数字
    let quarterNumberMatch = quarterValue.replace(year + '', '').match(/\d+/);
    if (!quarterNumberMatch) {
      return null;
    }
    let quarterNumber = Number(quarterNumberMatch[0]);
    if (quarterNumber < 1) {
      quarterNumber = 1;
    }
    if (quarterNumber > 4) {
      quarterNumber = 4;
    }
    return date.quarter(quarterNumber);
  },

  /**
   * 将周字符串转成date对象
   * @param weekValue 周字符串
   * @param format 格式化模板
   */
  parseWeek (weekValue: Dayjs|string|null, format: string, lang: string) {
    if (!weekValue) {
      return null;
    }
    if (typeof weekValue == 'object') {
      return weekValue;
    }
    let date = dayjs(weekValue, format);
    let year = date.year();
    if (!year || isNaN(year)) {
      return null;
    }
    date = date.month(0).date(1);
    // 获取周，先将年份从字符串中移除，然后再用正则匹配剩余字符串中的数字
    let weekNumberMatch = weekValue.replace(year + '', '').match(/\d+/);
    if (!weekNumberMatch) {
      return null;
    }
    let weekNumber = Number(weekNumberMatch[0]);
    // 本来return date.locale(getLocale(lang)).week(weekNumber)就可以了，但不知道为什么这条语句会导致年份减1
    return date.locale(getLocale(lang)).week(weekNumber).year(year);
  },

  locale: {
    /**
     * 根据国籍语言获取该国星期的第一天，如中国：1，美国：0
     * @param lang
     */
    firstDayOfWeek (lang?: string): number {
      return dayjs().locale(getLocale(lang)).localeData().firstDayOfWeek();
    },
    /**
     * 根据国籍语言获取该国的星期名称，如中国：['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
     * @param lang
     */
    weekdays (lang?: string): string[] {
      return dayjs().locale(getLocale(lang)).localeData().weekdays();
    },
    /**
     * 根据国籍语言获取该国的星期名称极简简称，如中国：['日', '一', '二', '三', '四', '五', '六']
     * @param lang
     */
    weekdaysMin (lang?: string): string[] {
      return dayjs().locale(getLocale(lang)).localeData().weekdaysMin();
    },
    /**
     * 根据国籍语言获取该国的月份名称，如中国：['一月', '二月', '三月', ...]
     * @param lang
     */
    months (lang: string): string[] {
      return dayjs().locale(getLocale(lang)).localeData().months();
    },
    /**
     * 根据国籍语言获取该国的月份名称，如中国：['1月', '2月', '3月', ...]
     * @param lang
     */
    monthsShort (lang: string): string[] {
      return dayjs().locale(getLocale(lang)).localeData().monthsShort();
    },
    /**
     * 根据国籍语言格式化日期
     * @param dayjsIns dayjs实例
     * @param lang 语言
     * @param format 格式模板
     */
    format (dayjsIns: Dayjs|null, lang:string, format: string) {
      if (!dayjsIns) {
        return '';
      }
      dayjsIns = isDate(dayjsIns) ? dayjs(dayjsIns) : dayjsIns;
      return dayjsIns.locale(getLocale(lang)).format(format);
    },
    /**
     * 获取日期所属的周数
     * @param dayjsIns
     * @param lang
     */
    getWeek (dayjsIns: Dayjs, lang: string) {
      dayjsIns = isDate(dayjsIns) ? dayjs(dayjsIns) : dayjsIns;
      return dayjsIns.locale(getLocale(lang)).week();
    },
    /**
     * 获取相对时间
     * @param dayjsIns
     * @param lang
     */
    fromNow (dayjsIns: Dayjs, lang: string) {
      dayjsIns = isDate(dayjsIns) ? dayjs(dayjsIns) : dayjsIns;
      return dayjsIns.locale(getLocale(lang)).fromNow();
    }
  }
};
