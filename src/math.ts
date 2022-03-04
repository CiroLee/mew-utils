import { isAnytrue, isAlltrue, isNumberLike } from '@src/validator';
import { BaseType } from './types';
/**
 * @desc 补零, 如果数字小于10，则在数字前补充0占位
 */
export const zeroFill = (num: number | string): string | unknown => {
  const invalidArr = [num === -Infinity, num === Infinity];
  if (isAnytrue(invalidArr) || !isNumberLike(num)) {
    return num;
  }
  const digit = Number(num);
  if (num < 0) {
    return Math.abs(digit) < 10 ? `-0${Math.abs(digit)}` : `${digit}`;
  }
  return num < 10 ? `0${digit}` : `${digit}`;
};

/**
 * @desc 计算数组中的最大值
 * @param array (string | number)[] 待计算的数组
 */
export const max = (array: (string | number)[]): number | undefined => {
  const isValidParam = isAlltrue(array, v => isNumberLike(v));
  return isValidParam ? Math.max(...(array as number[])) : undefined;
};

/**
 * @desc 计算数组中的最小值
 * @param array (string | number)[] 待计算的数组
 */
export const min = (array: (string | number)[]): number | undefined => {
  const isValidParam = isAlltrue(array, v => isNumberLike(v));
  return isValidParam ? Math.min(...(array as number[])) : undefined;
};
/**
 * @desc  计算两个基本数据类型数组的交集
 */
export const intersection = (a: BaseType[], b: BaseType[]): BaseType[] => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
};
/**
 * @desc 计算两个基础数据类型数组的并集
 */
export const union = (a: BaseType[], b: BaseType[]): BaseType[] => [...new Set([...a, ...b])];
