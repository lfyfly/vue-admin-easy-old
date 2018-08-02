import Vue from 'vue'
import Router from 'vue-router'
import guestRouter from './guestRouter'
import routerConfig from './routerConfig'
import navConfig from './navConfig'
import until from '@/until'
import store from '@/store'
import api from '@/api'
import config from '@/config'
Vue.use(Router)
const router = new Router({
  routes: guestRouter
})
router.beforeEach(async (to, from, next) => {
  let tocken = localStorage[config.tockenKey]

  // 当前数组的属于哪个headerNav的组的item
  if (store.state.navConfig) {
    let index = until.getNavGroupActiveIndex(to.path, store.state.navConfig)
    if (index !== store.state.sideNavAcitveIndex) {
      store.commit('setNavGroupActiveIndex', index)
    }
  }

  if (store.state.myInfo && to.path !== '/login') {
    next()
    return
  }
  if (!tocken) {
    if (to.path === '/login') {
      next()
      return
    }
    next('/login')
  } else {
    if (to.path === '/login') {
      next('/')
      return
    }
    await api.personal.get()

    let routers = store.state.myInfo && store.state.myInfo.routers
    console.log(routers)
    // 1. 对路由进行过滤
    let filterRouterConfig = routerConfig.filter(router => {
      return routers.indexOf(router.path) !== -1
    })
    // 2. 对menu进行过滤
    let filterNavConfig = until.filterNavConfig(navConfig, routers)
    store.commit('setHeaderNav', filterNavConfig.headerNav)
    store.commit('setNavConfig', filterNavConfig.navConfig)
    router.addRoutes(filterRouterConfig.concat([{ path: '*', redirect: '/404' }]))
    router.push(to.path)
    next(false)
    // console.log(JSON.stringify(filterRouterConfig, null, 2))
  }
})
export default router
