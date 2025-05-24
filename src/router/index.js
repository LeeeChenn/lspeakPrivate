import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/zh',
      name: 'zh',
      component: () => import('../views/HomeZH.vue'),
    },
    {
      path: '/tw',
      name: 'tw',
      component: () => import('../views/HomeTW.vue'),
    },
    {
      path: '/private',
      name: 'private',
      component: () => import('../views/Private.vue'),
    },
    {
      path: '/private-zh',
      name: 'private-zh',
      component: () => import('../views/PrivateZH.vue'),
    },
    {
      path: '/private-tw',
      name: 'private-tw',
      component: () => import('../views/PrivateTW.vue'),
    },
  ],
})

export default router
