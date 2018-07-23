// pages
import Personal from '@/pages/Personal'

// const Test = () => import('@/pages/Test')
import Test from '@/pages/Test'

export default [
  {
    path: '/personal',
    component: Personal,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },

  {
    path: '/index',
    component: () => import('@/pages/Index'),
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/a1/1',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/a1/2',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/a1/3',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/a2/1',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/a2/2',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/a2/3',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/b1/1',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/b1/2',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/b1/3',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/b2/1',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/b2/2',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  },
  {
    path: '/b3/3',
    component: Test,
    meta: {
      layout: 'HeaderSideLayout'
    }
  }
]