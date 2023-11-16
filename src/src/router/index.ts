import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../view/index.vue')
  }
];

// 创建router
const router = createRouter({
  // 配置为Hash模式
  history: createWebHashHistory('/'),
  // 配置toures
  routes,
  // 路由跳转时返回顶部
  scrollBehavior() {
    return { top: 0 };
  }
});
export default router;
