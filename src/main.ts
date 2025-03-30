import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import store from './store/index'
import router from './router'

import App from './App.vue'

const app = createApp(App)
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
})

app.use(vuetify)
app.use(store)
app.use(router)

app.mount('#app')
