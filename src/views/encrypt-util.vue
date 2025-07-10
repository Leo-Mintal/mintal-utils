<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">加密工具</h2>
    <div class="space-y-8">
      <!-- MD5 -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">MD5 加密</div>
          <input v-model="md5Input" class="input" placeholder="输入原文" />
        </div>
        <button class="btn" @click="testMD5">加密</button>
        <div class="flex-1">
          <div class="result">{{ md5Result }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（原文字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（MD5加密结果）</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MEncryptUtil } from '../utils/MEncryptUtil';

const md5Input = ref('hello world');
const md5Result = ref('');
const testMD5 = () => {
  md5Result.value = MEncryptUtil.MD5(md5Input.value);
};
</script>

