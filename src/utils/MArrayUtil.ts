import { MObjectUtil } from "./MObjectUtil";

export class MArrayUtil {
  /**
   * 获取两个数组的交集
   * @param arr1 第一个数组
   * @param arr2 第二个数组
   * @returns 两数组的交集数组
   */
  static getIntersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr2.filter(item => arr1.indexOf(item) > -1);
  }
  /**
   * 获取两个数组的并集
   * @param arr1 第一个数组
   * @param arr2 第二个数组
   * @returns 两数组的并集数组
   */
  static getUnion<T>(arr1: T[], arr2: T[]): T[] {
    return Array.from(new Set([...arr1, ...arr2]));
  }
  /**
   * 判断两个数组是否有交集
   * @param targetArr 目标数组
   * @param arr 对比数组
   * @returns 是否有交集 true/false
   */
  static hasOneOf<T>(targetArr: T[], arr: T[]): boolean {
    return targetArr.some(_ => arr.indexOf(_) > -1);
  }
  /**
   * 判断数组是否为空
   * @param arr 需要判断的数组
   * @returns 是否为空 true/false
   */
  static isEmpty(arr: any[]): boolean {
    if (!MObjectUtil.judgeType(arr, "array")) {
      throw new Error("请输入数组类型数据");
    }
    return arr.length === 0;
  }
  /**
   * 按对象属性分组
   * @param arr 对象数组
   * @param prop 分组属性名
   * @returns 分组后的数组
   */
  static splitByProp<T>(arr: T[], prop: keyof T): any[] {
    const map: Record<string, any> = {};
    const myArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      const key = String(arr[i][prop]);
      if (!map[key]) {
        const temp: any = {};
        temp["data"] = [arr[i]];
        temp[prop as string] = arr[i][prop];
        myArr.push(temp);
        map[key] = arr[i];
      } else {
        for (let j = 0; j < myArr.length; j++) {
          if (arr[i][prop] === myArr[j][prop]) {
            myArr[j].data.push(arr[i]);
            break;
          }
        }
      }
    }
    return myArr;
  }
}

export default MArrayUtil;