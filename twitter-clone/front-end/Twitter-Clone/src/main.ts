import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/mains.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
