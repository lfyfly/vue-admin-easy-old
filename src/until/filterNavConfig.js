
let filterSideNav = function (sideNav, routers) {
  return sideNav.filter(routerGroup => {
    routerGroup.children = routerGroup.children.filter(router => routers.includes(router.path))
    return routerGroup.children.length !== 0
  })
}

export default function (navConfig, routers) {
  let hasheaderNav = navConfig[0].sideNav
  let headerNav = []
  if (hasheaderNav) {
    navConfig.forEach(side => {
      side.sideNav = filterSideNav(side.sideNav, routers)
    })
    navConfig.forEach(headerNavItem => {
      headerNav.push({
        title: headerNavItem.title,
        icon: headerNavItem.icon,
        path: headerNavItem.sideNav[0].children[0].path
      })
    })
    console.log(headerNav, 'headerNav')
  } else {
    navConfig = filterSideNav(navConfig, routers)
  }
  return {
    navConfig,
    headerNav
  }
}
