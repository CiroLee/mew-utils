import * as validator from '@src/validator';
const mockArr = [1, 2, -1, 0];

describe('isAllTrue test', () => {
  test('isAllTrue: isAllTrue that uses default callback function', () => {
    const result = validator.isAllTrue(mockArr);
    expect(result).toBeFalsy();
  });
  test('isAllTrue: isAllTure that uses custom callback function', () => {
    const result = validator.isAllTrue(mockArr, (item: number) => item > -1);
    expect(result).toBeFalsy();
  });
});

describe('isAnyTrue test', () => {
  test('isAnyTrue: isAnyTrue that use default callback function', () => {
    const reuslt = validator.isAnyTrue(mockArr);
    expect(reuslt).toBeTruthy();
  });
  test('isAnyTrue: isAnyTure that uses custom callback function', () => {
    const result = validator.isAnyTrue(mockArr, (item: number) => item > -1);
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

describe('isLeap test', () => {
  test('ISLEAP: judge input year is leap', () => {
    const year1 = 1996;
    const year2 = 2001;
    const year3 = 2100;
    const year4 = 2400;
    expect(validator.isLeap(year1)).toBeTruthy();
    expect(validator.isLeap(year2)).toBeFalsy();
    expect(validator.isLeap(year3)).toBeFalsy();
    expect(validator.isLeap(year4)).toBeTruthy();
  });
});

describe('isValidDate test', () => {
  test('ISVALIDDATE: assert the input is valid date', () => {
    const d1 = '2022年12月12日';
    const d2 = '2022 12 12';
    const d3 = '2022-12-12T12:12:00';
    const d4 = '2022-12-12 T12:12:00';
    const d5 = {};

    expect(validator.isValidDate(d1)).toBeFalsy();
    expect(validator.isValidDate(d2)).toBeTruthy();
    expect(validator.isValidDate(d3)).toBeTruthy();
    expect(validator.isValidDate(d4)).toBeFalsy();
    expect(validator.isValidDate(d5)).toBeFalsy();
  });
});
