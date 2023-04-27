import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '../views/PagesLayout.vue'
import LandingPage from '../views/LandingPage.vue'
import SideBar from '../components/SideBar.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'landingpage',
    component: LandingPage
  },
  {
    path: '/test',
    name: 'home',
    component: LayoutView,
    children:
    [
      { path: 'add', name: 'add', component:SideBar  }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
