import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import "./style/main.css"

createApp(App).use(router).mount('#app')
