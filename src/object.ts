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
    .filter(key => !arr.includes(key))
    .reduce((acc: ObjType, key: string) => ((acc[key] = obj[key]), acc), {});
};
