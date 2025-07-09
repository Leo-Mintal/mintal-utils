
export class MObjectUtil {
  static diff(object1: any, object2: any): Record<string, any> {
    if (!object1 || MObjectUtil.isEmptyObject(object1) || !object2 || MObjectUtil.isEmptyObject(object2)) {
      return {};
    }
    const diffResult: Record<string, any> = {};
    for (const property1 in object1) {
      let isModify = true;
      let oldPropertyValue: any = null;
      for (const property2 in object2) {
        if (property1 === property2) {
          if (object1[property1] === object2[property2]) {
            isModify = false;
          } else {
            oldPropertyValue = object2[property2];
          }
          break;
        }
      }
      if (isModify) {
        diffResult[property1] = object1[property1];
        diffResult[property1 + "Old"] = oldPropertyValue;
      }
    }
    return diffResult;
  }
  static getTypeByObj(data: any): string {
    return Object.prototype.toString.call(data).match(/^\[object ([a-zA-Z]*)\]$/)?.[1] || '';
  }
  static judgeType(data: any, judge: string): boolean {
    return this.getTypeByObj(data).toLowerCase() === judge.toLowerCase();
  }
  /**
   * 判断对象是否为空（无可枚举属性）
   * @param obj 任意对象
   * @returns 是否为空对象
   */
  static isEmptyObject(obj: any): boolean {
    if (obj == null || obj == undefined || obj == "undefined") return true;
    for (const key in obj) return false;
    return true;
  }
  static isEmpty(obj: any): boolean {
    if (obj == null || obj === "") return true;
    if (obj == undefined || obj == "undefined") return true;
    return false;
  }
  static isObject(data: any): boolean {
    return typeof data === "object";
  }
  /**
   * 深拷贝对象
   * @param obj 任意对象
   * @returns 深拷贝后的新对象
   */
  static deepClone<T>(obj: T): T {
    if (MObjectUtil.judgeType(obj, "function")) return obj;
    if (["string", "number", "Boolean", "undefined", "null"].some(type => MObjectUtil.judgeType(obj, type))) return obj;
    const objClone: any = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
      for (const key in obj) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = this.deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
    return objClone;
  }
  static equals(object1: any, object2: any): boolean {
    if (MObjectUtil.isEmptyObject(object1) && MObjectUtil.isEmptyObject(object2)) return true;
    if (MObjectUtil.isEmptyObject(object1) && !MObjectUtil.isEmptyObject(object2)) return false;
    if (!MObjectUtil.isEmptyObject(object1) && MObjectUtil.isEmptyObject(object2)) return false;
    const object1KeyNum = Object.keys(object1).length;
    const object2KeyNum = Object.keys(object2).length;
    if (object1KeyNum !== object2KeyNum) return false;
    for (const key1 in object1) {
      if (object2[key1] === undefined) return false;
      const value1 = object1[key1];
      const value2 = object2[key1];
      if (MObjectUtil.isEmpty(value1) && MObjectUtil.isEmpty(value2)) continue;
      if (MObjectUtil.isEmpty(value1) && !MObjectUtil.isEmpty(value2)) return false;
      if (!MObjectUtil.isEmpty(value1) && MObjectUtil.isEmpty(value2)) return false;
      if (value1 instanceof Date) {
        if (value2 instanceof Date) {
          if (value1.getTime() !== value2.getTime()) return false;
        } else {
          try {
            const value2ToDate = new Date(value2);
            if (value1.getTime() !== value2ToDate.getTime()) return false;
          } catch (e) {
            return false;
          }
        }
      } else if (value2 instanceof Date) {
        if (value1 instanceof Date) {
          if (value2.getTime() !== value1.getTime()) return false;
        } else {
          try {
            const value1ToDate = new Date(value1);
            if (value2.getTime() !== value1ToDate.getTime()) return false;
          } catch (e) {
            return false;
          }
        }
      } else if (typeof value1 === "object" && typeof value2 === "object") {
        if (!MObjectUtil.equals(value1, value2)) return false;
      } else if (value1 !== value2) {
        return false;
      }
    }
    return true;
  }
  // ... 省略部分方法，可根据需要继续补充 ...
}

export default MObjectUtil;
