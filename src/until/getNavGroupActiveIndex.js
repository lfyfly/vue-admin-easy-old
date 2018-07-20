export default function (currPath, navConfig) {
  console.log('getNavGroupActiveIndex')
  let index = 0
  let hasheaderNav = navConfig[0].sideNav
  if (hasheaderNav) {
    navConfig.forEach((v, i) => {
      v.sideNav.forEach(v2 => {
        v2.children.forEach(v3 => {
          if (v3.path === currPath) {
            index = i
          }
        })
      })
    })
  }
  return index
}
