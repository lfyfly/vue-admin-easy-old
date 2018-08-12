// 两级导航 无顶栏导航
// export default[
//   {
//     title: 'a1',
//     icon: 'el-icon-tickets',
//     children: [
//       { title: 'a1-1', path: '/a1/1' },
//       { title: 'a1-2', path: '/a1/2' },
//       { title: 'a1-3', path: '/a1/3' }
//     ]
//   },
//   {
//     title: 'a2',
//     icon: 'el-icon-tickets',
//     children: [
//       { title: 'a2-1', path: '/a2/1' },
//       { title: 'a2-2', path: '/a2/2' },
//       { title: 'a2-3', path: '/a2/3' }
//     ]
//   }
// ]

// 三级导航配置 顶栏导航+侧边导航
export default [
  {
    title: 'AAA',
    // icon: 'el-icon-document',
    sideNav: [
      {
        title: '首页',
        icon: 'fa-home',
        children: [
          { title: '首页', path: '/index' }
        ]
      },
      {
        title: '用户管理',
        icon: 'fa-users',
        children: [
          { title: '用户表', path: '/users' }
        ]
      },
      {
        title: 'a1',
        icon: 'fa-bitcoin',
        children: [
          { title: 'a1-1', path: '/a1/1' },
          { title: 'a1-2', path: '/a1/2' },
          { title: 'a1-3', path: '/a1/3' }
        ]
      },
      {
        title: 'a2',
        icon: 'fa-cny',
        children: [
          { title: 'a2-1', path: '/a2/1' },
          { title: 'a2-2', path: '/a2/2' },
          { title: 'a2-3', path: '/a2/3' }
        ]
      }
    ]
  },
  {
    title: 'BBB',
    // icon: 'el-icon-document',
    sideNav: [
      {
        title: 'b1',
        icon: 'fa-dollar',
        children: [
          { title: 'b1-1', path: '/b1/1' },
          { title: 'b1-2', path: '/b1/2' },
          { title: 'b1-3', path: '/b1/3' }
        ]
      },
      {
        title: 'b2',
        icon: 'fa-eur',
        children: [
          { title: 'b2-1', path: '/b2/1' },
          { title: 'b2-2', path: '/b2/2' },
          { title: 'b2-3', path: '/b2/3' }
        ]
      }
    ]
  }
]
