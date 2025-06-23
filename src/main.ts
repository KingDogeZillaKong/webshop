import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import IconCoffee from '@/components/icons/IconCoffee.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('IconCoffee', IconCoffee)
app.use(createPinia())
app.use(router)

app.mount('#app')
