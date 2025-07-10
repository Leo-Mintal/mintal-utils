<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">数字工具</h2>
    <div class="space-y-8">
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">保留两位小数 (toDecimal2)</div>
          <input v-model.number="decimal2Num" type="number" class="input" placeholder="输入数字" />
        </div>
        <button class="btn" @click="handleToDecimal2">toDecimal2</button>
        <div class="flex-1">
          <CodeBlock :code="String(decimal2Result)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>num: number（输入数字）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>number（保留两位小数的数字）</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MNumberUtil } from '../utils/MNumberUtil';
import CodeBlock from '../components/CodeBlock.vue';

const decimal2Num = ref(0);
const decimal2Result = ref('');

function handleToDecimal2() {
  decimal2Result.value = String(MNumberUtil.toDecimal2(decimal2Num.value));
}
</script>
