import { createRouter, createWebHistory } from 'vue-router'
import Home_page from '@/views/home_page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home_page,
    },
    
  ],
})

export default router
