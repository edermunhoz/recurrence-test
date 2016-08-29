import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './routerconfig'
import VueResource from 'vue-resource'
import UserMenu from './components/UserMenu.vue'

Vue.component('user-menu', UserMenu)

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter()
router.map(RouterConfig)

router.start(App, 'App')

