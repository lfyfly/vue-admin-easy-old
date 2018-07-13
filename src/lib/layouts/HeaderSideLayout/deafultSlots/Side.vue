<template>
  <div class="side">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'side',
  data () {
    return {
      msg: 'this is from side.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.side{

}
</style>
