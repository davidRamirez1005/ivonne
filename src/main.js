import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './shared/router/index'
import 'element-plus/dist/index.css'
import './assets/css/style.css'
import 'animate.css';
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(ElementPlus)

app.mount('#app')