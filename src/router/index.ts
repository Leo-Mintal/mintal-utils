import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/array-util',
  },
  {
    path: '/array-util',
    name: 'ArrayUtil',
    component: () => import('../views/array-util.vue'),
    meta: { title: '数组工具' },
  },
  {
    path: '/object-util',
    name: 'ObjectUtil',
    component: () => import('../views/object-util.vue'),
    meta: { title: '对象工具' },
  },
  {
    path: '/string-util',
    name: 'StringUtil',
    component: () => import('../views/string-util.vue'),
    meta: { title: '字符串工具' },
  },
  {
    path: '/number-util',
    name: 'NumberUtil',
    component: () => import('../views/number-util.vue'),
    meta: { title: '数字工具' },
  },
  {
    path: '/tool-util',
    name: 'ToolUtil',
    component: () => import('../views/tool-util.vue'),
    meta: { title: '通用工具' },
  },
  {
    path: '/validate-util',
    name: 'ValidateUtil',
    component: () => import('../views/validate-util.vue'),
    meta: { title: '校验工具' },
  },
  {
    path: '/cache-util',
    name: 'CacheUtil',
    component: () => import('../views/cache-util.vue'),
    meta: { title: '缓存工具' },
  },
  {
    path: '/calc-util',
    name: 'CalcUtil',
    component: () => import('../views/calc-util.vue'),
    meta: { title: '高精度计算' },
  },
  {
    path: '/money-util',
    name: 'MoneyUtil',
    component: () => import('../views/money-util.vue'),
    meta: { title: '金额工具' },
  },
  {
    path: '/encrypt-util',
    name: 'EncryptUtil',
    component: () => import('../views/encrypt-util.vue'),
    meta: { title: '加密工具' },
  },
  {
    path: '/file-util',
    name: 'FileUtil',
    component: () => import('../views/file-util.vue'),
    meta: { title: '文件工具' },
  },
  {
    path: '/user-info-service',
    name: 'UserInfoService',
    component: () => import('../views/user-info-service.vue'),
    meta: { title: '用户信息服务' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
