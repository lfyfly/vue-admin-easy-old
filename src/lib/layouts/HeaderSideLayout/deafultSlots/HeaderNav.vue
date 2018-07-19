<template>
  <div class="header-nav">
    <ul>
      <li v-for="navItem in headerNav" :key="navItem.title">
        <router-link :to="navItem.path">{{navItem.title}}</router-link>
      </li>
    <p></p>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'header-nav',
  data () {
    return {
      msg: 'this is from header-nav.vue'
    }
  },
  computed: {
    ...mapState(['headerNav'])
  }
}
</script>
<style lang='scss' scoped>
@import "../config.scss";

.header-nav{
  ul{
    display: table;
    height: $header-height;
    &>*{
      display: table-cell;
      vertical-align: middle;
      padding: 0 10px;
    }
  }
}
</style>
