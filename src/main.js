import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import uiComponentsPlugin from '@/plugins/ui-components'
import '@/assets/styles/index.css'

createApp(App)
  .use(router)
  .use(uiComponentsPlugin)
  .mount('#app')