import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      type: 'home'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/homehome',
    name: 'home2',
    meta: {
      type: 'home2'
    },
    component: () => import('@/views/jiajia.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
