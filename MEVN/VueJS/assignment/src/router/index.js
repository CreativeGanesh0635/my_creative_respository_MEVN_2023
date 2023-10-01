
import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Page1"
            }
        },
        {
            path: '/page1',
            name: 'Page1',
            component: Page1
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2
        }
    ]
})
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
