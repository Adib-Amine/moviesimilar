import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/SearcheBar.vue'
// import Movies from '../views/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/movies',
  //   name: 'Movies',
  //   component: Movies
  // },
  {
    path: '/movies',
    name: 'Movies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movies.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
