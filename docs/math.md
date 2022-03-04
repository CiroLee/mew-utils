## math

> 常用数学相关函数

### zeroFill(num: number | number): string | unknown

> 补零, 如果数字小于 10, 则在数字前补 0 占位。入参为数字或类数字的字符串(eg: '11')

```typescript
zeroFill(1); // '01'
zeroFill(11); // '11'
zeroFill(-1); // '-1'
zeroFill('1.1'); // '-01.1'
```

### max(array: (number | string)[]): number | undefined

> 计算数组中的最大值。 入参为 number 类型的数组或类 number 类型的字符串数组

```typescript
max([1, 2, 3]); // 3
max([1, 2, '3']); // 3
max(['a', 1]); // undefined
```

### min(array: (number | string)[]): number | undefined

> 计算数组中的最小值。 入参为 number 类型的数组或类 number 类型的字符串数组

```typescript
min([1, 2, 3]); // 1
min([1, 2, '3']); // 1
min(['a', 1]); // undefined
```

### intersection(a: [BaseType](../src/types.ts)[], b: [BaseType](../src/types.ts)[]): [BaseType](../src/types.ts)[]

> 计算两个**基本数据类型数组**的交集

```typescript
intersection([1, 2], [2, 3]); // [2];
intersection([1, 2], ['2', 3]); // []
```

### union(a: [BaseType](../src/types.ts)[], b: [BaseType](../src/types.ts)[]): [BaseType](../src/types.ts)[]

> 计算两个**基本数据类型数组**的并集

```typescript
union([1, 2], [2, 3]); // [1,2,3]
uinon([1, 2], [2, '3']); // [1,2,'3'];
```
