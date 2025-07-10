<template>
  <div class="min-h-[39px] relative bg-gray-100 rounded-md p-2 my-2 text-left font-mono text-sm">
    <pre class="whitespace-pre-wrap break-all"><code ref="codeRef">{{ code }}</code></pre>
    <button class="absolute top-2 right-2 bg-[#E6EFEB] hover:bg-[#E6EFEB] border border-[#055E3A] active:border-[#E6EFEB] text-[#055E3A] rounded px-2 py-0.5 text-xs" @click="copyCode">复制</button>
  </div>
</template>

<script setup lang="ts">
import { ref,defineProps } from 'vue';
const props = defineProps<{ code: string }>();
const codeRef = ref<HTMLElement | null>(null);

function copyCode() {
  if (codeRef.value) {
    const text = props.code;
    navigator.clipboard.writeText(text);
  }
}
</script>

<style scoped>
.copy-code-block {
  position: relative;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 12px 40px 12px 12px;
  margin: 8px 0;
  font-size: 14px;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  text-align: left;
}
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 12px;
}
.copy-btn:hover {
  background: #66b1ff;
}
pre {
  margin: 0;
  background: none;
  padding: 0;
  overflow-x: auto;
}
</style>
