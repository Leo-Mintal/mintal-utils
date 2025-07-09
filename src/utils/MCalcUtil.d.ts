export declare class MCalcUtil {
  static calcColumnWidth(charLength?: number, sortable?: boolean): number;
  static plus(...args: (number | string)[]): number;
  static minus(...args: (number | string)[]): number;
  static times(...args: (number | string)[]): number;
  static divide(...args: (number | string)[]): number;
  static round(number: number | string, ratio: number): number;
}
export default MCalcUtil;