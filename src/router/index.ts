import { createRouter, createWebHistory } from 'vue-router'

import CatalogView from '@/views/CatalogView.vue'
import SkillsView from '@/views/SkillsView.vue'
import CartOverview from '@/components/CartOverview.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
    },
    { path: '/skills', name: 'Skills', component: SkillsView },
    { path: '/skills/:skill', name: 'Skill Details', component: SkillsView },
    {
      path: '/cart',
      name: 'Cart',
      component: CartOverview,
    },
    { path: '/my-experience', name: 'Adventures', component: CatalogView },
  ],
})

export default router
