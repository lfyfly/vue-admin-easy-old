// pages
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ForgetPassword from '@/pages/ForgetPassword'
import ResetPassword from '@/pages/ResetPassword'
import Index from '@/pages/Index/index'
export default [
  {
    path: '/',
    component: Index,
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/forget-password',
    component: ForgetPassword,
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    meta: {
      layout: 'BlankLayout'
    }
  }
]
