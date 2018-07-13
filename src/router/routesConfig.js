// pages
// import Login from '@/pages/Login'
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const ForgetPassword = () => import('@/pages/ForgetPassword')
const ResetPassword = () => import('@/pages/ResetPassword')
const NotFind = () => import('@/pages/NotFind')
const Index = () => import('@/pages/Index/index')
const Users = () => import('@/pages/Users')

export default [
  {
    path: '/',
    redirect: { path: '/index' }
  },
  {
    path: '/index',
    component: Index,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/users',
    component: Users,
    meta: {
      layout: 'HeaderSideLayout'
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
  },
  {
    path: '/404',
    component: NotFind,
    meta: {
      layout: 'BlankLayout'
    }
  },
  { path: '*', redirect: '/404' }

]
