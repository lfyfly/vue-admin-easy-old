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
