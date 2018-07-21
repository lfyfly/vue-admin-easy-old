<template>
  <div class="header-side-layout">
    <div class="my-header">
      <div class="header-left-container">
        <div class="logo-container" :class="{collapse: navCollapse}">
          <logo />
          <div class="logo-text" v-show="!navCollapse">EASY</div>
        </div>
        <div class="toggle-btn-container">
          <toggle-btn/>
        </div>
        <div v-if="navConfig[0].sideNav" class="header-nav-container">
          <header-nav/>
        </div>
      </div>
      <div class="header-right-container">
        <header-right/>
      </div>
    </div>
    <el-scrollbar class="side-container">
      <side-nav/>
    </el-scrollbar>
    <el-scrollbar class="page-container" :class="{collapse:navCollapse}">
      <slot>page-container</slot>
    </el-scrollbar>
  </div>
</template>

<script>
import HeaderRight from './deafultSlots/HeaderRight.vue'
import HeaderNav from './deafultSlots/HeaderNav.vue'
import SideNav from './deafultSlots/SideNav.vue'
import Logo from './deafultSlots/Logo.vue'
import ToggleBtn from './deafultSlots/ToggleBtn.vue'
import { mapState } from 'vuex'
export default {
  name: 'header-side-layout',
  components: {
    HeaderRight,
    HeaderNav,
    SideNav,
    Logo,
    ToggleBtn
  },
  data () {
    return {
      msg: 'this is from header-side-layout.vue'
    }
  },
  computed: {
    ...mapState(['navCollapse', 'navConfig'])
  },
  created () {
    console.log('HeaderSideLayout')
  }
}
</script>
<style>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>

<style lang='scss' scoped>
@import "./config.scss";

.header-side-layout {
  .logo-container {
    width: $side-width;
    transition: width 0.3s;
    text-align: center;
    white-space: nowrap;
    & > * {
      display: inline-block;
      vertical-align: middle;
    }
    &.collapse {
      width: 65px;
    }
  }
  .my-header {
    width: 100%;
    position: fixed;
    top: 0;
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid #e6e6e6;
    height: $header-height;
    box-sizing: border-box;
    .header-left-container {
      display: table;
      float: left;
      height: $header-height;
      & > * {
        vertical-align: middle;
        display: table-cell;
      }
    }
    .header-right-container {
      float: right;
      height: $header-height;
    }
  }
  .side-container {
    top: $header-height;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    border-right: solid 1px #e6e6e6;
    box-sizing: border-box;
  }
  .page-container {
    margin-top: $header-height;
    margin-left: $side-width + 1px;
    transition: margin-left .3s ease-in-out;
    background: #fff;
    height: calc(100vh - #{$header-height});
  }
  .page-container.collapse {
    margin-left: 65px;
  }
}
</style>
