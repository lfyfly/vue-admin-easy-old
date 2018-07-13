import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: null,
    isMobile: /(iPhone|iPod|iPad|Android|ios)/.test(navigator.userAgent),
    layout: '',
    msg: 'msg from vuex'
  },
  mutations: {
    setLayout (state, layout) {
      state.layout = layout
    }
  }
})

export default store
