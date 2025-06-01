// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/styles/globalStyles.css'
// import vuetify from './plugins/vuetify'
// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/globalStyles.css'
import vuetify from './plugins/vuetify'
import router from './router/router.js'  // ✅ Importa el router

createApp(App)
  .use(vuetify)
  .use(router)       // ✅ Usa el router
  .mount('#app')