## object

> 常用对象处理函数

### pick<T>(obj: [ObjType](../src/types.ts), arr: string[]): T

> 挑出对象中指定key的数据

types

```typescript
type ObjType = Record<string | number | symbol, any>;
```

```typescript
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
pick(obj, ['name', 'age']); // { name: 'Tom', age: 10 };
```

### omit<T>(obj: [ObjType](../src/types.ts), arr: string[]): T

> 剔除对象中指定key的数据

```typescript
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
omit(obj, ['name', 'age']); // { sex: 'male' }
```    
### pickBy<T>(obj: [ObjType](../src/types.ts), fn: Function): T     
> 挑出一个由给定函数返回true的属性组成的对象   

```ts
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
pickBy(obj, el => typeof el === 'string'); // { name: 'Tom', sex: 'male' };
```    
### omitBy<T>(obj: [ObjType](../src/types.ts), fn: Function): T   
> 剔除一个由给定函数返回false的属性组成的对象    
```ts
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
omitBy(obj, el => typeof el === 'string'); // { age: 10 }
```    
### objectTrueValue<T>(obj: [ObjType](../src/types.ts)): T    
> 提取对象中的真值组层的对象    
```ts
const obj = {
  a: 1,
  b: null,
};
objectTrueValue(obj); // { a: 1 }
```
