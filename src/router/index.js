import Vue from 'vue'
import Router from 'vue-router'
import guestRouter from './guestRouter'
import userCommonRouter from './userCommonRouter'
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
    // 游客路由可以被通过
    if (guestRouter.filter(route => to.path === route.path).length !== 0) {
      next()
      return
    }
    next('/login')
  } else {
    if (to.path === '/login') {
      next('/')
      return
    }
    // 获取用户信息
    await api.personal.get()

    // 用户信息获取失败
    if (!store.state.myInfo) {
      // 移除无效tocken
      localStorage.removeItem(config.tockenKey)
      next('/login')
      return
    }
    let routers = store.state.myInfo && store.state.myInfo.routers
    console.log('用户权限路由', routers)
    // 1. 对路由进行过滤
    let filterRouterConfig = routerConfig.filter(router => {
      return routers.indexOf(router.path) !== -1
    })
    // 2. 对menu进行过滤
    let filterNavConfig = until.filterNavConfig(navConfig, routers)
    store.commit('setHeaderNav', filterNavConfig.headerNav)
    store.commit('setNavConfig', filterNavConfig.navConfig)
    router.addRoutes(filterRouterConfig.concat(userCommonRouter))
    router.push(to.path)
    next(false)
    // console.log(JSON.stringify(filterRouterConfig, null, 2))
  }
})
export default router
