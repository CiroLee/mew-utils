import { Cookie } from '@src/cookie';
import { CookieParam } from '@src/types';
let mockCookieSet: jest.SpyInstance<void, [CookieParam]>;
let mockCookieDelete: jest.SpyInstance<void>;

describe('cookie test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Cookie.delete();
    mockCookieSet = jest.spyOn(Cookie, 'set');
    mockCookieDelete = jest.spyOn(Cookie, 'delete');
  });
  test('COOKIE: get cookie that returns null', () => {
    expect(Cookie.get()).toBeNull();
  });
  test('COOKIE: set cookie with a not expired time and get it', () => {
    Cookie.set({
      name: 'user',
      value: 'utils',
      domain: 'localhost',
    });
    expect(mockCookieSet).toBeCalledTimes(1);
    expect(Cookie.get()).toEqual({ user: 'utils' });
  });
  test('COOKIE: set cookie that with an expired time and get it', () => {
    Cookie.set({
      name: 'age',
      value: '11',
      expireHour: -1,
    });
    expect(mockCookieSet).toBeCalledTimes(2);
    expect(Cookie.get('age')).toBeFalsy();
  });

  test('COOKIE: delete all cookies', () => {
    Cookie.delete();
    expect(mockCookieDelete).toHaveBeenCalledTimes(2);
  });

  test('COOKIE: delete cookie by name param', () => {
    Cookie.set({ name: 'a', value: '1' });
    Cookie.set({ name: 'b', value: '2' });
    Cookie.delete('b');

    expect(mockCookieDelete).toHaveBeenCalledTimes(2);
    expect(Cookie.get('b')).toBeUndefined();
    expect(Cookie.get()).toEqual({ a: '1' });
  });
});
