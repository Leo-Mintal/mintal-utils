<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">通用工具</h2>
    <div class="space-y-8">
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">添加URL参数 (addUrlParam)</div>
          <input v-model="addUrl" class="input w-full" placeholder="URL" />
          <input v-model="addParamName" class="input w-40" placeholder="参数名" />
          <input v-model="addParamValue" class="input w-40" placeholder="参数值" />
        </div>
        <button class="btn" @click="handleAddUrlParam">addUrlParam</button>
        <div class="flex-1">
          <div class="result">{{ addUrlParamResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>url: string，name: string，value: string</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（添加参数后的URL）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">删除URL参数 (delUrlParam)</div>
          <input v-model="delUrl" class="input w-full" placeholder="URL" />
          <input v-model="delParamName" class="input w-40" placeholder="参数名" />
        </div>
        <button class="btn" @click="handleDelUrlParam">delUrlParam</button>
        <div class="flex-1">
          <div class="result">{{ delUrlParamResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>url: string，name: string</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（删除参数后的URL）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">URL参数转对象 (urlSearch)</div>
          <input v-model="searchUrl" class="input w-full" placeholder="URL" />
        </div>
        <button class="btn" @click="handleUrlSearch">urlSearch</button>
        <div class="flex-1">
          <div class="result">{{ urlSearchResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>url: string</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>object（参数对象）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取URL参数值 (getQueryString)</div>
          <input v-model="queryParamName" class="input w-40" placeholder="参数名" />
        </div>
        <button class="btn" @click="handleGetQueryString">getQueryString</button>
        <div class="flex-1">
          <div class="result">{{ getQueryStringResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>name: string</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string | null（参数值）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取浏览器类型 (getExplorer)</div>
        </div>
        <button class="btn" @click="handleGetExplorer">getExplorer</button>
        <div class="flex-1">
          <div class="result">{{ getExplorerResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>无</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string | undefined（浏览器类型）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取当前路由 (getNowRoute)</div>
        </div>
        <button class="btn" @click="handleGetNowRoute">getNowRoute</button>
        <div class="flex-1">
          <div class="result">{{ getNowRouteResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>无</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（当前路由）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取当前Host (getNowHost)</div>
        </div>
        <button class="btn" @click="handleGetNowHost">getNowHost</button>
        <div class="flex-1">
          <div class="result">{{ getNowHostResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>无</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（当前Host）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取当前协议 (getNowProtocol)</div>
        </div>
        <button class="btn" @click="handleGetNowProtocol">getNowProtocol</button>
        <div class="flex-1">
          <div class="result">{{ getNowProtocolResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>无</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（当前协议）</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">空值判断 (isBlank)</div>
          <input v-model="isBlankInput" class="input" placeholder="输入任意值，如 ''、null、[]、{}" />
        </div>
        <button class="btn" @click="handleIsBlank">isBlank</button>
        <div class="flex-1">
          <div class="result">{{ isBlankResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>任意值</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>布尔值</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">防抖演示 (debounce)</div>
          <div>点击按钮快速多次，计数只会缓慢增加</div>
        </div>
        <button class="btn" @click="debounceClick">debounce计数</button>
        <div class="flex-1">
          <div class="result">{{ debounceCount }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>fn, interval, first</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>防抖后的函数</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MToolUtil } from '../utils/MToolUtil';

const addUrl = ref('https://example.com?a=1&b=2');
const addParamName = ref('a');
const addParamValue = ref('100');
const addUrlParamResult = ref('');

const delUrl = ref('https://example.com?a=1&b=2');
const delParamName = ref('a');
const delUrlParamResult = ref('');

const searchUrl = ref('https://example.com?a=1&b=2');
const urlSearchResult = ref('');

const queryParamName = ref('a');
const getQueryStringResult = ref('');

const getExplorerResult = ref('');

const getNowRouteResult = ref('');
const getNowHostResult = ref('');
const getNowProtocolResult = ref('');
const isBlankInput = ref('');
const isBlankResult = ref('');
const debounceCount = ref(0);
const debounceClick = MToolUtil.debounce(() => {
  debounceCount.value++;
}, 1000);

function handleAddUrlParam() {
  addUrlParamResult.value = MToolUtil.addUrlParam(addUrl.value, addParamName.value, addParamValue.value);
}
function handleDelUrlParam() {
  delUrlParamResult.value = MToolUtil.delUrlParam(delUrl.value, delParamName.value);
}
function handleUrlSearch() {
  urlSearchResult.value = JSON.stringify(MToolUtil.urlSearch(searchUrl.value), null, 2);
}
function handleGetQueryString() {
  getQueryStringResult.value = String(MToolUtil.getQueryString(queryParamName.value));
}
function handleGetExplorer() {
  getExplorerResult.value = String(MToolUtil.getExplorer());
}
function handleGetNowRoute() {
  getNowRouteResult.value = MToolUtil.getNowRoute();
}
function handleGetNowHost() {
  getNowHostResult.value = MToolUtil.getNowHost();
}
function handleGetNowProtocol() {
  getNowProtocolResult.value = MToolUtil.getNowProtocol();
}
function handleIsBlank() {
  let val;
  try { val = JSON.parse(isBlankInput.value); } catch { val = isBlankInput.value; }
  isBlankResult.value = String(MToolUtil.isBlank(val));
}
</script>
