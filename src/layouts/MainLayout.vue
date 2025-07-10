<template>
  <div class="flex h-screen w-screen bg-white">
    <!-- 侧边栏 -->
    <aside class="w-60 min-w-48 max-w-xs bg-white border-r border-gray-100 flex flex-col py-6 px-2 shadow-md h-full overflow-y-auto">
      <div id="logo" class="mb-8 px-4">
        <div class="text-2xl font-bold text-primary tracking-wide mb-2">mintal-utils</div>
        <div class="text-xs text-gray-400">工具函数库</div>
      </div>
      <nav class="flex-1">
        <ul class="space-y-2">
          <li v-for="route in menuRoutes" :key="route.path">
            <router-link :to="route.path" class="sidebar-link" active-class="sidebar-link-active">
              {{ route.meta?.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="mt-auto px-4 text-xs text-gray-300">© 2025 mintal-utils</div>
    </aside>
    <!-- 内容区 -->
    <main class="flex-1 w-full h-full overflow-y-auto p-0 m-0 bg-gray-50">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const menuRoutes = router.options.routes.filter(r => r.meta && r.meta.title);
</script>

<style scoped>
.sidebar-link {
  @apply flex items-center px-4 py-2 rounded-lg text-primary hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium w-full;
}
.sidebar-link-active {
  @apply bg-white text-primary font-bold shadow relative w-full;
}
.sidebar-link-active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 2px;
  background: #055E3A;
}
</style>
