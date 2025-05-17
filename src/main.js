import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";

import '@/assets/fonts.css'

const app = createApp(App);

app.use(router);
createApp(App).use(router).mount('#app')
