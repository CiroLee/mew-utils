import * as str from '@src/string';

describe('encryptedPhone test', () => {
  test('ENCRYPTEDPHONE: invalid phone and return itself', () => {
    const phoneNum = 123456;
    expect(() => {
      str.encryptedPhone(phoneNum);
    }).toThrowError();
  });
  test('ENCRYPTEDPHONE: valid phone number and hide its middle four digits', () => {
    const phoneNum = 13700001111;
    const result = str.encryptedPhone(phoneNum);
    expect(result).toBe('137****1111');
  });
});

describe('upperCaseFirstLetter test', () => {
  test('UPPERCASEFIRSTLETTER: param is a string, to upper', () => {
    const param = 'i am a boy';
    expect(str.transFirstLetterBy(param, 'upper')).toBe('I am a boy');
  });
  test('TRANSFIRSTLETTERBY: to lower', () => {
    const param = 'I am A boy';
    expect(str.transFirstLetterBy(param, 'lower')).toBe('i am A boy');
  });
  test('UPPERCASEFIRSTLETTER: param is a not string', () => {
    const param = ['i am a boy'];
    expect(str.transFirstLetterBy(param as unknown as string, 'lower')).toEqual(param);
  });
});

describe('whiteSpace test', () => {
  test('whitespace: fill 2 spaces before the string', () => {
    const result = `${str.whiteSpace(2)}123`;
    expect(result).toHaveLength(5);
    expect(result.match(/\s/g)).toHaveLength(2);
  });
});

describe('string case convert test', () => {
  test('camelCase', () => {
    const strArr = [
      {
        s: 'foo-bar',
        v: 'fooBar',
      },
      {
        s: 'foo_bar',
        v: 'fooBar',
      },
      {
        s: 'Foo-Bar',
        v: 'fooBar',
      },
      {
        s: 'Foo-bar',
        v: 'fooBar',
      },
      {
        s: '_foo-bar',
        v: 'fooBar',
      },
    ];
    strArr.forEach((el) => {
      expect(str.camelCase(el.s)).toBe(el.v);
    });
  });
  test('pascalCase', () => {
    const strArr = [
      {
        s: 'foo-bar',
        v: 'FooBar',
      },
      {
        s: 'foo_bar',
        v: 'FooBar',
      },
      {
        s: 'Foo-Bar',
        v: 'FooBar',
      },
      {
        s: 'Foo-bar',
        v: 'FooBar',
      },
      {
        s: '_foo-bar',
        v: 'FooBar',
      },
    ];
    strArr.forEach((el) => {
      expect(str.pascalCase(el.s)).toBe(el.v);
    });
  });
  test('snakeCase', () => {
    const strArr = [
      {
        s: 'foo-bar',
        v: 'foo_bar',
      },
      {
        s: 'Foo-Bar',
        v: 'foo_bar',
      },
      {
        s: 'Foo-bar',
        v: 'foo_bar',
      },
      {
        s: 'foo bar',
        v: 'foo_bar',
      },
      {
        s: 'Foo-bar rest',
        v: 'foo_bar_rest'
      }
    ];
    strArr.forEach((el) => {
      expect(str.snakeCase(el.s)).toBe(el.v);
    });
  });
  test('kebabCase', () => {
    const strArr = [
      {
        s: 'fooBar',
        v: 'foo-bar',
      },
      {
        s: 'FooBar',
        v: 'foo-bar',
      },
      {
        s: 'foo bar',
        v: 'foo-bar',
      },
      {
        s: 'Foo-bar rest',
        v: 'foo-bar-rest'
      }
    ];
    strArr.forEach((el) => {
      expect(str.kebabCase(el.s)).toBe(el.v);
    });
  });
});

describe('replaceAr and deleteAt test', () => {
  test('deleteAt', () => {
    expect(str.deleteAt('footbar', 3)).toBe('foobar');
  });
  test('replaceAt', () => {
    expect(str.replaceAt('footbar', 3, 'T')).toBe('fooTbar');
  });
});
