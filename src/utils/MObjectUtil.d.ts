export declare class MObjectUtil {
  static diff(object1: any, object2: any): Record<string, any>;
  static getTypeByObj(data: any): string;
  static judgeType(data: any, judge: string): boolean;
  static isEmptyObject(obj: any): boolean;
  static isEmpty(obj: any): boolean;
  static isObject(data: any): boolean;
  static deepClone<T>(obj: T): T;
  static equals(object1: any, object2: any): boolean;
}
export default MObjectUtil;