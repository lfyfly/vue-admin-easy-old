// 登陆用户的共同路由
import Personal from '@/pages/Personal'

export default [
  {
    path: '/personal',
    component: Personal,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/404',
    component: () => import('@/pages/NotFind'),
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  { path: '*', redirect: '/404' }
]
