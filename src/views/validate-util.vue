<template>
  <div class="p-6 md:p-10 w-full min-h-full">
    <h2 class="text-2xl font-bold mb-6 text-[#055E3A]">常用校验工具</h2>
    <div class="space-y-8">
      <!-- isEmail -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">邮箱格式校验 (isEmail)</div>
          <input v-model="emailInput" class="input" placeholder="如：test@example.com" />
        </div>
        <button class="btn" @click="testEmail">校验</button>
        <div class="flex-1">
          <div class="result">{{ emailResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为邮箱）</div>
      </div>
      <!-- isPhone -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">手机号格式校验 (isPhone)</div>
          <input v-model="phoneInput" class="input" placeholder="如：13800138000" />
        </div>
        <button class="btn" @click="testPhone">校验</button>
        <div class="flex-1">
          <div class="result">{{ phoneResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为手机号）</div>
      </div>
      <!-- isURL -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">URL格式校验 (isURL)</div>
          <input v-model="urlInput" class="input" placeholder="如：https://www.example.com" />
        </div>
        <button class="btn" @click="testURL">校验</button>
        <div class="flex-1">
          <div class="result">{{ urlResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为URL）</div>
      </div>
      <!-- isIDCard -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">身份证号校验 (isIDCard)</div>
          <input v-model="idCardInput" class="input" placeholder="如：110101199003078888" />
        </div>
        <button class="btn" @click="testIDCard">校验</button>
        <div class="flex-1">
          <div class="result">{{ idCardResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为身份证号）</div>
      </div>
      <!-- isChinese -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">中文校验 (isChinese)</div>
          <input v-model="chineseInput" class="input" placeholder="如：你好世界" />
        </div>
        <button class="btn" @click="testChinese">校验</button>
        <div class="flex-1">
          <div class="result">{{ chineseResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否全为中文）</div>
      </div>
      <!-- isNumber -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">数字校验 (isNumber)</div>
          <input v-model="numberInput" class="input" placeholder="如：123456" />
        </div>
        <button class="btn" @click="testNumber">校验</button>
        <div class="flex-1">
          <div class="result">{{ numberResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否全为数字）</div>
      </div>
      <!-- isIPv4 -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">IPv4地址校验 (isIPv4)</div>
          <input v-model="ipv4Input" class="input" placeholder="如：192.168.1.1" />
        </div>
        <button class="btn" @click="testIPv4">校验</button>
        <div class="flex-1">
          <div class="result">{{ ipv4Result }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为IPv4地址）</div>
      </div>
      <!-- isPostalCode -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">邮政编码校验 (isPostalCode)</div>
          <input v-model="postalInput" class="input" placeholder="如：100000" />
        </div>
        <button class="btn" @click="testPostal">校验</button>
        <div class="flex-1">
          <div class="result">{{ postalResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为邮政编码）</div>
      </div>
      <!-- isPlateNumber -->
      <div class="bg-white/80 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1 flex flex-col justify-center items-center gap-2">
          <div class="font-semibold">车牌号校验 (isPlateNumber)</div>
          <input v-model="plateInput" class="input" placeholder="如：京A12345" />
        </div>
        <button class="btn" @click="testPlate">校验</button>
        <div class="flex-1">
          <div class="result">{{ plateResult }}</div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">
        <div><span class="font-semibold text-[#055E3A]">参数：</span>str: string（待校验字符串）</div>
        <div><span class="font-semibold text-[#055E3A]">返回：</span>boolean（是否为车牌号）</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MValidateUtil } from '../utils/MValidateUtil';

const emailInput = ref('test@example.com');
const emailResult = ref('');
const testEmail = () => {
  emailResult.value = MValidateUtil.isEmail(emailInput.value) ? '是邮箱格式' : '不是邮箱格式';
};

const phoneInput = ref('13800138000');
const phoneResult = ref('');
const testPhone = () => {
  phoneResult.value = MValidateUtil.isPhone(phoneInput.value) ? '是手机号格式' : '不是手机号格式';
};

const urlInput = ref('https://www.example.com');
const urlResult = ref('');
const testURL = () => {
  urlResult.value = MValidateUtil.isURL(urlInput.value) ? '是URL格式' : '不是URL格式';
};

const idCardInput = ref('110101199003078888');
const idCardResult = ref('');
const testIDCard = () => {
  idCardResult.value = MValidateUtil.isIDCard(idCardInput.value) ? '是身份证号' : '不是身份证号';
};

const chineseInput = ref('你好世界');
const chineseResult = ref('');
const testChinese = () => {
  chineseResult.value = MValidateUtil.isChinese(chineseInput.value) ? '全为中文' : '不全为中文';
};

const numberInput = ref('123456');
const numberResult = ref('');
const testNumber = () => {
  numberResult.value = MValidateUtil.isNumber(numberInput.value) ? '全为数字' : '不全为数字';
};

const ipv4Input = ref('192.168.1.1');
const ipv4Result = ref('');
const testIPv4 = () => {
  ipv4Result.value = MValidateUtil.isIPv4(ipv4Input.value) ? '是IPv4地址' : '不是IPv4地址';
};

const postalInput = ref('100000');
const postalResult = ref('');
const testPostal = () => {
  postalResult.value = MValidateUtil.isPostalCode(postalInput.value) ? '是邮政编码' : '不是邮政编码';
};

const plateInput = ref('京A12345');
const plateResult = ref('');
const testPlate = () => {
  plateResult.value = MValidateUtil.isPlateNumber(plateInput.value) ? '是车牌号' : '不是车牌号';
};
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