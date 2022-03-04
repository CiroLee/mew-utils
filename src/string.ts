/**
 * @desc 隐藏手机中间四位数字
 * @param num string
 */
export const encryptedPhone = (num: string | number): string | number => {
  if (num.toString().length < 11) {
    console.error('invalid phone number, its length should be 11');
    return num;
  }
  return num.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};
/**
 * @desc 将字符串首字母大写
 * @param str string
 */
export const upperCaseFirstLetter = (str: string): string => {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/^\S/, L => L.toUpperCase());
};
/**
 * @desc 返回指定数量的空格
 * @param num number 空格数量, 默认为1
 */
export const whiteSpace = (num = 1): string => '\xa0'.repeat(num);
