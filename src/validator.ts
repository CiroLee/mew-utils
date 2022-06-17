import { ObjType } from './types';
import { getType } from './common';
/**
 * @desc 判断数组中所有元素是否都为真值
 * @param arr any[] 待处理的数组
 * @param fn function, 判断函数, 默认为Boolean函数
 * @returns boolean
 */
export const isAlltrue = <T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)): boolean => arr.every(fn);

/**
 * @desc 数组中任意一个元素为真值，则返回true
 * @param arr any[] 待处理的数组
 * @param fn function, 判断函数, 默认为Boolean函数
 * @returns boolean
 */
export const isAnytrue = <T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)): boolean => arr.some(fn);

/**
 * @desc 判断输入是否为数字或是否可以转换为数字
 * @param value any
 * @returns boolean
 */
export const isNumberLike = (value: unknown): boolean => !isNaN(Number(value));

/**
 * @desc 判断输入是否为空对象
 */
export const isEmptyObject = <T>(param: ObjType | T): boolean => {
  if (getType(param) !== 'object' && getType(param) !== 'array') {
    return false;
  }
  return !Object.keys(param).length;
};

/**
 * @desc 判断年份是否为闰年
 */
export const isLeap = (year: number): boolean => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};
