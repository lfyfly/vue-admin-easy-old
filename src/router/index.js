import Vue from 'vue'
import Router from 'vue-router'
import guestRouter from './guestRouter'
import routerConfig from './routerConfig'
import navConfig from './navConfig'
import until from '@/until'
import store from '@/store'
import api from '@/api'

Vue.use(Router)
const router = new Router({
  routes: guestRouter
})
router.beforeEach(async (to, from, next) => {
  let tocken = localStorage.tocken
  store.commit('setLayout', to.meta.layout)

  if (store.state.myInfo) {
    next()
    return
  }
  if (!tocken) {
    if (to.path === '/login') {
      next()
      return
    }
    next('/login')
    return
  } else {
    await api.getMyInfo()
    let routers = store.state.myInfo && store.state.myInfo.routers
    console.log(routers)
    // 1. 对路由进行过滤
    let filterRouterConfig = routerConfig.filter(router => {
      return routers.includes(router.path)
    })
    // 2. 对menu进行过滤
    let filterNavConfig = until.filterNavConfig(navConfig, routers)
    store.commit('setHeaderNav', filterNavConfig.headerNav)
    store.commit('setSideNav', filterNavConfig.navConfig[0].sideNav)
    // console.log(JSON.stringify(filterNavConfig, null, 2))
    router.addRoutes(filterRouterConfig)
    console.log(JSON.stringify(filterRouterConfig, null, 2))
    alert(JSON.stringify(to, null, 2))
  }
  next('/b1/1')
})
export default router
