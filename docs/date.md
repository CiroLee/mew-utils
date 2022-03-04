## date

> 常用日期处理函数

### week(param: string | [Week](../src/types.ts)): string | Nullish

> 获取星期数，默认返回中文日期；如果需要返回英文日期或英文简写日期，入参格式参考[Week](../src/types.ts)

types

```typescript
interface Week {
  date: Time; // 日期
  lang?: string; // 语言 zh:中文 en: 英文
  abbr?: boolean; // 是否输出简写, 仅英文有效
}
```

```typescript
week(); // 省略入参，返回当天日期星期数
week('2022-1-18'); // '二' 默认返回中文星期
week({
  date: '2022-1-18',
  lang: 'en',
}); // 'Tuesday'
week({
  date: '2022-1-18',
  lang: 'en',
  attr: true,
}); // 'Tue.' 英文星期简写末尾有点号
```
