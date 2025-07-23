import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Viewer)

app.mount('#app')
