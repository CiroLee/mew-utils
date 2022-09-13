# 使用 typescript 编写的常用 JavaScript 前端工具函数

> useful collections of javascript written by typescript    

[![codecov](https://codecov.io/gh/cirolee/mew-utils/branch/main/graph/badge.svg)](https://codecov.io/gh/cirolee/mew-utils/branch/main)
![npm bundle size](https://img.shields.io/bundlephobia/min/mew-utils)
![GitHub release (release name instead of tag name)](https://img.shields.io/github/v/release/cirolee/mew-utils)
![GitHub](https://img.shields.io/github/license/cirolee/mew-utils)
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

[API 文档](https://github.com/CiroLee/mew-utils/blob/main/docs/README.md)
