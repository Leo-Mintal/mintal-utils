<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">高精度计算</h2>
    <div class="space-y-8">
      <!-- plus -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">加法 (plus)</div>
          <input v-model.number="plusA" type="number" class="input w-24" placeholder="A" />
          <input v-model.number="plusB" type="number" class="input w-24" placeholder="B" />
        </div>
        <button class="btn" @click="testPlus">计算</button>
        <div class="flex-1">
          <CodeBlock :code="String(plusResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>a: number, b: number（两个数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>number（加法结果）</div>
      </div>
      <!-- minus -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">减法 (minus)</div>
          <input v-model.number="minusA" type="number" class="input w-24" placeholder="A" />
          <input v-model.number="minusB" type="number" class="input w-24" placeholder="B" />
        </div>
        <button class="btn" @click="testMinus">计算</button>
        <div class="flex-1">
          <CodeBlock :code="String(minusResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>a: number, b: number（两个数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>number（减法结果）</div>
      </div>
      <!-- times -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">乘法 (times)</div>
          <input v-model.number="timesA" type="number" class="input w-24" placeholder="A" />
          <input v-model.number="timesB" type="number" class="input w-24" placeholder="B" />
        </div>
        <button class="btn" @click="testTimes">计算</button>
        <div class="flex-1">
          <CodeBlock :code="String(timesResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>a: number, b: number（两个数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>number（乘法结果）</div>
      </div>
      <!-- divide -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">除法 (divide)</div>
          <input v-model.number="divideA" type="number" class="input w-24" placeholder="A" />
          <input v-model.number="divideB" type="number" class="input w-24" placeholder="B" />
        </div>
        <button class="btn" @click="testDivide">计算</button>
        <div class="flex-1">
          <CodeBlock :code="String(divideResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>a: number, b: number（两个数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>number（除法结果）</div>
      </div>
      <!-- round -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">四舍五入 (round)</div>
          <input v-model.number="roundA" type="number" class="input w-24" placeholder="数值" />
          <input v-model.number="roundB" type="number" class="input w-24" placeholder="小数位" />
        </div>
        <button class="btn" @click="testRound">计算</button>
        <div class="flex-1">
          <CodeBlock :code="String(roundResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>value: number, decimals: number（数值与小数位）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>number（四舍五入结果）</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MCalcUtil } from '../utils/MCalcUtil';
import CodeBlock from '../components/CodeBlock.vue';

const plusA = ref(0.1);
const plusB = ref(0.2);
const plusResult = ref('');
const testPlus = () => {
  plusResult.value = MCalcUtil.plus(plusA.value, plusB.value).toString();
};

const minusA = ref(1.5);
const minusB = ref(0.3);
const minusResult = ref('');
const testMinus = () => {
  minusResult.value = MCalcUtil.minus(minusA.value, minusB.value).toString();
};

const timesA = ref(2.5);
const timesB = ref(3);
const timesResult = ref('');
const testTimes = () => {
  timesResult.value = MCalcUtil.times(timesA.value, timesB.value).toString();
};

const divideA = ref(10);
const divideB = ref(3);
const divideResult = ref('');
const testDivide = () => {
  divideResult.value = MCalcUtil.divide(divideA.value, divideB.value).toString();
};

const roundA = ref(3.14159);
const roundB = ref(2);
const roundResult = ref('');
const testRound = () => {
  roundResult.value = MCalcUtil.round(roundA.value, roundB.value).toString();
};
</script>
