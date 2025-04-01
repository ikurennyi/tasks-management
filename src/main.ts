import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import store from './store/index'
import router from './router'

import App from './App.vue'
import AppLoading from './shared/ui/AppLoading.vue'
import NoEntries from './shared/ui/NoEntries.vue'
import { VDateInput } from 'vuetify/labs/components'

const app = createApp(App)
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  components: {
    VDateInput,
  },
})

app.component('AppLoading', AppLoading)
app.component('NoEntries', NoEntries)

app.use(vuetify)
app.use(store)
app.use(router)

app.mount('#app')
