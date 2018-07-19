<template>
  <div class="side-nav">
    <h3>{{msg}}</h3>
    <p>{{sideNav}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'side-nav',
  data () {
    return {
      msg: 'this is from side-nav.vue'
    }
  },
  computed: {
    ...mapState(['sideNav'])
  }
}
</script>

<style lang='scss' scoped>

.side-nav{
}
</style>
