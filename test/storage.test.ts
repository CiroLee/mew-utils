import { Storage } from '@src/storage';
describe('Storge test', () => {
  beforeEach(() => {
    Storage.delete('test');
  });
  test('STORAGE: set a valid storage with expireHour', () => {
    const result = Storage.set('test', { val: 123 }, 1);
    expect(result).toBeTruthy();
  });
  test('STORAGE: set a invalid storage with non-json value', () => {
    const a: any = {};
    a.b = a;
    const val = a;
    const result = Storage.set('test', val, 1);
    expect(result).toBeFalsy();
  });
  test('STORAGE: empty storage', () => {
    const result = Storage.get('a');
    expect(result).toBeNull();
  });
  test('STORAGE: set expire storage and get with ignore = true', () => {
    Storage.set('test', 123, 0);
    const result = Storage.get('test', true);
    expect(result).toBe(123);
  });
  test('STORAGE: set expire storage and get with ignore = false', () => {
    Storage.set('test', 123, 0);
    const result = Storage.get('test', false);

    expect(result).toBeNull();
  });
});
