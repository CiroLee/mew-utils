import type { Nullish, Week, Time } from '@src/types';
import { getType } from './common';

const weekMapZh = ['日', ' 一', '二', '三', '四', '五', '六'];
const weekMapEn = [
  { val: 'Sunday', abbr: 'Sun.' },
  { val: 'Monday', abbr: 'Mon.' },
  { val: 'Tuesday', abbr: 'Tue.' },
  { val: 'Wednesday', abbr: 'Web.' },
  { val: 'Thursday', abbr: 'Thu.' },
  { val: 'Friday', abbr: 'Fri.' },
  { val: 'Saturday', abbr: 'Sat.' },
];
/**
 * @desc 返回指定日期的星期数, 如果未传入参数, 默认返回当天日期的中文星期数
 */
export const week = (param?: Week | Time): string | Nullish => {
  let weekParam: Week = {
    date: undefined,
    lang: 'zh',
    abbr: false,
  };
  if (getType(param) !== 'object') {
    weekParam.date = param as Time;
  } else {
    weekParam = {
      ...weekParam,
      ...(param as Week),
    };
  }
  const { date, lang, abbr } = weekParam;
  console.log('weeks', param);
  const weekIndex = date ? new Date(date).getDay() : new Date().getDay();
  if (lang === 'zh') return weekIndex > -1 ? weekMapZh[weekIndex] : null;
  // 仅英文可以返回星期简写
  if (abbr) {
    return weekIndex > -1 ? weekMapEn[weekIndex].abbr : null;
  }
  return weekIndex > -1 ? weekMapEn[weekIndex].val : null;
};
