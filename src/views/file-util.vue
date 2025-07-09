<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">文件工具</h2>
    <div class="space-y-8">
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">PDF base64转Blob (Pdfbase64ToBlob)</div>
          <textarea v-model="blobBase64" class="input w-full h-20" placeholder="PDF base64字符串" />
        </div>
        <button class="btn" @click="handlePdfbase64ToBlob">base64转Blob</button>
        <div class="flex-1">
          <div class="result">{{ blobResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>base64: string（PDF base64字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>Blob对象</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">流转PDF并新窗口展示 (dataStreamCovertPdf)</div>
          <textarea v-model="pdfBase64" class="input w-full h-20" placeholder="PDF base64字符串" />
        </div>
        <button class="btn" @click="handleDataStreamCovertPdf">流转PDF</button>
        <div class="flex-1">
          <div class="result">{{ pdfResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>base64: string（PDF base64字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>新开窗口展示PDF</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">节点转Base64图片 (htmlBase64)</div>
          <input v-model="selector" class="input" placeholder="#demo" />
        </div>
        <button class="btn" @click="handleHtmlBase64">节点转Base64图片</button>
        <div class="flex-1">
          <div class="result">{{ htmlBase64Result }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>selector: string（html选择器）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>base64字符串</div>
      </div>
      <div id="demo" class="mt-4 p-2 border">示例节点：#demo</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MFileUtil } from '../utils/MFileUtil';

const blobBase64 = ref('');
const pdfBase64 = ref('');
const selector = ref('#demo');
const blobResult = ref('');
const pdfResult = ref('');
const htmlBase64Result = ref('');

function handlePdfbase64ToBlob() {
  try {
    const blob = MFileUtil.Pdfbase64ToBlob(blobBase64.value);
    blobResult.value = blob ? 'Blob对象已生成，类型：' + blob.type : '转换失败';
  } catch (e) {
    blobResult.value = '转换失败：' + e;
  }
}
function handleDataStreamCovertPdf() {
  try {
    const blob = MFileUtil.Pdfbase64ToBlob(pdfBase64.value);
    MFileUtil.dataStreamCovertPdf(blob);
    pdfResult.value = '已新开窗口展示PDF';
  } catch (e) {
    pdfResult.value = '操作失败：' + e;
  }
}
function handleHtmlBase64() {
  MFileUtil.htmlBase64(selector.value).then(res => {
    htmlBase64Result.value = res;
  }).catch(e => {
    htmlBase64Result.value = '转换失败：' + e;
  });
}
</script>
<style scoped>
.input {
  @apply border rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-primary transition bg-white;
}
.btn {
  @apply bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200 active:scale-95 hover:bg-primary/90 focus:ring-2 focus:ring-primary;
}
.result {
  @apply bg-gray-100 rounded px-3 py-2 min-h-[2.2em] break-all font-mono text-[#055E3A];
}
</style>