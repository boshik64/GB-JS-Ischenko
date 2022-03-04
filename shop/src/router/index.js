import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

const routes = [
  { path: '/', Name: 'Home', component: Home },
  { path: '/cart', Name: 'Cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
