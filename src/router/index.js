import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stylitics',
      name: 'stylitics',
      // route level code-splitting
      // this generates a separate chunk (Stylitics.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StyliticsView.vue')
    }
  ]
})

export default router
