import { ObjType, BaseType, StorageItem } from '@src/types';
import { ONE_HOUR } from './constants';
export class Storage {
  /*
   * @desc 设置任意值得storage。过期时间以小时为单位[可选]
   * @param key storage的key
   * @param value storage的值。可以是基础类型和引用类型的值
   */
  static set(key: string, value: ObjType | BaseType, expireHour?: number): boolean {
    const obj: StorageItem = {
      value,
    };
    if (expireHour && expireHour > 0) {
      obj.expires = Date.now() + ONE_HOUR * expireHour;
    }
    let stringify = '';
    try {
      stringify = JSON.stringify(obj);
    } catch (error) {
      return false;
    }

    localStorage.setItem(key, stringify);
    return true;
  }
  /*
   * @desc 获取storage
   * @param key storage的key
   * @param ignoreExpire 是否忽略过期时间。默认为false
   */
  static get(key: string, ignoreExpire = false): ObjType | BaseType | undefined {
    const data = localStorage.getItem(key);
    if (!data) return data;
    let obj: ObjType = {};
    try {
      obj = JSON.parse(data);
    } catch (error) {
      return data;
    }

    const { value, expires = 0 } = obj as StorageItem;
    if (!ignoreExpire && new Date(expires).getTime() < Date.now()) {
      return null;
    }
    return value;
  }
  /*
   * @desc 删除一个storage
   * @param key 要删除的storage的key
   */
  static delete(key: string): void {
    localStorage.removeItem(key);
  }
}
