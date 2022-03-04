import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Registration from '../views/Registration.vue'
import Card from '../views/Card.vue'

const routes = [
  { path: '/', Name: 'Home', component: Home },
  { path: '/cart', Name: 'Cart', component: Cart },
  { path: '/registration', Name: 'Registration', component: Registration },
  { path: '/card', Name: 'Card', component: Card },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
