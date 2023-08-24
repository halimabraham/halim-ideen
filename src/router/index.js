import { createRouter, createWebHistory } from 'vue-router'
import HomeMovies from '../views/HomeMovies.vue'
import MovieDescription from '../views/MovieDescription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMovies
    },
    {
      path: '/movieDescription',
      name: 'description',
      component: MovieDescription
    }
  ]
})

export default router
