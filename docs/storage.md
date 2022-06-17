## Storage
> localStorage类cookie操作封装，支持设置过期时间， set, get, delete方法均为静态方法     

### Storage.set(key: string, value: [ObjType](../src/types.ts) | [BaseType](../src//types.ts), expireHour?: number): boolean        

```
Storage.set('name', 'Tom', 1); // true
Storage.set('obj', {name: 'Tom', age: 1}, 1); // true
```
### Storage.get(key: string, ignoreExpire: boolean): [ObjType](../src/types.ts) | [BaseType](../src//types.ts) | undefined
> ignoreExpire = true时, 不会校验过期时间, 反之会校验时间是否过期。默认为false, 校验过期时间。      

```
// set
Storage.set('test', 123); // 不设置过期时间
Storage.get('test'); // null
Storage.get('test', true); // 123
```

### Storage.delete(key: string):void      

```
Storage.delete('test');
```