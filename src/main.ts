import './assets/main.scss'
import './assets/sidebar.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
// import Aura from '@primevue/themes/aura'
import router from './router'

const app = createApp(App)
app.use(PrimeVue)

app.use(router)

app.mount('#app')
