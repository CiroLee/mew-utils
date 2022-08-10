import type { Nullish, Week, Time, DateFormatOption } from '@src/types';
import { getType } from './common';
import { zeroFill } from './math';
import { isAllTrue } from './validator';
const weekMapZh = ['日', ' 一', '二', '三', '四', '五', '六'];
const weekMapEn = [
  { val: 'Sunday', abbr: 'Sun.' },
  { val: 'Monday', abbr: 'Mon.' },
  { val: 'Tuesday', abbr: 'Tue.' },
  { val: 'Wednesday', abbr: 'Wed.' },
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
  const weekIndex = date ? new Date(date).getDay() : new Date().getDay();
  if (lang === 'zh') return weekIndex > -1 ? weekMapZh[weekIndex] : null;
  // 仅英文可以返回星期简写
  if (abbr) {
    return weekIndex > -1 ? weekMapEn[weekIndex].abbr : null;
  }
  return weekIndex > -1 ? weekMapEn[weekIndex].val : null;
};
/**
 * @desc 格式化日期 默认日期格式为 yyyy-mm-dd HH:MM:SS 如果是unix时间戳, 需要精确到毫秒
 * @param date 日期
 * @param option 选项(可选参数)
 */
export const dateFormat = (date: Time, option?: DateFormatOption | string | boolean): string => {
  const _date = date instanceof Date ? date : new Date(date);
  const regExp = /d{1,4}|m{1,4}|yy(?:yy)?|H{1,2}|M{1,2}|S{1,2}/g;
  let _option = {
    format: 'yyyy-mm-dd HH:MM:SS',
    padZero: true,
  };
  // 参数兼容
  if (typeof option === 'string') {
    _option.format = option;
  } else if (typeof option === 'boolean') {
    _option.padZero = option;
  } else if (
    isAllTrue([
      getType(option) === 'object',
      getType(option?.format) === 'string' || getType(option?.padZero) === 'boolean',
    ])
  ) {
    _option = {
      ..._option,
      ...option,
    };
  }
  const o = {
    yyyy: _date.getFullYear(),
    mm: _option.padZero ? zeroFill(_date.getMonth() + 1) : _date.getMonth() + 1,
    dd: _option.padZero ? zeroFill(_date.getDate()) : _date.getDate(),
    HH: _option.padZero ? zeroFill(_date.getHours()) : _date.getHours(),
    MM: _option.padZero ? zeroFill(_date.getMinutes()) : _date.getMinutes(),
    SS: _option.padZero ? zeroFill(_date.getSeconds()) : _date.getSeconds(),
  };

  return _option.format.replace(regExp, (match) => {
    if (match in o) {
      return (o[match as keyof typeof option] as string).toString();
    }
    return '';
  });
};
