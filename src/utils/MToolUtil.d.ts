export declare class MToolUtil {
  static getExplorer(): string | undefined;
  static getQueryString(name: string): string | null;
  static getNowRoute(): string;
  static getNowHost(): string;
  static getNowProtocol(): string;
  static addUrlParam(url: string, name: string, value: string): string;
  static delUrlParam(url: string, name: string): string;
  static urlSearch(url: string): Record<string, string>;
  static isBlank(data: any): boolean;
  static debounce<T extends (...args: any[]) => void>(fn: T, interval: number, first?: boolean): T;
}
export default MToolUtil;