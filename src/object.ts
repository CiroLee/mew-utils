import { ObjType } from './types';
/**
 * @desc 挑出对象中指定键名的数据
 * @param obj object 待处理的对象
 * @param arr string[] 键名属猪
 */
export const pick = <T>(obj: ObjType, arr: string[]): T => {
  if (!Array.isArray(arr)) return obj;
  return arr.reduce((acc: ObjType, curr: string) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
};

/**
 * @desc 剔除对象中指定键名的数据
 * @param obj object 待处理的对象
 * @param arr string[] 键名属猪
 */
export const omit = <T>(obj: ObjType, arr: string[]): T => {
  if (!Array.isArray(arr)) return obj;
  return Object.keys(obj)
    .filter((key) => !arr.includes(key))
    .reduce((acc: ObjType, key: string) => ((acc[key] = obj[key]), acc), {});
};

/**
 * @desc 挑出一个由给定函数返回true的属性组成的对象
 * @param obj 待处理对象
 * @param fn 处理函数
 */
// eslint-disable-next-line no-unused-vars
export const pickBy = <T>(obj: ObjType, fn: (item?: ObjType[keyof ObjType]) => boolean): T => {
  const arr = Object.keys(obj).filter((k) => fn(obj[k]));
  return pick<T>(obj, arr);
};

/**
 * @desc 剔除一个由给定函数返回false的属性组成的对象
 * @param obj 待处理对象
 * @param fn 处理函数
 */
// eslint-disable-next-line no-unused-vars
export const omitBy = <T>(obj: ObjType, fn: (item?: ObjType[keyof ObjType]) => boolean): T => {
  const arr = Object.keys(obj).filter((k) => fn(obj[k]));
  return omit<T>(obj, arr);
};
/**
 * @desc 提取对象中的真值组成的对象
 */
export const objectTrueValue = <T>(obj: ObjType): T => {
  return pickBy<T>(obj, Boolean);
};
