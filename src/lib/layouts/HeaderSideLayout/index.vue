<template>
  <div class="header-side-layout">
    <div class="header-container">
      <my-header></my-header>
    </div>
    <div class="side-container">
      <my-side></my-side>
    </div>
    <div class="page-container">
      <slot>page-container</slot>
    </div>
  </div>
</template>

<script>
import myHeader from './deafultSlots/Header.vue'
import mySide from './deafultSlots/Side.vue'
export default {
  name: 'header-side-layout',
  components: {
    myHeader,
    mySide
  },
  data () {
    return {
      msg: 'this is from header-side-layout.vue'
    }
  },
  created () {
    console.log('HeaderSideLayout')
  }
}
</script>

<style lang='scss' scoped>
@import "./config.scss";

.header-side-layout {
  .header-container {
    width: 100%;
    position: fixed;
    top: 0;
    background: #ccc;
    height: $header-height;
  }
  .side-container {
    width: $side-width;
    top: $header-height;
    bottom: 0;
    background: #eee;
    position: fixed;
  }
  .page-container {
    margin-top: $header-height;
    margin-left: $side-width;
  }
}
</style>
