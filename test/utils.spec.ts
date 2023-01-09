import * as utils from '@src/utils';

describe('getType function test', () => {
  test('GETTYPE: undefined type', () => {
    expect(utils.getType()).toBe('undefined');
  });
  test('GETTYPE: null type', () => {
    expect(utils.getType(null)).toBe('null');
  });
  test('GETTYPE: number type', () => {
    expect(utils.getType(123)).toBe('number');
  });
  test('GETTYPE: boolean type', () => {
    expect(utils.getType(false)).toBe('boolean');
  });
  test('GETTYPE: string type', () => {
    expect(utils.getType('use-utils')).toBe('string');
  });
  test('GETTYPE: Array type', () => {
    expect(utils.getType([])).toBe('array');
  });
  test('GETYPE: Object type', () => {
    expect(utils.getType({})).toBe('object');
  });
  test('GETTYPE: Function type', () => {
    expect(
      utils.getType(() => {
        console.log(123);
      }),
    ).toBe('function');
  });
  test('GETTYPE: Date type', () => {
    expect(utils.getType(new Date('2022'))).toBe('date');
  });
  test('THROTTLE: throttle test', (done) => {
    const mockFn = jest.fn();
    // async call throttle twice
    const fn = utils.throttle(mockFn, 10);
    fn(1);
    fn(2);

    setTimeout(() => {
      const calls = mockFn.mock.calls;
      expect(calls.length).toBe(1);
      expect(calls[0][1]).toEqual([1]);
      done();
    }, 50);
  });
  test('DEBOUNCE: debounce test', (done) => {
    const mockFn = jest.fn();
    // async call throttle twice
    const fn = utils.debounce(mockFn, 10);
    fn(1);
    fn(2);

    setTimeout(() => {
      const calls = mockFn.mock.calls;
      expect(calls.length).toBe(1);
      expect(calls[0][0]).toEqual(2);
      done();
    }, 50);
  });
});
