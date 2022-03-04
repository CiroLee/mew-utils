/**
 * @desc 获取数据类型
 */
export const getType = (v?: any): string => Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
