import { extractRGB, extractHSL } from '@src/color-utils';

describe('extractRGB test', () => {
  test('extractRGB: input is a legacy mode rgb-type color', () => {
    const rgb = 'rgb(255, 255, 255)';
    const result = extractRGB(rgb);

    expect(result).toEqual([255, 255, 255]);
  });
  test('extractRGB: input is a modern mode rgb-type color width alpha', () => {
    const rgba = 'rgba( 255 255 255 / 20%)';
    const result = extractRGB(rgba);
    expect(result).toEqual([255, 255, 255, 0.2]);
  });
  test('extractRGB: input is not a rgb-type color', () => {
    const color = '#fff';
    expect(() => extractRGB(color)).toThrowError();
  });
});

describe('extractHSL test', () => {
  test('extractHSL: input is a legacy hsl-type color', () => {
    const hsl = 'hsl(255deg, 10%, 40%)';
    const result = extractHSL(hsl);
    expect(result).toEqual([255, 10, 40]);
  });
  test('extractHSL: input is a modern hsl-type color width alpha, also not a standard hsl', () => {
    // no %
    const hsl = 'hsl(255deg 10 40 / 20%)';
    const result = extractHSL(hsl);
    expect(result).toEqual([255, 10, 40, 0.2]);
  });
  test('extractHSL: input is not a hsl-type color', () => {
    const color = '#fff';
    expect(() => extractHSL(color)).toThrowError();
  });
});
