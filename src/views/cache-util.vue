<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">缓存工具</h2>
    <div class="space-y-8">
      <!-- setSessionObject & getSessionObject -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">存储对象到Session (setSessionObject)</div>
          <input v-model="cacheKey" class="input" placeholder="Key" />
          <input v-model="cacheValue" class="input" placeholder='Value（如 {"name":"test"}）' />
        </div>
        <button class="btn" @click="setCache">存储</button>
        <button class="btn ml-2" @click="getCache">读取</button>
        <button class="btn ml-2" @click="removeCache">删除</button>
        <div class="flex-1">
          <div class="result">{{ cacheResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>key: string, value: any（存储/读取/删除的键与值）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>存储/读取/删除结果</div>
      </div>
      <!-- localStorage 缓存 -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">存储对象到LocalStorage (setLocalObject)</div>
          <input v-model="localKey" class="input" placeholder="Key" />
          <input v-model="localValue" class="input" placeholder='Value（如 {"name":"test"}）' />
        </div>
        <button class="btn" @click="setLocal">存储</button>
        <button class="btn ml-2" @click="getLocal">读取</button>
        <button class="btn ml-2" @click="removeLocal">删除</button>
        <div class="flex-1">
          <div class="result">{{ localResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>key: string, value: any（存储/读取/删除的键与值）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>存储/读取/删除结果</div>
      </div>
      <!-- Cookie 缓存 -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">存储到Cookie (setCookie)</div>
          <input v-model="cookieKey" class="input" placeholder="Key" />
          <input v-model="cookieValue" class="input" placeholder="Value" />
          <input v-model.number="cookieDays" type="number" class="input w-24" placeholder="天数(默认1)" />
        </div>
        <button class="btn" @click="setCookie">存储</button>
        <button class="btn ml-2" @click="getCookie">读取</button>
        <button class="btn ml-2" @click="removeCookie">删除</button>
        <div class="flex-1">
          <div class="result">{{ cookieResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>key: string, value: string, days?: number（存储/读取/删除的键、值、天数）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>存储/读取/删除结果</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MCacheUtil } from '../utils/MCacheUtil';

const cacheKey = ref('test-user');
const cacheValue = ref('{"name":"test","age":25}');
const cacheResult = ref('');

const setCache = () => {
  try {
    const val = JSON.parse(cacheValue.value);
    MCacheUtil.setSessionObject(cacheKey.value, val);
    cacheResult.value = '存储成功';
  } catch (e) {
    cacheResult.value = 'Value 需为合法JSON';
  }
};

const getCache = () => {
  const val = MCacheUtil.getSessionObject(cacheKey.value);
  cacheResult.value = val ? JSON.stringify(val) : '无数据';
};

const removeCache = () => {
  MCacheUtil.removeSessionObject(cacheKey.value);
  cacheResult.value = '已删除';
};

const localKey = ref('test-local');
const localValue = ref('{"name":"local"}');
const localResult = ref('');
const setLocal = () => {
  try {
    const val = JSON.parse(localValue.value);
    MCacheUtil.setLocalObject(localKey.value, val);
    localResult.value = '存储成功';
  } catch (e) {
    localResult.value = 'Value 需为合法JSON';
  }
};
const getLocal = () => {
  const val = MCacheUtil.getLocalObject(localKey.value);
  localResult.value = val ? JSON.stringify(val) : '无数据';
};
const removeLocal = () => {
  MCacheUtil.removeLocalObject(localKey.value);
  localResult.value = '已删除';
};

const cookieKey = ref('test-cookie');
const cookieValue = ref('cookie-value');
const cookieDays = ref(1);
const cookieResult = ref('');
const setCookie = () => {
  MCacheUtil.setCookie(cookieKey.value, cookieValue.value, cookieDays.value);
  cookieResult.value = '存储成功';
};
const getCookie = () => {
  const val = MCacheUtil.getCookie(cookieKey.value);
  cookieResult.value = val !== null ? val : '无数据';
};
const removeCookie = () => {
  MCacheUtil.removeCookie(cookieKey.value);
  cookieResult.value = '已删除';
};
</script>
