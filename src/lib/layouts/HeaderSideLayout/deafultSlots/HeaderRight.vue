<template>
  <div class="header-right">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'header-right',
  data () {
    return {
      msg: 'this is from header-right.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.header-right{

}
</style>
