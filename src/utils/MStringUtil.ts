// 字符串工具类
export class MStringUtil {
  /**
   * 下划线转换为驼峰
   * @param line 需要转换的下划线字符串
   * @param smallCamel 是否首字母大写（true=大写，false=小写）
   * @returns 转换后的驼峰字符串
   */
  static underline2Camel(line: string, smallCamel: boolean): string {
    if (!smallCamel) {
      return line.replace(/_(\w)/g, (_all, letter) => letter.toUpperCase());
    } else {
      return line.toLowerCase().replace(/\b([\w|']+)\b/g, (word: string) => {
        let newWord = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        return newWord.replace(/_(\w)/g, (_all, letter) => letter.toUpperCase());
      });
    }
  }

  /**
   * 驼峰转换下划线
   * @param camel 需要转换的驼峰字符串
   * @returns 转换后的下划线字符串
   */
  static camel2underline(camel: string): string {
    return camel.replace(/([A-Z])/g, "_$1").toLowerCase();
  }

  /**
   * 字符串是否为空
   * @param str 需要判断的字符串
   * @returns 是否为空 true/false
   */
  static isBlank(str: string | null | undefined): boolean {
    if (str == null) return true;
    if (typeof str !== "string") throw new Error("类型不匹配");
    return str.trim() === "";
  }

  /**
   * 字符串是否不为空
   * @param str 需要判断的字符串
   * @returns 是否不为空 true/false
   */
  static isNotBlank(str: string | null | undefined): boolean {
    return !MStringUtil.isBlank(str);
  }

  /**
   * 是否为小数
   * @param value 需要判断的值
   * @returns 是否为小数 true/false
   */
  static isDecimals(value: string | number): boolean {
    return String(value).indexOf(".") + 1 > 0;
  }

  /**
   * 生成x位16进制字符串
   * @param number 生成的长度
   * @returns 随机16进制字符串
   */
  static getRandom(number: number): string {
    const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let res = "";
    for (let i = 0; i < number; i++) {
      res += arr[Math.floor(Math.random() * 16)];
    }
    return res;
  }

  /**
   * base64转16进制字符串
   * @param base64 base64字符串
   * @returns 16进制字符串
   */
  static base64ToHEX(base64: string): string {
    const binary = atob(base64);
    let hex = '';
    for (let i = 0; i < binary.length; i++) {
      hex += ('0' + binary.charCodeAt(i).toString(16)).slice(-2);
    }
    return hex.toUpperCase();
  }

  /**
   * 16进制字符串转base64
   * @param str 16进制字符串
   * @returns base64字符串
   */
  static hexToBase64(str: string): string {
    let binary = '';
    for (let i = 0; i < str.length; i += 2) {
      binary += String.fromCharCode(parseInt(str.substr(i, 2), 16));
    }
    return btoa(binary);
  }

  /**
   * base64转bytes（Uint8Array）
   * @param base64 base64字符串
   * @returns Uint8Array字节数组
   */
  static base64ToBytes(base64: string): Uint8Array {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  /**
   * utf8转base64
   * @param utf8 utf8字符串
   * @returns base64字符串
   */
  static utf8ToBase64(utf8: string): string {
    return btoa(unescape(encodeURIComponent(utf8)));
  }

  /**
   * 判断字符串是否为邮箱格式
   * @param str 输入字符串
   * @returns 是否为邮箱
   */
  static isEmail(str: string): boolean {
    return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(str);
  }

  /**
   * 判断字符串是否为手机号格式
   * @param str 输入字符串
   * @returns 是否为手机号
   */
  static isPhone(str: string): boolean {
    return /^1[3-9]\d{9}$/.test(str);
  }

  /**
   * 反转字符串
   * @param str 输入字符串
   * @returns 反转后的字符串
   */
  static reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  /**
   * 移除字符串中所有空格
   * @param str 输入字符串
   * @returns 去除空格后的字符串
   */
  static removeAllSpaces(str: string): string {
    return str.replace(/\s+/g, '');
  }
}

export default MStringUtil;