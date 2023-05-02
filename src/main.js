import { createApp, component } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/styles/index.css'

const app = createApp(App)
const files = require.context('@/components/ui', false, /\.vue$/)

for (const path of files.keys()) {
  const component = files(path).default
  app.component(component.name, component)
}

app.use(router).mount('#app')