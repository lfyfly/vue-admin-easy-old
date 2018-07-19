// 游客路由（未登录状态）
export default [
  {
    path: '/',
    redirect: { path: '/index' }
  },
  {
    path: '/index',
    component: () => import('@/pages/Index'),
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/forget-password',
    component: () => import('@/pages/ForgetPassword'),
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/reset-password',
    component: () => import('@/pages/ResetPassword'),
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/404',
    component: () => import('@/pages/NotFind'),
    meta: {
      layout: 'BlankLayout'
    }
  }
]
