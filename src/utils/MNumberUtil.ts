// 数字工具类
export class MNumberUtil {
  /**
   * 四舍五入强制保留两位小数
   * @param num 输入数字
   * @returns 保留两位小数的数字
   */
  static toDecimal2(num: number): number {
    return +num.toFixed(2);
  }
}

export default MNumberUtil;