import { ObjType, BaseType, StorageItem } from '@src/types';
import { ONE_HOUR } from './constants';
export class Storage {
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

  static delete(key: string): void {
    localStorage.removeItem(key);
  }
}
