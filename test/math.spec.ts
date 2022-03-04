import * as math from '@src/math';

describe('zeroFill test', () => {
  test('ZEROFILL: invalid param that will return itself', () => {
    const param1 = -Infinity;
    const param2 = Infinity;
    const param3 = '123' as unknown;
    expect(math.zeroFill(param1)).toBe(param1);
    expect(math.zeroFill(param2)).toBe(param2);
    expect(math.zeroFill(param3 as number)).toBe(param3);
  });
  test('ZEROFILL: param le zero', () => {
    const param1 = -9;
    const param2 = -10;
    expect(math.zeroFill(param1)).toBe('-09');
    expect(math.zeroFill(param2)).toBe('-10');
  });
  test('ZEROFILL: param ge zero', () => {
    const param1 = 0;
    const param2 = 1;
    const param3 = 10;
    expect(math.zeroFill(param1)).toBe('00');
    expect(math.zeroFill(param2)).toBe('01');
    expect(math.zeroFill(param3)).toBe('10');
  });
  test('ZEROFILL: param is number-like string', () => {
    const parma1 = '1';
    const param2 = '10';
    const param3 = '-1.1';
    const param4 = 'num';
    expect(math.zeroFill(parma1)).toBe('01');
    expect(math.zeroFill(param2)).toBe('10');
    expect(math.zeroFill(param3)).toBe('-01.1');
    expect(math.zeroFill(param4)).toBe('num');
  });
});

describe('max test', () => {
  test('MAX: input is a number array', () => {
    const param = [1, 2, 3];
    expect(math.max(param)).toBe(3);
  });
  test('MAX: input is a number-like string array', () => {
    const param = ['1', '2', '3'];
    expect(math.max(param)).toBe(3);
  });
  test('MAX: input includes number and number-like string', () => {
    const param = [1, 2, '3'];
    expect(math.max(param)).toBe(3);
  });
  test('MAX: input input is invalid', () => {
    const param = ['a', 1];
    expect(math.max(param)).toBeUndefined();
  });
});

describe('min test', () => {
  test('MIN: input is a number array', () => {
    const param = [1, 2, 3];
    expect(math.min(param)).toBe(1);
  });
  test('MIN: input is a number-like string array', () => {
    const param = ['1', '2', '3'];
    expect(math.min(param)).toBe(1);
  });
  test('MIN: input includes number and number-like string', () => {
    const param = [1, 2, '3'];
    expect(math.min(param)).toBe(1);
  });
  test('MIN: input input is invalid', () => {
    const param = ['a', 1];
    expect(math.min(param)).toBeUndefined();
  });
});

describe('intersection test', () => {
  test('INTERSECTION: two arries has intersection', () => {
    const result = math.intersection([1, 2, 3], [1, 2]);
    expect(result).toEqual([1, 2]);
  });
  test('INTERSECTION: two arraies has no interaction by different type', () => {
    const result = math.intersection([1, 2], ['1', '2'] as unknown as number[]);
    expect(result).toEqual([]);
  });
});

describe('union test', () => {
  test('UNION: return the union of two arries with same type', () => {
    const result = math.union([1, 2], [1, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
  test('UNION: return the union of two arries with different types', () => {
    const result = math.union([1, 2], ['1', '2']);
    expect(result).toEqual([1, 2, '1', '2']);
  });
});
