# 使用 typescript 编写的常用 JavaScript 前端工具函数

> useful collections of javascript written by typescript

# 安装

npm
```shell
npm install mew-utils
```
yarn
```shell
yarn install mew-utils
```
pnpm
```shell
pnpm install mew-utils
```

# 使用

```typescript
import { getType } from 'mew-utils';
const res = getType(Symbol(1));
console.log(res); // 'symbol'
```

# API

[API 文档](docs/README.md)
