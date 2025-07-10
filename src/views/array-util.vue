<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">数组工具</h2>
    <div class="space-y-8">
      <!-- getIntersection -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">数组交集 (getIntersection)</div>
          <input v-model="arr1" class="input" placeholder="数组1，如 1,2,3" />
          <input v-model="arr2" class="input" placeholder="数组2，如 2,3,4" />
        </div>
        <button class="btn" @click="testIntersection">求交集</button>
        <div class="flex-1">
          <CodeBlock :code="String(intersectionResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>arr1: string[]，arr2: string[]（两个数组）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string[]（交集数组）</div>
      </div>
      <!-- getUnion -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">数组并集 (getUnion)</div>
          <input v-model="arr1u" class="input" placeholder="数组1，如 1,2,3" />
          <input v-model="arr2u" class="input" placeholder="数组2，如 2,3,4" />
        </div>
        <button class="btn" @click="testUnion">求并集</button>
        <div class="flex-1">
          <CodeBlock :code="String(unionResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>arr1: string[]，arr2: string[]（两个数组）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string[]（并集数组）</div>
      </div>
      <!-- hasOneOf -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">是否有交集 (hasOneOf)</div>
          <input v-model="arr1h" class="input" placeholder="数组1，如 1,2,3" />
          <input v-model="arr2h" class="input" placeholder="数组2，如 2,3,4" />
        </div>
        <button class="btn" @click="testHasOne">判断</button>
        <div class="flex-1">
          <CodeBlock :code="String(hasOneResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>arr1: string[]，arr2: string[]（两个数组）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否有交集）</div>
      </div>
      <!-- isEmpty -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">数组判空 (isEmpty)</div>
          <input v-model="isEmptyArr" class="input" placeholder="数组，如 1,2,3" />
        </div>
        <button class="btn" @click="handleIsEmpty">isEmpty</button>
        <div class="flex-1">
          <CodeBlock :code="String(isEmptyResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>arr: any[]</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>布尔值</div>
      </div>
      <!-- splitByProp -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">按属性分组 (splitByProp)</div>
          <textarea v-model="groupArr" class="input w-full h-20" placeholder='对象数组，如 [{"type":1,"name":"a"},{"type":2,"name":"b"},{"type":1,"name":"c"}]' />
          <input v-model="groupProp" class="input" placeholder="分组属性，如 type" />
        </div>
        <button class="btn" @click="handleSplitByProp">splitByProp</button>
        <div class="flex-1">
          <CodeBlock :code="String(groupResult)" />
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>arr: 对象数组，prop: 属性名</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>分组后的数组</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MArrayUtil } from '../utils/MArrayUtil';
import CodeBlock from '../components/CodeBlock.vue';

const arr1 = ref('1,2,3');
const arr2 = ref('2,3,4');
const intersectionResult = ref('');
const testIntersection = () => {
  const a1 = arr1.value.split(',').map(i => i.trim()).filter(i => i !== '');
  const a2 = arr2.value.split(',').map(i => i.trim()).filter(i => i !== '');
  intersectionResult.value = JSON.stringify(MArrayUtil.getIntersection(a1, a2));
};

const arr1u = ref('1,2,3');
const arr2u = ref('2,3,4');
const unionResult = ref('');
const testUnion = () => {
  const a1 = arr1u.value.split(',').map(i => i.trim()).filter(i => i !== '');
  const a2 = arr2u.value.split(',').map(i => i.trim()).filter(i => i !== '');
  unionResult.value = JSON.stringify(MArrayUtil.getUnion(a1, a2));
};

const arr1h = ref('1,2,3');
const arr2h = ref('2,3,4');
const hasOneResult = ref('');
const testHasOne = () => {
  const a1 = arr1h.value.split(',').map(i => i.trim()).filter(i => i !== '');
  const a2 = arr2h.value.split(',').map(i => i.trim()).filter(i => i !== '');
  hasOneResult.value = MArrayUtil.hasOneOf(a1, a2) ? '有交集' : '无交集';
};

const isEmptyArr = ref('');
const isEmptyResult = ref('');
const groupArr = ref('[{"type":1,"name":"a"},{"type":2,"name":"b"},{"type":1,"name":"c"}]');
const groupProp = ref('type');
const groupResult = ref('');
function handleIsEmpty() {
  try {
    const arr = isEmptyArr.value.split(',').map(i => i.trim()).filter(i => i !== '');
    isEmptyResult.value = String(MArrayUtil.isEmpty(arr));
  } catch (e) {
    isEmptyResult.value = '输入有误';
  }
}
function handleSplitByProp() {
  try {
    const arr = JSON.parse(groupArr.value);
    groupResult.value = JSON.stringify(MArrayUtil.splitByProp(arr, groupProp.value), null, 2);
  } catch (e) {
    groupResult.value = '输入有误';
  }
}
</script>

<style scoped>
</style>
