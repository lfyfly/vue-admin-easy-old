import Vue from 'vue'
import Vuex from 'vuex'
require('es6-promise').polyfill()

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    myInfo: null,
    isMobile: /(iPhone|iPod|iPad|Android|ios)/.test(navigator.userAgent),
    layout: null,
    sideNavAcitveIndex: NaN,
    navConfig: null,
    headerNav: null,
    navCollapse: false,
    msg: 'msg from vuex'
  },
  mutations: {
    setLayout (state, playload) {
      state.layout = playload
    },
    setMyInfo (state, playload) {
      state.myInfo = playload
    },
    setHeaderNav (state, playload) {
      state.headerNav = playload
    },
    setNavConfig (state, playload) {
      state.navConfig = playload
    },
    setSideNav (state, playload) {
      state.sideNav = playload
    },
    toggleSideNav (state, index) {
      state.sideNav = state.navConfig[index].sideNav
    },
    toggleNavCollapse (state) {
      state.navCollapse = !state.navCollapse
    },
    setNavGroupActiveIndex (state, playload) {
      state.sideNavAcitveIndex = playload
    }
  }
})

export default store
