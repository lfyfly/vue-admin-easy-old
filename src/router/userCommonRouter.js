// 登陆用户的共同路由
export default [
  {
    path: '/404',
    component: () => import('@/pages/NotFind'),
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  { path: '*', redirect: '/404' }
]
