import { extractHSL, extractRGB } from './color-utils';

/**
 * @desc hex转rgb hex不能包含透明度
 */
export function hexToRgb(hex: string): number[] {
  // hex color regex
  const hexReg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  let color = hex.toLowerCase();
  if (!hexReg.test(color)) {
    throw new Error(`hexToRgb: hex is invalid hex-format color`);
  }
  // fill to 6 digits e.g. #fff --> #ffffff
  if (color.length === 4) {
    color = '#' + color.slice(1).repeat(2);
  }
  const rgb: number[] = [];
  for (let i = 1; i < 7; i += 2) {
    const c = parseInt('0x' + color.slice(i, i + 2));
    rgb.push(c);
  }
  return rgb;
}

/**
 * @desc rgb转hex, 透名度信息将丢弃
 */
export function rgbToHex(rgb: string): string {
  let hex = '#';
  const color: number[] = extractRGB(rgb).slice(0, 3); // exclude alpha

  for (let i = 0, len = color.length; i < len; i++) {
    let _hex = color[i].toString(16);
    if (_hex.length === 1) {
      _hex = '0' + _hex;
    }
    hex += _hex;
  }
  return hex;
}
/**
 * @desc rgb转hsl
 * conversion formula is from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_HSL
 */
export function rgbToHsl(rgb: string): number[] {
  const color = extractRGB(rgb);

  let [r, g, b] = color;
  const a = color[3];
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const mid = (min + max) / 2;
  let h = mid;
  let s = mid;
  const l = mid;
  if (min === max) {
    h = 0;
    s = 0;
  } else {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }

    h *= 60;
  }
  const hsl = a ? [h, s * 100, l * 100, a] : [h, s * 100, l * 100];
  return hsl.map((item, index) => (index === 3 ? item : Math.round(item)));
}
/**
 * @desc hsl转rgb
 * conversion formula is from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
 */
export function hslToRgb(hsl: string): number[] {
  const color = extractHSL(hsl);
  const s = color[1] / 100;
  const l = color[2] / 100;
  const alpha = color[3];

  const k = (n: number) => (n + color[0] / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const fn = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const hslVal = [255 * fn(0), 255 * fn(8), 255 * fn(4)].map(Math.round);
  return alpha ? [...hslVal, alpha] : hslVal;
}
/**
 * @desc 是否为深色, 根据hsl的l(lightness)判断
 */
export function isDarkColor(color: string): boolean {
  const [, , lightness] = toHSL(color);
  return lightness < 50;
}

export function colorType(color: string): string {
  return /^#/.test(color) ? 'hex' : color.toLowerCase().slice(0, 3);
}

export function toHSL(color: string): number[] {
  let hsl: number[] = [];
  const type = colorType(color);
  if (type === 'hex') {
    const rgb = `rgb(${hexToRgb(color).join(',')})`;
    hsl = rgbToHsl(rgb);
  } else if (type === 'rgb') {
    hsl = rgbToHsl(color);
  } else {
    hsl = extractHSL(color);
  }

  return hsl;
}
