import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import About from '../views/About.vue'
import Works from '../views/Works.vue'
import Operations from '../views/Operations.vue'
import Contact from '../views/Contact.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Works',
    name: 'Works',
    component: Works
  },
  {
    path: '/Operations',
    name: 'Operations',
    component: Operations
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
