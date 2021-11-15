import { createApp } from 'vue'
import App from './app.vue'
import * as UI from './index'
import directives from './directives/index'

const app = createApp(App)
UI.default.install(app)
// register all directives
directives(app)
app.mount('#app')
