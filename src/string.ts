/**
 * @desc 隐藏手机中间四位数字
 * @param num string
 */
export const encryptedPhone = (num: string | number): string | number => {
  if (num.toString().length < 11) {
    throw new Error('phone number must be 11 degits');
  }
  return num.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};
/**
 * @desc 将字符串首字母大写
 * @param str string
 */
export const transFirstLetterBy = (str: string, to: 'upper' | 'lower'): string => {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/^\S/, (L) => (to === 'upper' ? L.toUpperCase() : L.toLowerCase()));
};
/**
 * @desc 返回指定数量的空格
 * @param num number 空格数量, 默认为1
 */
export const whiteSpace = (num = 1): string => '\xa0'.repeat(num);

/*
 * @desc 字符串转小驼峰格式(camel-case)
 */
export const camelCase = (str: string): string => {
  const matches = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as RegExpExecArray;
  const s = matches.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/*
 * @desc 字符串转大驼峰格式(pascal-case)
 */
export const pascalCase = (str: string): string => {
  const matches = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as RegExpExecArray;
  return matches.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join('');
};
