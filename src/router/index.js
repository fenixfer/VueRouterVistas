import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //TODO: Integrando la primer vista
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    //id debe de hace dinámico para diferentes artículos
    //Para hacerlo dinámico ponemos los :
    path: '/blog/:id/articulo',
    name: 'Articulo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue')
  } 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
