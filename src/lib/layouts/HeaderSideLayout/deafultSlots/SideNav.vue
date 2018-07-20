<template>
  <div class="side-nav">
    <!-- <h3>{{msg}}</h3> -->
    <!-- <p>{{sideNav}}</p> -->
    <el-menu class="el-side-nav" default-active="0-1" :collapse="navCollapse">
      <el-submenu v-for="(v,i) in sideNav" :index="i+''" :key="v.title">
        <template slot="title">
          <i :class="v.icon"></i>
          <span>{{v.title}}</span>
        </template>
        <router-link v-for="(v2,i2) in v.children" :key="v2.title" :to="v2.path">
          <el-menu-item :index="`${i}-${i2}`">
            {{v2.title}}
          </el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>

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
    ...mapState(['sideNav', 'navCollapse'])
  }
}
</script>

<style lang='scss' scoped>
.el-side-nav {
  border-right: none;
  height: 100%;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
