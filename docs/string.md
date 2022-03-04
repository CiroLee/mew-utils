## string

> 常用 string 处理函数

### encryptedPhone(num: string | number): string | number

> 隐藏手机中文四位数

```typescript
encryptedPhone(13311112222); // '133****2222'
```

### upperCaseFirstLetter(str: string): string

> 将字符串首字母大写

```typescript
upperCaseFirstLetter('abc'); // 'Abc'
upperCaseFirstLetter('abc-de'); // 'Abc-de'
```

### whiteSpace(num: number): string

> 返回指定数量的空格。 num 需要大于 0，默认 num = 1
