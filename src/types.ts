export type Nullish = null | undefined;
export type Time = Date | string | number | undefined;
export type ObjType = Record<string | number | symbol, any>;
export type BaseType = number | string | null | undefined | boolean | symbol;
export interface CookieParam {
  name: string; // 名称
  value: string; // cookie值
  expireHour?: number; // 过期时间
  domain?: string; // 作用域名
}
export interface Week {
  date: Time; // 日期
  lang?: string; // 语言 zh:中文 en: 英文
  abbr?: boolean; // 是否输出简写, 仅英文有效
}
