import { MStringUtil } from "./MStringUtil";
import moment from "moment";

const TIME_LANGUAGE_ZH = "zh-cn";

/**
 * 时间工具类(大写YYYY表示周年, MM为月, DD为日, HH为24小时制)
 */
export class MTimeUtil {
  static dateType(type: string): boolean {
    switch (type) {
      case "years":
      case "months":
      case "quarters":
      case "weeks":
      case "days":
      case "hours":
      case "minutes":
      case "seconds":
      case "milliseconds":
        return true;
      default:
        throw new Error("请输入正确的type格式");
    }
  }
  static dateFormat(format: string): number {
    const formatArr = format.split(" ");
    if (formatArr[0] === "yyyy-MM-DD" || formatArr[0] === "yyyy/MM/DD") {
      if (formatArr.length > 1) {
        if (formatArr[1] === "HH:mm" || formatArr[1] === "HH:mm:ss") {
          return 1;
        } else if (formatArr[1] === "hh:mm" || formatArr[1] === "hh:mm:ss") {
          return 2;
        } else {
          throw new Error("请输入正确的format时间格式");
        }
      }
      return 3;
    } else if (["HH:mm", "HH:mm:ss", "hh:mm", "hh:mm:ss"].includes(formatArr[0])) {
      return 4;
    } else {
      throw new Error("请输入正确的format日期格式");
    }
  }
  static timeObject(time: string | Date): any {
    const timeObj = moment(time).toObject();
    timeObj.months += 1;
    return timeObj;
  }
  static getCurrentDate(format = "yyyy-MM-DD HH:mm:ss"): string {
    return moment().format(format);
  }
  static getFirstDays(
    time: string | Date | undefined = undefined,
    type = "months",
    format = "yyyy-MM-DD HH:mm:ss",
    startDay = "firstDay"
  ): string {
    this.dateType(type);
    this.dateFormat(format);
    if (MStringUtil.isBlank(time as string)) {
      time = moment();
    }
    let times;
    if (startDay === "firstDay") {
      times = moment(time).locale(TIME_LANGUAGE_ZH).startOf(type as any).format(format);
    } else if (startDay === "lastDay") {
      times = moment(time).locale(TIME_LANGUAGE_ZH).endOf(type as any).format(format);
    } else {
      throw new Error("getFirstDays中请输入正确的需要(第一天:firstDay / 最后一天:lastDay)");
    }
    return times;
  }
  static minutesTransition(data: string | number): any {
    return {
      seconds: Math.floor(moment.duration(data, "minutes").asSeconds()),
      hours: Math.floor(moment.duration(data, "minutes").asHours()),
      days: Math.floor(moment.duration(data, "minutes").asDays()),
      weeks: Math.floor(moment.duration(data, "minutes").asWeeks()),
      months: Math.floor(moment.duration(data, "minutes").asMonths()),
      years: Math.floor(moment.duration(data, "minutes").asYears()),
    };
  }
  static transitionMinutes(data: string | number, type = "days"): number {
    this.dateType(type);
    return moment.duration(data, type as any).asMinutes();
  }
  static transferTimeFormat(time: string | Date, format = "yyyy-MM-DD HH:mm:ss"): string {
    return moment(time).format(format);
  }
  static currentDateAdd(
    data: string | number,
    type: string,
    time: string | Date | undefined = undefined,
    format = "yyyy-MM-DD HH:mm:ss"
  ): string {
    this.dateType(type);
    this.dateFormat(format);
    if (MStringUtil.isBlank(time as string)) {
      time = moment();
    }
    if (parseInt(data as string)) {
      return moment(time).add(data, type as any).format(format);
    } else {
      throw new Error("currentDateAdd方法中data请输入数字");
    }
  }
  static compareTime(timeStamp1: string | Date, timeStamp2: string | Date): number {
    const t1 = moment(timeStamp1);
    const t2 = moment(timeStamp2);
    const diff = t1.diff(t2);
    if (isNaN(diff)) throw new Error("请在compareTime方法中传入正确的时间");
    if (diff > 0) return 1;
    if (diff === 0) return 0;
    return -1;
  }
  static timeDifference(timeStamp1: string | Date, timeStamp2: string | Date, type = "seconds"): number {
    this.dateType(type);
    const t1 = moment(timeStamp1);
    const t2 = moment(timeStamp2);
    return t1.diff(t2, type as any);
  }
  /**
   * 获取当前时间戳（秒）
   * @returns 当前时间戳（秒）
   */
  static getCurrentTimestamp(): number {
    return Math.floor(Date.now() / 1000);
  }
  /**
   * 格式化时间戳为指定格式
   * @param timestamp 时间戳（秒或毫秒）
   * @param format 格式化字符串，默认 'YYYY-MM-DD HH:mm:ss'
   * @returns 格式化后的时间字符串
   */
  static formatTimestamp(timestamp: number, format = 'YYYY-MM-DD HH:mm:ss'): string {
    // 判断时间戳是秒还是毫秒
    const ts = timestamp.toString().length === 10 ? timestamp * 1000 : timestamp;
    return moment(ts).format(format);
  }
  // ... 省略部分方法，可根据需要继续补充 ...
}

export default MTimeUtil;