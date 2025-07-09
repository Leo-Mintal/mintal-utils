export declare class MUserInfoService {
  static getUserInfo(): void;
  static getSessionUserInfo<T = any>(): T | null;
  static removeSessionUserInfo(): void;
  static getRouteInfo(): Promise<void>;
}
export default MUserInfoService;