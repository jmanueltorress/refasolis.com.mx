// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import Home from '@/components/views/SiteHome.vue'
import About from '@/components/views/SiteAbout.vue'
import Contact from '@/components/views/SiteContact.vue'
import Privacy from '@/components/items/privacyPolicy.vue'
import Terms from '@/components/items/termsOfUse.vue'

const routes = [
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  , {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(), // Usa el modo historia del navegador
  routes
})

export default router
