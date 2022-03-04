import * as common from '@src/common';

describe('getType function test', () => {
  test('GETTYPE: undefined type', () => {
    expect(common.getType()).toBe('undefined');
  });
  test('GETTYPE: null type', () => {
    expect(common.getType(null)).toBe('null');
  });
  test('GETTYPE: number type', () => {
    expect(common.getType(123)).toBe('number');
  });
  test('GETTYPE: boolean type', () => {
    expect(common.getType(false)).toBe('boolean');
  });
  test('GETTYPE: string type', () => {
    expect(common.getType('use-utils')).toBe('string');
  });
  test('GETTYPE: Array type', () => {
    expect(common.getType([])).toBe('array');
  });
  test('GETYPE: Object type', () => {
    expect(common.getType({})).toBe('object');
  });
  test('GETTYPE: Function type', () => {
    expect(
      common.getType(() => {
        console.log(123);
      })
    ).toBe('function');
  });
  test('GETTYPE: Date type', () => {
    expect(common.getType(new Date('2022'))).toBe('date');
  });
});
