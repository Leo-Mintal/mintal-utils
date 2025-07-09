import NP from "number-precision";

export class MCalcUtil {
  /**
   * 计算表格列宽
   * @param charLength 字符长度，默认20
   * @param sortable 是否可排序，默认false
   * @returns 列宽（像素）
   */
  static calcColumnWidth(charLength = 20, sortable = false): number {
    const fixed = 36;
    return charLength * 8 + fixed + (sortable ? 16 : 0);
  }
  /**
   * 高精度加法
   * @param args 加数列表
   * @returns 结果
   */
  static plus(...args: (number | string)[]): number {
    return NP.plus(...args);
  }
  /**
   * 高精度减法
   * @param args 被减数和减数
   * @returns 结果
   */
  static minus(...args: (number | string)[]): number {
    return NP.minus(...args);
  }
  /**
   * 高精度乘法
   * @param args 因数列表
   * @returns 结果
   */
  static times(...args: (number | string)[]): number {
    return NP.times(...args);
  }
  /**
   * 高精度除法
   * @param args 被除数和除数
   * @returns 结果
   */
  static divide(...args: (number | string)[]): number {
    return NP.divide(...args);
  }
  /**
   * 高精度四舍五入
   * @param number 数值
   * @param ratio 保留小数位数
   * @returns 结果
   */
  static round(number: number | string, ratio: number): number {
    return NP.round(number, ratio);
  }
}

export default MCalcUtil;