<template>
  <div class="side-nav">
    <!-- <h3>{{msg}}</h3> -->
    <!-- <p>{{sideNav}}</p> -->
    <div class="template" v-for="(sideNav,groupIndex) in (navConfig[0].sideNav?navConfig:[{sideNav:navConfig}])" :key="sideNav.title" v-if="sideNavAcitveIndex===groupIndex">
      <el-menu class="el-side-nav" :router="true" :default-active="$route.path" :collapse="navCollapse">
        <el-submenu v-for="(v,i) in sideNav.sideNav" :index="i+''" :key="v.title">
          <template v-if="v.title" slot="title">
            <i class="side-icon" :class="v.icon"></i>
            <span>{{v.title}}</span>
          </template>
          <el-menu-item v-for="v2 in v.children" :key="v2.title" :index="v2.path">
            {{v2.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'side-nav',
  data () {
    return {
      msg: 'this is from side-nav.vue'
    }
  },
  computed: {
    ...mapState(['navConfig', 'navCollapse', 'sideNavAcitveIndex'])
  }
}
</script>
<style lang='scss'>
.el-side-nav .el-menu-item.is-active {
  color: $header-color-active;
}
.el-side-nav .el-menu-item {
  color: $side-color;
}
.el-side-nav .el-submenu__title {
  color: $side-color;
}
</style>

<style lang='scss'>
.side-nav {
  .el-menu {
    background: rgba(255, 255, 255, 0);
  }
  .el-submenu__title:hover,
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: $side-hover-color;
  }

  .side-icon {
    color: $side-icon-color;
  }
}
</style>

<style lang='scss' scoped>
.el-side-nav {
  border-right: none;
  &:not(.el-menu--collapse) {
    width: $side-width;
  }
}
</style>
