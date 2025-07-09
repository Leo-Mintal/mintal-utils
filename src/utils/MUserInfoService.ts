import { MCacheUtil } from "./MCacheUtil";

export class MUserInfoService {
  /**
   * 获取userInfo（预留，待完善）
   */
  static getUserInfo(): void {
    // TODO: 待后期完善
  }

  /**
   * 从sessionStorage中获取userInfo
   */
  static getSessionUserInfo<T = any>(): T | null {
    const userInfoKey = "user-info";
    return MCacheUtil.getSessionObject<T>(userInfoKey);
  }

  /**
   * 删除session缓存中的userinfo
   */
  static removeSessionUserInfo(): void {
    const userInfoKey = "user-info";
    MCacheUtil.removeSessionObject(userInfoKey);
  }

  /**
   * 获取路由信息（预留，待完善）
   */
  static async getRouteInfo(): Promise<void> {
    // TODO: 调取路由接口，待后期完善
  }
}

export default MUserInfoService;