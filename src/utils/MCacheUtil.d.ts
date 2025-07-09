export declare class MCacheUtil {
  static getSessionObject<T = any>(key: string): T | null;
  static setSessionObject(key: string, value: any): void;
  static removeSessionObject(key: string): void;
  static getLocalObject<T = any>(key: string): T | null;
  static setLocalObject(key: string, value: any): void;
  static removeLocalObject(key: string): void;
  static setCookie(key: string, value: string, days?: number): void;
  static getCookie(key: string): string | null;
  static removeCookie(key: string): void;
}
export default MCacheUtil;