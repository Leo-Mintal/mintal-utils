import moment from "moment";
export declare class MTimeUtil {
  static dateType(type: string): boolean;
  static dateFormat(format: string): number;
  static timeObject(time: string | Date): any;
  static getCurrentDate(format?: string): string;
  static getFirstDays(
    time?: string | Date,
    type?: string,
    format?: string,
    startDay?: string
  ): string;
  static minutesTransition(data: string | number): any;
  static transitionMinutes(data: string | number, type?: string): number;
  static transferTimeFormat(time: string | Date, format?: string): string;
  static currentDateAdd(
    data: string | number,
    type: string,
    time?: string | Date,
    format?: string
  ): string;
  static compareTime(timeStamp1: string | Date, timeStamp2: string | Date): number;
  static timeDifference(timeStamp1: string | Date, timeStamp2: string | Date, type?: string): number;
  static getCurrentTimestamp(): number;
  static formatTimestamp(timestamp: number, format?: string): string;
}
export default MTimeUtil;