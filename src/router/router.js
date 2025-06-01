// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import Home from '@/components/views/SiteHome.vue'
import About from '@/components/views/SiteAbout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
, {
path: '/about',
name: 'About',
component: About
 }
]

const router = createRouter({
  history: createWebHistory(), // Usa el modo historia del navegador
  routes
})

export default router
