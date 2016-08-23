import Login from './components/Login.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const RouterConfig = {
  '/': {
    component: Home
  },
  '/login': {
    component: Login
  },
  '/about': {
    component: About
  },
  '/contact': {
    component: Contact
  }
}

export default {
  data () {
    return {
      admin: 'Recurrence',
      description: 'Descrição ou outro nome',
      user: 'João Maneiro',
      username: 'johnkennedy'
    }
  }
}

export default RouterConfig
