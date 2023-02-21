## string

> 常用 string 处理函数

### encryptedPhone(num: string | number): string

> 隐藏手机中文四位数

```typescript
encryptedPhone(13311112222); // '133****2222'
```

### transFirstLetterBy(str: string, to: 'upper' | 'lower'): string

> 字符串首字母大小写转换

```typescript
transFirstLetterBy('abc', 'upper'); // Abc
transFirstLetterBy('abc-de', 'upper'); // Abc-de''
transFirstLetterBy('ABC', 'lower'); // aBC
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

### kebabCase(str: string): string       

> 字符串转kebab-case     
```typescript
kebabCase('FooBar'); // foo-bar
kebabCase('foo bar'); // foo-bar
```

### snakeCase(str: string): string      

> 字符串转snake_case       
```typescript
snakeCase('fooBar'); // foo_bar
snakeCase('FooBar'); // foo_bar
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
