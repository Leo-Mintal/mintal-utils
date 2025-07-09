<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">金额工具</h2>
    <div class="space-y-8">
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">金额转大写 (num2ChineseNum)</div>
          <input v-model="num2ChineseInput" class="input" placeholder="输入金额" />
        </div>
        <button class="btn" @click="handleNum2ChineseNum">num2ChineseNum</button>
        <div class="flex-1">
          <div class="result">{{ num2ChineseResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>num: number | string（金钱）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（大写中文金额）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">截断小数 (toDecimalSplit)</div>
          <input v-model="decimalSplitInput" class="input" placeholder="输入金额" />
          <input v-model.number="decimalSplitDigits" type="number" class="input w-24" placeholder="保留位数" />
        </div>
        <button class="btn" @click="handleToDecimalSplit">toDecimalSplit</button>
        <div class="flex-1">
          <div class="result">{{ decimalSplitResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>num: string，digits: number（保留位数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（截断后的小数字符串）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">四舍五入 (toDecimal)</div>
          <input v-model="decimalInput" class="input" placeholder="输入金额" />
          <input v-model.number="decimalDigits" type="number" class="input w-24" placeholder="保留位数" />
        </div>
        <button class="btn" @click="handleToDecimal">toDecimal</button>
        <div class="flex-1">
          <div class="result">{{ decimalResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>num: number | string，digits: number（保留位数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（四舍五入后的小数字符串）</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MMoneyUtil } from '../utils/MMoneyUtil';

const num2ChineseInput = ref('1234.56');
const num2ChineseResult = ref('');

const decimalSplitInput = ref('1234.56');
const decimalSplitDigits = ref(2);
const decimalSplitResult = ref('');

const decimalInput = ref('1234.56');
const decimalDigits = ref(2);
const decimalResult = ref('');

function handleNum2ChineseNum() {
  num2ChineseResult.value = MMoneyUtil.num2ChineseNum(num2ChineseInput.value);
}
function handleToDecimalSplit() {
  decimalSplitResult.value = MMoneyUtil.toDecimalSplit(decimalSplitInput.value, decimalSplitDigits.value);
}
function handleToDecimal() {
  decimalResult.value = MMoneyUtil.toDecimal(decimalInput.value, decimalDigits.value);
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