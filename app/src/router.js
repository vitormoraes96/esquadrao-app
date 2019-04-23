import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import comandante from './views/comandante.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/comandante',
      name: 'comandante',
      component: comandante
    }
  ]
})
