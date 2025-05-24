import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/appLayout.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'Account',
        name: 'account',
        component: () => import('@/views/AccountPage.vue')
      },
      {
        path: 'Devices',
        name: 'devices',
        component: () => import('@/views/DevicePage.vue')
      },
      {
        path: 'Reports',
        name: 'reports',
        component: () => import('@/views/DashBoard.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
