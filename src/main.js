// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/reset.scss'
import BasicForm from '@/pages/_components/form/basic-form'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$BUS = new Vue()

Vue.component('basic-form', BasicForm)

if (process.env.NODE_ENV === 'development') require('@/mock')
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
