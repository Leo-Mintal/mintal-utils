<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">对象工具</h2>
    <div class="space-y-8">
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">对象diff (diff)</div>
          <textarea v-model="diffObj1Str" class="input w-full h-20" placeholder="对象1(JSON)" />
          <textarea v-model="diffObj2Str" class="input w-full h-20" placeholder="对象2(JSON)" />
        </div>
        <button class="btn" @click="handleDiff">diff</button>
        <div class="flex-1">
          <div class="result">{{ diffResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>对象1、对象2均为JSON字符串</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>diff返回差异对象</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">对象相等 (equals)</div>
          <textarea v-model="equalsObj1Str" class="input w-full h-20" placeholder="对象1(JSON)" />
          <textarea v-model="equalsObj2Str" class="input w-full h-20" placeholder="对象2(JSON)" />
        </div>
        <button class="btn" @click="handleEquals">equals</button>
        <div class="flex-1">
          <div class="result">{{ equalsResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>对象1、对象2均为JSON字符串</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>equals返回布尔值</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">深拷贝 (deepClone)</div>
          <textarea v-model="deepCloneObjStr" class="input w-full h-20" placeholder="对象1(JSON)" />
        </div>
        <button class="btn" @click="handleDeepClone">deepClone</button>
        <div class="flex-1">
          <div class="result">{{ deepCloneResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>对象1为JSON字符串</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>deepClone返回深拷贝对象</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">是否空对象 (isEmptyObject)</div>
          <textarea v-model="isEmptyObjStr" class="input w-full h-20" placeholder="对象1(JSON)" />
        </div>
        <button class="btn" @click="handleIsEmptyObject">isEmptyObject</button>
        <div class="flex-1">
          <div class="result">{{ isEmptyObjectResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>对象1为JSON字符串</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>isEmptyObject返回布尔值</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">获取类型 (getTypeByObj)</div>
          <input v-model="typeInput" class="input" placeholder="输入任意值，如 123 或 {a:1}" />
        </div>
        <button class="btn" @click="handleGetType">getTypeByObj</button>
        <div class="flex-1">
          <div class="result">{{ typeResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>任意值</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>类型字符串</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">类型判断 (judgeType)</div>
          <input v-model="judgeInput" class="input" placeholder="输入任意值，如 123 或 {a:1}" />
          <input v-model="judgeTypeInput" class="input" placeholder="类型名，如 number、object、string" />
        </div>
        <button class="btn" @click="handleJudgeType">judgeType</button>
        <div class="flex-1">
          <div class="result">{{ judgeTypeResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>任意值、类型名</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>布尔值</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">空判断 (isEmpty)</div>
          <input v-model="isEmptyInput" class="input" placeholder="输入任意值，如 ''、null、{}" />
        </div>
        <button class="btn" @click="handleIsEmpty">isEmpty</button>
        <div class="flex-1">
          <div class="result">{{ isEmptyResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>任意值</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>布尔值</div>
      </div>
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">对象判断 (isObject)</div>
          <input v-model="isObjectInput" class="input" placeholder="输入任意值，如 {{}}、[]、123" />
        </div>
        <button class="btn" @click="handleIsObject">isObject</button>
        <div class="flex-1">
          <div class="result">{{ isObjectResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>任意值</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>布尔值</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MObjectUtil } from '../utils/MObjectUtil';

const diffObj1Str = ref('{"a":1,"b":2}');
const diffObj2Str = ref('{"a":1,"b":3}');
const diffResult = ref('');

const equalsObj1Str = ref('{"a":1,"b":2}');
const equalsObj2Str = ref('{"a":1,"b":3}');
const equalsResult = ref('');

const deepCloneObjStr = ref('{"a":1,"b":2}');
const deepCloneResult = ref('');

const isEmptyObjStr = ref('{}');
const isEmptyObjectResult = ref('');

const typeInput = ref('123');
const typeResult = ref('');
const judgeInput = ref('123');
const judgeTypeInput = ref('number');
const judgeTypeResult = ref('');
const isEmptyInput = ref('');
const isEmptyResult = ref('');
const isObjectInput = ref('{}');
const isObjectResult = ref('');

function safeParse(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}

function handleDiff() {
  diffResult.value = JSON.stringify(
    MObjectUtil.diff(safeParse(diffObj1Str.value), safeParse(diffObj2Str.value)),
    null,
    2
  );
}
function handleEquals() {
  equalsResult.value = String(
    MObjectUtil.equals(safeParse(equalsObj1Str.value), safeParse(equalsObj2Str.value))
  );
}
function handleDeepClone() {
  deepCloneResult.value = JSON.stringify(
    MObjectUtil.deepClone(safeParse(deepCloneObjStr.value)),
    null,
    2
  );
}
function handleIsEmptyObject() {
  isEmptyObjectResult.value = String(MObjectUtil.isEmptyObject(safeParse(isEmptyObjStr.value)));
}
function handleGetType() {
  let val;
  try { val = JSON.parse(typeInput.value); } catch { val = typeInput.value; }
  typeResult.value = MObjectUtil.getTypeByObj(val);
}
function handleJudgeType() {
  let val;
  try { val = JSON.parse(judgeInput.value); } catch { val = judgeInput.value; }
  judgeTypeResult.value = String(MObjectUtil.judgeType(val, judgeTypeInput.value));
}
function handleIsEmpty() {
  let val;
  try { val = JSON.parse(isEmptyInput.value); } catch { val = isEmptyInput.value; }
  isEmptyResult.value = String(MObjectUtil.isEmpty(val));
}
function handleIsObject() {
  let val;
  try { val = JSON.parse(isObjectInput.value); } catch { val = isObjectInput.value; }
  isObjectResult.value = String(MObjectUtil.isObject(val));
}
</script>
