## object

> 常用对象处理函数

### pick<T>(obj: [ObjType](../src/types.ts), arr: string[]): T

> 挑出对象中指定 key 的数据

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

> 剔除对象中指定 key 的数据

```typescript
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
omit(obj, ['name', 'age']); // { sex: 'male' }
```
