<template>
  <div class="header-nav">
    <ul>
      <li :class="{isActive:sideNavAcitveIndex===i}" v-for="(navItem,i) in headerNav" @click="toggleSideNav(i)" :key="navItem.title">
        <router-link :to="navItem.path">{{navItem.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'header-nav',
  data () {
    return {
      msg: 'this is from header-nav.vue'
    }
  },
  computed: {
    ...mapState(['headerNav', 'sideNavAcitveIndex'])
  },
  methods: {
    toggleSideNav (index) {
      this.$store.commit('toggleSideNav', index)
    }
  }
}
</script>
<style lang='scss' scoped>
@import "../config.scss";

.header-nav {
  ul {
    display: table;
    height: $header-height;
    li.isActive {
      a {
        color: #409eff;
      }
    }
    & > * {
      display: table-cell;
      vertical-align: middle;
      padding: 0 10px;
    }
  }
}
</style>
