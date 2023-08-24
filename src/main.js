import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import VueAxios from 'vue-axios'

const pinia = createPinia()

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .use(VueAxios, axios)
  .mount('#app')
