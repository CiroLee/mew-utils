import * as validator from '@src/validator';
const mockArr = [1, 2, -1, 0];

describe('isAllTrue test', () => {
  test('ISALLTRUE: isAllTrue that uses default callback function', () => {
    const result = validator.isAlltrue(mockArr);
    expect(result).toBeFalsy();
  });
  test('ISALLTRUE: isAllTure that uses custom callback function', () => {
    const result = validator.isAlltrue(mockArr, (item: number) => item > -1);
    expect(result).toBeFalsy();
  });
});

describe('isAnyTrue test', () => {
  test('ISANYTRUE: isAnyTrue that use default callback function', () => {
    const reuslt = validator.isAnytrue(mockArr);
    expect(reuslt).toBeTruthy();
  });
  test('ISANYTRUE: isAnyTure that uses custom callback function', () => {
    const result = validator.isAnytrue(mockArr, (item: number) => item > -1);
    expect(result).toBeTruthy();
  });
});

describe('isNumberLike test', () => {
  test('ISNUMBERLIKE: input is number-like string', () => {
    expect(validator.isNumberLike('1')).toBeTruthy();
  });
  test('ISNUMBERLIKE: input is not a number-like string', () => {
    expect(validator.isNumberLike({ n: 123 })).toBeFalsy();
  });
  test('ISNUMBERLIKE: input is hexadecimal color', () => {
    expect(validator.isNumberLike('0xFF0000')).toBeTruthy();
  });
});

describe('isEmptyObject test', () => {
  test('ISEMPTYOBJECT: param is an not-empty array', () => {
    const param = [1, 2, 3];
    expect(validator.isEmptyObject(param)).toBeFalsy();
  });
  test('ISEMPTYOBJECT: param is an empty array', () => {
    const param: unknown[] = [];
    expect(validator.isEmptyObject(param)).toBeTruthy();
  });
  test('ISEMPTYOBJECT: param is an empty object', () => {
    const param = {};
    expect(validator.isEmptyObject(param)).toBeTruthy();
  });
  test('ISEMPTYOBJECT: param is not an empty object', () => {
    const param = { a: 1 };
    expect(validator.isEmptyObject(param)).toBeFalsy();
  });
  test('ISEMPTYOBJECT: param is null', () => {
    const param = null;
    expect(validator.isEmptyObject(param)).toBeFalsy();
  });
});
