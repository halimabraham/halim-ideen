import { createRouter, createWebHistory } from 'vue-router'
import HomeMovies from '../views/HomeMovies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMovies
    }
  ]
})

export default router
