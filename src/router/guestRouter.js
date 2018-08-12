// 游客路由（未登录状态）
export default [

  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/',
    redirect: { path: '/index' }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: {
      layout: 'BlankLayout'
    }
  },
  {
    path: '/forgot-password',
    component: () => import('@/pages/ForgotPassword'),
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
  }
]
