import * as str from '@src/string';

describe('encryptedPhone test', () => {
  test('ENCRYPTEDPHONE: invalid phone and return itself', () => {
    const phomeNum = 123456;
    expect(() => {
      str.encryptedPhone(phomeNum);
    }).toThrowError();
  });
  test('ENCRYPTEDPHONE: valid phone number and hide its middle four digits', () => {
    const phomeNum = 13700001111;
    const result = str.encryptedPhone(phomeNum);
    expect(result).toBe('137****1111');
  });
});

describe('upperCaseFirstLetter test', () => {
  test('UPPERCASEFIRSTLETTER: param is a string', () => {
    const param = 'i am a boy';
    expect(str.upperCaseFirstLetter(param)).toBe('I am a boy');
  });
  test('UPPERCASEFIRSTLETTER: param is a not string', () => {
    const param = ['i am a boy'];
    expect(str.upperCaseFirstLetter(param as unknown as string)).toEqual(param);
  });
});

describe('whiteSpace test', () => {
  test('whitespace: fill 2 spaces before the string', () => {
    const result = `${str.whiteSpace(2)}123`;
    expect(result).toHaveLength(5);
    expect(result.match(/\s/g)).toHaveLength(2);
  });
});
