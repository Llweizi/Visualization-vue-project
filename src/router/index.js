// createRouter: 创建路由实例对象
// createWebHistory: 创建history模式的路由（hash / history）


import { createRouter, createWebHistory } from 'vue-router'

// 导入路由级别的组件
import HomeView from '../views/HomeView.vue'
import BigScreenView from '../views/BigScreenView.vue'

const router = createRouter({
  // 类似于mode:history 指定路由为history模式
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置路由path和component对应关系
  routes: [
    {
      path: '/',
      redirect: '/big-screen',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/big-screen',
      name: 'big-screen',
      component: BigScreenView
    }
  ]
})

export default router