<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">用户信息服务</h2>
    <div class="space-y-8">
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取Session UserInfo (getSessionUserInfo)</div>
        </div>
        <button class="btn" @click="handleGetSessionUserInfo">获取Session UserInfo</button>
        <div class="flex-1">
          <div class="result">{{ getSessionUserInfoResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>无</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>session中的userInfo对象</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">删除Session UserInfo (removeSessionUserInfo)</div>
        </div>
        <button class="btn" @click="handleRemoveSessionUserInfo">删除Session UserInfo</button>
        <div class="flex-1">
          <div class="result">{{ removeSessionUserInfoResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>无</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>无</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MUserInfoService } from '../utils/MUserInfoService';

const getSessionUserInfoResult = ref('');
const removeSessionUserInfoResult = ref('');

function handleGetSessionUserInfo() {
  getSessionUserInfoResult.value = JSON.stringify(MUserInfoService.getSessionUserInfo(), null, 2);
}
function handleRemoveSessionUserInfo() {
  MUserInfoService.removeSessionUserInfo();
  removeSessionUserInfoResult.value = '已删除session中的userInfo';
}
</script>
<style scoped>
.btn {
  @apply bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200 active:scale-95 hover:bg-primary/90 focus:ring-2 focus:ring-primary;
}
.result {
  @apply bg-gray-100 rounded px-3 py-2 min-h-[2.2em] break-all font-mono text-[#055E3A];
}
</style>
