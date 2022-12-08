export function extractRGB(rgb: string): number[] {
  let color: string[] = [];
  const rgbReg = /^(rgb|rgba|RGB|RGBA)/;
  const legacyMode = /,/g;
  const noSpaceReg = /(?:\(|\)|rgba|RGBA|RGB|rgb)|\s*/g;
  const withSpaceReg = /(?:\(|\)|rgba|RGBA|RGB|rgb)*/g;
  if (!rgbReg.test(rgb)) {
    throw new Error(`extractRGB: rgb is invalid rgb-format color`);
  }
  if (legacyMode.test(rgb)) {
    color = rgb.replace(noSpaceReg, '').split(',');
  } else {
    color = rgb
      .replace(withSpaceReg, '')
      .split(' ')
      .filter((item) => item !== '/' && item);
  }
  return color.map((item) => {
    return item.includes('%') ? Number(item.replace('%', '')) / 100 : Number(item);
  });
}
export function extractHSL(hsl: string): number[] {
  let color: string[] = [];
  const hslReg = /^(hsl|HSL|hsla|HSLA)/;
  const legacyMode = /,/g;
  const noSpaceReg = /(?:\(|\)|hsla|HSLA|hsl|HSL)|\s|deg*/g;
  const withSpaceReg = /(?:\(|\)|hsla|HSLA|hsl|HSL)|deg*/g;
  if (!hslReg.test(hsl)) {
    throw new Error(`extractHSL: hsl is invalid hsl-format color`);
  }
  if (legacyMode.test(hsl)) {
    color = hsl.replace(noSpaceReg, '').split(',');
  } else {
    color = hsl
      .replace(withSpaceReg, '')
      .split(' ')
      .filter((item) => item !== '/');
  }
  return color.map((item, index) => {
    return index === 3 && item.includes('%') ? Number(item.replace('%', '')) / 100 : Number(item.replace('%', ''));
  });
}
