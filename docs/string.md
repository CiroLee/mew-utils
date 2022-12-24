## string

> 常用 string 处理函数

### encryptedPhone(num: string | number): string | number

> 隐藏手机中文四位数

```typescript
encryptedPhone(13311112222); // '133****2222'
```

### 将字符串首字母大写(str: string, to: 'upper' | 'lower'): string

> 字符串搜字母大小写转换

```typescript
transFirstLetterBy('abc'); // 'Abc'
transFirstLetterBy('abc-de'); // 'Abc-de'
```

### whiteSpace(num: number): string

> 返回指定数量的空格。 num 需要大于 0，默认 num = 1

### camelCase(str: string): string

> 字符串转为 camelCase 格式

```typescript
camelCase('foo-bar'); // fooBar
camelCase('FooBar'); // fooBar
```

### pascalCase(str: string): string

> 字符串转为 pascalCase 格式

```typescript
pascalCase('foo-bar'); // FooBar
pascalCase('Foo-Bar'); // FooBar
```
### replaceAt(str: string, index: number, char: string): string     
> 替换字符串中指定索引位置的字符       
```typescript
replaceAt('footbar', 3, 'T'); // fooTbar
```

### deleteAt(str: string, index: number): string     
> 删除字符串中指定索引位置的字符   
```typescript
deleteAt('footbar', 3); // foobar
```
