import { createApp } from 'vue'
import App from './app.vue'
import * as UI from '@/index'

const app = createApp(App)
UI.default.install(app)
app.mount('#app')
