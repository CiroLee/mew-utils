## common

> 通用函数

### getType(v?: any): string

> 获取参数的类型

```typescript
getType(1); // 'number'
getType('1'); // 'string'
getType({}); // 'object'
getType(() => null); // 'function'
getType(null); // 'null'
```
