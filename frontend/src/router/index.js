import { createRouter, createWebHistory } from 'vue-router'
import Navigator_bar from '@/layouts/navigation_bar.vue'
import Home_page from '@/views/home_page.vue'
import Account from '@/views/account_page.vue'
import Device from '@/views/device_page.vue'
import Report from '@/views/report_page.vue'

const routes = [
  {
    path: '/',
    component: Navigator_bar,
    children: [
      {
        path: '',
        name: 'home',
        component: Home_page
      },
      {
        path: 'Account',
        name: 'account',
        component: Account
      },
      {
        path: 'Devices',
        name: 'devices',
        component: Device
      },
      {
        path: 'Reports',
        name: 'reports',
        component: Report
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
