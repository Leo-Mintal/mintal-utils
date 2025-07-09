export declare class MStringUtil {
  static underline2Camel(line: string, smallCamel: boolean): string;
  static camel2underline(camel: string): string;
  static isBlank(str: string | null | undefined): boolean;
  static isNotBlank(str: string | null | undefined): boolean;
  static isDecimals(value: string | number): boolean;
  static getRandom(number: number): string;
  static base64ToHEX(base64: string): string;
  static hexToBase64(str: string): string;
  static base64ToBytes(base64: string): Uint8Array;
  static utf8ToBase64(utf8: string): string;
  static isEmail(str: string): boolean;
  static isPhone(str: string): boolean;
  static reverse(str: string): string;
  static removeAllSpaces(str: string): string;
}
export default MStringUtil;