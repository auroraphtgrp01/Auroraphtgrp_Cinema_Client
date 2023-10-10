import { createApp } from 'vue'
import router from './routes/index'
import Default from '../src/layout/client/layout/index.vue'
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.component("default-layout", Default);
app.mount('#app')
