<template>
  <globalHeader />
  
  <!-- Aquí Vue Router mostrará el componente de la ruta activa -->
  <router-view />

  <AppFooter />
  <!-- Botón de WhatsApp -->
  <a
    href="https://wa.me/524286877121"
    class="whatsapp-button"
    target="_blank"
    rel="noopener"
  >
    <img src="@/assets/whatsapp-icon.png" alt="WhatsApp" />
  </a>
</template>

<script>
import globalHeader from './components/globalHeader.vue';
import AppFooter from './components/globalFooter.vue';

export default {
  name: 'App',
  components: {
    globalHeader,
    AppFooter
  },
};
</script>

<style>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}
.whatsapp-button:hover {
  transform: scale(1.1);
}
.whatsapp-button img {
  width: 30px;
  height: 30px;
}
</style>
