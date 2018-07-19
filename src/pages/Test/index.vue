<template>
  <div class="test">
    <h3>{{msg}}</h3>
    <h3>{{$route.path}}</h3>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'this is from test.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.test{

}
</style>
