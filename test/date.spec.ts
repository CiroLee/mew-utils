import * as date from '@src/date';
const mockDate = new Date('2022-1-18'); // 星期二
const mockWeeks = ['日', ' 一', '二', '三', '四', '五', '六'];
describe('date test', () => {
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
});
