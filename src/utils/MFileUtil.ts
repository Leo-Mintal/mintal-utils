// @ts-ignore
import html2canvas from "html2canvas";

// 文件工具类
export class MFileUtil {
  /**
   * pdf数据流转为pdf文件并新开窗口展示
   * @param data PDF二进制数据流
   * @returns void
   */
  static dataStreamCovertPdf(data: BlobPart) {
    const pdfBytes: BlobPart[] = [];
    pdfBytes.push(data);
    const urlPdf = window.URL.createObjectURL(
      new Blob(pdfBytes, { type: "application/pdf" })
    );
    window.open(urlPdf);
  }

  /**
   * PDF base64数据转换为blob
   * @param data base64字符串
   * @returns PDF Blob对象
   */
  static Pdfbase64ToBlob(data: string): Blob {
    const bstr = atob(data);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: "application/pdf" });
  }

  /**
   * 将html节点转换为base64图片
   * @param dom 选择器字符串
   * @returns base64字符串Promise
   */
  static htmlBase64(dom: string): Promise<string> {
    return html2canvas(document.querySelector(dom) as HTMLElement).then((canvas: HTMLCanvasElement) => {
      return canvas.toDataURL();
    });
  }
}

export default MFileUtil;