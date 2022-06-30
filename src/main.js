import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'

createApp(App).use(router).use(bootstrap).mount('#app')
