export declare class MArrayUtil {
  static getIntersection<T>(arr1: T[], arr2: T[]): T[];
  static getUnion<T>(arr1: T[], arr2: T[]): T[];
  static hasOneOf<T>(targetArr: T[], arr: T[]): boolean;
  static isEmpty(arr: any[]): boolean;
  static splitByProp<T>(arr: T[], prop: keyof T): any[];
}
export default MArrayUtil;