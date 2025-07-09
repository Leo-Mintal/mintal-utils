export declare class MFileUtil {
  static dataStreamCovertPdf(data: BlobPart): void;
  static Pdfbase64ToBlob(data: string): Blob;
  static htmlBase64(dom: string): Promise<string>;
}
export default MFileUtil;