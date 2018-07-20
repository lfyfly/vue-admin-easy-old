<template>
  <div class="header-side-layout">
    <div class="my-header">
      <div class="header-left-container">
        <div class="logo-container">
          <logo/>
        </div>
        <div class="toggle-btn-container">
          <toggle-btn/>
        </div>
        <div class="header-nav-container">
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
    <div class="page-container" :class="{collapse:navCollapse}">
      <slot>page-container</slot>
    </div>
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
    ...mapState(['navCollapse'])
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
  .my-header {
    width: 100%;
    position: fixed;
    top: 0;
    background: #ccc;
    height: $header-height;
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
    background: #fff;
    position: fixed;
    border-right: solid 1px #e6e6e6;
  }
  .page-container {
    margin-top: $header-height;
    margin-left: $side-width;
    transition: margin-left 0.3s;
  }
  .page-container.collapse {
    margin-left: 65px;
  }
}
</style>
