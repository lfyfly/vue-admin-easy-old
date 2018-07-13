import Vue from 'vue'
import Router from 'vue-router'
import routes from './routesConfig.js'
import store from '@/store'

Vue.use(Router)
console.log(routes)
// routerConfig -> router
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  store.commit('setLayout', to.meta.layout)
  console.log(to, from)
  next()
})
export default router
