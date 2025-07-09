import { MObjectUtil } from "./MObjectUtil";

export class MCacheUtil {
  static getSessionObject<T = any>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    if (!MObjectUtil.isEmptyObject(value)) {
      return JSON.parse(value as string) as T;
    } else {
      return null;
    }
  }
  static setSessionObject(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  static removeSessionObject(key: string): void {
    sessionStorage.removeItem(key);
  }
  static getLocalObject<T = any>(key: string): T | null {
    const value = localStorage.getItem(key);
    if (!MObjectUtil.isEmptyObject(value)) {
      return JSON.parse(value as string) as T;
    } else {
      return null;
    }
  }
  static setLocalObject(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static removeLocalObject(key: string): void {
    localStorage.removeItem(key);
  }
  /**
   * 设置 Cookie
   * @param key 键
   * @param value 值
   * @param days 过期天数（可选，默认1天）
   */
  static setCookie(key: string, value: string, days = 1): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }
  /**
   * 获取 Cookie
   * @param key 键
   * @returns 值或 null
   */
  static getCookie(key: string): string | null {
    const match = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }
  /**
   * 删除 Cookie
   * @param key 键
   */
  static removeCookie(key: string): void {
    document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

export default MCacheUtil;