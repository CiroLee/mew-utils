## validator

> 常用验证函数

### isAnyTrue<T>(arr: T[], fn: Function): boolean

> 数组中任意一个元素为真值，则返回 true。接受自定义判断函数

```typescript
const arr = [0, 1, 2, 3, 4, 5];
isAnyTrue(arr); // true

// 使用自定义函数
isAnyTrue(arr, (num) => num > 10); // false
```

### isAllTrue<T>(arr: T[], fn: Function): boolean

> 判断数组中所有元素是否都为真值

```typescript
const arr = [0, 1, 2, 3, 4, 5];
isAllTrue(arr); // false

// 使用自定义函数
isAllTrue(arr, (num) => num > -1); // true
```

### isNumberLike(value: unknown): boolean

> 判断输入是否为数字或是否可以转换为数字

```typescript
isNumberLike('1'); // true
isNumberLike('0xff'); // true
isNumberLike(null); // true
isNumberLike(''); // true
```

### isEmptyObject<T>(param: [ObjType](../src//types.ts) | T): boolean

> 判断输入是否为空对象

```typescript
isEmptyObject({}); // true
isEmptyObject({ a: 1 }); // false
isEmptyObject([]); // true
isEmptyObject(null); // false
```

### isValidDate(date: any): boolean

> 验证是否为有效日期

```typescript
isValidDate('2022 12 12'); // true
isValidDate('2022-12-12 T12:12:00'); // false
isValidDate({}); // false
```

### isPrime(num: number): boolean

> 验证是否为质数(素数)

```ts
isPrime(23); // true
isPrime(1); // false
isPrime(-1); // false
isPrime(1.2); // false
```
