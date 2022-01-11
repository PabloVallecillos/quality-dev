import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const load = (path: string) => () => import(`@/views/${path}`);
const routerView = { template: '<router-view></router-view>' };

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: load('Shop.vue')
  },
  {
    path: '/docs',
    component: routerView,
    children: [
      {
        path: '',
        name: 'DocsMain',
        component: load('docs/Docs.vue'),
      },
      {
        path: 'view',
        name: 'ViewDoc',
        component: load('docs/ViewDoc.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
