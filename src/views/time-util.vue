<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">时间工具</h2>
    <div class="space-y-8">
      <!-- getCurrentDate -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1">
          <div class="font-semibold mb-2">获取当前时间 (getCurrentDate)</div>
        </div>
        <button class="btn" @click="testNow">获取</button>
        <div class="flex-1">
          <div class="result">{{ nowResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>无</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（当前时间字符串）</div>
      </div>
      <!-- transferTimeFormat -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">时间格式化 (transferTimeFormat)</div>
          <input v-model="formatInput" class="input" placeholder="格式，如 yyyy-MM-DD" />
        </div>
        <button class="btn" @click="testFormat">格式化</button>
        <div class="flex-1">
          <div class="result">{{ formatResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>date: Date, format: string（日期对象与格式）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（格式化后的时间字符串）</div>
      </div>
      <!-- getFirstDays -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取本月第一天 (getFirstDays)</div>
          <input v-model="firstDayFormat" class="input" placeholder="格式，如 yyyy-MM-DD" />
        </div>
        <button class="btn" @click="testFirstDay">获取</button>
        <div class="flex-1">
          <div class="result">{{ firstDayResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>date?: Date, type?: string, format?: string, mode?: string（可选参数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（本月第一天字符串）</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MTimeUtil } from '../utils/MTimeUtil';

const nowResult = ref('');
const testNow = () => {
  nowResult.value = MTimeUtil.getCurrentDate();
};

const formatInput = ref('yyyy-MM-DD');
const formatResult = ref('');
const testFormat = () => {
  formatResult.value = MTimeUtil.transferTimeFormat(new Date(), formatInput.value);
};

const firstDayFormat = ref('yyyy-MM-DD');
const firstDayResult = ref('');
const testFirstDay = () => {
  firstDayResult.value = MTimeUtil.getFirstDays(undefined, 'months', firstDayFormat.value, 'firstDay');
};
</script>

