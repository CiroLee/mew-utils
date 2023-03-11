## date

> 常用日期处理函数

### week(param?: string | [Week](../src/types.ts) | [Time](../src/types.ts)): string | Nullish

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

### dateFormat(date: [Time](../src/types.ts), option?: string | [DateFormatOption](../src/types.ts)): string

> 日期格式化。默认格式为: yyyy-mm-dd HH:MM:SS。option 为 string 类型时，表示格式字符串。需要设置日期是否自动补零，使用 DateFormatOption 类型

```typescript
dateFormat(1642479132 * 1000); // 2022-01-18 12:12:12
dateFormat(1642479132 * 1000, false); // 2022-1-18 12:12:12
dateFormat(1642479132 * 1000, 'yyyy/mm/dd'); // 2022/01/18
dateFormat(1642479132 * 1000, 'yyyy年mm月dd日'); // 2022年01月18日
dateFormat(1642479132 * 1000, {
  format: 'yyyy/mm/dd HH:MM:SS',
  padZero: false,
}); // 2022/1/18 12:12:12
```
