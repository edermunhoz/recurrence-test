import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './routerconfig'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter()
router.map(RouterConfig)

router.start(App, 'App')

Vue.component('greeting', {
  template: '#greeting-template'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  data: {
    admin: 'Recurrence',
    description: 'Descrição ou outro nome',
    user: 'João Maneiro',
    username: 'johnkennedy'
  }
})
