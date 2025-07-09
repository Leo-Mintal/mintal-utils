// 校验工具类
export class MValidateUtil {
  /**
   * 校验是否为邮箱格式
   * @param str 待校验字符串
   * @returns 是否为邮箱 true/false
   */
  static isEmail(str: string): boolean {
    return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(str);
  }

  /**
   * 校验是否为中国大陆手机号格式
   * @param str 待校验字符串
   * @returns 是否为手机号 true/false
   */
  static isPhone(str: string): boolean {
    return /^1[3-9]\d{9}$/.test(str);
  }

  /**
   * 校验是否为URL
   * @param str 待校验字符串
   * @returns 是否为URL true/false
   */
  static isURL(str: string): boolean {
    return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(str);
  }

  /**
   * 校验是否为中国身份证号（18位）
   * @param str 待校验字符串
   * @returns 是否为身份证号 true/false
   */
  static isIDCard(str: string): boolean {
    return /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9Xx]$/.test(str);
  }

  /**
   * 校验是否为中文
   * @param str 待校验字符串
   * @returns 是否为中文 true/false
   */
  static isChinese(str: string): boolean {
    return /^[\u4e00-\u9fa5]+$/.test(str);
  }

  /**
   * 校验是否为纯数字
   * @param str 待校验字符串
   * @returns 是否为数字 true/false
   */
  static isNumber(str: string): boolean {
    return /^\d+$/.test(str);
  }

  /**
   * 校验是否为IPv4地址
   * @param str 待校验字符串
   * @returns 是否为IPv4 true/false
   */
  static isIPv4(str: string): boolean {
    return /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/.test(str);
  }

  /**
   * 校验是否为中国邮政编码
   * @param str 待校验字符串
   * @returns 是否为邮政编码 true/false
   */
  static isPostalCode(str: string): boolean {
    return /^\d{6}$/.test(str);
  }

  /**
   * 校验是否为中国车牌号
   * @param str 待校验字符串
   * @returns 是否为车牌号 true/false
   */
  static isPlateNumber(str: string): boolean {
    return /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z0-9]{5}$/.test(str);
  }
}

export default MValidateUtil;