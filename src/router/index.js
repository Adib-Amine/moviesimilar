import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/SearcheBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:moviename',
    name: 'Movies',
    component: () => import('../views/Movies.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
