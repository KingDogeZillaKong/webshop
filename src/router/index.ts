import { createRouter, createWebHistory } from 'vue-router'

import CatalogView from '@/views/CatalogView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: CatalogView,
    },
    {path: '/portfolio', name: "Portfolio", component: PortfolioView},
    {
      path: '/cart',
      name: 'Cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
