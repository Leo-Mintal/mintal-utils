// 金钱工具类
export class MMoneyUtil {
  /**
   * 将十位数以内金额转为大写中文
   * @param num 金额（数字或字符串）
   * @returns 大写中文金额字符串
   */
  static num2ChineseNum(num: number | string): string {
    if (typeof num === "number") {
      num = String(num);
    }
    num = num.replace(/,/g, "").replace(/ /g, "").replace(/￥/g, "");
    if (isNaN(Number(num))) return "";
    const part = String(num).split(".");
    let newchar = "";
    for (let i = part[0].length - 1; i >= 0; i--) {
      if (part[0].length > 10) return "";
      let tmpnewchar = "";
      const perchar = part[0].charAt(i);
      switch (perchar) {
        case "0": tmpnewchar = "零" + tmpnewchar; break;
        case "1": tmpnewchar = "壹" + tmpnewchar; break;
        case "2": tmpnewchar = "贰" + tmpnewchar; break;
        case "3": tmpnewchar = "叁" + tmpnewchar; break;
        case "4": tmpnewchar = "肆" + tmpnewchar; break;
        case "5": tmpnewchar = "伍" + tmpnewchar; break;
        case "6": tmpnewchar = "陆" + tmpnewchar; break;
        case "7": tmpnewchar = "柒" + tmpnewchar; break;
        case "8": tmpnewchar = "捌" + tmpnewchar; break;
        case "9": tmpnewchar = "玖" + tmpnewchar; break;
      }
      switch (part[0].length - i - 1) {
        case 0: tmpnewchar += "元"; break;
        case 1: if (perchar !== "0") tmpnewchar += "拾"; break;
        case 2: if (perchar !== "0") tmpnewchar += "佰"; break;
        case 3: if (perchar !== "0") tmpnewchar += "仟"; break;
        case 4: tmpnewchar += "万"; break;
        case 5: if (perchar !== "0") tmpnewchar += "拾"; break;
        case 6: if (perchar !== "0") tmpnewchar += "佰"; break;
        case 7: if (perchar !== "0") tmpnewchar += "仟"; break;
        case 8: tmpnewchar += "亿"; break;
        case 9: tmpnewchar += "拾"; break;
      }
      newchar = tmpnewchar + newchar;
    }
    if (num.indexOf(".") !== -1) {
      if (part[1].length > 2) part[1] = part[1].substr(0, 2);
      for (let i = 0; i < part[1].length; i++) {
        let tmpnewchar = "";
        const perchar = part[1].charAt(i);
        switch (perchar) {
          case "0": tmpnewchar = "零" + tmpnewchar; break;
          case "1": tmpnewchar = "壹" + tmpnewchar; break;
          case "2": tmpnewchar = "贰" + tmpnewchar; break;
          case "3": tmpnewchar = "叁" + tmpnewchar; break;
          case "4": tmpnewchar = "肆" + tmpnewchar; break;
          case "5": tmpnewchar = "伍" + tmpnewchar; break;
          case "6": tmpnewchar = "陆" + tmpnewchar; break;
          case "7": tmpnewchar = "柒" + tmpnewchar; break;
          case "8": tmpnewchar = "捌" + tmpnewchar; break;
          case "9": tmpnewchar = "玖" + tmpnewchar; break;
        }
        if (i === 0) tmpnewchar += "角";
        if (i === 1) tmpnewchar += "分";
        newchar += tmpnewchar;
      }
    }
    while (newchar.search("零零") !== -1) newchar = newchar.replace("零零", "零");
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
    if (newchar.charAt(newchar.length - 1) === "元") newchar += "整";
    return newchar;
  }
  /**
   * 保留指定位数的小数（截断）
   * @param num 数字字符串
   * @param digits 保留位数，默认2
   * @returns 截断后的小数字符串
   */
  static toDecimalSplit(num: string, digits = 2): string {
    const position = num.indexOf(".");
    if (position !== -1) {
      if (num.length - position < digits) {
        num += "0".repeat(digits);
      }
      return num.substring(0, position + 1 + digits);
    } else {
      return Number(num).toFixed(digits);
    }
  }
  /**
   * 保留指定位数的小数（四舍五入）
   * @param num 数字或字符串
   * @param digits 保留位数，默认2
   * @returns 四舍五入后的小数字符串
   */
  static toDecimal(num: number | string, digits = 2): string {
    return parseFloat(num as string).toFixed(digits);
  }
}

export default MMoneyUtil;