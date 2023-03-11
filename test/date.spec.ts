import * as date from '@src/date';
const mockDate = new Date('2022-1-18 12:12:12'); // 星期二
const mockWeeks = ['日', ' 一', '二', '三', '四', '五', '六'];
describe('week test', () => {
  test('WEEK: get week by Date input', () => {
    const week = date.week(mockDate);
    expect(week).toBe('二');
  });
  test('WEEK: get week by a string which is not a number nor can not be transformed to Date', () => {
    expect(date.week('date')).toBe(null);
  });
  test('WEEK: get day of week', () => {
    const week = date.week();
    expect(mockWeeks).toContain(week);
  });
  test('WEEK: return english week', () => {
    const week = {
      date: mockDate,
      lang: 'en',
    };
    expect(date.week(week)).toBe('Tuesday');
  });
  test('WEEK: return english abbreviated week', () => {
    const week = {
      date: mockDate,
      lang: 'en',
      abbr: true,
    };
    expect(date.week(week)).toBe('Tue.');
  });
  test('WEEK: return null', () => {
    const week = {
      date: 'date',
      lang: 'en',
    };
    expect(date.week({ ...week, abbr: true })).toBeNull();
    expect(date.week(week)).toBeNull();
  });
});

describe('dateFormat test', () => {
  test('DATEFORMAT: no option', () => {
    const result = date.dateFormat(mockDate);
    expect(result).toBe('2022-01-18 12:12:12');
  });
  test('DATEFORMAT: option is string type', () => {
    const result = date.dateFormat(mockDate, 'yyyy/mm/dd');
    expect(result).toBe('2022/01/18');
  });
  test('DATEFORMAT: option is object', () => {
    const result = date.dateFormat(mockDate, {
      format: 'yyyy/mm/dd HH:MM',
      padZero: false,
    });
    expect(result).toBe('2022/1/18 12:12');
  });
  test('DATEFORMAT: date is timestamp', () => {
    // github action 在美区， 时区差8h
    const result = date.dateFormat(1642479132 * 1000 + 28800000);
    expect(result).toBe('2022-01-18 12:12:12');
  });
  test('DATEFORMAT: format is invalid', () => {
    const result = date.dateFormat(1642479132 * 1000, 'yy-mm-dd');
    expect(result).toBe('yy-01-18');
  });
  test('DATEFORMAT: padZero is false', () => {
    const result = date.dateFormat(1642479132 * 1000 + 28800000, {
      padZero: false,
    });
    expect(result).toBe('2022-1-18 12:12:12');
  });
});
