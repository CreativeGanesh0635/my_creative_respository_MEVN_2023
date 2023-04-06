import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWolrd.vue'
import success from '../components/success.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
          },
      {
        path: '/nextpage',
        name: 'success-vue',
        component: success
      }
      
    ]
  })
  const app = createApp(App)
app.use(router)
app.mount('#app')
  
  export default router
  