import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: null,
    isMobile: /(iPhone|iPod|iPad|Android|ios)/.test(navigator.userAgent),
    layout: null,
    sideNav: null,
    headerNav: null,
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
    setSideNav (state, playload) {
      state.sideNav = playload
    }
  }
})

export default store
