import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import Home from '@/components/views/SiteHome.vue'
import About from '@/components/views/SiteAbout.vue'
import Contact from '@/components/views/SiteContact.vue'
import Shop from '@/components/views/SiteShop.vue'
import Privacy from '@/components/items/privacyPolicy.vue'
import Terms from '@/components/items/termsOfUse.vue'
import Error from '@/components/views/ErrorNotFound.vue'

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
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: Error
  },
  // Ruta comodín para errores 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
