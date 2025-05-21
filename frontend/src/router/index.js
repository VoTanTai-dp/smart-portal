import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/appLayout.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/homePage.vue')
      },
      {
        path: 'Account',
        name: 'account',
        component: () => import('@/views/accountPage.vue')
      },
      {
        path: 'Devices',
        name: 'devices',
        component: () => import('@/views/devicePage.vue')
      },
      {
        path: 'Reports',
        name: 'reports',
        component: () => import('@/views/reportPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
