import * as object from '@src/object';
const mockObj = {
  name: 'utils',
  star: 999,
  issues: {
    good: 111,
    bad: 1,
  },
};
describe('pick test', () => {
  test('PICK: the second arg is not an array', () => {
    const result = object.pick(mockObj, 'name' as unknown as string[]);
    expect(result).toEqual(mockObj);
  });
  test('PICK: arr is not a valid array', () => {
    const result = object.pick(mockObj, ['names']);
    expect(result).toEqual({});
  });
  test('PICK: return right', () => {
    const result = object.pick(mockObj, ['issues']);
    expect(result).toEqual({ issues: { good: 111, bad: 1 } });
  });
  test('PICKBY', () => {
    const result = object.pickBy({ a: 1, b: 2, c: 3 }, (el) => el > 1);
    expect(result).toEqual({ b: 2, c: 3 });
  });
  test('OBJECTTRUEVALUE', () => {
    const demoObj = {
      a: 1,
      b: null,
      c: {},
    };
    const result = object.objectTrueValue(demoObj);
    expect(result).toEqual({
      a: 1,
      c: {},
    });
  });
});

describe('omit test', () => {
  test('OMIT: the second arg is not an array', () => {
    const result = object.omit(mockObj, 'name' as unknown as string[]);
    expect(result).toEqual(mockObj);
  });
  test('OMIT: return right', () => {
    const result = object.omit(mockObj, ['issues']);
    expect(result).toEqual({ name: 'utils', star: 999 });
  });
  test('OMITBY', () => {
    const result = object.omitBy({ a: 1, b: 2, c: 3 }, (el) => el > 1);
    expect(result).toEqual({ a: 1 });
  });
});
