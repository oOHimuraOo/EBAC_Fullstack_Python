import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import { usuarioLogado } from '@/utils/mocks'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/feed',
    name: 'feed',
    component: FeedView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]

//tem que verificar no banco se o usuario está logado ou não.
function isUserLoggedIn(): boolean {
  const user = localStorage.getItem('userName')
  console.log(user)

  if (user === null) {
    return false
  }

  const logado: boolean =
    localStorage.getItem('loggedIn') == null ||
    localStorage.getItem('loggedIn') === 'false'
      ? false
      : true
  return logado
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    if (isUserLoggedIn()) {
      next('/feed')
    } else {
      next()
    }
  } else if (to.path === '/feed') {
    if (!isUserLoggedIn()) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
