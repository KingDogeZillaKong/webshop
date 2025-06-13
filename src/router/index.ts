import { createRouter, createWebHistory } from 'vue-router'

import CatalogView from '@/views/CatalogView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import SkillsView from '@/views/SkillsView.vue'
import CartOverview from '@/components/CartOverview.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: CatalogView,
    },
    {path: '/portfolio', name: "Portfolio", component: PortfolioView},
       {path: '/skills', name: "Skills", component: SkillsView},
    {path: '/skills/:skill', name: "Skill Details", component: SkillsView},
     {
      path: '/cart',
      name: 'Cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CartOverview
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
