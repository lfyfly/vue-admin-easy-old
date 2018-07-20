<template>
  <div class="side-nav">
    <!-- <h3>{{msg}}</h3> -->
    <!-- <p>{{sideNav}}</p> -->
    <div class="template" v-for="(sideNav,groupIndex) in (navConfig[0].sideNav?navConfig:[{sideNav:navConfig}])" :key="sideNav.title" v-if="sideNavAcitveIndex===groupIndex">
      <el-menu class="el-side-nav" :router="true" :default-active="$route.path" :collapse="navCollapse">
        <el-submenu v-for="(v,i) in sideNav.sideNav" :index="i+''" :key="v.title">
          <template v-if="v.title" slot="title">
            <i :class="v.icon"></i>
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

<style lang='scss' scoped>
@import "../config.scss";

.el-side-nav {
  border-right: none;
  &:not(.el-menu--collapse) {
    width: $side-width;
  }
}
</style>
