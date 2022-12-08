## Color

> 颜色相关函数。包含颜色转换，深色判断等函数

### hexToRgb(hex: string): number[]

> hex 颜色转 rgb 颜色。hex 为 6 为十六进制颜色，不包含透明度信息

```typescript
hexToRgb('#fff'); // [255, 255, 255]
```

### rgbToHex(rgb: string): string

> rgb 颜色转换为 hex 颜色。 透明度信息将丢弃

```typescript
rgbToHex('rgb(255 255 255)'); // #ffffff
```

### rgbToHsl(rgb: string): number[]

> rgb 颜色转换为 hsl 颜色。支持 alpha 通道。 alpha 通道的百分数会转换为浮点数，而 s 和 l 的百分数将丢弃百分号，不做转换。

```typescript
rgbToHsl('rgb(147 49 49)'); // [0, 50, 38]
```

### hslToRgb(hsl: string): number[]

> hsl 颜色转换为 rgb 颜色。支持 alpha 通道。

```typescript
hslToRgb('hsl(0deg 50% 38%)'); // rgb(147 49 49)
```

### isDarkColor(color: string): boolean

> 判断颜色是否为深色。接受 hex, rgb, rgba, hsl, hsla 颜色。

```typescript
isDarkColor('#fff'); // false
isDarkColor('hsl(217deg 74% 13%))'); // true
```
