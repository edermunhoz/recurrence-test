import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Plans from './components/Plans.vue'
import Contact from './components/Contact.vue'
import UserMenu from './components/UserMenu.vue'

const RouterConfig = {
  '/': {
    component: Home
  },
  '/login': {
    component: Login
  },
  '/plans': {
    component: Plans
  },
  '/contact': {
    component: Contact
  }
}

export default RouterConfig
