import './assets/main.css'
import 'primeicons/primeicons.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
