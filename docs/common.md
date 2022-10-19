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

### throttle(fn: Function, wait = 300) Function

> 节流函数

```ts
window.addEventListener(
  'resize',
  throttle(function () {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250),
);
// 最多每 250 毫秒记录一次窗口尺寸
```

### debounce(fn: Function, delay = 300): Function

> 防抖函数

```ts
$('input').addEventListener(
  'input',
  debounce((event) => {
    console.log(event.target.value);
  }, 250),
);
// 最多每250毫秒打印输入的内容
```
