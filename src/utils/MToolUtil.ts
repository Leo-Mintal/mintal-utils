import { MObjectUtil } from "./MObjectUtil";
import { MStringUtil } from "./MStringUtil";

export class MToolUtil {
  static getExplorer(): string | undefined {
    const ua = window.navigator.userAgent;
    const isExplorer = (exp: string) => ua.indexOf(exp) > -1;
    if (isExplorer("MSIE")) return "IE";
    if (isExplorer("Firefox")) return "Firefox";
    if (isExplorer("Chrome")) return "Chrome";
    if (isExplorer("Opera")) return "Opera";
    if (isExplorer("Safari")) return "Safari";
  }
  static getQueryString(name: string): string | null {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const href = document.location.toString() || window.location.toString();
    if (href.indexOf("?") === -1) return null;
    const r = window.location.href.substr(window.location.href.indexOf("?") + 1).match(reg);
    if (r != null) {
      let value = decodeURIComponent(r[2]);
      if (value != null) {
        const indexOf = value.indexOf("#");
        if (indexOf > 0) value = value.substr(0, indexOf);
      }
      return value;
    }
    return null;
  }
  static getNowRoute(): string {
    return window.location.hash.replace("#/", "");
  }
  static getNowHost(): string {
    return window.location.host;
  }
  static getNowProtocol(): string {
    return window.location.protocol;
  }
  static addUrlParam(url: string, name: string, value: string): string {
    let currentUrl = this.delUrlParam(url, name);
    if (/\?/g.test(currentUrl)) {
      if (/name=[-\w]{4,25}/g.test(currentUrl)) {
        currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);
      } else {
        currentUrl += "&" + name + "=" + value;
      }
    } else {
      currentUrl += "?" + name + "=" + value;
    }
    return currentUrl;
  }
  static delUrlParam(url: string, name: string): string {
    if (url.indexOf(name) === -1) return url;
    const arr_url = url.split("?");
    const base = arr_url[0];
    const arr_param = arr_url[1].split("&");
    let index = -1;
    for (let i = 0; i < arr_param.length; i++) {
      const paired = arr_param[i].split("=");
      if (paired[0] === name) {
        index = i;
        break;
      }
    }
    if (index === -1) return url;
    arr_param.splice(index, 1);
    return base + "?" + arr_param.join("&");
  }
  static urlSearch(url: string): Record<string, string> {
    let name, value;
    const obj: Record<string, string> = {};
    const num = url.indexOf("?");
    url = url.substr(num + 1);
    const arr = url.split("&");
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i].indexOf("=");
      if (num > 0) {
        name = arr[i].substring(0, num);
        value = arr[i].substr(num + 1);
        obj[name] = value;
      }
    }
    return obj;
  }
  static isBlank(data: any): boolean {
    let result = false;
    switch (MObjectUtil.getTypeByObj(data)) {
      case "Object":
        result = MObjectUtil.isEmptyObject(data);
        break;
      case "String":
        result = MStringUtil.isBlank(data);
        break;
      case "Array":
        result = data.length === 0;
        break;
      case "Number":
        result = false;
        break;
      case "Undefined":
        result = true;
        break;
      case "Null":
        result = true;
        break;
      case "Boolean":
        result = false;
        break;
      default:
        result = false;
    }
    return result;
  }
  static debounce<T extends (...args: any[]) => void>(fn: T, interval: number, first = true): T {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (first) {
      return function (this: any, ...args: any[]) {
        const isFirst = !timer;
        if (timer) clearTimeout(timer);
        if (isFirst) fn.apply(this, args);
        timer = setTimeout(() => {
          timer = null;
        }, interval);
      } as T;
    } else {
      return function (this: any, ...args: any[]) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, interval);
      } as T;
    }
  }
  // ... 省略部分方法，可根据需要继续补充 ...
}

export default MToolUtil;