/**
 * @desc 获取数据类型
 */
export const getType = (v?: any): string => Object.prototype.toString.call(v).slice(8, -1).toLowerCase();

/**
 * @desc 节流函数
 */
export const throttle = (fn: Function, wait = 300) => {
  let last: number = 0;
  return function (this: any, ...args: any[]) {
    if (Date.now() - last > wait) {
      fn(this, args);
      last = Date.now();
    }
  };
};
/**
 * @desc 防抖函数
 */
export const debounce = (fn: Function, delay = 300) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};
