import * as colors from '@src/color';

describe('hexToRgb test', () => {
  test('hexToRgb, param is not hex color', () => {
    const color = '0xffff000';
    expect(() => {
      colors.hexToRgb(color);
    }).toThrowError();
  });
  test('hexToRgb, white color', () => {
    const color = '#fff';
    expect(colors.hexToRgb(color)).toEqual([255, 255, 255]);
  });
});

describe('rgbToHex test', () => {
  test('rgbToHex', () => {
    const color = 'rgb(2 255 255)';
    const result = colors.rgbToHex(color);
    expect(result).toBe('#02ffff');
  });
});

describe('rgbToHSL test', () => {
  test('rgbToHsl', () => {
    const colorsArr = [
      {
        rgb: 'rgb(255 255 255 / 10%)',
        hsl: [0, 0, 100, 0.1],
      },
      {
        rgb: 'rgb(255 0 0 / 10%)',
        hsl: [0, 100, 50, 0.1],
      },
      {
        rgb: 'rgb(0 255 0 / 10%)',
        hsl: [120, 100, 50, 0.1],
      },
      {
        rgb: 'rgb(0 0 255 / 10%)',
        hsl: [240, 100, 50, 0.1],
      },
    ];

    for (let i = 0, len = colorsArr.length; i < len; i++) {
      expect(colors.rgbToHsl(colorsArr[i].rgb)).toEqual(colorsArr[i].hsl);
    }
  });
});

describe('hslToRgb test', () => {
  test('hslToRgb with alpha', () => {
    const color = 'hsla(120deg, 100%, 50%, 10%)';
    const result = colors.hslToRgb(color);
    expect(result).toEqual([0, 255, 0, 0.1]);
  });
  test('hslToRgb no alpha', () => {
    const color = 'hsla(120deg 100% 50%)';
    const result = colors.hslToRgb(color);
    expect(result).toEqual([0, 255, 0]);
  });
});

describe('auxiliary funcs test', () => {
  test('colorType', () => {
    const colorTypes = [
      {
        value: '#fff',
        type: 'hex',
      },
      {
        value: 'rgb(255, 255, 255)',
        type: 'rgb',
      },
      {
        value: 'rgba(255, 255, 255 , 0.1)',
        type: 'rgb',
      },
      {
        value: 'hsl(23deg, 10%, 14%)',
        type: 'hsl',
      },
      {
        value: 'hsla(23deg, 10%, 10%, 20%)',
        type: 'hsl',
      },
    ];
    colorTypes.forEach((item) => {
      expect(colors.colorType(item.value)).toBe(item.type);
    });
  });
  test('toHSL', () => {
    const inputColors = ['hsl(327deg 100% 30%)', '#990054', 'rgb(153 0 84)'];
    inputColors.forEach((c) => {
      expect(colors.toHSL(c)).toEqual([327, 100, 30]);
    });
  });
});

describe('isDarkColor test', () => {
  test('isDarkColor', () => {
    const color = '#990054';
    expect(colors.isDarkColor(color)).toBeTruthy();
  });
});
