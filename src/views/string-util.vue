<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">字符串工具</h2>
    <div class="space-y-8">
      <!-- underline2Camel -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">下划线转驼峰 (underline2Camel)</div>
          <input v-model="underlineInput" class="input" placeholder="如：hello_world" />
          <label class="inline-flex items-center ml-2 text-sm">
            <input type="checkbox" v-model="underlineBig" class="mr-1" /> 首字母大写
          </label>
        </div>
        <button class="btn" @click="testUnderline">转换</button>
        <div class="flex-1">
          <div class="result">{{ underlineResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>line: string（待转换字符串），smallCamel: boolean（true=首字母大写，false=小写）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（转换后的驼峰字符串）</div>
      </div>
      <!-- isBlank -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">空字符串判断 (isBlank)</div>
          <input v-model="blankInput" class="input" placeholder="输入字符串" />
        </div>
        <button class="btn" @click="testBlank">判断</button>
        <div class="flex-1">
          <div class="result">{{ blankResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string | null | undefined（待判断字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为空）</div>
      </div>
      <!-- getRandom -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">生成随机字符串 (getRandom)</div>
          <input v-model.number="randomLen" type="number" min="1" class="input w-24" placeholder="长度" />
        </div>
        <button class="btn" @click="testRandom">生成</button>
        <div class="flex-1">
          <div class="result">{{ randomResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>number: number（生成的长度）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（随机16进制字符串）</div>
      </div>
      <!-- base64ToHEX -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">Base64转Hex (base64ToHEX)</div>
          <input v-model="base64Input" class="input" placeholder="如：SGVsbG8=" />
        </div>
        <button class="btn" @click="testBase64">转换</button>
        <div class="flex-1">
          <div class="result">{{ base64Result }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>base64: string（base64字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（16进制字符串）</div>
      </div>
      <!-- camel2underline -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">驼峰转下划线 (camel2underline)</div>
          <input v-model="camelInput" class="input" placeholder="如：helloWorld" />
        </div>
        <button class="btn" @click="testCamel2Underline">转换</button>
        <div class="flex-1">
          <div class="result">{{ camel2underlineResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>camel: string（驼峰字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（下划线字符串）</div>
      </div>
      <!-- isNotBlank -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">非空字符串判断 (isNotBlank)</div>
          <input v-model="notBlankInput" class="input" placeholder="输入字符串" />
        </div>
        <button class="btn" @click="testIsNotBlank">判断</button>
        <div class="flex-1">
          <div class="result">{{ notBlankResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string | null | undefined（待判断字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否不为空）</div>
      </div>
      <!-- reverse -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">字符串反转 (reverse)</div>
          <input v-model="reverseInput" class="input" placeholder="输入字符串" />
        </div>
        <button class="btn" @click="testReverse">反转</button>
        <div class="flex-1">
          <div class="result">{{ reverseResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待反转字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（反转后字符串）</div>
      </div>
      <!-- removeAllSpaces -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">移除所有空格 (removeAllSpaces)</div>
          <input v-model="removeSpaceInput" class="input" placeholder="输入字符串" />
        </div>
        <button class="btn" @click="testRemoveAllSpaces">移除</button>
        <div class="flex-1">
          <div class="result">{{ removeSpaceResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待处理字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（去除空格后字符串）</div>
      </div>
      <!-- hexToBase64 -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">16进制转Base64 (hexToBase64)</div>
          <input v-model="hexInput" class="input" placeholder="如：48656c6c6f" />
        </div>
        <button class="btn" @click="testHexToBase64">转换</button>
        <div class="flex-1">
          <div class="result">{{ hexToBase64Result }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（16进制字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（base64字符串）</div>
      </div>
      <!-- base64ToBytes -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">Base64转Bytes (base64ToBytes)</div>
          <input v-model="base64BytesInput" class="input" placeholder="如：SGVsbG8=" />
        </div>
        <button class="btn" @click="testBase64ToBytes">转换</button>
        <div class="flex-1">
          <div class="result">{{ base64ToBytesResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>base64: string（base64字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>Uint8Array字节数组</div>
      </div>
      <!-- utf8ToBase64 -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">UTF8转Base64 (utf8ToBase64)</div>
          <input v-model="utf8Input" class="input" placeholder="如：Hello" />
        </div>
        <button class="btn" @click="testUtf8ToBase64">转换</button>
        <div class="flex-1">
          <div class="result">{{ utf8ToBase64Result }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>utf8: string（utf8字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>string（base64字符串）</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MStringUtil } from '../utils/MStringUtil';

const underlineInput = ref('hello_world');
const underlineBig = ref(false);
const underlineResult = ref('');
const testUnderline = () => {
  underlineResult.value = MStringUtil.underline2Camel(underlineInput.value, underlineBig.value);
};

const blankInput = ref('');
const blankResult = ref('');
const testBlank = () => {
  blankResult.value = MStringUtil.isBlank(blankInput.value) ? '是空字符串' : '非空字符串';
};

const randomLen = ref(8);
const randomResult = ref('');
const testRandom = () => {
  randomResult.value = MStringUtil.getRandom(randomLen.value);
};

const base64Input = ref('SGVsbG8=');
const base64Result = ref('');
const testBase64 = () => {
  try {
    base64Result.value = MStringUtil.base64ToHEX(base64Input.value);
  } catch (e) {
    base64Result.value = '无效的Base64字符串';
  }
};

const camelInput = ref('helloWorld');
const camel2underlineResult = ref('');
const testCamel2Underline = () => {
  camel2underlineResult.value = MStringUtil.camel2underline(camelInput.value);
};

const notBlankInput = ref('');
const notBlankResult = ref('');
const testIsNotBlank = () => {
  notBlankResult.value = MStringUtil.isNotBlank(notBlankInput.value) ? '非空字符串' : '空字符串';
};

const reverseInput = ref('abc123');
const reverseResult = ref('');
const testReverse = () => {
  reverseResult.value = MStringUtil.reverse(reverseInput.value);
};

const removeSpaceInput = ref(' a b  c ');
const removeSpaceResult = ref('');
const testRemoveAllSpaces = () => {
  removeSpaceResult.value = MStringUtil.removeAllSpaces(removeSpaceInput.value);
};

const hexInput = ref('48656c6c6f');
const hexToBase64Result = ref('');
const testHexToBase64 = () => {
  try {
    hexToBase64Result.value = MStringUtil.hexToBase64(hexInput.value);
  } catch (e) {
    hexToBase64Result.value = '无效的16进制字符串';
  }
};

const base64BytesInput = ref('SGVsbG8=');
const base64ToBytesResult = ref('');
const testBase64ToBytes = () => {
  try {
    base64ToBytesResult.value = JSON.stringify(Array.from(MStringUtil.base64ToBytes(base64BytesInput.value)));
  } catch (e) {
    base64ToBytesResult.value = '无效的Base64字符串';
  }
};

const utf8Input = ref('Hello');
const utf8ToBase64Result = ref('');
const testUtf8ToBase64 = () => {
  try {
    utf8ToBase64Result.value = MStringUtil.utf8ToBase64(utf8Input.value);
  } catch (e) {
    utf8ToBase64Result.value = '无效的UTF8字符串';
  }
};

</script>

