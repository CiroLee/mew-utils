import { CookieParam, ObjType, Nullish } from '@src/types';
const ONE_HOUR = 60 * 60 * 1000;

export class Cookie {
  /**
   * @desc 获取cookie
   * @param name string[可选] cookie名称，
   */
  static get(name?: string): string | object | Nullish {
    if (!document.cookie.length) return null;
    const storage = document.cookie.replace(/\s*/g, '').split(';');
    const cookieValues: ObjType = {};
    storage.forEach((item: string) => {
      const temp = item.split('=');
      cookieValues[`${temp[0]}`] = decodeURI(temp[1]);
    });
    return name ? cookieValues[name] : cookieValues;
  }
  /**
   * @desc 以key-value 对象形式设置cookie, 默认过期时间为1小时
   */
  static set({ name, value, expireHour = 1, domain }: CookieParam): void {
    const date = new Date();
    date.setTime(date.getTime() + expireHour * ONE_HOUR);
    const expires = `;expires=${date.toUTCString()}`;
    const setDomian = domain ? `;domain=${domain}` : '';

    document.cookie = `${name}=${encodeURI(value)}${expires}${setDomian}`;
  }
  /**
   * @desc 删除cookie, 省略name则删除所有cookied
   */
  static delete(name?: string): void {
    if (name) {
      this.set({ name, value: '', expireHour: 0 });
    } else {
      const cookies = this.get();
      cookies &&
        Object.keys(cookies).forEach(name => {
          this.set({ name, value: '', expireHour: 0 });
        });
    }
  }
}
